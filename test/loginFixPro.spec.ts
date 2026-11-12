import{test,expect} from "../fixtures/test-probase"

test("loginValid",async({loginPage})=>{
    await expect(loginPage).toHaveURL("https://www.saucedemo.com/inventory.html")
})

test("loginInvalid",async({invalidLoginPage})=>{
    const errorMsg = await invalidLoginPage.locator('[data-test="error"]')
    await expect(errorMsg).toBeVisible()
    await expect(errorMsg).toHaveText('Epic sadface: Username and password do not match any user in this service')
})