const username = document.getElementById("name"); 
const email = document.getElementById("email"); 
const password = document.getElementById("pass"); 
const con_password = document.getElementById("con-pass"); 
const signin = document.getElementById("signin");
let alert = document.getElementById("alert");

signin.addEventListener("click", () => {
    if(username.value == "" || email.value == "" || password.value == "" || con_password.value == "")
    {
        alert.innerHTML = "All field must be filled !";
    }
    else
    {
        alert.innerHTML = "successfully regeted !";
    }
});
