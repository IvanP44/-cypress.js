describe('Автотест на позитивный кейс авторизации', function () {
   it('верный логин и верный пароль', function () {
      cy.visit('https://login.qa.studio/'); // Посетили сайт
      cy.get('#mail').type('german@dolnikov.ru'); // Ввели логин
      cy.get('#pass').type('iLoveqastudio1'); // Ввели пароль
      cy.get('#loginButton').click(); //Нажали войти
      cy.get('#messageHeader').should('be.visible') // Проверка что текст виден
      cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Совпадение текста
      cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик виден
      cy.get('#exitMessageButton > .exitIcon').click(); //Нажали на крестик
})
    it('Автотест на проверку логики восстановления пароля', function () {
      cy.visit('https://login.qa.studio/'); // Посетили сайт
      cy.get('#forgotEmailButton').click(); // нажали забыли пароль
      cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввели имейл
      cy.get('#restoreEmailButton').click(); // нажали отправить код
      cy.get('#messageHeader').should('be.visible') // Проверка что текст виден
      cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Совпадение текста
      cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик виден
      cy.get('#exitMessageButton > .exitIcon').click(); //Нажали на крестик
})
    it('верный логин и неверный пароль', function () {
      cy.visit('https://login.qa.studio/'); // Посетили сайт
      cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
      cy.get('#pass').type('iLoveqastudio5'); // Ввели неверный пароль
      cy.get('#loginButton').click(); //Нажали войти
      cy.get('#messageHeader').should('be.visible') // Проверка что текст виден
      cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Совпадение текста
      cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик виден
      cy.get('#exitMessageButton > .exitIcon').click(); //Нажали на крестик
})
        it('неверный логин и верный пароль', function () {
      cy.visit('https://login.qa.studio/'); // Посетили сайт
      cy.get('#mail').type('german@dolnikovv4.ru'); // Ввели неверный логин
      cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
      cy.get('#loginButton').click(); //Нажали войти
      cy.get('#messageHeader').should('be.visible') // Проверка что текст виден
      cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Совпадение текста
      cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик виден
      cy.get('#exitMessageButton > .exitIcon').click(); //Нажали на крестик
})
        it('негативный кейс валидации, логин без @.', function () {
      cy.visit('https://login.qa.studio/'); // Посетили сайт
      cy.get('#mail').type('germandolnikov.ru'); // логин без @
      cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
      cy.get('#loginButton').click(); //Нажали войти
      cy.get('#messageHeader').should('be.visible') // Проверка что текст виден
      cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Совпадение текста
})
           it('проверка на приведение к строчным буквам в логине', function () {
      cy.visit('https://login.qa.studio/'); // Посетили сайт
      cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввести логин  GerMan@Dolnikov.ru
      cy.get('#pass').type('iLoveqastudio1'); // Ввели пароль
      cy.get('#loginButton').click(); //Нажали войти
      cy.get('#messageHeader').should('be.visible') // Проверка что текст виден
      cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Совпадение текста
      cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик виден
      cy.get('#exitMessageButton > .exitIcon').click(); //Нажали на крестик
})
   })