// wap a program to swap two variable without third variable 

let x = prompt("Enter x ");
let y = prompt("Enter y ");

let a = parseInt(x);
let b = parseInt(y);

a = a + b;
b = a - b;
a = a - b;

document.write("x =",a);
document.write("y =",b);