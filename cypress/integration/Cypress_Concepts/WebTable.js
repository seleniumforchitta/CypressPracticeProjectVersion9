/// <reference types="Cypress" />

const { values } = require("lodash")

describe('My Fifth Test Suite.', function()
{

it('My First Test Case', function()
{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('table tr td:nth-child(2)').each(($el,index, $list) => {
        const text = $el.text(); // var & const can be used 
        if(text.includes("Python"))
        {
            // it will go to next sibling - https://docs.cypress.io/api/commands/next
            cy.get('table tr td:nth-child(2)').eq(index).next().then(function(price)
            {
                const priceText = price.text();
                expect(priceText).to.equal('25');
            })
        }
    }) 
} )
} )