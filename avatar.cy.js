describe('Покупка аватара', function () {
   it('e2e тест на покупку нового аватара для тренера', function () {
        cy.visit('https://pokemonbattle.me/'); // заходим на сайт
        cy.get(':nth-child(1) > .auth__input').type('vancher8p@yandex.ru'); // вводим почту
        cy.get('#password').type('Power12.'); // вводим пароль
        cy.get('.auth__button').click(); // нажимаем войти
        cy.get('.header__btns > [href="/shop"]').click(); // нажимаем кнопку магазин
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click(); // нажимаем купить аватара 1
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111'); // вводим данные карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225'); // вводим срок
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // вводим код
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('German Dolnikov'); // вводим имя
        cy.get('.pay-btn').click(); // нажимаем оплатить
        cy.get('#cardnumber').type('56456'); // вводим данные карты
        cy.get('.payment__submit-button').click(); // вводим данные карты
        cy.get('.payment__adv').click(); // вводим данные карты
 })
})