// Write a program to swap two numbers using a function.
// Test Data :
// Input 1st number: 2
// Input 2nd number: 4
//  :Before swapping: n1 = 2, n2 = 4
// After swapping: n1 = 4, n2 = 2 

function swap(x,y)
{

    let a = x;
    let b = y;

    x = x + y;
    y = x - y;
    x = x - y;

    document.write(`Before swaping : x = ${a} , y = ${b} `);
    document.write("<br>");
    document.write(`After swaping : x = ${x} , y = ${y} `);
}

let a = prompt("Enter x : ");
let b = prompt("Enter y : ");

let x = parseInt(a);
let y = parseInt(b);

swap(x,y)
