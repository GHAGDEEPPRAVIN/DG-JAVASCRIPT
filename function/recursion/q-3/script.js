// print of n to 1 form recursion

function print(n, end)
{
    if(n>end)
    {
        return;
    }
    document.write(end + " ");
    print(n,end - 1);
}


let x = prompt("Enter n : ");

let n = parseInt(x);

print(1, n);