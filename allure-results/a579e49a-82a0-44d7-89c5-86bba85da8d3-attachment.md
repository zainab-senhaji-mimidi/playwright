# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginPom.spec.ts >> LoginPomInValide
- Location: test\loginPom.spec.ts:18:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('[data-test="error"]')

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
  1  | import {Page} from "@playwright/test"
  2  | 
  3  | export class loginPom{
  4  |     readonly page: Page;
  5  | 
  6  |     constructor(p : Page){
  7  |         this.page = p;
  8  |     }
  9  |     
  10 |     //Définir les locators de la page login
  11 |     elements={
  12 |         username: ()=> this.page.locator("#user-name"),
  13 |         password: ()=> this.page.locator("#password"),
  14 |         login: ()=> this.page.locator("#login-button"),
  15 |         messageError: ()=> this.page.locator('[data-test="error"]')
  16 |     }
  17 | 
  18 |     //Définir les méthodes associer aux allocators
  19 |     async setUsername(user:string){
  20 |         await this.elements.username().fill(user)
  21 |     }
  22 | 
  23 |     async setPassword(mdp:string){
  24 |         await this.elements.password().fill(mdp)
  25 |     }
  26 | 
  27 |     async clickButton(){
  28 |         await this.elements.login().click()
  29 |     }
  30 | 
  31 |     async getErrorMsgText():Promise<string|null>{
  32 | 
> 33 |         return await this.elements.messageError().textContent()
     |                                                   ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
  34 |     }
  35 |     //Une autre méthode
  36 |     getverifMsgError2(){
  37 | 
  38 |        return this.elements.messageError()
  39 |     }
  40 | 
  41 |     //Une autre méthode
  42 |     visibiliteOfMsg(){
  43 | 
  44 |        return this.elements.messageError()
  45 |     }
  46 | 
  47 | }    
```