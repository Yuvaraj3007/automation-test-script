const{test,expect}=require("@playwright/test")

test("post api ",async({request})=>{

    const employe={ 
        "name":"Emma",
         "age":28,
          "city":"Boston" 
        }

    const response=request.post("https://reqbin.com/req/h4rnefmw/post-json-with-bearer-token-authorization-header",
        {headers:{
            "Content-Type":" application/json"
        },
        data:employe})
const rr=await response.status()
   console.log(rr)
   expect(response.status()).toBe(200)

   const respBody=await response.json()
   expect(respBody.token).toBe(" Bearer")


})