// const btn = document.querySelector("#btn");


// function changebackgroundcolor()
// {
//     // let color = (Math.floor(Math.random() * 16777216).toString(16));
    
//     // document.body.style.backgroundcolor = "#" + color;
    
//     // btn.innerHTML = "#" + color;

//     const randomNumber = Math.floor(Math.random() * 16777245);
//     const randomCode = "#" + randomNumber.toString(16);

//     // console.log(randomNumber, randomCode);
//     document.body.style.backgroundColor = randomCode;
// }


// btn.addEventListener("click",()=>{
//     changebackgroundcolor();
// });


const colorchange = document.getElementById("color-code");

const getcolor = () => {
    const randomNumber = Math.floor(Math.random()*16777215).toString(16);

    // const randomCode = "#" +  Math.floor(randomNumber.toString(16));

// randomNumber.toString(16);

    const randomCode = "#" + randomNumber;
    document.body.style.backgroundColor = randomCode;

    colorchange.innerHTML = randomCode;
    navigator.clipboard.writeText(randomCode);
}

document.getElementById("btn").addEventListener(
    "click",
    getcolor
)

getcolor();