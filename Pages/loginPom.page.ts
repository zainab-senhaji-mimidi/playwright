import {Page} from "@playwright/test"

export class loginPom{
    readonly page: Page;

    constructor(p : Page){
        this.page = p;
    }
    
    //Définir les locators de la page login
    elements={
        username: ()=> this.page.locator("#user-name"),
        password: ()=> this.page.locator("#password"),
        login: ()=> this.page.locator("#login-button"),
        messageError: ()=> this.page.locator('[data-test="error"]')
    }

    //Définir les méthodes associer aux allocators
    async setUsername(user:string){
        await this.elements.username().fill(user)
    }

    async setPassword(mdp:string){
        await this.elements.password().fill(mdp)
    }

    async clickButton(){
        await this.elements.login().click()
    }

    async getErrorMsgText():Promise<string|null>{
        return await this.elements.messageError().textContent()
    }

    //Une autre méthode
    getverifMsgError2(){
       return this.elements.messageError()
    }

    //Une autre méthode
    visibiliteOfMsg(){
       return this.elements.messageError()
    }

    async loginToApp(u:string, p:string){
        await this.setUsername(u)
        await this.setPassword(p)
        await this.clickButton()
    }

}    