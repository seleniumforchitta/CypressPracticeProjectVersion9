/// <reference types="Cypress" />
const { values } = require("lodash")
describe('My Seventh Test Suite.', function()
{
it('My First Test Case', function()
{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('#opentab').then(function(e1){
        const url = e1.prop('href');
        cy.log(url);
        cy.visit(url);
    })
    cy.go("back");
} )
} )