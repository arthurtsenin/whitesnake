import {
  DYNAMIC_ROUTES,
  NAVIGATION_LINKS,
} from "../../src/widget/Navigation/routes";

const departmentPythonRoute = [
  NAVIGATION_LINKS.career.href,
  DYNAMIC_ROUTES.PYTHON,
].join("/");

describe("The Python Department Page", () => {
  it("successfully loads", () => {
    cy.visit(departmentPythonRoute);
  });

  it("successfully content loads", () => {
    cy.visit(departmentPythonRoute);

    cy.get("h1").should("have.text", "Вакансии python");
  });
});

export {};
