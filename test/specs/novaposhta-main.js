import { expect } from '@wdio/globals'


describe('Nova Poshta main page', () => {
    xit('main page getTitle', async () => {
        await browser.url('https://novaposhta.ua/')
        await browser.pause(1000)
        const title = await browser.getTitle()
        console.log(title)
        
        await expect(browser).toHaveTitle('Термінова і експрес доставка: транспортно-логістичні послуги в Києві та по всій Україні - служба доставки №1 «Нова пошта»')
        
    })
    
    xit('addValue to search field', async () => {
        await browser.url('https://novaposhta.ua/')
        await browser.pause(1000)
        
        let searchField = await $('#cargo_number')
        await searchField.addValue('String')
        await browser.pause(1000)
        
        await expect(searchField).toHaveValue('String')
    })
    
    xit('click search button', async () => {
        await browser.url('https://novaposhta.ua/')
        await browser.pause(4000)
                
        // text from element put after aria/
        let addCloseButton = await $('aria/закрыть')
        await browser.pause(1000)
        await addCloseButton.click()
        await browser.pause(1000)
        
        let searchField = await $('#cargo_number')
        await browser.pause(1000)
        await searchField.addValue('String')
        await browser.pause(1000)
        
        let searchButton = await $('//*[@id="top_block"]/div[1]/div/div[2]/form/input[2]')
        await searchButton.click()
        await browser.pause(1000)

    })

    xit('getAttribute from Contacts button and go to recieved link', async () => {
        await browser.url('https://novaposhta.ua/')
        await browser.pause(1000)
        
        let contactsButton = await $('aria/Контакти')
        await browser.pause(1000)
        
        const link = await contactsButton.getAttribute('href')
        await browser.url(link)
        await browser.pause(1000)
    })

    it('is register clickable', async () => {
        await browser.url('https://novaposhta.ua/')
        await browser.pause(1000)
        
        let registerButton = await $('.a[href="new.novaposhta.ua"]')
        await browser.pause(1000)
        
        let result = await registerButton.isClickable()
        console.log(result)
    })
})