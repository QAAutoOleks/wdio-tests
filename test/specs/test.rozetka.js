import { expect } from '@wdio/globals'
import assert from 'assert/strict'


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

    xit('should added purchase displays in cart', async () => {
        await browser.url('https://rozetka.com.ua/ua/lenovo-82k20297ra/p400997976/')

        const goodsNameOnGoodsPage = await $('<h1 />')
        
        const buyButton = await $('.mode-slim')
        await buyButton.click()
        await browser.pause(1000)
        
        await browser.url('https://rozetka.com.ua/ua/')
        await browser.pause(2000)
        
        await $('[rzopencart=""]').click()
        await browser.pause(1000)
        
        const goodsNameInCart = await $('.cart-product__title').getText()
        
        await expect(goodsNameOnGoodsPage.getText()).toEqual(goodsNameInCart)
    })
    
    xit('should icon Facebook displays in menu authorization', async () => {
        await browser.url('https://rozetka.com.ua/ua/')
        await browser.pause(2000)
        await $('[href="#icon-user-simple"]').click()
        await browser.pause(1000)

        const facebookIcon = await $('.auth-modal__social-button_type_facebook')

        await expect(facebookIcon).toBeDisplayed()
    })

    it('should total amount changes after set quantity of goods in cart', async () => {
        await browser.url('https://rozetka.com.ua/ua/lenovo-82k20297ra/p400997976/')
        
        const buyButton = await $('.mode-slim')
        await buyButton.click()
        await browser.pause(1000)
        
        const priceBeforeChangingString = await $('/html/body/app-root/rz-single-modal-window/div[3]/div[2]/rz-shopping-cart/div/div[1]/div/div/div/span').getText()
        const priceBeforeChangingSlice = priceBeforeChangingString.slice(0, 6)
        const priceBeforeChangingNumber = priceBeforeChangingSlice.replace(' ', '')

        const quantityField = await $('[data-testid="cart-counter-input"]')
        await quantityField.setValue('2')
        await browser.pause(1000)

        const priceAfterChangingString = await $('/html/body/app-root/rz-single-modal-window/div[3]/div[2]/rz-shopping-cart/div/div[1]/div/div/div/span').getText()
        const priceAfterChangingSlice = priceAfterChangingString.slice(0, 6)
        const priceAfterChangingNumber = priceAfterChangingSlice.replace(' ', '')

        assert(Number(priceAfterChangingNumber) === 2 * Number(priceBeforeChangingNumber))
    })
})