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
});

export {};
