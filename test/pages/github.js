class SignInPage {

    get signInButton() { return $(".HeaderMenu-link--sign-up") }
    get emailField() { return $("#email") }
    get continueAfterEmailButton() { return $('[data-continue-to="password-container"]') }
    get passwordField() { return $("#password") }
    get continueAfterPasswordButton() { return $('[data-continue-to="username-container"]') }
    get userNameField() { return $("#login") }
    get continueAfterUserNameButton() { return $('[data-continue-to="opt-in-container"]') }
    get headerAtBottomOfPage() { return $('.h2-mktg')}
    get buttonStartFreeEnterpriseTrial() { return $('[data-test-selector="start-trial-button"]') }
    get headerPickYourPlan() { return $('.d-md-block') }
    get buttonEnterpriseCloud() { return $('aria/Enterprise Cloud')}
    get subscribeButton() { return $('[href="https://resources.github.com/newsletter/"]')}

    async signInButtonClick() {
        const signUpLink = await this.signInButton.getAttribute('href')
        await browser.url('https://github.com/' + signUpLink)
    }
    async waitFunction() {
        await browser.waitUntil(async () => {
            return $("#email").isDisplayed()
        }, 5000, 'Button is not displayed')
    }
    async addValueToEmailField(value) {
        await this.emailField.addValue(value)
    }
    async clickButtonAfterEmail() {
        await this.continueAfterEmailButton.click()
    }
    async addValueToPasswordField(value) {
        await this.passwordField.addValue(value)
    }
    async clickButtonAfterPassword() {
        await this.continueAfterPasswordButton.click()
    }
    async addValueToUserNameField(value) {
        await this.userNameField.addValue(value)
    }
    async clickButtonAfterUserName() {
        await this.continueAfterUserNameButton.click()
    }
    async scrollDownToHeader() {
        await this.headerAtBottomOfPage.scrollIntoView()
    }
    async clickButtonStartFreeEnterpriseTrial() {
        await this.buttonStartFreeEnterpriseTrial.click()
    }
    async scrollDownToSubscribeButton() {
        await this.subscribeButton.scrollIntoView()
    }
    async clickSubscribeButton() {
        await this.subscribeButton.click()
    }
}

export default new SignInPage()