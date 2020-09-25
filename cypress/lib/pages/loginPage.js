import { BasePage } from './basePage'

class LoginPage extends BasePage {

    constructor() {
        super('LoginPage')
    }

    login = (username = "", password = "") => {
        cy.visit('/signin')
        cy.get("#username").clear().type(username, {delay: 0})
        cy.get("#password").clear().type(password, {delay: 0})
        cy.get('[data-test="signin-submit"]').click()
    }

    clickSignup = () => cy.get('[data-test=signup]').click()
}

export const LoginPageRoute = '/login';

export { LoginPage };