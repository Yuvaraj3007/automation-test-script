export class registerpage{

    constructor(page){
        this.page=page
        this.gender="#gender-male"
        this.fname="#FirstName"
        this.lname="#LastName"
        this.email="#Email"
        this.password="#Password"
        this.confirmpassword="#ConfirmPassword"
        this.summitbutton="#register-button"
    }

    async goto(){
        await this.page.goto("https://demowebshop.tricentis.com/register");
    }
    async refisteruser(fname,lname,email,password,confirmpassword){
        await this.page.locator(this.gender).click()
        await this.page.locator(this.fname).fill(fname)
        await this.page.locator(this.lname).fill(lname)
        await this.page.locator(this.email).fill(email)
        await this.page.locator(this.password).fill(password)
        await this.page.locator(this.confirmpassword).fill(confirmpassword)
        await this.page.locator(this.summitbutton).click()
    }
}