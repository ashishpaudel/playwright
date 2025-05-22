import{test, expect } from '@playwright/test'

export class Home{
    constructor(page){
        this.page = page
        this.click_search = this.page.locator('#q').fill('iphone 16 pro max')
        this.search = this.page.locator('#a2a0e.searchlist.search.d_go').click()

    }

    async home() {
        await this.click_search
        await this.search
        
    }
}