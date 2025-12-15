const {test,expect}=require('@playwright/test')

const url="https://restful-booker.herokuapp.com/booking/1"
const username="yuvaraj"
const password="123qwe"

async function reusecode() {

    const tem_token="hihellobye"

    console.log("This is token:"+tem_token)

    return tem_token
    
}
module.exports={reusecode}



