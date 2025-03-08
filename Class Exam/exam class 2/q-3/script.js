// Check if the given string is a palindrom or not.


let realName = "nayan";

let reverse = [];

for(let i=realName.length-1; i>=0; i--)
{
    reverse += realName[i];
}

if(realName==reverse)
{
    document.write("The name is palindrom name !");
}
else
{
    document.write("The name is not an palindrom name !");
}