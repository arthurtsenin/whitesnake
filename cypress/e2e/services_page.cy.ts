import { NAVIGATION_LINKS } from "../../src/widget/Navigation/routes";

describe("The Services Page", () => {
  it("successfully loads", () => {
    cy.visit(NAVIGATION_LINKS.services.href);
  });
});

export {};
