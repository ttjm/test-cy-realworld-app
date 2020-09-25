// Keep the line underneath for intelligent code completion in VSCode.
/// <reference types="Cypress" />

import { loginCommand } from './lib/loginCommand'

Cypress.Commands.add('login', loginCommand)