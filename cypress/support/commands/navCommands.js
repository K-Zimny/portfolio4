import nav from "../../../src/data/nav.js";

// Individual navigation test commands that can be used separately or together

Cypress.Commands.add("getNavItems", () => {
  cy.get("nav ul li").as("navItems");
});

Cypress.Commands.add("testNavStructure", () => {
  cy.log("Verifying all nav items have links");
  cy.getNavItems();
  cy.get("@navItems").each(($li) => {
    cy.wrap($li).find("a").should("exist");
  });
});

Cypress.Commands.add("testNavHrefs", () => {
  cy.log("Verifying nav item hrefs match expected values");
  cy.getNavItems();
  nav.forEach((item) => {
    cy.get("@navItems")
      .contains("a", item.title)
      .should("have.attr", "href", item.href);
  });
});

Cypress.Commands.add("testNavNavigation", (options = {}) => {
  const { returnToOriginalPage = false } = options;

  cy.url().then((originalUrl) => {
    cy.log("Testing navigation by clicking each nav item");
    nav.forEach((item, index) => {
      cy.log(`Testing navigation to: ${item.title}`);

      // Get nav items again in case we navigated away
      cy.getNavItems();
      cy.get("@navItems").contains("a", item.title).click();

      if (item.href.endsWith(".pdf")) {
        cy.log(`Verifying PDF download for: ${item.title}`);
        cy.url().should("include", item.href);
      } else {
        cy.log(`Verifying page header for: ${item.title}`);
        cy.get("[data-component='PageHeader'] h1").should(
          "have.text",
          item.title
        );
      }

      // Return to original page after each navigation (except for the last one)
      if (returnToOriginalPage && index < nav.length - 1) {
        cy.visit(originalUrl);
      }
    });

    // Return to original page at the end if requested
    if (returnToOriginalPage) {
      cy.visit(originalUrl);
    }
  });
});

// Convenience command that runs all navigation tests
Cypress.Commands.add("testNav", (options = {}) => {
  cy.testNavStructure();
  cy.testNavHrefs();
  cy.testNavNavigation(options);
});
