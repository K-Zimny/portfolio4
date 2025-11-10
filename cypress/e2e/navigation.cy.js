import nav from "../../src/data/nav.js";

const navWithHomePage = [{ title: "Homepage", href: "" }, ...nav];

for (const navItem of navWithHomePage) {
  describe(`Navigation Tests on ${navItem.title} page`, () => {
    if (navItem.title === "Resume") return; // PDF, not a page.

    beforeEach(() => {
      cy.visitPage(navItem.href);
    });

    it("Should have all nav items with valid links", () => {
      cy.testNavStructure();
    });

    it("Should have correct hrefs for all nav items", () => {
      cy.testNavHrefs();
    });

    it.only("Should navigate to each page correctly", () => {
      cy.testNavNavigation({ returnToOriginalPage: true });
    });
  });
}
