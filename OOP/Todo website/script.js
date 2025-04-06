function addTask() {
    const taskText = document.getElementById('taskInput').value.trim();
    if (taskText === '') return;

    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');

    const currentTime = new Date();
    const timeString = currentTime.toLocaleTimeString();

    listItem.innerHTML = `
      <div class="task-left">
        <input type="radio" onclick="toggleComplete(this)">
        <div>
          <div class="task-text">${taskText}</div>
          <div class="timestamp">Added at: ${timeString}</div>
        </div>
      </div>
      <button onclick="removeTask(this)">❌</button>
    `;

    // Add new task at the top
    taskList.insertBefore(listItem, taskList.firstChild);

    document.getElementById('taskInput').value = '';
  }

  function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
  }

  function toggleComplete(radio) {
    const taskText = radio.nextElementSibling.querySelector('.task-text');
    taskText.classList.toggle('completed');
  }