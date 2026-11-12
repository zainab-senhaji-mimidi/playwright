import { test, expect } from "@playwright/test";

test("myFirstTest", async function({page}){
    //await et asycn
    await page.goto("https://www.saucedemo.com/")
});


//Utiliser la fonction fléchée
test("mySecondTest", async ({page})=>{
    //await et asycn
    await page.goto("https://www.saucedemo.com/")
});