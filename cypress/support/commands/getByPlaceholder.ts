import { Placeholders } from "cypress/support/typings/placeholders";

export{}
declare global{
    namespace Cypress {
        interface Chainable {
            /**
             * Get a DOM element based on placeholder value 
             * @param placeholder input value
             * @example
             * //<input placeholder= "Your email">  
             */
            getByPlaceholder(input:Placeholders): Chainable<any>
        }
    }
}

Cypress.Commands.add('getByPlaceholder',(input:Placeholders)=>{

    Cypress.log({
        displayName: 'getByPlaceholder',
        message: input,
        consoleProps(){
            return{
                selector: input
            }
        }
    })

    return cy.get(`[placeholder="${input}"]`, {log:false})
})