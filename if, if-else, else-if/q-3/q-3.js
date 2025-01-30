// WAP TO CHECK NUMBER IS NEGATIVE, POSITIVE, OR NEUTRAL.

let x = prompt("Enter any integer number ");

let a = parseInt(x);

if(a==0)
{
    document.write("The number is neutral !")
}
else if(a>0)
{
    document.write("The number is positive !")
}
else
{
    document.write("The number is negative !")
}