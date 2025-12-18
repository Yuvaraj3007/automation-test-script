const{test,expect}=require('@playwright/test')

test('set the viewport',async({page})=>{

    await page.goto("https://playwright.dev/")

    await page.viewportSize({width: 360,height: 800})

    await page.getByRole('button',{name:"Toggle navigation bar"}).click()

    await expect(page.locator('body')).toContainText('Docs')

    await page.getByRole('button',{name:"Close navigation bar"}).click()

    await expect(page.locator('body')).toContainText('Playwright')

    await page.screenshot({path:'moto.png'})
})