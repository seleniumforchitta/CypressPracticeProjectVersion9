class HomePage
{
    //it has object belonging to - https://rahulshettyacademy.com/angularpractice/
    getNameEditBox() { return cy.xpath('(//input[@name="name"])[1]') };
    getTwoWayDataBindingXpath() { return cy.xpath('(//input[@name="name"])[2]') };
    getTwoWayDataBindingCSS() { return cy.get('input[name="name"]:nth-child(1)') };
    getGender() { return cy.get('select') };
    getEntrepreneur() { return cy.get('#inlineRadio3') };
    getShopTab() { return cy.contains('Shop') };
}
// if you want to make the content of this class available to other files then do below - 
export default HomePage;