// print of 1 to n form recursion

function print(n, start)
{
    if(n<start)
    {
        return;
    }
    document.write(start + " ");
    print(n,start+1);
}


let x = prompt("Enter n : ");

let n = parseInt(x);

print(n, 1);