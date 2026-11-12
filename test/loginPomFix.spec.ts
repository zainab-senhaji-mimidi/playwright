import { test, expect } from "../fixtures/test-pomprobase"

test("login valide",async ({LoginPomValide})=>{
    await expect(LoginPomValide.page).toHaveURL("https://www.saucedemo.com/inventory.html")
})

test("login invalide",async ({LoginPomInvalide})=>{
    await expect(LoginPomInvalide.getverifMsgError2()).toContainText("Epic sadface: Username and password do not match any user in this service")
})