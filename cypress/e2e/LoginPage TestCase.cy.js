/// <reference types="cypress" />
import LoginPagePOM from "../support/POM/LoginPagePOM";

const urlPAge =
  "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

//const loginpagepom = new LoginPagePOM();
const correctUser = "Admin";
const correctPW = "admin123";

describe("Login page Test Cases", () => {
  const loginPagePom = new LoginPagePOM();

  beforeEach(() => {
    cy.visit(urlPAge);
  });

  it("Login Happy Path", () => {
    loginPagePom.Login(correctUser, correctPW);

    //crea un asertion
    cy.url().should("include", "dashboard");

    //Crea un asertion que revise si existe un texto dashboard en pantalla
    cy.contains("Dashboard").should("be.visible");

    //crea otro asertion
  });

  // xit("Prueba", () => {
  //   cy.visit(
  //     "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  //   );
  //   cy.get("input[name='username']").type("Admin");
  //   cy.get('input[name="password"]').type("admin123");

  //   cy.wait(1000);
  // });
});
