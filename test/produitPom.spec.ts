import { test, expect } from "@playwright/test"
import { loginPom } from "../Pages/loginPom.page"
import { produitPom } from "../Pages/produitPom.page"

let lp : loginPom
let pp : produitPom

test.beforeEach("setup", async({page})=>{
    await page.goto("https://www.saucedemo.com/inventory.html")
    lp = new loginPom(page)
    pp = new produitPom(page)
    // await lp.setUsername("standard_user")
    // await lp.setPassword("secret_sauce")
    // await lp.clickButton()
    await lp.loginToApp("standard_user","secret_sauce")
    
})

test("produitAdded",{tag:'@product'},async({page})=>{
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")  
    await pp.setAddTocardButton()
    //Vérifier que le button remove s'affiche 
    await expect(pp.setRemoveButton())
    const btnRemove = await pp.setRemoveAfficher()
    await expect(btnRemove).toBe("Remove")
    await expect(await pp.getNumberPanier()).toBe("1")
    await pp.setPanierButton()
    await expect(page).toHaveURL("https://www.saucedemo.com/cart.html")
})