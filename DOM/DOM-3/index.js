// const form = document.getElementById("form");
// const input = document.getElementById("task");
// const priority = document.getElementById("priority");
// let tbody = document.querySelector("tbody");

// form.addEventListener("submit", function(event) 
// {
//     event.preventDefault();

//     let inputTask = input.value;
//     let prioritySelector = priority.value;

//     if(inputTask === "" || prioritySelector === "")
//     {
//         alert("Please Enter Both Task and Priority");
//         return;
//     }

//     let tr = document.createElement("tr");
    
//     let tasktd = document.createElement("td");
//     tasktd.textContent = inputTask; 

//     let prioritytd = document.createElement("td");
//     prioritytd.textContent = prioritySelector;
    
//     let deletetd = document.createElement("td");
//     deletetd.textContent = "Delete";
//     deletetd.style.color = "red";
//     deletetd.style.cursor = "pointer";


//     deletetd.addEventListener('click',function()
//     {
//         tr.remove();
//     })

//     tr.appendChild(tasktd);
//     tr.appendChild(prioritytd);
//     tr.appendChild(deletetd);

//     tbody.appendChild(tr);
    
//     input.value = "";
//     priority.value = "";
// })


// onject array form

const form = document.getElementById("form");
const input = document.getElementById("task");
const priority = document.getElementById("priority");
let tbody = document.querySelector("tbody");
let formData = [];

form.addEventListener("submit", function(event) 
{
    event.preventDefault();

    let inputTask = input.value;
    let prioritySelector = priority.value;

    let todo = {task : inputTask , priority : prioritySelector}

    formData.push(todo);

    console.log(formData);

})