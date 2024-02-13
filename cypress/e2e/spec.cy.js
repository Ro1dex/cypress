describe("login page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("should page visible", () => {
    cy.contains("Books list").should("be.visible");
  });

  it("should login", () => {
    cy.login("test@test.com", "test");
    cy.contains("Добро пожаловать test@test.com").should("be.visible");
  });
  it("should not login when empty email", () => {
    cy.login(null, "test");
    cy.valid("#mail");
  });
  it("should not login when empty password", () => {
    cy.login("test@test.com", null);
    cy.valid("#pass")
  });
  it("should add new book ", () => {
    cy.login("test@test.com", "test");
    cy.addBook("Евгений Онегин", "Пушкин А. С.");
    cy.contains("Евгений Онегин").should("be.visible");
  });
  it("should add book to favorites ", () => {
    cy.login("test@test.com", "test");
    cy.addBook("Вино из одуванчиков", "Рей Бредбери");
    cy.get('div.card-body').contains('Вино из одуванчиков').parent().parent().find('button').click();
    cy.contains("Favorites").click();
    cy.contains("Вино из одуванчиков").should("be.visible");
  });
  it("should delete book from favorites ", () => {
    cy.login("test@test.com", "test");
    cy.addBook("Мастер и Маргарита", "Булгаков М. А.");
    cy.get('div.card-body').contains('Мастер и Маргарита').parent().parent().find('button').click();
    cy.contains("Favorites").click();
    cy.get('div.card-body').contains('Мастер и Маргарита').parent().parent().find('button').click();
    cy.get('Мастер и Маргарита').should('not.exist');
  });
});
