it('typescript intro',()=>{
    cy.visit('/')
    cy.contains("Get Started!").should("be.visible");
    cy.get('.mb-8').invoke('text')
})