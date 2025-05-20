const form = document.getElementById("form");
const tbody = document.querySelector("tbody");

let formData = JSON.parse(localStorage.getItem("todoData")) || [];
console.log(formData);

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskvalue = form.task.value;
    const priorityvalue = form.priority.value;

    const todoObj = {
        task: taskvalue,
        priority: priorityvalue,
    };

    formData.push(todoObj);
    localStorage.setItem("todoData", JSON.stringify(formData));
    DisplayTodoData(formData);
    form.reset();
});

function DisplayTodoData(arr) {
  tbody.innerHTML = null;

  arr.forEach((el, i) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");

    td1.innerText = el.task;
    td2.innerText = el.priority;
    td3.innerText = "Delete";

    td3.addEventListener("click", () => {
      formData.splice(i, 1);
      localStorage.setItem("todoData", JSON.stringify(formData));
      DisplayTodoData(formData);
    });

    tr.append(td1, td2, td3);
    tbody.append(tr);
  });
}

DisplayTodoData(formData);
