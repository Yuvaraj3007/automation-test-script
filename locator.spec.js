const { test, expect } = require("@playwright/test")

test("login out page", async ({ page }) => {

    await page.goto("https://practicetestautomation.com/practice-test-login/")

    //locator way login 
    await page.locator("id=password").fill("Password123")
    await page.locator("id=username").fill("student")
    await page.locator("id=submit").click()

    //roleby way login
    await page.getByRole("textbox", { name: "username" }).fill("student")
    await page.getByRole("textbox", { name: "password" }).fill("Password123")
    await page.getByRole("button", { name: "submit" }).click()

    //LOGOUT
     await page.getByRole("link",{name:"Log out"}).click()

})