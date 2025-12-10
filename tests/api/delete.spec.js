const{test,expect,request}= require("@playwright/test")

test('second post api',async({request})=>{

   const response = await request.post("https://jsonplaceholder.typicode.com/posts")
    
  expect(response.ok()).toBeTruthy()
  const jsonformat=await response.json()
  console.log(jsonformat)


})