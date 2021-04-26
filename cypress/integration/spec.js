describe('web demo', function() {
  it('shows greeting', function() {
    cy.visit('')
    cy.contains("hi")
    cy.contains("what's your name")
  })

  it('shows input field and button', function() {
    cy.visit('')
    cy.get('#textbox').type('zu')
    cy.get('#submit').click()
    cy.contains("your name is zu")
    cy.url().should('include', '/name')
  })

})
