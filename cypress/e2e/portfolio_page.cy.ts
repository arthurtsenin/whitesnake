import { NAVIGATION_LINKS } from "../../src/widget/Navigation/routes";

describe("The Portfolio Page", () => {
  it("successfully loads", () => {
    cy.visit(NAVIGATION_LINKS.portfolio.href);
  });
});

export {};
