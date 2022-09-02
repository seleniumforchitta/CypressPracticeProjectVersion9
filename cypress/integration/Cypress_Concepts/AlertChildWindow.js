/// <reference types="Cypress" />

const { values } = require("lodash")

describe('My Fourth Test Suite.', function()
{

it('My First Test Case', function()
{
    //cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.visit(Cypress.env('URL')+'/AutomationPractice/');
    
    //ALERT - Cypress auto accepts the alert, no need to write any code.
    cy.get('#alertbtn').click(); //it has only accept option
    cy.get('[value="Confirm"]').click(); //it has both accept & reject option

    //if we want to capture the alert message - For that we need to trigger window event
    //cy.on() is used to trigger window events.
    cy.on('window:alert',(str)=> { // Here after triggering the event we get the text='str'
        expect(str).to.equal('Hello , share this practice page and share your knowledge');
   })

   cy.on('window:confirm',(str)=> { // Here after triggering the event we get the text='str'
    expect(str).to.equal('Hello , Are you sure you want to confirm?');
    })
   
    //CHILD WINDOW CONCEPT
    //below is the way to remove target attribute so that child window can open in the current window
    cy.get('#opentab').invoke('removeAttr','target').click();
    //validate you are on the right page or not
    cy.url().should('include','rahulshettyacademy') // Yields the current URL as a string
    cy.go('back') //Navigate Back
    cy.go('forward') //Navigate forward
    cy.go(-1) // equivalent to clicking back button
    cy.go(1) // equivalent to clicking forward button
    cy.go('back')
    cy.reload() // Refresh - yields the window object after the page finishes loading
    cy.reload(true) //Reload the page without using the cache

    //validate you are on the right page or not
    cy.url().should('include','AutomationPractice') 
    cy.log(cy.hash());
    cy.hash().should('eq', 'AutomationPractice')
    

} )

} )