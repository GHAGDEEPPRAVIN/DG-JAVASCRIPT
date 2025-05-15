// const keyboard = document.querySelectorAll("#keyboard > div");
// const display = document.getElementById("display");

// console.log(keyboard)
// let total = "";

// keyboard.forEach((element,index)=>
// {
//     element.addEventListener("click", ()=>
//     {
//         const currentValue = element.innerText; 
        
//         display.innerText = currentValue;

//         if(currentValue == "C")
//         {
//             display.innerText = "";
//             total = "";
//         }
//         else if(currentValue == "=")
//         {
//             display.innerText = eval(total);
//         }
//         else
//         {
//             total += currentValue;
//             display.innerText = total;
//         }
//     })
// })


const keyboard = document.querySelectorAll("#keyboard > div");
const display = document.getElementById("display");

let total = "";

keyboard.forEach((element) => {
    element.addEventListener("click", () => {
        const currentValue = element.innerText;

        if (currentValue === "C") {
            total = "";
            display.innerText = "";
        } else if (currentValue === "=") {
            try {
                total = eval(total);
                display.innerText = total;
            } catch (error) {
                display.innerText = "Error";
                total = "";
            }
        } else {
            total += currentValue;
            display.innerText = total;
        }
    });
});
