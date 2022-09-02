/// <reference types="Cypress" />

const { values } = require("lodash")
describe('Get User Testcasea', function()
{
    let accessToken = '965d3a05d50f3192e18c18e30d8c960338f804dd516d78b6f43820379a8e4367';
it('TC1 - Get User', function()
{
    cy.request({
        method : 'GET',
        url : 'https://gorest.co.in/public-api/users',
        headers: {
            'Authorization': "Bearer "+ accessToken
        }
    }).then((res)=>{
            expect(res.status).to.equal(200);
            cy.log(JSON.stringify(res.body));
            cy.wait(2000);
            expect(res.body.meta.pagination.limit).to.equal(20);
    })
} )

it('TC2 - Get User', function() // it.only() - Will run only this Test case
{
    cy.request({
        method : 'GET',
        url : 'https://gorest.co.in/public-api/users',
        headers: {
            'Authorization': "Bearer "+ accessToken
        }
    }).then((res)=>{
            expect(res.status).to.equal(200);
            expect(res.body.data[1].name).to.equal('Ahilya Nayar');
            const str = res.body.data[0].name;
            const str1 = res.body.data[1].name;
            const str2 = res.body.data[2].name;
            cy.log(str+", "+str1+", "+str2);

    })

} )
} )