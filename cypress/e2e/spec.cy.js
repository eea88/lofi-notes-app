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
    cy.visit('http://localhost:5173/');
    cy.contains('CREATE AS GUEST').click();
    cy.get('.delete-button').click();
    cy.contains('YES')
  })
})