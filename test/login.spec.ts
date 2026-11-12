import { test, expect } from "@playwright/test";
test.beforeEach("setup",async({page})=>{
    await page.goto("https://www.saucedemo.com/")
})

test.afterEach("teardown",async({page})=>{
    await page.context().clearCookies
    await page.evaluate(()=>localStorage.clear())
})
test("loginValidTest",{tag:["@smoke","@TNR"]}, async ({page})=>{
    //aller l'url de sauce demo
    await page.goto("https://www.saucedemo.com/")
    //saisir username
    await page.locator("#user-name").fill("standard_user")
    //saisir password
    await page.locator("#password").fill("secret_sauce")
    //cliqué sur le button login
    await page.locator("#login-button").click()
    //Redirection page produit
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
});
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

test("loginInvalidWithAccessibilityLocator", {tag:["@smoke","@TNR"]},async ({page})=>{
    await page.getByRole("textbox",{name:"Username"}).fill("locked_out_user")
    await page.getByRole("textbox",{name:"Password"}).fill("test_test")
    await page.getByRole("button",{name:"Login"}).click()

    await expect(page.getByRole("alert")).toBeVisible() 
    // await expect(page.getByRole("heading",{name:"Epic sadface: Username and password do not match any user in this service"})).toBeVisible() 
});

