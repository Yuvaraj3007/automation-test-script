const {test,expect}= require("@playwright/test")

const TOKEN='yuva1212'
const URL='https://restful-booker.herokuapp.com/booking'

test('handle with own token',async({request})=>{

const header={
     "Content-Type": "application/json",
     "authentication":`Bearer ${TOKEN}`
}
const response=await request.get(URL,{headers:header})

expect (response.status()).toBe(200)

const responsejson= response.json()

console.log("api response status"+responsejson)

})