import { NAVIGATION_LINKS } from "../../src/widget/Navigation/routes";

describe("The Services Page", () => {
  it("successfully loads", () => {
    cy.visit(NAVIGATION_LINKS.services.href);
  });

  it("successfully content loads", () => {
    cy.visit(NAVIGATION_LINKS.services.href);

    cy.get("h1").should("have.text", "Услуги");
  });
});

export {};
