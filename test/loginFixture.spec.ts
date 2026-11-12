import{test,expect} from "../fixtures/test-base"

test("login valide",async ({page})=>{
    
    await page.locator("#user-name").fill("standard_user")
    await page.locator("#password").fill("secret_sauce")
    await page.locator("#login-button").click()
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")

})

test("login invalide",async ({page})=>{
    
    await page.locator("#user-name").fill("starrrndard_user")
    await page.locator("#password").fill("secret_sauce")
    await page.locator("#login-button").click()
    await expect(page.getByRole("alert")).toBeVisible()

})