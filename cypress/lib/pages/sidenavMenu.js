class SideNavMenu {
    clickHome = () => {
        cy.get(HomeLink).click()
    }
    
    clickMyAccount = () => {
        cy.get(MyAccountLink).click()
    }

    clickBankAccounts = () => {
        cy.get(BankAccountsLink).click()
    }

    clickNotifications = () => {
        cy.get(NotificationsLink).click()
    }

    signout = () => {
        cy.get(SignoutLink).click()
    }
}

export const SideNav = '[data-test=sidenav]';
export const SideNavUserBalance = '[data-test=sidenav-user-balance]'
export const HomeLink = '[data-test=sidenav-home]';
export const MyAccountLink = '[data-test=sidenav-user-settings]';
export const BankAccountsLink = '[data-test=sidenav-bankaccounts]';
export const NotificationsLink = '[data-test=sidenav-notifications]';
export const SignoutLink = '[data-test=sidenav-signout]';

export { SideNavMenu }