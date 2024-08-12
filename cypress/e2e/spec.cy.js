describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/');
    cy.contains('SIGN UP');
    cy.contains('LoFi Plans')
  })
  it('passes', () => {
    cy.visit('http://localhost:5173/');
    cy.contains('SIGN UP').click();
    cy.contains('Create User')
  })
  it('passes', () => {
    cy.visit('http://localhost:5173/');
    cy.contains('CREATE AS GUEST').click();
    cy.contains('Create New Event').click();
    cy.get('input').first().type('test');
  })
  it('passes', () => {
    cy.viewport(300,700)
    cy.visit('http://localhost:5173/');
    cy.contains('CREATE AS GUEST').click();
    cy.get('.delete-button').first().click();
    cy.contains('Yes')
  })
})