describe('Repository', () => {
  it('has title', () => {
    cy.visit('http://localhost:3000');
    cy.title().should('include', 'GitHub');
  });
});
