import MainPage from './pages/main_page';
import main_page_test_data from './test_data/main_page_text';
const mainpage = new MainPage();
describe('Open main page and checking elements', () => {

    beforeEach(() => {
        cy.visit('https://dou.ua/');
    })

    it.skip('Checking the headers elements', () => {
        cy.get('header > ul > li:nth-child(2) > a').should('be.visible');
        cy.get('header > ul > li:nth-child(3) > a').should('be.visible');
        cy.get('header > ul > li:nth-child(4) > a').should('be.visible');
        cy.get('header > ul > li:nth-child(5) > a').should('be.visible');
        cy.get('header > ul > li:nth-child(6) > a').should('be.visible');
        cy.get('header > ul > li:nth-child(7) > a').should('be.visible');
    })

    it.skip('click on forum link in header', () => {
        cy.get('header > ul > li:nth-child(3) > a').should('be.visible').click();
        cy.url().should('contain', 'forums/');
    })

    it('checking the search', () => {
        mainpage.searchInputFieldOnMainPage().type(main_page_test_data.javascript_text).type('{enter}');
        cy.url().should('contain', 'search/?q=javascript');
        mainpage.searchInputFieldOnSearchPage().should('be.visible');
    })
})