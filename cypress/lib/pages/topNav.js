/// <reference types="Cypress" />

import { BasePage } from './basePage'

class TopNav extends BasePage {

    getNotificationsBadge = () => {
        return cy.get(NotificationCount).find('.MuiBadge-badge')
    }
}

export const NotificationBell = '[data-test="nav-top-notifications-link"]'
export const NotificationCount = '[data-test="nav-top-notifications-count"]'
export const NewButton = '[data-test="nav-top-new-transaction"'
export const TitleLink = '[data-test="app-name-logo"]'
export const SideNavToggle = '[data-test="sidenav-toggle"]'
export const AvatarImage = '.MuiAvatar-img'

export { TopNav }