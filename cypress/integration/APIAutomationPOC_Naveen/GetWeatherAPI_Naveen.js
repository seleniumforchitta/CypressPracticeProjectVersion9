/// <reference types="Cypress" />

describe('Get Weather API Test cases', function () {
    it('TC1 - Get City = San', function () {
        cy.request({
            method: 'GET',
            url: 'https://www.metaweather.com/api/location/search/?query=San'
        }).then((resp) => {
            const city = resp.body[0].title
            return city
        })
            .then((city) => {
                cy.request({
                    method: 'GET',
                    url: 'https://www.metaweather.com/api/location/search/?query=' + city
                }).then((resp) => {
                    expect(resp.status).to.eq(200)
                    expect(resp.body[0]).to.have.property('title', city)
                    expect(resp.body[0]).to.have.property('woeid', 2487956)
                })
            })
    })
})
it('TC2 - Get weather information for Birmingham', function () {
    cy.request({
        method: 'GET',
        url: 'https://www.metaweather.com/api/location/search/?query=Am'
    }).then((resp) => {
        const res = resp.body[0].title
        return res
    })
        .then((res) => {
            cy.request({
                method: 'GET',
                url: 'https://www.metaweather.com/api/location/search/?query=' + res
            }).then((resp) => {
                expect(resp.body[0]).to.have.property('woeid', 12723)
            })

        })
})
it.only('TC3 - Get weather information for all the cities', function () {
    cy.request({
        method: 'GET',
        url: 'https://www.metaweather.com/api/location/search/?query=Am'
    }).then((resp) => {
        const location = resp.body
        return location
    })
        .then((location) => {
            for (let i = 0; i < location.length; i++) {
                cy.request({
                    method: 'GET',
                    url: 'https://www.metaweather.com/api/location/search/?query=' + location[i].title
                }).then((resp) => {

                    expect(resp.status).to.eq(200)
                    expect(resp.body[0].title).to.eq(location[i].title)

                    if (location[i].title != 'Birmingham') {
                        expect(resp.body[0].woeid).to.eq(location[i].woeid)
                    }

                    /*expect(resp.status).to.eq(200);
                    expect(resp.body[0]).to.have.property('title', location[i].title)
                    if (location[i].tile != 'Birmingham')
                        expect(resp.body[0]).to.have.property('woeid', location[i].woeid)
                    */
                })
            }
        })
})
