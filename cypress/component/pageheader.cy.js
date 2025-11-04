import PageHeader from "@/components/pageheader/PageHeader";

describe("PageHeader Component", () => {
  it("Should render with title", () => {
    cy.mount(<PageHeader title="Kenneth Zimny" />);

    cy.get("[data-component='PageHeader']").should("exist");
    cy.get("[data-component='PageHeader'] h1").should(
      "have.text",
      "Kenneth Zimny"
    );
  });

  it("Should render with title and subtitle", () => {
    cy.mount(
      <PageHeader title="Kenneth Zimny" subtitle="Frontend Developer" />
    );

    cy.get("[data-component='PageHeader']").should("exist");
    cy.get("[data-component='PageHeader'] h1").should(
      "have.text",
      "Kenneth Zimny"
    );
    cy.get("[data-component='PageHeader'] p").should("exist");
    cy.get("[data-component='PageHeader'] p").should(
      "have.text",
      "Frontend Developer"
    );
  });

  it("Should not render subtitle when not provided", () => {
    cy.mount(<PageHeader title="Kenneth Zimny" />);

    cy.get("[data-component='PageHeader'] p").should("not.exist");
  });

  it("Should apply custom className", () => {
    cy.mount(<PageHeader title="Kenneth Zimny" className="custom-class" />);

    cy.get("[data-component='PageHeader']").should(
      "have.class",
      "custom-class"
    );
  });
});
