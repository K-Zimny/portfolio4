import nav from "../../src/data/nav.js";

describe("Tests the Navigation on the Homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should contain links", () => {
    cy.get("nav ul li").each(($li) => {
      cy.wrap($li).find("a").should("exist");
    });
  });

  it("Each link should have the correct href from nav data", () => {
    nav.forEach((item) => {
      cy.get("nav ul")
        .contains("a", item.title)
        .should("have.attr", "href", item.href);
    });
  });

  it("Each link should navigate to the correct page", () => {
    nav.forEach((item) => {
      // Start from homepage for each navigation test
      cy.visit("http://localhost:3000");

      // Click the navigation link
      cy.get("nav ul").contains("a", item.title).click();

      // Verify the URL matches the expected href
      cy.url().should("include", item.href);

      // For PDF links (Resume), just verify URL is correct
      if (item.href.endsWith(".pdf")) {
        cy.url().should("include", item.href);
      } else {
        // For regular pages, verify the page title matches the nav title
        cy.get("[data-component='PageHeader'] h1").should(
          "have.text",
          item.title
        );
      }
    });
  });
});
