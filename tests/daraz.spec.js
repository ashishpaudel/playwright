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
    await HomePage.addToCart('Apple iPhone 14 (128GB) 6.1&quot; Genuine Super Retina OLED Display')
    await HomePage.gotoCart()
})
