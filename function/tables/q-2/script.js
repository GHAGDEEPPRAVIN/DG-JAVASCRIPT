function table(n)
{
    for(let i=1; i<=10; i++)
    {
        for(let j=1; j<=n; j++)
        {
            document.write(j + " " + "x " + i + "= " + j*i);
            document.write("&nbsp &nbsp &nbsp &nbsp");
        }
        document.write("<br>");
    }
}

let x = prompt("Enter any number : ");

let n = parseInt(x);

table(n);