// Keep the line underneath for intelligent code completion in VSCode.
/// <reference types="Cypress" />

import { TopNav } from '../lib/pages/topNav'
import { LoginPage } from '../lib/pages/loginPage'

describe('Top Navigation functionality', () => {

    const loginPage = new LoginPage()
    const topNav = new TopNav()

    before(() => {
        loginPage.login('Katharina_Bernier', 's3cret')
    })

    it('should have notification count', () => {
        // This value is the default on a newly deployed
        // test database. Any change to activity will 
        // make this test invalid.
        topNav.getNotificationsBadge().should('have.text', '8')
    })
})