// WAP TO PRINT GRADES OF STUDENT BASED ON THEIR PERCENTAGE.

let x = prompt("Enter your marks ");

let a = parseInt(x);

if(a>=90 && a<100)
{
    document.write("A+");
}
else if(a>=80 && a<90)
{
    document.write("A");
}
else if(a>=70 && a<80)
{
    document.write("B+");
}
else if(a>=60 && a<70)
{
    document.write("B");
}
else if(a>=40 && a<60)
{
    document.write("C");
}
else
{
    document.write("D");
}
