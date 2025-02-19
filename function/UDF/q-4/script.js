//  wap to check given number is armstrong or not.

function armstrong(n)
{
    let num = n;
    let result = 0;
    let count = 0;

    while(num>0)
    {
        num = Math.floor(num/10);
        count++;
    }

    num = n;

    for(let i=1; i<=count; i++)
    {

        let ld = num % 10;

        let mult = 1;

        for(let j=1; j<=count; j++)
        {

            mult = mult * ld;
        
        }

        result = result + mult;
        num = Math.floor(num/10);
    }

    if(n==result)
    {
        document.write("This is armstrong number !");
    }
    else
    {
        document.write("This is not an armstrong number !");
    }

}

let x = prompt("enter any number : ");

let n = parseInt(x);

armstrong(n)