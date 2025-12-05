const {test,expect}=require("@playwright/test")
const {homepage} = require("../../pages/home")
const {registerpage}= require("../../pages/rigester")
const {dloginpage} = require("../../pages/dlogin")

test("demo application",async({page})=>{
try{

await page.goto("https://demowebshop.tricentis.com/login");

const h = new homepage(page)
await h.goto()
await h.hometoreg()

const reg = new registerpage(page)
await reg.goto()
await reg.refisteruser('yuva','mk','yyyuuuvvvaaa@gmail.com','a123456','a123456')

const login = new dloginpage(page)
await login.goto()
await login.dlogin('mail','password');
}
finally{
page.close()
}
})