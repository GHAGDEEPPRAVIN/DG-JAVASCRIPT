const input = document.getElementById("input");
const addbtn = document.getElementById("addbtn");
const displayTask = document.querySelector(".list");

let notes = [];
let editednotes = false;
let editednotes_index = 0;

// Load tasks from localStorage on page load
window.onload = function () {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
        notes = JSON.parse(storedNotes);
        readNotes();
    }
};

function readNotes() {
    displayTask.innerHTML = "";
    notes.forEach((note, index) => {
        const p = document.createElement("p");
        p.textContent = note;

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "deletebtn";
        deleteBtn.id = "btn";
        deleteBtn.textContent = "Remove";
        deleteBtn.onclick = () => deleteNotes(index);

        const editBtn = document.createElement("button");
        editBtn.className = "editbtn";
        editBtn.id = "btn";
        editBtn.textContent = "Edit";
        editBtn.onclick = () => editNotes(index);

        const div = document.createElement("div");
        div.className = "diplaylist";
        div.appendChild(p);
        div.appendChild(deleteBtn);
        div.appendChild(editBtn);

        displayTask.appendChild(div);
    });
}

function editNotes(index) {
    input.value = notes[index];
    editednotes = true;
    editednotes_index = index;
}

function deleteNotes(index) {
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    readNotes();
}

function addNotes() {
    const value = input.value.trim();
    if (value === "") return;
    notes.push(value);
    localStorage.setItem("notes", JSON.stringify(notes));
    input.value = "";
    readNotes();
}

addbtn.addEventListener("click", function () {
    const value = input.value.trim();
    if (value === "") return;

    if (editednotes) {
        notes[editednotes_index] = value;
        editednotes = false;
    } else {
        notes.push(value);
    }

    localStorage.setItem("notes", JSON.stringify(notes));
    input.value = "";
    readNotes();
});