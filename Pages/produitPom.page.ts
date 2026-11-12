import {Page} from "@playwright/test"

export class produitPom{
    readonly page: Page;

    constructor(p : Page){
        this.page = p;
    }

    //Définir les locators de la page login
    elements={
        addTocardButton: ()=> this.page.locator("#add-to-cart-sauce-labs-backpack"),
        badgeButton: ()=> this.page.locator('[data-test="shopping-cart-link"]'),
        removeButton: ()=> this.page.locator("#remove-sauce-labs-backpack"),
        panierButton: ()=> this.page.locator('[data-test="shopping-cart-link"]'),
    }

    //Définir les méthodes associer aux allocators
    async setAddTocardButton(){
        await this.elements.addTocardButton().click()
    }

    async setRemoveButton(){
        await this.elements.removeButton().isVisible()
    }

    async setRemoveAfficher():Promise<string|null>{
        return await this.elements.removeButton().textContent()
    }

    async setPanierButton(){
        await this.elements.panierButton().click()
    }
    
    async getNumberPanier():Promise<string|null>{
        return await this.elements.badgeButton().textContent()
    }

}
