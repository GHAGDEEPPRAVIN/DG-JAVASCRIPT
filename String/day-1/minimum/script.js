// find minimum number form an string

let num = "124978";

document.write("Series is" + num + "<br>");

let min = num[0];

for(let i=0; i<=num.length-1; i++)
{
    if(min>num[i])
    {
        min = num[i];
    }
}

document.write("minimum number form series is ",min);