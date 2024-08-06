it('making assertions', ()=>{
    cy.visit('/board/1')


    //1. chaeking the name of the cards lists 
    cy.get('[data-cy=new-card]')
    .click()

    cy.get('[data-cy="new-card-input"]')
    .type('bread{enter}')

    cy.get('[data-cy="card"]').should('be.visible')

     cy.get('[data-cy="new-card-input"]')
    .type('milk{enter}')

    cy.get('[data-cy="card"]').should('have.length',2)

    cy.get('[data-cy="card-checkbox"]').check()
    
    cy.get('[data-cy="card-checkbox"]').should('be.checked')

    cy.get('[data-cy="due-date"]').should('have.class', 'completed')
    //when the checkbox is cliked the due date is shown and when it showws the styling changes on completed, so we test it 

    cy.get('[data-cy="list-name"]').should('have.value', 'new card') //in input we check value
    
    cy.get('[data-cy="card-text"]').should('have.text', 'breadmilk') //in text we check text


 
})