import { expect } from '@wdio/globals'
import SignInPage from "./../pages/github.js"
import { Key } from 'webdriverio'

describe('Github application testing', () => {

    xit('should enter authorization data', async () => {
        await browser.url('https://github.com/')
        await SignInPage.signInButtonClick()
        await SignInPage.waitFunction()
        await SignInPage.addValueToEmailField('randomemailgit@gmail.com')
        await browser.pause(1000)
        await SignInPage.clickButtonAfterEmail()
        await browser.pause(1000)
        
        await SignInPage.addValueToPasswordField('superreliablepassword098!')
        await browser.pause(1000)
        await SignInPage.clickButtonAfterPassword()
        await browser.pause(1000)
        
        await SignInPage.addValueToUserNameField('AbsolutlyNewUserName')
        await browser.pause(1000)
        await SignInPage.clickButtonAfterUserName()
        await browser.pause(1000)
    })
    
    xit('should displays header and button clickable at the bottom of page', async () => {
        await browser.url('https://github.com/')
        await SignInPage.scrollDownToHeader()
        await browser.pause(1000)
        
        const textFromHeader = await SignInPage.headerAtBottomOfPage.getText()
        await expect(textFromHeader).toContain('100 million')
        
        await expect(SignInPage.buttonStartFreeEnterpriseTrial).toBeClickable()
        await SignInPage.clickButtonStartFreeEnterpriseTrial()
        await browser.pause(2000)

        await expect(SignInPage.headerPickYourPlan).toBeDisplayed()
        
        await SignInPage.buttonEnterpriseCloud.click()
    })

    xit('should displays subscribe button and select options on subscribe page', async () => {
        await browser.url('https://github.com/')
        await SignInPage.scrollDownToSubscribeButtonOnMainPage()
        
        await expect(SignInPage.subscribeButtonOnMainPage).toBeClickable()
        
        await SignInPage.clickSubscribeButtonOnMainPage()
        await browser.pause(1000)
        
        await expect(browser).toHaveUrl('https://resources.github.com/newsletter/')
        await expect(SignInPage.headerOnSubscribePage).toBeDisplayed()
        
        await SignInPage.addValueToEmailFieldSubscribePage('randomemailgit@gmail.com')
        await SignInPage.selectCountryOnSubscribePage('UA')
        await SignInPage.clickOnCheckboxOnSubscribePage()
        await SignInPage.clickSubscribeButtonOnSubscribePage()
        await browser.pause(1000)
    })
    
    it('should search', async () => {
        await browser.url('https://github.com/')
        await browser.maximizeWindow()
        await SignInPage.clickOnInactiveSearchFieldOnMainPage()
        await SignInPage.addValueToActiveSearchFieldOnMainPage('act')
        await browser.pause(1000)
        await browser.keys('Enter')
        await browser.pause(2000)

        await expect(SignInPage.cardWithSearchedWord).toBeDisplayed()
    })
})