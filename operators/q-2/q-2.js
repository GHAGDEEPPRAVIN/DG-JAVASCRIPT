// wap a program to swap two variable with third variable 

let x = prompt("Enter x ");
let y = prompt("Enter y ");

let a = parseInt(x);
let b = parseInt(y);

let z = a;

a = b;
b = z;

document.write("x =",a);
document.write("y =",b);