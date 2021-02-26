let express=require("express");
let router=express.Router();
let ex=require("../controller/exports");

router.post("/register",ex.register);

router.post("/login",ex.login);

router.get("/viewpackage",ex.viewPackages);

router.put("/bookslot",ex.bookslot);

router.put("/cancelbooking/:name",ex.cancelbooking);

router.delete("/delete",ex.delete);

router.all("*",ex.invalid)

module.exports=router;