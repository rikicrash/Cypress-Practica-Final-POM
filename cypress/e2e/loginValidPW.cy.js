/// <reference types="cypress" />
import LoginPagePOM from "../support/POM/LoginPagePOM";

const urlPAge =
  "https://www.speedtest.net/result/16357008368";

//const loginpagepom = new LoginPagePOM();
const correctUser = "Admin";
const correctPW = "admin123";



describe("Login page Test Cases", () => {
    const loginpagepom = new LoginPagePOM();
  beforeEach(() => {
    cy.visit(urlPAge);
  });

  it("Login Happy Path", () => {
    loginpagepom.LoginPage(correctUser, correctPW);

    cy.wait(10000);
  });
});

