// wap to print factorial of passed number in udf.

function factorial(n)
{
    let x = n;
    for(let i=(n-1); i>=1; i--)
    {
        n = n * (i);
    }

    document.write(n + " is the factorial of " + x);
}

let a = prompt("Enter any number : ");

let n = parseInt(a);

factorial(n);