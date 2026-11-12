import { expect, Page, test as base } from "@playwright/test";

type fixture = {
    homePage : Page;
    loginPage: Page;
    invalidLoginPage: Page;
}
export const test = base.extend<fixture>({
    homePage: async({page}, use)=>{
        await page.goto("https://www.saucedemo.com/")
        await use(page)
    },
    loginPage: async({homePage}, use)=>{
        // await page.goto("https://www.saucedemo.com/")
        await homePage.locator("#user-name").fill("standard_user")
        await homePage.locator("#password").fill("secret_sauce")
        await homePage.locator("#login-button").click()
        await use (homePage)
    },
    invalidLoginPage: async({homePage}, use)=>{
        // await page.goto("https://www.saucedemo.com/")
        await homePage.locator("#user-name").fill("standard_userrr")
        await homePage.locator("#password").fill("secret_sauceee")
        await homePage.locator("#login-button").click()
        await use (homePage)
    }
})

export {expect}