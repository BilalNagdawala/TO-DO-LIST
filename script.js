function addTask() {
    
  const input = document.getElementById("task-input");
  const taskText = input.value.trim();
  const taskList = document.getElementById("task-list");

  if (taskText === "") {
    alert("You forgot to write something!");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.onclick = function () {
    li.classList.toggle("completed");
  };

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.onclick = function () {
    taskList.removeChild(li);
  };

  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  input.value = "";
}
