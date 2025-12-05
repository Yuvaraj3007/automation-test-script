const {test,expect}=require("@playwright/test")
const {registerpage} = require("../../pages/rigester");

test("demo application",async({page})=>{


await page.goto("https://demowebshop.tricentis.com/")

const regpage = new registerpage(page)
await regpage.clickregister()


})