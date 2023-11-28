import {
  DYNAMIC_ROUTES,
  NAVIGATION_LINKS,
} from "../../src/widget/Navigation/routes";

const departmentJsRoute = [
  NAVIGATION_LINKS.career.href,
  DYNAMIC_ROUTES.JS,
].join("/");

describe("The JS Department Page", () => {
  it("successfully loads", () => {
    cy.visit(departmentJsRoute);
  });

  it("successfully content loads", () => {
    cy.visit(departmentJsRoute);

    cy.get("h1").should("have.text", "Вакансии js");
  });
});

export {};
