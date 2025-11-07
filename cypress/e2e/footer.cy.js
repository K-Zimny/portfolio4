describe("Tests the Footer on the Homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("[data-test='contact-bar'] ul li a").as("contactLinks");
  });

  it("Have footer bar links and icons", () => {
    cy.get("@contactLinks").each(($item) => {
      cy.wrap($item).should("exist");
      cy.wrap($item).should("be.visible");
      cy.wrap($item)
        .find("img")
        .should("have.prop", "naturalWidth")
        .and("be.greaterThan", 0);
      cy.wrap($item)
        .find("img")
        .should("have.prop", "naturalHeight")
        .and("be.greaterThan", 0);
    });

    cy.get("@contactLinks").then(($links) => {
      const linkCount = $links.length;
      for (let index = 0; index < linkCount; index++) {
        cy.visit("http://localhost:3000");
        cy.get("@contactLinks")
          .eq(index)
          .then(($link) => {
            const href = $link.attr("href");
            if (!href || !href.includes("mailto:")) {
              cy.wrap($link).click();
              cy.url().should("include", href);
            }
          });
      }
    });
  });
});
