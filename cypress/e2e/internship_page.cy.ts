import { NAVIGATION_LINKS } from "../../src/widget/Navigation/routes";

describe("The Internship Page", () => {
  it("successfully loads", () => {
    cy.visit(NAVIGATION_LINKS.internship.href);
  });

  it("successfully content loads", () => {
    cy.visit(NAVIGATION_LINKS.internship.href);

    cy.get("h1").should("have.text", "Стажировка");
  });
});

export {};
