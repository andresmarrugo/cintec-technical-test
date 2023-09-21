describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('#document-tyoe').select("CC")
    cy.get('#document-number').type("11111111")
    cy.get('#boton-buscar').should("be.enabled").click()
    cy.get('#name').should("be.visible")
  })
})