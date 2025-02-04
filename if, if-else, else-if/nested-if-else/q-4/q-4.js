// find maximum form four number

let x = prompt("Enter a : ");
let y = prompt("Enter b : ");
let z = prompt("Enter c : ");
let v = prompt("Enter d : ");

let a = parseFloat(x);
let b = parseFloat(y);
let c = parseFloat(z);
let d = parseFloat(v);

document.write(a + "<br>");
document.write(b + "<br>");
document.write(c + "<br>");
document.write(d + "<br>");

// a,b,c,d
if(a>b)
{
    // a,c,d
    if(a>c)
    {
        // a,d
        if(a>d)
        {
            // a
            document.write("a is maximum");
        }
        else
        {
            // d
            document.write("d is maximum");
        }
    }
    else
    {
        // c,d
        if(c>d)
        {
            // c
            document.write("c is maximum");
        }
        else
        {
            // d
            document.write("d is maximum");
        }
    }
}
else
{
    // b,c,d
    if(b>c)
    {
        // b,d
        if(b>c)
        {
            // b
            document.write("b is maximum");
        }
        else
        {
            // d
            document.write("d is maximum");
        }
    }
    else
    {
        // c,d
        if(c>d)
        {
            // c
            document.write("c is maximum");
        }
        else
        {
            // d
            document.write("d is maximum");
        }
    }
}