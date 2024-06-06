document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addButton = document.getElementById("add-button");
  const taskList = document.getElementById("task-list");

  taskInput.addEventListener("input", () => {
    addButton.disabled = taskInput.value.trim() === "";
  });

  // Add a new task when the add button is clicked
  addButton.addEventListener("click", () => {
    const taskName = taskInput.value.trim();
    if (taskName) {
      addTask(taskName);
      taskInput.value = "";
      addButton.disabled = true;
    }
  });

  function addTask(name) {
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.className = "task-name";
    span.textContent = name;

    listItem.appendChild(checkbox);
    listItem.appendChild(span);
    taskList.appendChild(listItem);

    checkbox.addEventListener("change", () => {
      listItem.classList.toggle("completed", checkbox.checked);
    });
  }
});
