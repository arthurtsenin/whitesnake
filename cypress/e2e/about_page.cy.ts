import { NAVIGATION_LINKS } from "../../src/widget/Navigation/routes";

describe("The About Page", () => {
  it("successfully loads", () => {
    cy.visit(NAVIGATION_LINKS.about.href);
  });
});

export {};
