class ProductsPage
{
    //it has object belonging to - https://rahulshettyacademy.com/angularpractice/shop
    getNavigationBar() { return cy.get('.navbar-toggler-icon') };
    getCheckout() { return cy.contains('Checkout') };
}
// if you want to make the content of this class available to other files then do below - 
export default ProductsPage;