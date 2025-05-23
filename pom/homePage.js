import{test, expect } from '@playwright/test'

export class Home{
    constructor(page){
        this.page = page
        this.click_search =this.page.getByPlaceholder('Search in Daraz')  //,{waitUntil: 'domcontentloaded'}
        this.search = this.page.locator('.search-box__button--1oH7')
        this.productList = this.page.locator('.WNoq3')
        this.addToCartBtn =this.page.getByRole('button',{name:'Add to Cart'})
        this.goCart = this.page.locator('.cart-icon-daraz') 
        
    }
    async home(iphone) {
       
        await this.click_search.fill(iphone)
        
        await this.search.click()
         await this.page.waitForTimeout(1000)
    }
    async addToCart(productName){
        // const allProduct = await (this.productList)
        for (const product of (await (this.productList))){
            if (productName === await product.textContent()) {
                await product.click()
                break;
            }
        }
        await this.page.on('dialog', async dialog =>{
            if(dialog.message().includes('added')){
                await dialog.accept()
            }
        })
        await this.addToCartBtn.click()
    }
    async gotoCart(){
        await this.goCart.click()
    }
}
