const{expect,test}=require("@playwright/test")

test(" login page",async({page})=>{

await page.goto("https://practicetestautomation.com/practice-test-login/")

await page.fill("#username","student")
await page.fill("#password","Password123")
await page.click("#submit")

await page.close()

})