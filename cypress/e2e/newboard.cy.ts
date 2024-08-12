import * as lists from "@fixtures/lists.json";
it('typescript intro',()=>{

      console.log(lists);


    cy.intercept('POST', 'api/lists').as('listCreate')

    cy.visit('/board/1')

    for (let i = 0; i < lists.length; i++) {
      cy.get('[data-cy="add-list-input"]').type(`${lists[i].name}{enter}`)
      cy.wait('@listCreate').its('response.body.order').should('eq', lists[i].order)
    }



 })