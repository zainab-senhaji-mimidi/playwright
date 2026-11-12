# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginPom.spec.ts >> LoginPomInValide
- Location: test\loginPom.spec.ts:18:5

# Error details

```
TypeError: lp.getErrorMsgText is not a function
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - main [ref=e5]:
    - form "Login" [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test"
  2  | import { loginPom } from "../Pages/loginPom.page"
  3  | 
  4  | let lp : loginPom
  5  | 
  6  | test.beforeEach("setup", async({page})=>{
  7  |     await page.goto("https://www.saucedemo.com/")
  8  |     lp = new loginPom(page)
  9  | })
  10 | 
  11 | test("LoginPomValide",{tag:'@pom'},async({page})=>{
  12 |     await lp.setUsername("standard_user")
  13 |     await lp.setPassword("secret_sauce")
  14 |     await lp.clickButton()
  15 |     await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
  16 | })
  17 | 
  18 | test("LoginPomInValide",{tag:'@invalid'},async()=>{
> 19 |     const message = await lp.getErrorMsgText()
     |                              ^ TypeError: lp.getErrorMsgText is not a function
  20 |     const message_attendue = "Epic sadface: Username and password do not match any user in this service"
  21 | 
  22 |     await lp.setUsername("standard_zainab")
  23 |     await lp.setPassword("secret_sauce")
  24 |     await lp.clickButton()
  25 | 
  26 |     // await expect(message).toBe(message_attendue) 
  27 |     await expect(lp.visibiliteOfMsg()).toBeVisible()
  28 |     // await expect(lp.getErrorMsgText()).toHaveText(message_attendue)
  29 | })
  30 | 
```