/// <reference types="Cypress" />
var ids;
var i;
describe('Get Weather API Test cases', function()
{
it('TC1 - Get City = San', function()
{
    var cityname;
    cy.request({
        method : 'GET',
        url : 'https://www.metaweather.com/api/location/search/?query=san'
    }).then((res)=>{
            expect(res.status).to.eq(200);
            cy.log(JSON.stringify(res.body));
            cityname = res.body[0].title;
            cy.log(cityname);
            Cypress.env('tempCity', cityname); // tempCity is environmental Variable
    })
    cy.request({
        method : 'GET',
        url : 'https://www.metaweather.com/api/location/search/?query='+Cypress.env('tempCity')
    }).then((resp)=>{
        expect(resp.status).to.eq(200);
        cy.log(Cypress.env('tempCity'));
        cy.log(cityname);
        cy.log(JSON.stringify(resp.body));
        expect(resp.body[0]).to.have.property("title", cityname);
        expect(resp.body[0].location_type).to.equal('City');
        expect(resp.body[0].latt_long).to.equal("37.777119, -122.41964");
    })
} )

it('TC2 - Get each City in the output', function()
{
    cy.request({
        method : 'GET',
        url : 'https://www.metaweather.com/api/location/search/?query=Am'
    }).then((res)=>{
            expect(res.status).to.eq(200);
            cy.log(JSON.stringify(res.body));
            Cypress.env('totalCity', res.body.length);
            for(i=0;i<Cypress.env('totalCity');i++)
            {
                ids = Cypress._.chain(res.body).map('title').take(Cypress.env('totalCity')).value();
                cy.request({
                    method : 'GET',
                    url : 'https://www.metaweather.com/api/location/search/?query='+ids[i]
                }).then((resp)=>{
                    expect(resp.status).to.eq(200);
                    cy.log(JSON.stringify(resp.body));
                    cy.log(resp.body[0].title);
                    expect(resp.body[0].title).to.include('am');
                    expect(resp.body[0].location_type).to.equal('City');
                })
            }
    })
   
} )

} )