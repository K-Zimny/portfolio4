import nav from "../../../src/data/nav.js";

/**
 * Navigation test helper functions
 * Import these only in test files that need them
 */

export function getNavItems() {
  cy.get("nav ul li").as("navItems");
}

export function testNavStructure() {
  cy.log("Verifying all nav items have links");
  getNavItems();
  cy.get("@navItems").each(($li) => {
    cy.wrap($li).find("a").should("exist");
  });
}

export function testNavHrefs() {
  cy.log("Verifying nav item hrefs match expected values");
  getNavItems();
  nav.forEach((item) => {
    cy.get("@navItems")
      .contains("a", item.title)
      .should("have.attr", "href", item.href);
  });
}

export function testNavNavigation(options = {}) {
  const { returnToOriginalPage = false } = options;

  cy.url().then((originalUrl) => {
    cy.log("Testing navigation by clicking each nav item");
    nav.forEach((item, index) => {
      cy.log(`Testing navigation to: ${item.title}`);

      // Get nav items again in case we navigated away
      getNavItems();
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
}

/**
 * Convenience function that runs all navigation tests
 */
export function testNav(options = {}) {
  testNavStructure();
  testNavHrefs();
  testNavNavigation(options);
}
