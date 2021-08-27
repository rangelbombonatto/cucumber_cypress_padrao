Cypress.Commands.add("botaoLogin", () => {
    return cy.get('.header__profile-wrapper > :nth-child(2)')
})

Cypress.Commands.add("botaoRecuperarSenha", () => {
    return cy.get('.login__form__forgot-password')
})

const url = "https://cwi.com.br/"

Cypress.Commands.add("acessarSite", () => {
    cy.visit(url)
})

Cypress.Commands.add("clicarBotaoPaginaLogin", () => {
    // cy.get(botaoLogin()).click()
    cy.botaoLogin().click()
})

Cypress.Commands.add("visualizarBotaoRecuperarSenha", () => {
    // cy.get(loginElements.botaoRecuperarSenha()).should('contain', 'Esqueceu sua senha?')
    cy.botaoRecuperarSenha().should('contain', 'Esqueceu sua senha?')
})