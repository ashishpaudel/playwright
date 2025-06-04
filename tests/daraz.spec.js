import {expect, test} from '@playwright/test'
import {login} from '../pom/login'
import {Home, homePage} from '../pom/homePage'

test('Daraz',async({page}) =>{ 
    //login page  
    const  Login = new login(page)
    await Login.goToLoginpage(page)
    await Login.login_page('ashishpoudel.2015@gmail.com' , 'Admin@123' )
    
    //home page 
    const HomePage = new Home(page)
    await HomePage.home('iphone')
    // await page.getByAltText
    await HomePage.addToCart('Small Phone Single Back Camera iPhone 7/8/SE (All Same Size) Liquid Silicone Soft Cover Case | Microfiber Inside')
    // await HomePage.gotoCart()
})
