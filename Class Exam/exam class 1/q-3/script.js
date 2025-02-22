// Write a program to find the factorial number passed by the argument and return ans.
// Test Data:
// Input a positive number: 5
// Expected Output :120

function factorial(n)
{
    for(let i=n; i>1; i--)
    {
        n *= (i-1);
    }

    return(n);
}


let x = prompt("Input a positive number : ");

let n = parseInt(x);

let ans = factorial(n);

document.write(`The factorial of ${n} is ${ans} `);