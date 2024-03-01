import { expect } from '@wdio/globals'
import MainPage from "./../pages/novaposhtaMainPage.js"



describe('Nova Poshta main page', () => {
    
    xit('should addValue to search field and click button', async () => {
        await browser.url('https://novaposhta.ua/')
        await MainPage.waitAndCloseBanner()

        await MainPage.addValueToSearchField('String')

        await expect(MainPage.searchField).toHaveValue('String')

        await MainPage.clickSearchButton()
        await browser.pause(1000)

    })

    xit('should getAttribute from Contacts button and go to recieved link', async () => {
        await browser.url('https://novaposhta.ua/')
        await MainPage.waitAndCloseBanner()              
        
        await MainPage.contactsGoToLink()
        await browser.pause(1000)
    })

    xit('shoud check if register button clickable', async () => {
        await browser.url('https://novaposhta.ua/')
        await MainPage.waitAndCloseBanner()
        
        await expect(MainPage.registerButton).toBeClickable()
    })
})