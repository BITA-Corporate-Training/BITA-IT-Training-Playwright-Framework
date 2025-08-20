import {SetPageExtension} from '../extension/SetPageExtension.ts';
import {ClickPageExtension} from '../extension/ClickPageExtension.ts';
import {LoginPageConstants} from '../constants/LoginPageConstants.ts';
import {ProductsConstants} from '../constants/ProductsConstants.ts'
import test, { expect, Page } from '@playwright/test';



let setPageExtension;
let clickPageExtension;
let page;

test.beforeEach('Login to swagLabs', async({browser})=>{

    page = await browser.newPage();

    setPageExtension = new SetPageExtension(page);
    clickPageExtension = new ClickPageExtension(page);

    console.log("Environement Value: ", process.env.environment);
   
    await page.goto(process.env.url);

    await setPageExtension.SetTextboxValueByPlaceholder(LoginPageConstants.userNameTextboxPlaceholderText, process.env.email);
     await page.waitForTimeout(3000);
    await setPageExtension.SetTextboxValueByPlaceholder(LoginPageConstants.passwordTextboxPlaceholderText, process.env.password)
     await page.waitForTimeout(3000);
 
    await clickPageExtension.ClickButtonByLocator(LoginPageConstants.loginButtonId);

    await page.waitForTimeout(3000);

})

test('Verify Page Url', async()=>{

    //Url
    let swagLabProductsScreenUrl =  page.url();
    console.log('Url', swagLabProductsScreenUrl);

    expect( swagLabProductsScreenUrl).toEqual(ProductsConstants.productScreenUrl)

});

test.skip('Verify Page title', async()=>{

    //Title
    let swagLabProductsScreenTitle =  await page.title();
    expect(swagLabProductsScreenTitle).toEqual(ProductsConstants.productScreentitle);
    
});

test.afterEach('Logout to SwagLabs', async()=>{
    await page.close();
})





