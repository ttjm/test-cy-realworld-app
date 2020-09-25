// Keep the line underneath for intelligent code completion in VSCode.
/// <reference types="Cypress" />

import { LoginPage } from '../lib/pages/loginPage'
import { UserSettingsPage } from '../lib/pages/userSettingsPage'
import { SideNavMenu } from '../lib/pages/sidenavMenu'

var faker = require('faker');

const loginPage = new LoginPage();
const nav = new SideNavMenu();

describe('Login Page', () => {
    it.skip('Logs in the user', () => {
        loginPage.login('Katharina_Bernier', 's3cret')
    })
})

describe('User Settings Page', () => {

    const page = new UserSettingsPage();

    beforeEach(() => {
        loginPage.login('Katharina_Bernier', 's3cret')
    })

    it('changes the user data', () => {

        let fn = faker.name.firstName();
        let ln = faker.name.lastName();
        let em = faker.internet.email();
        let ph = faker.phone.phoneNumber('###-###-####');
        nav.clickMyAccount();
        page.fillForm(fn, ln, em, ph)
        page.clickSave()

        // // leave page and return
        nav.clickHome()
        nav.clickMyAccount()
        
        // Verify persisted changes
        // page.getFirstNameField().should('have.value', fn)
        page.getFirstNameField().should('have.value', fn)
        page.getLastNameField().should('have.value', ln)
        page.getEmailField().should('have.value', em)
        page.getPhoneField().should('have.value', ph)

        nav.signout()

    })
})