// 50 doors questions

let x = [];
let y = 1;


for(let i=0; i<=49; i++)
{
    x[i] = y;

    y++;
}

// 1 to 10
for(let i=0; i<=9; i++)
{
    if(x[i]==y)
    {
        x[i] == 0;
    }
    y++;
}

// 2 to 20
for(let i=0; i<=19; i++)
    {
        if(x[i]==y)
        {
            x[i] == 0;
        }
        y++;
    }

    // 3 to 30
for(let i=0; i<=29; i++)
    {
        if(x[i]==y)
        {
            x[i] == 0;
        }
        y++;
    }

    // 4 to 40
for(let i=0; i<=39; i++)
    {
        if(x[i]==y)
        {
            x[i] == 0;
        }
        y++;
    }

    // 5 to 50
for(let i=0; i<=49; i++)
    {
        if(x[i]==y)
        {
            x[i] == 0;
        }
        y++;
    }

    document.write(x);