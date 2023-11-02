Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
	cy.get('#FirstName')
	 .type('Nicolle')
	 .should('have.value','Nicolle')
	cy.get('#LastName')
	 .type('Furlan')
	 .should('have.value','Furlan')
    cy.get('#Email').type(`${Date.now()}@xx.com`)
	cy.get('#Company')
	 .type('Quality Map')
	 .should('have.value','Quality Map')
	cy.get('#Password')
	.type('H$uasg1762@')
	.should('have.value','H$uasg1762@')
	cy.get('#ConfirmPassword')
	.type('H$uasg1762@')
	.should('have.value','H$uasg1762@')
})

Cypress.Commands.add('fillAllFieldsAndSubmit', function() {
  cy.get('#gender-female')
    .check()
    .should('have.value', 'F')
  cy.get('#FirstName').type('Nicolle')
  cy.get('#LastName').type('Furlan')
  cy.get('[name="DateOfBirthDay"]')
    .select(1)
    .should('have.value', '1')
  cy.get('[name="DateOfBirthMonth"]')
    .select("April")
    .should('have.value', '4')
  cy.get('[name="DateOfBirthYear"]')
    .select("1983")
    .should('have.value', '1983')
  cy.get('#Email').type(`${Date.now()}@teste.com`)
  cy.get('#Company').type('Quality Map')
  cy.get('#Newsletter')
    .check()
    .uncheck()
    .should('not.be.checked')
  cy.get('#Password').type('H$uasg1762@')
  cy.get('#ConfirmPassword').type('H$uasg1762@')
})

Cypress.Commands.add('allError', function() {
	cy.get('#FirstName-error').should('be.visible')
    cy.get('#LastName-error').should('be.visible')
	cy.get('#Email-error').should('be.visible')
	cy.get('#Password-error').should('be.visible')
	cy.get('#ConfirmPassword-error').should('be.visible')
})