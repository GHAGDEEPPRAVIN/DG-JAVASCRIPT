// find maximum form five number

let x = prompt("Enter a : ");
let y = prompt("Enter b : ");
let z = prompt("Enter c : ");
let p = prompt("Enter d : ");
let q = prompt("Enter e : ");

let a = parseFloat(x);
let b = parseFloat(y);
let c = parseFloat(z);
let d = parseFloat(p);
let e = parseFloat(q);

document.write("a is ", a + "<br>");
document.write("b is ", b + "<br>");
document.write("c is ", c + "<br>");
document.write("d is ", d + "<br>");
document.write("e is ", e + "<br><br>");

// a,b,c,d,e
if(a>b)
{
    // a,c,d,e
    if(a>c)
    {
        // a,d,e
        if(a>d)
        {
            // a,e
            if(a>e)
            {
                // a
                document.write("a is maximum");
            }
            else
            {
                // e
                document.write("e is maximum");
            }
        }
        else
        {
            // d,e
            if(d>e)
            {
                // d
                document.write("d is maximum");
            }
            else
            {
                // e
                document.write("e is maximum");
            }
        }
    }
    else
    {
        // c,d,e
        if(c>d)
        {
            // c,e
            if(c>e)
            {
                // c
                document.write("c is maximum");
            }
            else
            {
                // e
                document.write("e is maximum");
            }
        }
        else
        {
            // d,e
            if(d>e)
            {
                // d
                document.write("d is maximum");
            }
            else
            {
                // e
                document.write("e is maximum");
            }
        }
    }   
}
else
{
    // b,c,d,e
    if(b>c)
    {
        // b,d,e
        if(b>d)
        {
            // b,e
            if(b>e)
            {
                // b
                document.write("b is maximum");
            }
            else
            {
                // e
                document.write("e is maximum");
            }
        }
        else
        {
            // d,e
            if(d>e)
            {
                // d
                document.write("d is maximum");
            }
            else
            {
                // e
                document.write("e is maximum");
            }
        }
    }
    else
    {
        // c,d,e
        if(c>d)
        {
            // c,e
            if(c>e)
            {
                // c
                document.write("c is maximum");
            }
            else
            {
                // e
                document.write("e is maximum");
            }
        }
        else
        {
            // d,e
            if(d>e)
            {
                //d 
                document.write("d is maximum");
            }
            else
            {
                // e
                document.write("e is maximum");
            }
        }
    }
}