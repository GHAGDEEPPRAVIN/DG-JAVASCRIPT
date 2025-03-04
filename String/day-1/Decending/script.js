// decending aodre form string

let num = [2,8,4,9,7,3];

let dec = num[0];

for(let i=0; i<num.length; i++)
{
    for(let j=0; j<num.length; j++)
    {
        if(dec<num[j])
        {
            dec = num[i];
            num[i] = num[j];
            num[j] = dec;
        }
    }
    document.write(dec + " ");
}