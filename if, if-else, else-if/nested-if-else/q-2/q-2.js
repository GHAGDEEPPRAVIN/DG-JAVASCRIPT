// find maximum form 3 value form using nested if else

let x = prompt("Enter value of a : ");
let y = prompt("Enter value of b : ");
let z = prompt("Enter value of c : ");

let a = parseInt(x);

let b = parseFloat(y);

let c = parseFloat(z);

// a , b , c
if(a > b)
    {
        //a , c
        if(a > c)
        {
            // a
            document.write("a is maximum");
        }
        else
        {
            //c
            document.write("c is maximum");
        }
    }
else
    {
        //b , c
        if(b > c)
        {
            // b
            document.write("b is maximum");
        }
        else
        {
            //c
            document.write("c is maximum");
        }	
    }
    