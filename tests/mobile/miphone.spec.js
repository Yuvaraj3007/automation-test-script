 const{test,expect,devices}=require("@playwright/test")

test.use({
    ...devices['iphone 12'],
})

test('mobile test in iphone',async ({page})=>{

    await page.goto('https://demowebshop.tricentis.com/')
    
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/')

    console.log(await page.title())

    await expect(page).toHaveTitle("Demo Web Shop")

    await page.screenshot({path:"iphone 12.png"})   
})

