import {expect, test} from '@playwright/test'
import {login} from '../mop/login'
import {Home, homePage} from '../mop/homePage'

test('Daraz',async({page}) =>{ 
    //login page  
    const  Login = new login(page)
    await Login.goToLoginpage(page)
    await Login.login_page('ashishpoudel.2015@gmail.com' , 'Admin@123' )
    
    //home page 
    const HomePage = new Home()
    await HomePage.home(page)
})
