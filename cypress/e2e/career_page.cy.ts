import { NAVIGATION_LINKS } from "../../src/widget/Navigation/routes";

describe("The Career Page", () => {
  it("successfully loads", () => {
    cy.visit(NAVIGATION_LINKS.career.href);
  });

  it("successfully content loads", () => {
    cy.visit(NAVIGATION_LINKS.career.href);

    cy.get("h1").should("have.text", "Карьера");
  });
});

export {};
