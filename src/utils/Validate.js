export const checkValidData =(email,password)=>{
    const Isemail=/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email);
    const Ispassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!Isemail){return console.log("type correct email");}
    if(!Ispassword){return console.log("type correct password");}

    return null;
}