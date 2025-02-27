// acending order

let num = "2849763";

let acd = num[0]

for(let i=0; i<num.length; i++)
{
    acd = num[i];

    for(let j=i; j<num.length; j++)
    {
        if(acd>=num[j])
        {
            acd = num[j];
        }
    }
    document.write(acd + " ");
}