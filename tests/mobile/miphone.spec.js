 const{test,expect,devices}=require("@playwright/test")

// test.use({
//     ...devices['iphone 12'],
// })

// test('mobile test in iphone',async ({page})=>{

//     await page.goto('https://demowebshop.tricentis.com/')

//     await page.screenshot({path:"iphone 12.png"})    
// })
test.use({
  ...devices['iPhone 12'],
});

test('Test on iPhone 12', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.screenshot({path:"iphone 12.png"})
});
