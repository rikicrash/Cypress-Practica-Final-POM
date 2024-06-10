describe("Prueba Login para probar selectores", () => {
  xit("Prueba", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("input[name='username']").type("Admin");
    cy.get('input[name="password"]').type("admin123");

    cy.wait(1000);
  });
});
