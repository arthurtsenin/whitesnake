import { HOME_LINK } from "../../src/widget/Navigation/routes";

describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit(HOME_LINK.href);
  });
});

export {};
