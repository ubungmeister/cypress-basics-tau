it('chaining', ()=>{

        cy.visit('/board/1')
        cy.get('[data-cy="card"]').last().should('contain.text', 'juice').click()
        cy.get('[data-cy="card-detail-title"]').should('have.value', 'juice')
    
})