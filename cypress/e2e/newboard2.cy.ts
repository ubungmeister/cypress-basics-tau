import { Placeholders } from "cypress/support/typings/placeholders"
it('create a new board', ()=>{
    cy.visit('/')
    cy.getByPlaceholder('Name of your first board')
    

})