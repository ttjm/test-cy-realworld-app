// Keep the line underneath for intelligent code completion in VSCode.
/// <reference types="Cypress" />

const faker = require('faker')

import { LoginPage } from '../lib/pages/loginPage'
import { RegistrationPage, submitButton } from '../lib/pages/registrationPage'
import { CreateBankAccountDialog } from '../lib/pages/createBankAccountDialog'
import { UserSettingsPage, SaveButton } from '../lib/pages/userSettingsPage'
import { BankAccountsPage } from '../lib/pages/bankAccountsPage'
import * as sideNavBar from '../lib/pages/sidenavMenu'
import * as dialogPage from '../lib/pages/onboardingDialog'

describe('Signup process', () => {

    const loginPage = new LoginPage()
    const regPage = new RegistrationPage()
    const dialog = new dialogPage.OnboardDialog()
    const accountDialog = new CreateBankAccountDialog()
    const sideNav = new sideNavBar.SideNavMenu()
    const userSettings = new UserSettingsPage()
    const bankAccounts = new BankAccountsPage()

    const testUser = {
        fn: faker.name.firstName(),
        ln: faker.name.lastName(),
        uname: faker.internet.userName(),
        password: faker.internet.password()
    }
    
    beforeEach(() => {
        cy.visit('/')
        loginPage.clickSignup()
    })

    it('has a disabled button when form incomplete', () => {
        cy.get(submitButton).invoke('prop', 'disabled').should('exist')
    })

    it('registers a new account and onboards user', () => {
        regPage.fillForm(testUser.fn, testUser.ln, testUser.uname, testUser.password, testUser.password)
        regPage.submitForm()

        // If no errors, it will redirect to login
        cy.url().should('contain', '/signin')
        loginPage.login(testUser.uname, testUser.password)

        // Presents user with a walkthrough of features
        cy.get(dialogPage.DialogTitle).invoke('text').should('eq', 'Get Started with Real World App')

        dialog.clickNext()

        // Creates a bank account
        accountDialog.createNewAccount(
            faker.company.companyName(), 
            faker.finance.routingNumber(), 
            faker.finance.routingNumber())

        // Ends up on the correct page
        cy.get(dialogPage.DialogTitle).invoke('text').should('eq', 'Finished')
        dialog.clickNext()

        cy.get(sideNavBar.SideNav).find('h6').then(elts => {
            const fullName = `${testUser.fn} ${testUser.ln[0]}`
            cy.wrap(elts).first().should('have.text', fullName)
            cy.wrap(elts).eq(1).should('contain.text', `@${testUser.uname}`)
        })
        cy.get(sideNavBar.SideNavUserBalance).should('contain.text', '$0.00')
        
        sideNav.clickMyAccount()

        userSettings.getFirstNameField().should('have.value', testUser.fn)
        userSettings.getLastNameField().should('have.value', testUser.ln)
        userSettings.getEmailField().should('have.value', '')
        userSettings.getPhoneField().should('have.value', '')

        // cy.get(SaveButton).its('hidden').should('eq', '')

        // Check bank account created
        sideNav.clickBankAccounts()
        bankAccounts.getAccounts().then(accts => {
            expect(accts.length).to.eq(1)
        })

    })
})