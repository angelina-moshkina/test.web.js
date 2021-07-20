import Chance from 'chance';
import SearchResultsPage from "../../page-objects/searchResultsPage";
import accessoriesPage from "../../page-objects/accessoriesPage";


/*describe('Test', () => {
   it('Ui-test', () => {

       cy.on('uncaught:exception', (err, runnable) => {
           // returning false here prevents Cypress from
           // failing the test
           return false
       })

       cy.visit('https://store.google.com/us/collection/accessories_wall?hl=en-US');
       cy.get('button.header-search-icon').click()
       cy.get('input[aria-label="Search Google Store"]').type(`Google Pixel Buds{enter}`)
       cy.get('a[href="/product/pixel_buds"]').should('exist')

    })
})
*/

describe('Test', () => {
    before(()=> {
        cy.fixture('product').then(data =>{
            cy.wrap(data).as('productData')
        })
        })

    it('Ui-test', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

        cy.get('@productData').then((productData)=> {
        cy.log("Given user at accessoriesPage");
        accessoriesPage.open();

        cy.log("when user performs search product");
        accessoriesPage.PerformSearch(productData.name);

        SearchResultsPage.getProductByDocId(productData.url).should('exist')
        })
    })
})