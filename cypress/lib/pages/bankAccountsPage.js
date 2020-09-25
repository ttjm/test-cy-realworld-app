/// <reference types="Cypress" />
import { BasePage } from './basePage'

class BankAccountsPage extends BasePage {

    getAccounts = () => {
        return cy.get(BankAccountList).find('li')
    }
    getAccountRow = (nth) => {
        // nth page should return the 0-indexed row + 1
        return cy.get(BankAccountList).find('li').eq(nth+1)
    }    
}

export const BankAccountList = '[data-test="bankaccount-list"]';

export { BankAccountsPage }