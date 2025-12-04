const{test,expect}=require("@playwright/test")

test("demoweb",async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/")
    
    await page.getByRole("link",{name:"log in"}).click()
    await page.getByLabel("Email").fill("yyyyyyyyyyyuva2@gmail.com")
    await page.getByLabel("Password").fill("123456")
    await page.getByRole("button",{name:"log in"}).click()

    await expect(page.getByText("Welcome to our store")).toBeVisible()
    await page.locator("xpath=(//input[@type='button'])[1]").click()

    await page.close()

})