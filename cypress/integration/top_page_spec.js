describe('Top page', () => {
  context('top page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });

    it('has title', () => {
      cy.title().should('include', 'GitHub');
    });

    it('has search form', () => {
      cy.get('#search').should('have.attr', 'type', 'search');
    });

    it('suggests repositories', () => {
      cy.get('#search').type('facebook/react');
      cy.get('li:first-child a').should('contain', 'facebook/react');
    });
  });
});
