document.addEventListener("DOMContentLoaded", function() {
  // Get references to the form and the tasks list container
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  // Add an event listener for form submission
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting and reloading the page

    // Get the task description from the input field
    const taskDescription = document.getElementById("new-task-description").value;

    // Check if the input is not empty
    if (taskDescription) {
      // Create a new <li> element to represent the task
      const taskItem = document.createElement("li");
      taskItem.textContent = taskDescription;

      // Append the new task to the task list
      taskList.appendChild(taskItem);

      // Clear the input field after adding the task
      document.getElementById("new-task-description").value = "";
    }
  });
});

