describe("Perform Homepage E2E Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should contain Logo", () => {
    cy.get("#site-logo").should("exist");
    cy.get("#site-logo").should("be.visible");

    cy.get("#site-logo")
      .should("have.prop", "naturalWidth")
      .and("be.greaterThan", 0);

    cy.get("#site-logo")
      .should("have.prop", "naturalHeight")
      .and("be.greaterThan", 0);
  });

  it("Should contain page title", () => {
    cy.get("[data-component='PageHeader'] h1").should(
      "have.text",
      "Kenneth Zimny"
    );
  });

  it("Should contain a subtitle", () => {
    cy.get("[data-component='PageHeader'] p").should("exist");
  });

  it("Should contain introduction copy", () => {
    cy.get("[data-test='intro']").should("exist");
  });
});
