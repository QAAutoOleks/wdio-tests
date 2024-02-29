import assert from 'assert/strict'


describe('Ukrpravda main page', () => {

    xit('should scroll down to icons of social networks', async () => {

        await browser.url('https://www.pravda.com.ua/')
        await browser.pause(1000)
        
        const youtubeIcon = await $('.footer_social_item[href="https://www.youtube.com/channel/UChparf_xrUZ_CJGQY5g4aEg"]')
        await youtubeIcon.scrollIntoView()
        await browser.pause(1000)
        
    })

    xit('should get HTML tags for icon menu', async () => {
        await browser.url('https://www.pravda.com.ua/')
        await browser.pause(1000)
        
        const iconMenuOuterHTML = await $('.icon-menu').getHTML()
        console.log('Outer HTML tags: ' + iconMenuOuterHTML)
        
        const iconMenuInnerHTML = await $('.icon-menu').getHTML(false)
        console.log('Inner HTML tags: ' + iconMenuInnerHTML)

    })

    it('should check label isVisible by assert', async () => {
        await browser.url('https://www.pravda.com.ua/')
        await browser.pause(2000)

        const label = await $("[aria-label='Українська правда']")
        
        assert(await label.isDisplayed() === true)
    })
})