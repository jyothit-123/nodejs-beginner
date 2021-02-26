let express=require("express");
let app=express();
let router=require("./Router/router");
const bodyparser=require("body-parser");
app.use(bodyparser.json());
app.use(router);
app.listen(3000,()=>{
    console.log("Server started");
});

//  http://localhost:3000/register :-----Post
// {
//     "name":"abc",
//     "emailId":"abc@gmail.com",
//     "password":"abcabcabc",
//     "phoneNo":8989898989,
//     "bookings":{
//         "shiftingTo":"Oakland",
//         "shiftingFrom":"Stockland",
//         "shiftingType":"House"
//     }
// }



//  http://localhost:3000/viewpackage -- get



//  http://localhost:3000/login :----Post
// {
//     "emailId":"abc@gmail.com",
//     "password":"abcabcabc",
// }



//  http://localhost:3000/bookslot :----put
// {
//     "emailId":"abc@gmail.com",
//     "bookings":{
//         "shiftingTo":"Oakyland",
//         "shiftingFrom":"Stockland",
//         "shiftingType":"House"
//     }
// }


// http://localhost:3000/cancelbooking/abc ----put
// {
//     "bookings":{
//         "shiftingTo":"",
//         "shiftingFrom":"",
//         "shiftingType":""
//     }
// }

// http://localhost:3000/delete --- delete
// { 
//     "emailId":"abc@gmail.com"  
// }