function table(n)
{
    for(let i=1; i<=10; i++)
    {
        document.write(n + " " + "x " + i + "= " + n*i + "<br>" );
    }
}


let x = prompt("Enter any number : ");

let n = parseInt(x);

table(n);