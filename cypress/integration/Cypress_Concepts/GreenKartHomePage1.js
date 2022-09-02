/// <reference types="Cypress" />

const { values } = require("lodash")

describe('My first Test Suite.', function()
{

it('My First Test Case', function()
{
    // Test step should be written here. 

    //cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.visit(Cypress.env('URL')+'/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.product').should('have.length',5)
    cy.get('.product:visible').should('have.length',4)
    //Let's learn aliasing below
    cy.get('.products').as('productLocator')
    cy.get('@productLocator').find('.product').should('have.length',4)
    cy.get('.products:nth-of-type(1)').find('.product').should('have.length',4)
    cy.get('div[class="products"]:nth-of-type(1)').find('.product').should('have.length',4)
    cy.get('div[class="products"]:nth-of-type(1)').find('.product').should('have.length',4)
    cy.xpath('(//div[@class="products"])[1]').find('.product').should('have.length',4)
    cy.xpath('(//div[@class="products"])[1]').xpath('//div[@class="product"]').should('have.length',4)
    console.log('This will print in the browser console.') // This line will added in random order
    cy.log('This will print in the browser console.')
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
        console.log('This will print in the browser console.')
        //But this line will be added after above line only as promise is resolved here
    })
    // contains() - Gets you the DOM element containing that text...

    // Out of - cy.get('.products').find('.product') - is an array - 
    // To iterate we will use each() - Can search abt each() in cypress doc

    cy.get('.products').find('.product').each(($el, index, $list)  =>  {

    /*  $el = current value
        index = current index
        $list = Total List */

        const vegName = $el.find('h4.product-name').text()
        if(vegName.includes('Cashews'))
        {
            cy.wrap($el).find('button').click()
        }
    })
    cy.get('div .redLogo').should('have.text','KART')
    /* if we want to break a complete cypress command into multiple 
    lines like printing a the logo name into two lines. Then it will not print.
    const logo = cy.get('div .redLogo')
    cy.log(logo.text())    
    becuase promise is not resolved in the first time. Then we need to resolve the promise 
    like below. */
    cy.get('.brand.greenLogo').then(function(logoElement){ // Here the promise is resolved and resolved variable falls in 'logoElement'
        cy.log(logoElement.text()); // This will write in the test case log.
    })
    /* So that means if you concatenate 2 cypress commands, then cypress resolves 
    the promise automatically. But if you nreak it & put in 2 lines then it will not resolve promise.
    Both the commands should be cypress commands. text() is not a cypress commands, it is a jQuery commands, 
    But if there are multiple commands concatenated, if atleast 1 cypress is concatentaed the 
    promise will be resolved*/

} )

} )