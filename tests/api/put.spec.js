const{test,expect,request}= require("@playwright/test")

test('put api',async({request})=>{

   const response = await request.post("https://jsonplaceholder.typicode.com/posts",
    {
    data:
       { "userId":7,
    "id": 27,
    "title": "update the title",
       }
       
   })
  expect(response.status()).toBe(201);
  const jsonformat=await response.json()
  console.log(jsonformat)

})