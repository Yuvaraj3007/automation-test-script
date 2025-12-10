const{test,expect}=require("@playwright/test")

test("verifying",async({page})=>{
    
   await page.goto("https://in.bookmyshow.com/explore/home/coimbatore ")

   const url=await page.url()
   console.log("url of the page:"+url)


    const title= await page.title()
    console.log("title of the page is:"+title)

    await expect(page).toHaveURL("https://in.bookmyshow.com/explore/home/coimbatore ")
   // await expect(page).toHaveTitle("Movie Tickets, Plays, Sports, Events & Cinemas near Coimbatore - BookMyShow Coimbatore.") 
    
    await page.close()

})