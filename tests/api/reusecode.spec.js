const{test,expect}=require('@playwright/test')
const{reusecode}=require('../../pages/helper/auth.spec')

test('use the code for auth',async({request})=>{

    const tokenbymethod= await reusecode()

   const response= request.get('https://restful-booker.herokuapp.com/booking/1',
        {headers:{
            "accept":"application/json",
            "authentication":`${tokenbymethod}`
        },
  })

  //expect ((await response).status()).toBe(200)

})