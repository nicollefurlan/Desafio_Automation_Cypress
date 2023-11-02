/// <reference types="Cypress" />

class AcessoPage {

    go() {
        //acessa a página
        cy.visit('http://demo.nopcommerce.com/register')
        cy.title().should('be.equal', 'nopCommerce demo store. Register')

    }

}

export default new AcessoPage()