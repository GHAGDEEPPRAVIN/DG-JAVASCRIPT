function table()
{
    for(let i=1; i<=10; i++)
    {
        for(let j=1; j<=5; j++)
        {
            document.write(j + " " + "x " + i + "= " + j*i);
            document.write("&nbsp &nbsp &nbsp &nbsp");
        }
        document.write("<br>");
    }

    document.write("<br><br>");

    for(let i=1; i<=10; i++)
    {
        for(let j=6; j<=10; j++)
        {
            document.write(j + " " + "x " + i + "= " + j*i);
            document.write("&nbsp &nbsp &nbsp &nbsp");
        }
        document.write("<br>");
    }
}

table();