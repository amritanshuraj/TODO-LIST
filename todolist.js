function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.classList.add('removeButton');
    removeButton.onclick = function () {
      removeTask(taskItem);
    };

    taskItem.innerHTML = `
      ${taskText}
    `;
    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const taskInput = document.getElementById('taskInput');
  const addTaskButton = document.getElementById('addTaskButton');

  taskInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});

  addTaskButton.addEventListener('click', addTask);

function removeTask(taskItem) {
  const taskList = document.getElementById('taskList');
  taskList.removeChild(taskItem);
}

function changeColor(color) {
  const toDoListPage = document.getElementById('toDoListPage');
  toDoListPage.style.backgroundColor = color;
}