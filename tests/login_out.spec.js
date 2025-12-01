const{test,expect}=require("@playwright/test")

test(" login and logout page",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")

await page.getByRole("textbox",{name:"Username"}).fill("student")

await page.getByRole("textbox",{name:"Password"}).fill("Password123")

await page.getByRole("button",{name:"Submit"}).click()

await expect(page.getByText("Logged In Successfully")).toBeVisible()

await page.getByRole("link",{name:"Log out"}).click()

await expect(page.getByRole("button",{name:"Submit"})).toBeVisible()

await page.close()

})
