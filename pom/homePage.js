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
        await this.page.waitForLoadState('networkidle'); // safer option
        await this.productList.first().waitFor({ state: 'visible', timeout: 10000 });
    }

    async addToCart(productName) {
        const products = await this.productList.allTextContents()
        for (let i = 0; i < products.length; i++) {
            if (products[i] == productName) {
                console.log('milyo')
            }
        }

        
    }
}
// }