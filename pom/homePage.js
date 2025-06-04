import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';

export class Home {
    constructor(page) {
        this.page = page;
        this.click_search = this.page.getByPlaceholder('Search in Daraz');
        this.search = this.page.locator('.search-box__button--1oH7');
        this.productList = this.page.locator('a[title]');
        
        // this.productList =  this.page.locator('div[data-qa-locator="general-products"]')
        this.slectProduct = this.page.locator('.RfADt');
        this.addToCartBtn = this.page.getByRole('button', { name: 'Add to Cart' });
        this.goCart = this.page.locator('.cart-icon-daraz');
    }

    async home(iphone) {
        await this.click_search.fill(iphone);
        await this.search.click();
        await this.page.waitForTimeout(1000); // Consider replacing with `waitForLoadState()` if possible
    }

    async addToCart(productName) {
        const products = await this.productList.allTextContents()
         const productElements = await this.productList.elementHandles()
        // // const products = await this.productList

        //  console.log(await this.productList.allTextContents())
        // console.log(products)

        for(let i = 0; i < products.length; i++) {
            // const name = await product.getAttribute('title');
            //  const text = await product.textContent();
            const productElements= await this.productList.elementHandles()
            if (products[i].trim() === productName){
                await productElements[i].locator('title').click(); // Click the product
              
                break;
            }    
        }
          if(!products){
                console.log("product dosnt exist please check again.")
            }
         await this.page.waitForTimeout(10000)
        await this.addToCartBtn.click(); // Click "Add to Cart"
        await this.goCart.click(); // Go to cart
    }
}
// }