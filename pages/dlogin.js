 export class dloginpage{

    constructor(page){

        this.page=page
        this.username="#Email"
        this.password=" //input[@id='Password']"
        this.summit=" //input[@class='button-1 login-button']"
    }

    async goto(){
        await this.page.goto("https://demowebshop.tricentis.com/login");
    }
    async dlogin(username,password){

        await this.page.locator(this.username).fill(username)
        await this.page.locator(this.password).fill(password)
        await this.page.locator(this.summit).click()
    }
}