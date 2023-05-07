const taskInput = document.querySelector("#task");
const addButton = document.querySelector("#add");
const list = document.querySelector("#list");

addButton.addEventListener("click", function() {
  const task = taskInput.value;
  const newTask = document.createElement("li");
  newTask.innerHTML = task;
  list.appendChild(newTask);
  taskInput.value = "";
});