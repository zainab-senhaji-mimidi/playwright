import { test, expect } from "@playwright/test"
import { loginPom } from "../Pages/loginPom.page"

let lp : loginPom

test.beforeEach("setup", async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    lp = new loginPom(page)
})

test("LoginPomValide",{tag:'@pom'},async({page})=>{
    // await lp.setUsername("standard_user")
    // await lp.setPassword("secret_sauce")
    // await lp.clickButton()
    await lp.loginToApp("standard_user","secret_sauce")
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
})

test("LoginPomInValide",{tag:'@invalid'},async()=>{
    const message_attendue = "Epic sadface: Username and password do not match any user in this service"

    // await lp.setUsername("standard_zainab")
    // await lp.setPassword("secret_sauce")
    // await lp.clickButton()
    await lp.loginToApp("standard-zainab","secret_sauce")
    const message = await lp.getErrorMsgText()

    // await expect(message).toBe(message_attendue) 
    await expect(lp.visibiliteOfMsg()).toBeVisible()
    // await expect(lp.getErrorMsgText()).toHaveText(message_attendue)
})
