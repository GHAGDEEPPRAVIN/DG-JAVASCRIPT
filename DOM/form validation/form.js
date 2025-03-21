const username = document.getElementById("name"); 
const email = document.getElementById("email"); 
const password = document.getElementById("pass"); 
const con_password = document.getElementById("con-pass"); 
const signin = document.getElementById("signin");
let alert = document.getElementById("alert");

// let arrName = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , '!' , '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '{', '}', '[', ']', ':', ';', '"', '\' , '<', '>', ','];

signin.addEventListener("click", () => {
    if(username.value == "" || email.value == "" || password.value == "" || con_password.value == "")
    {
        alert.innerHTML = "All field must be filled !";
    }
    else
    {
        if()
        {

        }
        else
        {
            if(password.value == con_password.value)
            {
                alert.innerHTML = "successfully regeted !";
            }
            else
            {
                alert.innerHTML = "password and confrom password must be same !";
            }
        }
    }
});
