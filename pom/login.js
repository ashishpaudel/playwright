import{test, expect} from '@playwright/test'
export class login {
        constructor(page){
            this.page = page
            this.clickLoginBtn = this.page.locator('#anonLogin').click();
            this.usernameInput = this.page.locator('input[placeholder="Please enter your Phone or Email"]')
            this.passwordInput = this.page.locator('input[placeholder="Please enter your password"]')
            this.loginBtn = this.page.locator('div.iweb-button-mask')

    }
    async goToLoginpage(){
        await this.page.goto('https://www.daraz.com.np', {waitUntil: 'domcontentloaded'})
    }

    
        async login_page(username , password) {
            await this.clickLoginBtn
            await this.usernameInput.fill(username)
            await this.passwordInput.type(password, {delay: 100})
            // await  this.page.waitForTimeout(1000)

            await this.loginBtn.click()
            await  this.page.waitForTimeout(1000)



        }
        
    }
