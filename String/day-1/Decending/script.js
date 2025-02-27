// decending aodre form string

let num = "284973";

let dec = num[i];

for(let i=0; i<num.length; i++)
{
    dec = num[i];

    for(let j=0; j<num.length; j++)
    {
        if(dec<num[j])
        {
            dec = num[j];
        }
    }
    document.write(dec + " ");
}