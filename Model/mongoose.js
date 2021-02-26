let mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/NewTest",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("DB connection is done")
});

let mySchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Required field"],
        unique:true
    },
    emailId:{
        type:String,
        required:[true,"Required field"]
    },
    password:{
        type:String,
        required:[true,"Required field"]
    },
    phoneNo:{
        type:Number,
        required:[true,"Required Field"]
    },
    bookings:{
        shiftingTo:{
            type:String
        },
        shiftingFrom:{
            type:String
        },
        shiftingType:{
            type:String
        }
    }
});
let myModel= mongoose.model("myModel",mySchema);
module.exports=myModel;