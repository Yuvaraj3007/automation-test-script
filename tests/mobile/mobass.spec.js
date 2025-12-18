const {test,expect}=require('@playwright/test')

test('mobile assertion',async({page})=>{

await page.goto('https://playwright.dev/docs/intro')

await page.locator("xpath=//a[@class='getStarted_Sjon']")

await expect(page).toHaveURL("https://playwright.dev/docs/intro")

await expect(page.locator('body')).toContainText('Installation')

await page.screenshot({path:'mob.png'})

})
