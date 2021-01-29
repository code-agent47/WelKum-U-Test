export const isEmailFieldValid = (value) => {
    let errorMsg;
    if(value !== ""){
        errorMsg = false;
        if(isEmailValid(value)){
            errorMsg = false
        }
        else{
            errorMsg = "Invalid E-mail address format";
        }
    }
    else{
        errorMsg = "Field cannot be left blank";
    }
    return errorMsg;
}

export const isPhoneFieldValid = (value) => {
    let errorMsg;
    if(value !== ""){
        errorMsg = false;
        if(isPhoneValid(value)){
            errorMsg = false
        }
        else{
            errorMsg = "Invalid Phone Number format";
        }
    }
    else{
        errorMsg = "Field cannot be left blank";
    }
    return errorMsg;
}

export const isNameFieldValid = (value) => {
    let errorMsg;
    if(value !== ""){
        errorMsg = false;
        if(isNameValid(value)){
            errorMsg = false
        }
        else{
            errorMsg = "Invalid Name";
        }
    }
    else{
        errorMsg = "Field cannot be left blank";
    }
    return errorMsg;
}

function isEmailValid(value){
    let emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (value.match(emailRegEx)){
        return true;   
    }
    else{
        return false;
    }
}

function isPhoneValid(value){
    let phoneRegEX = /^(([+]{1}[0-9]{3}|0)[0-9]{10})$/g;
    if (value.match(phoneRegEX)){
        return true;
    }
    else{
        return false;
    }
}

function isNameValid(value){
    let nameRegEX = /^[A-Za-z]+$/;
    if (value.match(nameRegEX)){
        return true;
    }
    else{
        return false;
    }
}
