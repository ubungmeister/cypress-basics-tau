it('create a board', ()=>{
    cy.visit('/')

    cy.addBoard('new board').then((body)=>{
        expect(body.id).to.exist
        expect(body.name).to.eq('new board')
        expect(body.starred).to.be.false
    })
    
    // cy.editBoard({id:1, name:'sdw'})
})

