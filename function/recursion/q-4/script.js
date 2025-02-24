// factorial of n form recursion

function fact(n)
{
    if(n>1)
    {
        return n * fact(n-1);
    }
    else
    {
        return 1;
    }
}

let x = prompt("Enter n : ");

let n = parseInt(x);

let ans = fact(n);

document.write("factorial of " + n + " is " + ans);