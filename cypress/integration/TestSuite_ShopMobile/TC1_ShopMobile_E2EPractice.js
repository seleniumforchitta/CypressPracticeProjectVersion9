/* This a test case purchsing mobile on Rahul Shetty Angular Practice Website
*  Website - https://rahulshettyacademy.com/angularpractice/shop
*  Author - Chittaranjan Swain  */

/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
const { values } = require("lodash")
import 'cypress-iframe'
import HomePage from '../../support/pageObjects/HomePage'
import ProductsPage from '../../support/pageObjects/ProductsPage'
import CheckoutPage from '../../support/pageObjects/CheckoutPage'
describe('Rahulshettyacademy angularpractice', function()
{
    before(() => {
        cy.fixture('example').then(function(data){ 
        this.data=data;
        })
      })
      
it('Purchase Two Mobile Phones in angularpractice Page', function()
{
    Cypress.config('defaultCommandTimeout', 8000); // Explicit wait only for this test
    
    //Creating object for HomePage
    const homePage = new HomePage();
    const productsPage = new ProductsPage();
    const checkoutPage = new CheckoutPage();
    cy.visit(Cypress.env('URL')+'/angularpractice/');

    homePage.getNameEditBox().type(this.data.name);
    homePage.getGender().select(this.data.gender);
    //Now we will validate if the Name is visible in the - Two-way Data Binding example:
    homePage.getTwoWayDataBindingXpath().should('have.value',this.data.name); //using xpath
    homePage.getTwoWayDataBindingCSS().should('have.value',this.data.name); //using CSS
    //Now we will validate if property min-length of Name is 2 or not
    homePage.getNameEditBox().should('have.attr','minlength','2');
    //The above is one way else we can use prop() jQuery method
    //check if Entrepreneur (disabled) is disabled or not
    homePage.getEntrepreneur().should('be.disabled');
    //Now we are going to SHOP tab
    homePage.getShopTab().click();
    
    //cy.selectProduct('Blackberry'); // This method is written in cypress/supoort/commands.js
    //Now instead of giving multiple product name, we can data driven them
    //this.data.productName // To go & fetch the data from example.json, i.e. array
    this.data.productName.forEach(element => cy.selectProduct(element));

    //Click on Checkout tab products page
    productsPage.getNavigationBar().click();
    productsPage.getCheckout().click();

    //Add the individual price & compare with Total
    var sumTotal = 0;
    checkoutPage.getIndividualPrice().each(($el,index,$list)=>{
            const eachPrice=$el.text();
            var eachPriceNum = eachPrice.split(" ");
            eachPriceNum=eachPriceNum[1].trim();
            cy.log(eachPriceNum);
            sumTotal=Number(sumTotal)+Number(eachPriceNum);
    }).then(function() // if you don't resolve the promise then before the above loop is completed it will print.
    //cypress is synchronous & javascript is asynchronous
    {
        cy.log(sumTotal);
    })
    checkoutPage.getTotalPrice().then(function(element)
    {
        const totalAmnt = element.text();
        var totalPriceNum = totalAmnt.split(" ");
        totalPriceNum=totalPriceNum[1].trim();
        expect(Number(totalPriceNum)).to.equal(sumTotal);
    })
    //Click on checkout tab on checkout page
    checkoutPage.getCheckout().click();
    checkoutPage.getDelivLoc().type(this.data.country);
    // Explicit wait declared on the top of this TC.
    cy.wait(Cypress.env('waitTime')); //Explicit wait will work only in the complete test run
    
    checkoutPage.getSuggestion().click();
    checkoutPage.getTandCcheckbox().click();
    checkoutPage.getPurchaseButton().click();
    checkoutPage.getSuccessMsg().then(function(element)
    {
            const successMsg = element.text();
            expect(successMsg.includes("Success")).to.be.true;
            //This is how you compare if the string contains or not
    })
    cy.log("End to End test case execution is completed.");
    cy.log("Testing Git");
} )
} )