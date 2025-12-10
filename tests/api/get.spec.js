const{test,expect,request}= require("@playwright/test")

test('get api page',async({request})=>{

   const response = await request.get("https://jsonplaceholder.typicode.com/posts")
   
  expect(response.status()).toBe(200);
  const jsonformat=await response.json()
  console.log(jsonformat)

})