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
});

export {};
