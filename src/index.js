document.addEventListener("DOMContentLoaded", () => {
  addTaskToDoWithDeleteOption()
});

function addTaskToDoWithDeleteOption() {
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", function(event) {
  event.preventDefault();
  
    const userInput = event.target.querySelector("#new-task-description").value;
    const showTasks = document.getElementById("tasks");
    const li = document.createElement("li");
    showTasks.appendChild(li);
    li.textContent = userInput;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    li.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
      var result = confirm("Want to delete?");
      if (result) {
        li.remove();
      } 
    })
  })
}
