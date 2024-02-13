describe('Автотесты для формы логина и пароля', function () {
  it('Верный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio/'); // Посетили сайт
    cy.get('#mail').type('german@dolnikov.ru'); // Ввели логин
    cy.get('#pass').type('iLoveqastudio1'); // Ввели пароль
    cy.get('#loginButton').click(); // Нажали войти
    cy.get('#messageHeader').should('be.visible') // Проверка что тект виден
    cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Совп. текст
    cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Проверка что кретик виден

  });

  it('Восстановления пароля', function () {
    cy.visit('https://login.qa.studio/'); // Посетили сайт
    cy.get('#mail').type('german@dolnikov.ru'); // Ввели логин
    cy.get('#forgotEmailButton').click(); // Нажали на Забыли пароль
    cy.get('#forgotForm > .header').should('be.visible') // Проверка что тект виден
    cy.get('#forgotForm > .header').contains('Восстановите пароль'); // Совп. текст
    cy.get('#exitRestoreButton > .exitIcon').should('be.visible') // Проверка что кретик виден
    cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввели логин
    cy.get('#restoreEmailButton').click(); // Нажали отправить код
    cy.get('#messageHeader').should('be.visible') // Проверка что тект виден
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Совп. текст
    cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Проверка что кретик виден

  });

  it('Верный логин и неверный пароль', function () {
    cy.visit('https://login.qa.studio/'); // Посетили сайт
    cy.get('#mail').type('german@dolnikov.ru'); // Ввели логин
    cy.get('#loginButton').should('be.disabled'); // Кнопка войти некликабельная
    cy.get('#pass').type('iLoveqastudio89'); // Ввели пароль
    cy.get('#loginButton').should('be.enabled'); // Кнопка войти кликабельная
    cy.get('#loginButton').click(); // Нажали войти
    cy.get('#messageHeader').should('be.visible') // Проверка что тект виден
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Совп. текст
    cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Проверка что кретик виден

  });

  it('Неверный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio/'); // Посетили сайт
    cy.get('#mail').type('german@privalov.ru'); // Ввели логин
    cy.get('#loginButton').should('be.disabled'); // Кнопка войти некликабельная
    cy.get('#pass').type('iLoveqastudio1'); // Ввели пароль
    cy.get('#loginButton').should('be.enabled'); // Кнопка войти кликабельная
    cy.get('#loginButton').click(); // Нажали войти
    cy.get('#messageHeader').should('be.visible') // Проверка что тект виден
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Совп. текст
    cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Проверка что кретик виден

    });

  it('Ввести логин без @', function () {
    cy.visit('https://login.qa.studio/'); // Посетили сайт
    cy.get('#mail').type('germanprivalov.ru'); // Ввели логин
    cy.get('#loginButton').should('be.disabled'); // Кнопка войти некликабельная
    cy.get('#pass').type('iLoveqastudio1'); // Ввели пароль
    cy.get('#loginButton').should('be.enabled'); // Кнопка войти кликабельная
    cy.get('#loginButton').click(); // Нажали войти
    cy.get('#messageHeader').should('be.visible') // Проверка что тект виден
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Совп. текст
    cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Проверка что кретик виден

    });

   it('Приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/'); // Посетили сайт
    cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели логин
    cy.get('#loginButton').should('be.disabled'); // Кнопка войти некликабельная
    cy.get('#pass').type('iLoveqastudio1'); // Ввели пароль
    cy.get('#loginButton').should('be.enabled'); // Кнопка войти кликабельная
    cy.get('#loginButton').click(); // Нажали войти
    cy.get('#messageHeader').should('be.visible') // Проверка что тект виден
    cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Совп. текст
    cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Проверка что кретик виден

    });


  });