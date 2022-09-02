/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
const { values } = require("lodash")
import 'cypress-iframe'
describe('My Eighth Test Suite.', function()
{
it('My First Test Case', function()
{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    //First we need frame ID & load the frame.
    cy.frameLoaded('#courses-iframe')
    //Now switch to iframe and locate inside frame
    cy.iframe().find("a[href*='mentorship']").eq(0).click();
    cy.iframe().find("h1[class='pricing-title text-white ls-1']").should('have.length',2);
} )
} )