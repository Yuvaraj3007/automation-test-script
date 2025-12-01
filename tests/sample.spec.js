 const{test,expect}=require("@playwright/test")
 test(" test 1",async({page})=>{
    expect(100).toBe(100)         //passed
 })

test(" test 2",async({page})=>{    //passed
    expect(200).toBe(200)
 })
 test(" test 3",async({page})=>{   //failed
    expect(30).toBe(300)
 })
    test.skip(" test 4",async({page})=>{   //skipped
    expect(400).toBe(400)
 })
    test(" test 5",async({page})=>{             //passed
    expect("yuva raj".includes("raj")).toBeTruthy()
 })
 test(" test 6",async({page})=>{
    expect("yuvaraj".includes("raj")).toBeFalsy()       //failed
 })
//  test.only(" test 7",async({page})=>{
//     expect(yuvaraj.include("raj")).toBefalsy()          //run only one test script
//  })
