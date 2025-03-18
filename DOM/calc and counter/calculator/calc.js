// calculator form DOM

let x = prompt("Enter num1 : ");
let y = prompt("Enter num2 : ");

let a = parseInt(x);
let b = parseInt(y);

const h2 = document.getElementById("calc");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const mul = document.getElementById("mul");
const div = document.getElementById("div");

add.addEventListener('click', ()=>{
    let sum1 = a+b;
    h2.innerHTML = sum1;
});

sub.addEventListener('click', ()=>{
    let sum2 = a-b;
    h2.innerHTML = sum2;
});

mul.addEventListener('click', ()=>{
    let sum3 = a*b;
    h2.innerHTML = sum3;
});

div.addEventListener('click', ()=>{
    let sum4 = a+b;
    h2.innerHTML = sum4;
});