let Validator={};

Validator.validateName=(name)=>{
    if(name.trim().length>0){
        return true;
    }else{
        return false;
    }
}

Validator.validateEmail=(email)=>{
    var reg=/^[A-Za-z0-9_]*[@][A-Za-z]*.com$/
    if(email.match(reg)){
        return true;
    }else{
        return false;
    }
}

Validator.validatePassword=(password)=>{
    var reg=/(?=.{8,})/
    if(password.match(reg)){
        return true;
    }else{
        return false;
    }
}

Validator.validatePhone=(phone)=>{
    if(phone>999999999 && phone<10000000000){
        return true;
    }else{
        return false;
    }
}
Validator.validateShift=(shift)=>{
    var reg=/(House|Vehicle)/
    if(shift.match(reg)){
        return true;
    }else{
        return false;
    }

}
module.exports=Validator;