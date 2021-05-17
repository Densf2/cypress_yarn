class MainPage {
    searchInputFieldOnMainPage() {
        return cy.get('input#txtGlobalSearch');
    }

    searchInputFieldOnSearchPage() {
        return cy.get('input[type="text"].gsc-input');
    }
}

export default MainPage;