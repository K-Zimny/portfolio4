import nav from "../../src/data/nav.js";

describe("Tests the Navigation on the Homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("nav ul li").as("navItems");
  });

  it("Should contain links", () => {
    cy.get("@navItems").each(($li) => {
      cy.wrap($li).find("a").should("exist");
    });
  });

  it("Each link should have the correct href from nav data", () => {
    nav.forEach((item) => {
      cy.get("@navItems")
        .contains("a", item.title)
        .should("have.attr", "href", item.href);
    });
  });

  it("Each link should navigate to the correct page", () => {
    nav.forEach((item) => {
      cy.visit("http://localhost:3000");

      cy.get("@navItems").contains("a", item.title).click();
      cy.url().should("include", item.href);

      if (item.href.endsWith(".pdf")) {
        cy.url().should("include", item.href);
      } else {
        cy.get("[data-component='PageHeader'] h1").should(
          "have.text",
          item.title
        );
      }
    });
  });
});
