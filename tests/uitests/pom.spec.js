const {test,expect}=require("@playwright/test")
const {dloginpage} = require("../../pages/dlogin");

test("demo application",async({page})=>{




const login = new dloginpage(page)

await login.goto();
await login.dlogin('mail','password');

})