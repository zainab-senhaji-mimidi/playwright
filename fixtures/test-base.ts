//import du test comme une base pour pouvoir l'ettendre par la suite
import { test as base, expect } from "@playwright/test";

export const test = base.extend({
    page: async ({page}, use)=>{
        await page.goto("https://www.saucedemo.com/")
        await use(page)
    }
})

export {expect}