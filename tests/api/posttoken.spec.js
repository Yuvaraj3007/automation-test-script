const { test, expect } = require('@playwright/test')

test('post with token', async ({ request }) => {

    const response1 = request.post('https://restful-booker.herokuapp.com/auth',
        {
            data: {
                username: "admin",
                password: "password123"
            },
            headers: {
                "Content-Type": "application/json"
            }
        })
    

   expect((await response1).status()).toBe(200)

    const resjson = (await response1).json

    const token = resjson.token

    console.log("token is" + token)

})

// const { test, expect } = require("@playwright/test");

// test("post with token", async ({ request }) => {

//     const response = await request.post(
//         "https://restful-booker.herokuapp.com/auth",
//         {
//             data: {
//                 username: "admin",
//                 password: "password123"
//             },
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         }
//     );

//     expect(response.ok()).toBeTruthy();

//     const resjson = await response.json();
//     console.log("Response JSON: ", resjson);

//     const token = resjson.token;
//     console.log("Token: ", token);
// });
