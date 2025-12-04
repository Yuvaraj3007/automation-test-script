const{test,expect}=require("@playwright/test")

test("login out page",async({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-login/")

    await expect ( page.getByText("test login")).toBeVisible()
    await expect(page).toHaveURL("https://practicetestautomation.com/practice-test-login/")
    
   await page.getByRole("textbox",{name:"username"}).fill("student")
   await page.getByRole("textbox",{name:"password"}).fill("Password123")
    await page.getByRole("button",{name:"submit"}).click()

    await expect(page.getByText("Logged In Successfully")).toBeVisible()

    await page.getByRole("link",{name:"Log out"}).click()

    await expect(page.getByText("test login")).toBeVisible()

})