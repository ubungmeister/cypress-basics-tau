it('my first test', ()=>{
    cy.visit("/")
    /* ==== Generated with Cypress Studio ==== */
    cy.contains('.board', 'ss')
    cy.get('.board')
    cy.get('#board-1')
    cy.get('[data-cy=board-item]').first()
    /* ==== End Cypress Studio ==== */
 
})