import { test, expect } from "@playwright/test"
import { loginPom } from "../Pages/loginPom.page"
import fs from "fs" //file system nous permet de fichier lire csv
import { parse } from "csv-parse/sync" //importer un parseur pour convertir le fichier csv en objet JS
import path from "path" //la position

let lp : loginPom

// Lecture du fichier CSV jdd.csv, puis conversion de son contenu en tableau d'objets JavaScript.
// columns: true utilise la première ligne comme noms des colonnes.
// skip_empty_lines: true permet d'ignorer les lignes vides.
const users = parse(fs.readFileSync(path.join(__dirname, "data/jdd.csv")),{
    columns: true, 
    skip_empty_lines: true
})

test("login with JDD", async({page})=>{
    lp = new loginPom(page)
    for(const user of users){
        await page.goto("https://www.saucedemo.com/")
        // le ! :ni null ni undefined assertion operator
        // await lp.setUsername(user!.username)
        // await lp.setPassword(user!.password)
        // await lp.clickButton()
        await lp.loginToApp(user!.username, user!.password)
        if(user!.resultat == "passed"){
            await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
        } else {
            await expect(lp.visibiliteOfMsg()).toBeVisible()  
        }
    }
}) 
