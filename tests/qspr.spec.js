const{expect,test}=require("@playwright/test")

test("qspr page",async({page})=>{
    await page.goto(" https://demoapps.qspiders.com/")

    await page.getByText("Quick Start").click()

    await page.getByLabel("Name").fill("yuvaraj")

    await page.getByPlaceholder("Enter Your Email").fill("abc@gmail.com")

    await page.locator("id=password").fill("123456")

    await page.getByText("Register").click()

    await expect(page.getByText("Registration Successful")).toBeVisible()

    await page.close()
})git remote add origin https://github.com/Yuvaraj3007/automation-test-script.git
git push -u origin main