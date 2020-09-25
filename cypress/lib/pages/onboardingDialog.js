class OnboardDialog {

    clickNext =  () => {
        cy.get(NextButton).click()
    }
}

export const UserOnboardDialog = '[data-test="user-onboard-dialog]';
export const DialogTitle = '[data-test="user-onboarding-dialog-title"] h2';
export const DialogContent = '[data-test="user-onboarding-dialog-content"]'
export const NextButton = '[data-test="user-onboarding-next"]';


export { OnboardDialog }