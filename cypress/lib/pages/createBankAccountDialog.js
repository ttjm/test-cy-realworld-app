class CreateBankAccountDialog {
    createNewAccount = (bankName, routingNumber, accountNumber) => {
        cy.get(BankNameInput).clear().type(bankName)
        cy.get(RoutingNumInput).clear().type(routingNumber)
        cy.get(AccountNumInput).clear().type(accountNumber)

        cy.get(SubmitButton).click()
    }
}

export const BankNameInput = '[data-test="bankaccount-bankName-input"] input';
export const RoutingNumInput = '[data-test=bankaccount-routingNumber-input] input';
export const AccountNumInput = '[data-test="bankaccount-accountNumber-input"] input';
export const SubmitButton = '[data-test="bankaccount-submit"]';

export { CreateBankAccountDialog }
