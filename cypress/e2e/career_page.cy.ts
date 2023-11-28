import { NAVIGATION_LINKS } from "../../src/widget/Navigation/routes";

describe("The Career Page", () => {
  it("successfully loads", () => {
    cy.visit(NAVIGATION_LINKS.career.href);
  });
});

export {};
