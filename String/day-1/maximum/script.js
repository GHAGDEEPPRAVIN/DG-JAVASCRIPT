// find maximum number form an string

let num = "124978";

document.write("Series is" + num + "<br>");

let max = num[0];

for(let i=0; i<=num.length-1; i++)
{
    if(max<num[i])
    {
        max = num[i];
    }
}

document.write("maximum number form series is ",max);