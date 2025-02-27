// palindrom number

let realName = "nayan";

let reverse = "";

for(let i=realName.length-1; i>=0; i--)
{
    reverse += realName[i];
}

if(realName==reverse)
{
    document.write("The number is palindrom number !");
}
else
{
    document.write("The number is not an palindrom number !");
}