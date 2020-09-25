import { BasePage } from './basePage'

class NotificationPage extends BasePage {

    visit = () => {
        cy.visit(NotificationPageRoute)
    }
    
    
}

export const NotificationPageRoute = '/notifications'

export const NotificationListItem = '[data-test="notification-list-item-    ]'
export const NotificationMarkUnread = '[data-test="notification-mark-read-tk8jNBQURvQz]'

export const { NotificationPage }