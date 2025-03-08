// Remove repeated elements from an array and sort in ascending order.


let arr = [1,7,3,2,4,5,2];

for(let i=0; i<arr.length; i++)
{
    for(let j=i+1; j<arr.length; j++)
    {
        if(arr[i]==arr[j])
        {
            arr.splice(j,1)
        }
    }
}


arr.sort();

document.write(arr);