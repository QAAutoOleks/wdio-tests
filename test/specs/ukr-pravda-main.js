import { expect } from '@wdio/globals'


describe('Ukrpravda main page', () => {

    xit('should scroll down to icons of social networks', async () => {

        await browser.url('https://www.pravda.com.ua/')
        await browser.pause(1000)
        
        const youtubeIcon = await $('.footer_social_item[href="https://www.youtube.com/channel/UChparf_xrUZ_CJGQY5g4aEg"]')
        await youtubeIcon.scrollIntoView()
        await browser.pause(1000)
        
    })

    it('should get HTML tags for icon menu', async () => {
        await browser.url('https://www.pravda.com.ua/')
        await browser.pause(1000)
        
        const iconMenuOuterHTML = await $('.icon-menu').getHTML()
        console.log('Outer HTML tags: ' + iconMenuOuterHTML)
        
        const iconMenuInnerHTML = await $('.icon-menu').getHTML(false)
        console.log('Inner HTML tags: ' + iconMenuInnerHTML)

    })
})