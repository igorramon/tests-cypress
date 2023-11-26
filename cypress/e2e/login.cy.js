/// <reference path="../support/commands.d.ts" />

describe("Login", () => {
    it("successfully logs in", () => {
        const email = Cypress.env("USER_EMAIL")
        const password = Cypress.env("USER_PASSWORD")

        cy.guiLogin(email, password)
    })
})
