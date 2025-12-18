const {test,expect}=require('@playwright/test')
const { request } = require('@playwright/test');

async function getAuthToken() {
  const apiContext = await request.newContext();

  const response = await apiContext.post(
    'https://restful-booker.herokuapp.com/auth',
    {
      data: {
        username: 'admin',
        password: 'password123'
      }
    }
  );

  if (!response.ok()) {
    throw new Error(`Auth failed: ${response.status()}`);
  }

  const body = await response.json();
  return body.token;
}

module.exports = { getAuthToken };



// const url="https://restful-booker.herokuapp.com/booking/1"
// const username="yuvaraj"
// const password="123qwe"

// async function reusecode() {

//     const tem_token="hihellobye"

//     console.log("This is token:"+tem_token)

//     return tem_token
    
// }
// module.exports={reusecode}



