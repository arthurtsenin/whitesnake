import { NAVIGATION_LINKS } from "../../src/widget/Navigation/routes";

describe("The About Page", () => {
  it("successfully loads", () => {
    cy.visit(NAVIGATION_LINKS.about.href);
  });

  it("successfully content loads", () => {
    cy.visit(NAVIGATION_LINKS.about.href);

    cy.get("h1").should("have.text", "О нас");
  });
});

export {};
