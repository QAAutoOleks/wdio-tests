import { expect } from '@wdio/globals'
import SignInPage from "./../pages/github.js"

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
    
    it('should displays header and button clickable at the bottom of page', async () => {
        await browser.url('https://github.com/')
        await SignInPage.scrollDownToHeader()
        await browser.pause(1000)
        
        const textFromHeader = await SignInPage.headerAtBottomOfPage.getText()
        await expect(textFromHeader).toContain('100 million')
    })
})