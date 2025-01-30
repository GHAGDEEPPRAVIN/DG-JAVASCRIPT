// WAP TO CHECK THE VOTING ELIGIBILITY OF USER.

let x = prompt("Enter your age ");

let age = parseInt(x);

if(age<=0 || age>=105)
{
    document.write("Enter Valid age ! ")
}
else if(age>=18)
{
    document.write("Eligiable for vote ! ")
}
else
{
    document.write("Not Eligiable for vote ! ")
}