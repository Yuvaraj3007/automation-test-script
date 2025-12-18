const{test,expect,devices} =require('@playwright/test')

test.use({
    ...devices['iphone 12']
})

test('mobile login',async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/login')

    await page.fill("#Email","yyyyyuva2@gmail.com")
    await page.fill("#Password","123456")
    await page.getByRole("button",{name:"log in"}).click()
    await page.screenshot({path:'iphone.png'})

})