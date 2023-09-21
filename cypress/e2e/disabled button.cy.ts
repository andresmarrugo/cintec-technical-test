describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('#boton-buscar').should("be.disabled")
  })
})