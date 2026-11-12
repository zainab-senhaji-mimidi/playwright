import { test, expect } from "@playwright/test";

test.beforeEach("setup",async({page})=>{
    await page.goto("https://www.saucedemo.com/")
})

test.afterEach("teardown",async({page})=>{
    await page.context().clearCookies
    await page.evaluate(()=>localStorage.clear())
})

test("loginInvalidTest", {tag:'@TNR'},async ({page})=>{
    //Solution avant beforeEach
    //await page.goto("https://www.saucedemo.com/")

    await page.locator("#user-name").fill("standard_zainab")
    await page.locator("#password").fill("secret_sauce")
    await page.locator("#login-button").click()
    //await expect(page.locator('[data-test="error"]')).toContainText("Epic sadface: Username and password do not match any user in this service")
    //Dans le cas ou on a plusieurs msg d'erreur
    await expect(page.locator('[data-test="error"]')).toBeVisible()
});
