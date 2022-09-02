/// <reference types="Cypress" />
const { values } = require("lodash")
describe('My Sixth Test Suite.', function()
{
it('My First Test Case', function()
{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get('div.mouse-hover-content').invoke('show'); //it will show all the hidden elements 
    //invoke will show the hidden element of the immediate child, so we have to 
    //use the locator of immediate parent.
    cy.contains('Top').click(); //it will search the text 'Top' & click the element
    cy.url().should('include','top') // Grabs the URL & check if 'top' string is there in the url

    //Cypress & click on the hidden element also. So without using the above ways to mousehover
    //we can still click on the hidden elements by below method. 
    cy.contains('Top').click({force: true});
    cy.url().should('include','top')
    //In selenium we can't click on the invisible element but in cypress we can
} )
} )