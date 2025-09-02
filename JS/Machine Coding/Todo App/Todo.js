const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const todoList = document.getElementById("todoList");
const clearAllTasksBtn = document.getElementById("clearTasksBtn");
const filterSelect = document.getElementById("filter");

let tasks = [];

window.onload = function () {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = savedTasks;
  renderTasks();
};

addTaskBtn.addEventListener("click", addTask);
clearAllTasksBtn.addEventListener("click", clearAllTasks);
filterSelect.addEventListener("change", filterTasks);

function addTask() {
  const taskName = taskInput.value.trim();
  if (taskName === "") {
    alert("Task name cannot be empty.");
    return;
  }

  const newTask = {
    id: Date.now().toString(),
    name: taskName,
    completed: false,
  };

  tasks.push(newTask);
  saveTasks();

  renderTasks();
  taskInput.value = "";
}

function renderTasks(list = tasks) {
  todoList.innerHTML = "";
  list.forEach((task) => {
    const li = document.createElement("li");
    li.id = task.id;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => updateTaskStatus(task.id));

    const span = document.createElement("span");
    span.textContent = task.name;
    if (task.completed) {
      span.style.textDecoration = "line-through";
    }

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () =>
      editTask(task.id, prompt("Enter new task name:", task.name) || task.name)
    );

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deleteTask(task.id));

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

function updateTaskStatus(id) {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.completed = !task.completed;
    saveTasks();
    renderTasks();
  }
}

function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  saveTasks();
  renderTasks();
}

function editTask(id, newName) {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.name = newName;
  }
  saveTasks();
  renderTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function clearAllTasks() {
  tasks = [];
  saveTasks();
  renderTasks();
}

function filterTasks() {
  if (filterSelect.value === "all") {
    renderTasks();
  } else if (filterSelect.value === "completed") {
    const completedTasks = tasks.filter((task) => task.completed);
    renderTasks(completedTasks);
  } else {
    const pendingTasks = tasks.filter((task) => !task.completed);
    renderTasks(pendingTasks);
  }
}
