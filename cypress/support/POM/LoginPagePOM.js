//Normalmente esta sentencia se utiliza para que cy ayude con el auto completado.
/// <reference types="cypress" />

class LoginPagePOM {
  #inputUserName = "input[name='username']";
  #inputPassWord = 'input[name="password"]';
  #loginButton =
    ".oxd-button oxd-button--medium oxd-button--main orangehrm-login-button";

  Login(username, password) {
    cy.get(this.#inputUserName).type(username);
    cy.get(this.#inputPassWord).type(password);
    cy.submit();
  }

  submit() {
    cy.get(this.#loginButton).click();
  }
}

export default LoginPagePOM;
