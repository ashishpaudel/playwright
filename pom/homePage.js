import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';

export class Home {
    constructor(page) {
        this.page = page;
        this.click_search = this.page.getByPlaceholder('Search in Daraz');
        this.search = this.page.locator('.search-box__button--1oH7');
        // this.productList = this.page.locator('a[title]');
        this.productList = this.page.locator('//div[@class="RfADt"]');
        // this.productClick = this.page.locator('.RfADt')

        this.slectProduct = this.page.locator('.RfADt');
        this.addToCartBtn = this.page.getByRole('button', { name: 'Add to Cart' });
        this.goCart = this.page.locator('.cart-icon-daraz');
        this.closeIcon = this.page.locator('.next-dialog-close')
    }

    async home(iphone) {
        await this.click_search.fill(iphone);
        await this.search.click();
        // await this.page.waitForLoadState('networkidle'); // safer option
        await this.productList.first().waitFor({ state: 'visible', timeout: 10000 });
    }

    async addToCart(productName) {
        //console.log((this.productList).count())
        const products = await this.productList.allTextContents()
        // const products = await this.productList.count()

        // console.log(products)
        for (let i = 0; i < products.length; i++) {
            if (products[i] == productName) {
                await this.page.click(`text="${products[i]}"`);
            }
        }
        await this.addToCartBtn.click()
        // await this.page.waitForTimeout(10000)
        await this.closeIcon.click()
        await this.goCart.click()
        


        
    }
}
// }