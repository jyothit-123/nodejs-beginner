const { syncIndexes } = require("../Model/mongoose");
let model=require("../Model/mongoose");
let validate=require("../Utilities/validator");

//register --post
exports.register=async(req,res)=>{
  let userData=req.body;
  let validatteName=validate.validateName(userData.name);
  let validateEmail=validate.validateEmail(userData.emailId);
  let validatePhone=validate.validatePhone(userData.phoneNo);
  let validatePassword=validate.validatePassword(userData.password);
  if(validatePassword ){
      if( validatteName ){
          if(validateEmail){
              if(validatePhone){
                    model.create(userData).then(()=>{
                        res.status(200).json({
                            status:"Successful registration",
                            data:userData
                            })
                        }).catch((err)=>{
                            res.status(400).json({
                                status:"Fail",
                                message:"Check the data inserted"
                        })
                    })
                }

                else{
                    res.status(400).json({
                        status:"Fail",
                        message:"check the phone validation"
                    })  
                }
            }
            else{
                res.status(400).json({
                    status:"Fail",
                    message:"check the email validation"
                })  
            }
        }
        
        else{
            res.status(400).json({
                status:"Fail",
                message:"check the name validation"
            })  
        }
    }
    else{
        res.status(400).json({
            status:"Fail",
            message:"check the Password validation"
        })  
    }
}

//login -- post
exports.login=async(req,res)=>{
    try{
        let data=req.body;
        let userData=await model.findOne({emailId:data.emailId,password:data.password});
        if(userData){
            res.status(200).json({
                status:"Success",
                message:"User login successful"
            })
        }else{
            res.status(400).json({
                status:"Failure",
                message:"Check the email or password"
            })
        }

    }catch(err){
        res.status(400).json({
            status:"Failure",
            message:"Please register before login"
        })
    }
}


//viewpackage -- get
exports.viewPackages=async(req,res)=>{
    try{
        let userData=await model.find();
        if(userData.length>=1){
            res.status(200).json({
                status:"Success",
                data:userData
            })
        }else{
            res.status(400).json({
                status:"Failure",
                message:"data not found"
            })  
        }

    }catch(err){
        res.status(400).json({
            status:"Failure",
            message:"Package not found"
        })
    }
}

//bookslot -- put
exports.bookslot=async(req,res)=>{
    try{
       let userData=req.body;
       let validateshift=validate.validateShift(userData.bookings.shiftingType);
       let data=await model.updateOne({emailId:userData.emailId},userData);
       if(data.nModified===1 && validateshift){
           res.status(200).json({
               status:"Success",
               message:"Booking successful"
           })
       }else{
        res.status(400).json({
            status:"Fail",
            message:"Unable to book the slot, Please try later"
        })
       }


    }catch(err){
        res.status(400).json({
            status:"Fail",
            message:"No such user. Please check the credential"
        })
    }
}


//cancel --put
exports.cancelbooking=async(req,res)=>{
    try{
        let name=req.params.name;
        let body=req.body;
        let datas=await model.updateOne({name:name,emailId:body.emailId},body);
        if(datas.nModified===1){
            res.status(200).json({
                status:"Success",
                message:"Cancellation Successfull"
            })
        }else{
            res.status(400).json({
                status:"Fail",
                message:"Cancellation failed!! Please try again later"
            }) 
        }

    }catch(err){
        res.status(400).json({
            status:"Fail",
            message:"No such user. Please check the credential"
        })
    }
}



//delete
exports.delete=async(req,res)=>{
    try{
        let userData=req.body;
        let value=await model.deleteOne({emailId:userData.emailId});
        if(value.deletedCount ===0){
            res.status(400).json({
                status:"Fail",
                message:"Deletion failed, please try again later!!"
            })
        }else{
            res.status(200).json({
                status:"Success",
                message:"Deletion successful. User removed"
            })
        }

    }catch(err){
        res.status(400).json({
            status:"Fail",
            message:"No such user. Please check the credential"
        })
    }
}

//invalid
exports.invalid=async(req,res)=>{
    res.status(400).json({
        status:"Invalid",
        message:"Check the URL"
    })
}