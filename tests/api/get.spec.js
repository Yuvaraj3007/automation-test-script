const { test, expect } = require("@playwright/test")

test("demoapi", async ({ request }) => {

    const response = await request.get("https://demowebshop.tricentis.com/login ")
    console.log(response)
    expect(response.ok()).toBeTruthy()

    const resstatus = await response.status()
    console.log(resstatus)
    expect(resstatus).toBe(200)

    const restextstatus = await response.statusText()
    console.log(restextstatus)
    expect(restextstatus).toBe("OK")

    // const resbody = await response.body()  //its not use directly
    // console.log(resbody)

    // const resjson = await response.json()
    // console.log(resjson)
   
    // const resheader = await response.headers()
    // console.log(resheader)

    // const resheadarray = await response.headersArray()
    // console.log(resheadarray)

    // const restext = await response.text()
    // console.log(restext)


})


