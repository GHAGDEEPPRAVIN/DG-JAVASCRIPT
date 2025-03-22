const btn = document.querySelector("#btn");
// const body = document.querySelector("body");
const body = document.querySelector(".body");

btn.addEventListener("click",()=>{
    changebackgroundcolor();
});

function changebackgroundcolor()
{
    let color = (Math.floor(Math.random() * 16777216).toString(16));
    
    let pick = "#" + color;

    body.style.backgroundcolor = pick;
    
    btn.innerHTML = pick;
}