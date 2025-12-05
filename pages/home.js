export class homepage{
    constructor(page){
        this.page=page
        this.registerbutton="//a[text()='Register']"
    }
async goto(){
        await this.page.goto("https://demowebshop.tricentis.com/");
}

    async hometoreg(){
        await this.page.locator(this.registerbutton).click();
    }
}