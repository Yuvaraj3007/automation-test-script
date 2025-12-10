const{test,expect,request}= require("@playwright/test")

test('second post api',async({request})=>{

   const response = await request.post("https://jsonplaceholder.typicode.com/posts",
    {
    data:
       { "userId": 2,
    "id": 14,
    "title": "voluptatem eligendi optio",
        
       }
   })
  expect(response.status()).toBe(201);
  const jsonformat=await response.json()
  console.log(jsonformat)

   










})