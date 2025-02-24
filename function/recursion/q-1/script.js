// sum of 1 to n form recursion

function sum(n)
{
    if(n>0)
    {
        return n + sum(n-1);
    }
    else
    {
        return 0;
    }
}

let x = prompt("Enter n : ");

let n = parseInt(x);

let ans = sum(n);

document.write("sum of 1 to " + n + " is " + ans);