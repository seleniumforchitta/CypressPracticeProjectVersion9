/// <reference types="Cypress" />

const { values } = require("lodash")

describe('My Second Test Suite.', function()
{

it('My First Test Case', function()
{
    // Test step should be written here. 

    //cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.visit(Cypress.env('URL')+'/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca');
    cy.wait(2000);
    cy.get('.products').as('productLocator');
    cy.get('@productLocator').find('.product').each(($el, index, $list)  =>  {
    /*  $el = current value
        index = current index
        $list = Total List */

        const vegName = $el.find('h4.product-name').text();
        if(vegName.includes('Cashews'))
        {
            cy.wrap($el).find('button').click();
        }
    })
    cy.get('.cart-icon > img').click();
    cy.contains('PROCEED TO CHECKOUT').click(); // When there is a text
    cy.contains('Place Order').click();
} )

} )