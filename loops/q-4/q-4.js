// write a progrm to document.write() fibbonachie series :- 0 1 1 2 3 5 8 ....

let x = prompt("Enter n : ");

let n = parseInt(x);

let i = 0;

let first = 0;

let second = 1;

let sum = 0;

for(i=0; i<=n; i++)
{
    document.write(sum + " "); //0,1,1,

    first = second;//f-1,f-0,f-1,

    second = sum;//s-0,s-1,s-1

    sum = first + second;//sm-1,sm-1,sm-2

}