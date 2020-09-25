class RegistrationPage {

    fillForm = (fn, ln, uname, pwd, pwd2) => {
        cy.get(firstNameField).clear().type(fn)
        cy.get(lastNameField).clear().type(ln)
        cy.get(usernameField).clear().type(uname)
        cy.get(passwordField).clear().type(pwd)
        cy.get(confirmPasswordField ).clear().type(pwd2)
    }

    submitForm = () => {
        cy.get(submitButton).click()
    }
}

export const firstNameField = '[data-test=signup-first-name] input';
export const lastNameField = '[data-test=signup-last-name] input';
export const usernameField = '[data-test=signup-username] input';
export const passwordField = '[data-test=signup-password] input';
export const confirmPasswordField = '[data-test=signup-confirmPassword] input';
export const submitButton = '[data-test=signup-submit]'

export { RegistrationPage }