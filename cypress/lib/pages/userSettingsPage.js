import { BasePage } from './basePage'

class UserSettingsPage extends BasePage {
    constructor(){
        super("User Settings Page")
    }

    visit = () => {
        cy.visit(UserSettingsRoute)
    }

    typeFast = (val) => {

    }

    fillForm(firstName = "Bobby", lastName = "McFerrin", email = "myemail@example.com", phone = "303-555-1234") {
        cy.get(FirstNameField).clear().type(firstName)
        cy.get(LastNameField).clear().type(lastName)
        cy.get(EmailField).clear().type(email)
        cy.get(PhoneField).clear().type(phone)
    }

    getFirstNameField = () => {
        return cy.get('form').find(FirstNameField)
    }

    getLastNameField = () => {
        return cy.get('form').find(LastNameField)
    }

    getEmailField = () => {
        return cy.get('form').find(EmailField)
    }

    getPhoneField = () => {
        return cy.get('form').find(PhoneField)
    }

    clickSave = () => {
        cy.get('form').find(SaveButton).click()
    }

}

export const UserSettingsRoute = '/user/settings';
export const FirstNameField = '[data-test="user-settings-firstName-input"]';
export const LastNameField = '[data-test="user-settings-lastName-input"]';
export const EmailField = '[data-test="user-settings-email-input"]'
export const PhoneField = '[data-test="user-settings-phoneNumber-input"]'

export const SaveButton = '[data-test="user-settings-submit"]';

export { UserSettingsPage }