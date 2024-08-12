import Board from "trelloapp/src/typings/board";

declare global {
    namespace Cypress{
        interface Chainable{
            /**
             * Changes boards via API 
             * @param body chnages you want to make to the board
             * @example 
             * cy.editBoard(1)
             */
            editBoard(body:Pick<Board, 'id'| 'name'>):Chainable<Board>
            //Pick choose only some from types, or we can use Omit -> exclude what we don't want to use 
            // or we can define the types here: body:{id:Board['id'], name?: Board['name']} -if we need to add optional atributes
            // Partial - not required atributes
            // how to combine partial and required -> Partial<Boad> & Required<Pick<Board, 'id'>>
        }
    }
}

Cypress.Commands.add('editBoard',(body:Pick<Board, 'id'| 'name'>)=>{

    Cypress.log({
        displayName: 'edit Board',
         consoleProps(){
            return{
                selector: body.id
            }
        }
    })

    return cy.request('PATCH', `/api/boards${body.id}`, body).its('body')
})