import{test as base,expect,Page} from "@playwright/test"

import { loginPom } from "../Pages/loginPom.page"

type Fixtures = {
    HomePage :Page,
    LoginPomValide :loginPom,
    LoginPomInvalide :loginPom

}
export const test =base.extend<Fixtures>({

    HomePage : async ({page},use)=>{
        await page.goto("https://www.saucedemo.com/")
        await use(page) 
    },
    LoginPomValide : async ({HomePage},use)=>{
        const lp =new loginPom(HomePage)
        await lp.loginToApp("standard_user","secret_sauce")
        await use(lp)
    },
    LoginPomInvalide : async ({HomePage}, use)=>{
        const lp = new loginPom(HomePage)
        await lp.loginToApp("standard_zainab","secret_sauce")
        await use(lp)
    }
})

export{expect}