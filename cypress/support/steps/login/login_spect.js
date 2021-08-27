import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Given("acesso o site CWI", () => {
    cy.acessarSite();
})

When("acesso a pagina de login", () => {
    cy.clicarBotaoPaginaLogin();
})

Then("devo visualizar botao de recuperar senha esquecida", () => {
    cy.visualizarBotaoRecuperarSenha();
})
