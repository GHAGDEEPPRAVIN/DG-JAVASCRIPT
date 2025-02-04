// check eligiblity for vote form nested if else

let x = prompt("Enter your age : ")

let age = parseInt(x);

// contions
// 1) age >= 18 (T)
// 2) age < 100 (T)
// 3) age <= 0 (F)

if(age >= 18)
{
    if(age < 100)
    {
        document.write("Your are eligible for vote !");
    }
    else
    {
        document.write("Enter valid age !");
    }
}
else
{
    if(age <= 0)
    {
        document.write("Enter valid age !");
    }
    else
    {
        document.write("You are not eligible for vote !");
    }	
}
    