// Write a program to check whether a number is a prime number or not using the function.
// Test Data :
// Input a positive number: 5
//  :The number 5 is a prime number. 

function prime(n)
{
    if(n<=1)
    {
        document.write(n + " is not a prime number <br>");
    }

    let x = 0;

    for(let i=1; i<=n; i++)
    {
        if(n%i==0)
        {
            x++;
        }
    }

    if(x==2)
    {
        document.write(`The number ${n} is a prime number`);
    }
    else
    {
        document.write(`The number ${n} is not a prime number`);
    }
    
}


let x = prompt("Enter any number : ");

let n = parseInt(x);

prime(n);