import { HOME_LINK } from "../../src/widget/Navigation/routes";

describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit(HOME_LINK.href);
  });

  it("successfully content loads", () => {
    cy.visit(HOME_LINK.href);

    cy.get("h1").should("have.text", "Ваше видение,  наша экспертиза:");
  });
});

export {};
