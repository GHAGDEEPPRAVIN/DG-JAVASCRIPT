const name = document.getElementById("name");
const email = document.getElementById("email");
const country = document.getElementById("country");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const form = document.getElementById("signup");
let account = [];
let createaccountindex = 1;

form.addEventListener("submit",(event)=>
{

    event.preventDefault();

    let createaccount = {
        id : createaccountindex++,
        Username : name.value,
        Email : email.value,
        Country : country.value,
        PhoneNo : phone.value,
        Password : password.value,
    };

    account.push(createaccount);

     console.log(account);

    name.value = "";
    email.value = "";
    country.value = "";
    phone.value = "";
    password.value = "";

})

const signin = document.getElementById("signin");
const signinname = document.getElementById("signin-name");
const signinemail = document.getElementById("signin-email");
const signinpassword = document.getElementById("signin-password");
let signindata = [];
let signinindex = 1;


signin.addEventListener('submit', (event)=>{

    event.preventDefault();

    let signinobj = {
        id : signinindex++,
        Username : signinname.value,
        Email : signinemail.value,
        Password : signinpassword.value,
    };

    signindata.push(signinobj);

     console.log(signindata);

    signinname.value = "";
    signinemail.value = "";
    signinpassword.value = "";
})