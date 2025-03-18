// counter app

const h1 = document.getelementbyid("counter");

const btn1 = document.getelementbyid("btn1");
const btn2 = document.getelementbyid("btn2");
const btn3 = document.getelementbyid("btn3");
const btn4 = document.getelementbyid("btn4");

let count = 0;

btn1.addEventListener('click', ()=>{
    count++;
    h1.innerHTML = count;
});

btn2.addEventListener('click', ()=>{
    count--;
    if(count>0)
    {
        document.writeln("it not goes to negative number !");
    }
    h1.innerHTML = count;
});

btn3.addEventListener('click', ()=>{
    if(count==0)
    {
        document.writeln("zero multiple by 2 is allways 0 ");
    }
    else
    {
        count*=2;
        h1.innerHTML = count;
    }
});

btn4.addEventListener('click', ()=>{
    if(count==0)
    {
        document.writeln("zero divsible by 2 is allways 0 ");
    }
    else
    {
        count/=2;
        h1.innerHTML = count;
    }
});