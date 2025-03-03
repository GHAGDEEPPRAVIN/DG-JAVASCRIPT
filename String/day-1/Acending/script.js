// acending order

let num = [1,5,4,8,9,1,0,2];

for(let i=0; i<num.length; i++)
{
    for(let j=i+1; j<num.length; j++)
    {
        if(num[i]>num[j])
        {
            let acd = num[i];
            num[i] = num[j];
            num[j] = acd;
        }
    }
}
document.write(acd + " ");