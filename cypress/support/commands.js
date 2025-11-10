// General utility commands

Cypress.Commands.add("visitPage", (page = "") => {
  const root = ""; // Handled in cypress config.
  cy.visit(root + page);
});
