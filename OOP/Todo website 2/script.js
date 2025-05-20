const input = document.getElementById("input");
const button = document.getElementById("button");
const display = document.querySelector("display");
let todos = [];

function readTask () {

}

function updateTask () {

}

function deleteTask () {

}

function addTask () {

    const value = input.value;
    todos.push(value);
    display = document.createElement("p");

    display.forEach(todo => {
        display.innerHTML = todo;
    });
}

button.addEventListener("click",() => {
    addTask();
});