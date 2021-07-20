import Chance from 'Chance';
describe('Test', () => {
    beforeEach(() => {
        //cy.visit('https://example.cypress.io/commands/actions')
    });

    let testingData=[
        {
        description : "Max values",
        requestdata:  {
            name: Chance().string({length:100}),
            job: Chance().string({length:100}),
    }
    },
        {
            description : "Min values",
            requestdata:  {
                name: Chance().string({length:1}),
                job: Chance().string({length:1})
            }
        }
    ]
testingData.forEach(({description, requestdata}) => {
        it(`Positive -create user ${description}`, () => {
                cy.request('POST', '/api/users', requestdata).then(response => {
                    expect(response.status).to.eq(201);
                    expect(response.body).to.have.property('name', requestdata.name);
                    expect(response.body).to.have.property('job', requestdata.job);
            });
        });

    });

    it('Positive -create user', () => {
        cy.fixture('user').then((user) => {
            cy.request('POST', '/api/users', user).then(response => {
                expect(response.status).to.eq(201);
                expect(response.body).to.have.property('name', user.name);
                expect(response.body).to.have.property('job', user.job);

            });
        });
    });

    it('Negative - login user', () => {
        cy.request({
            method: 'POST', url: '/api/login', failOnStatusCode: false, body: {
                "email": "morpheus@test",
            }
        }).then(response => {
            expect(response.status).to.eq(400);
        });
    });
});