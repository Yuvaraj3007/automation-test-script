const { test, expect } = require("@playwright/test")

test("login out page", async ({ page }) => {

    //verify url
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await expect(page).toHaveURL("https://practicetestautomation.com/practice-test-login/")

    //verify title
    const title = await page.title();
    console.log(title)
    await expect(page).toHaveTitle("Test Login | Practice Test Automation")

    //verify after login text
    await page.getByRole("textbox", { name: "username" }).fill("student")
    await page.getByRole("textbox", { name: "password" }).fill("Password123")
    await page.getByRole("button", { name: "submit" }).click()

    //LOGOUT
     await page.getByRole("link",{name:"Log out"}).click()

      //verify after logout
    await expect(page.getByText("test login")).toBeVisible()

})