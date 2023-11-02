
import acessoPage from '../PageObjects/acessoPage'

Given(/^que acesso a pagina de registro do site Nopcommerce$/, () => {
	acessoPage.go()
});

When(/^preencho o formulario somente com dados obrigatorios$/, () => {
	cy.fillMandatoryFieldsAndSubmit()
});

When(/^passo todos os dados do formulario$/, () => {
	cy.fillAllFieldsAndSubmit()
});

When(/^preencho o formulario passando um e-mail inválido$/, () => {
	cy.get('#FirstName').type('Nicolle')
	cy.get('#LastName').type('Furlan')
	cy.get('#Email').type('emailinvalido')
	cy.get('#Company').type('Quality Map')
	cy.get('#Password').type('H$uasg1762@')
	cy.get('#ConfirmPassword').type('H$uasg1762@')
	
});

And(/^clico no botão registrar$/, () => {
	cy.contains('button', 'Register').click()
});

Then(/^verifico que o cadastro foi realizado com sucesso$/, () => {
	cy.get('.result')
	cy.screenshot()
});

Then(/^verifico retorno de mensagem de erro do e-mail$/, () => {
	cy.get('#Email-error').should('be.visible')
	cy.screenshot()
})
  
Then(/^verifico retorno de mensagem de erros$/, () => {
	cy.allError()
	cy.screenshot()
})