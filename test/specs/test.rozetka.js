import { expect } from '@wdio/globals'


describe('Testing rozetka UI', () => {
    
    xit('should display catalogs name after searching', async () => {
        await browser.url('https://rozetka.com.ua/ua/')
        await browser.pause(2000)
        
        const searchField = await $('.search-form__input')
        await searchField.addValue('laptop')
        await browser.pause(1000)
        
        const buttonSearchField = await $('.button_color_green')
        await buttonSearchField.click()
        await browser.pause(2000)
        
        const catalogHeading = await $('.catalog-heading')
        
        await expect(await catalogHeading.getText()).toContain('Ноутбуки')
    })
    
    xit('should price on goods page equals price in cart', async () =>{
        await browser.url('https://rozetka.com.ua/ua/lenovo-82k20297ra/p400997976/')

        const priceGoodsPage = await $('.product-price__big').getText()
        
        const buyButton = await $('.mode-slim')
        await buyButton.click()
        await browser.pause(2000)

        const priceCart = await $('.cart-product__price--red').getText()

        await expect(priceGoodsPage).toEqual(priceCart)
    })

    it('should added purchase displays in cart', async () => {
        await browser.url('https://rozetka.com.ua/ua/lenovo-82k20297ra/p400997976/')

        const goodsNameOnGoodsPage = await $('<h1 />')
        
        const buyButton = await $('.mode-slim')
        await buyButton.click()
        await browser.pause(2000)
        
        await browser.url('https://rozetka.com.ua/ua/')
        await browser.pause(2000)
        
        await $('[rzopencart=""]').click()
        await browser.pause(2000)

        const goodsNameInCart = (await $('.cart-product__title')).getText()

        await expect(goodsNameOnGoodsPage.getText()).toEqual(goodsNameInCart)
    })
})