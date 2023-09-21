describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('#document-tyoe').select("CC")
    cy.get('#document-number').type("23123123")
    cy.get('#boton-buscar').should("be.enabled")
    cy.get('#boton-buscar').click()
    cy.get('#no-encontrado').contains("No se encontro ningun usuario con la identificación")
  })
})