import searchResultsPage from './searchResultsPage'

class AccessoriesPage {
    open () {
        cy.visit(`${Cypress.env('googleURL')}/collection/accessories_wall?hl=en-US`);
}
    get searchIcon (){
        return cy.get('button.header-search-icon');
    }
    get searchInput (){
        return cy.get('input[aria-label="Search Google Store"]');
    }

    PerformSearch (ProductToSearch){
        this.searchIcon.click();
        this.searchInput.type(`${ProductToSearch}{enter}`);
    }

}
export default new AccessoriesPage();
