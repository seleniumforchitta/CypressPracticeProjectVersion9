class CheckoutPage
{
    //it has object belonging to - https://rahulshettyacademy.com/angularpractice/shop
    getIndividualPrice(){return cy.get('tr td:nth-child(4) strong')};
    getTotalPrice() { return cy.get('h3 strong') }; 
    getCheckout() { return cy.contains('Checkout') };
    getDelivLoc() { return cy.get('#country')};
    getSuggestion() { return cy.get('.suggestions > ul > li > a')};
    getTandCcheckbox() { return cy.get('.checkbox') };
    getPurchaseButton() { return cy.get('input[type="submit"]') };
    getSuccessMsg() { return cy.get('div .alert')};
}
// if you want to make the content of this class available to other files then do below - 
export default CheckoutPage;