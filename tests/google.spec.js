const{test,expect}= require("@playwright/test");

test("application title",async({page})=>{
     await page.goto("https://www.flipkart.com/")

// to get url of the page

   const url =await page.url()
   console.log("url of the page is:"+url)
   await expect(url).toBe("https://www.flipkart.com/")

})

// to get title of the page

test("page title",async({page})=>{
    await page.goto("https://www.flipkart.com/")
    const title=await page.title();
    console.log("title of the page is:"+title)
    await expect(title).toBe("Online Shopping India Mobile, Cameras, Lifestyle & more Online @ Flipkart.com")
})