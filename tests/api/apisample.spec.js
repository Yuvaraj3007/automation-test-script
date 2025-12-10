const {test,expect}=require("@playwright/test")


 const APITOKEN ='YUVA123';
 const url="https://api.example.com/data";
 
test("POST with Bearer Token", async ({ request }) => {

  const headers = {
      "Content-Type": "application/json",
      "Authorization": "Bearer `${APITOKEN}`",
    
  };

  const resdata =
    await request.get(url,{
      headers:headers
    });
  

  expect (resdata.status().tobe(200));

  const respBody = await resdata.json();
  console.log(respBody);
})
