// wap to check passed number in udf prime or not.

function prime(n)
{
    let x = 0;

    if(n<=1)
    {
        document.write(n + " is not a prime number");   
    }

    for(let i=1; i<=n; i++)
    {
        if(n%i==0)
        {
            x++;
        }
    }

    if(x==2)
    {
        document.write(n + " is a prime number");   
    }
    else
    {
        document.write(n + " is not a prime number");   
    }

}

let a = prompt("Enter any number : ");
let n = parseInt(a);

prime(n);