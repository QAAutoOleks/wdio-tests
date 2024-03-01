class MainPage {

    get searchField() { return $('#cargo_number') }
    get searchButton() { return $('//*[@id="top_block"]/div[1]/div/div[2]/form/input[2]') }    
    get contactsButton() { return $('aria/Контакти') }    
    get registerButton() { return $('.reg') } 

    async addValueToSearchField(value) {
        await this.searchField.addValue(value)
    }
    async waitAndCloseBanner() {
        await browser.waitUntil(async () => {
            return $('aria/закрыть').isDisplayed()
        }, 5000, 'Button is not displayed')
        await $('aria/закрыть').click()
    }
    async clickSearchButton() {
        await this.searchButton.click()
    }
    async contactsGoToLink() {
        const link = await this.contactsButton.getAttribute('href')
        await browser.url(link)
    }
}

export default new MainPage()