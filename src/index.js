document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Get the task description from the input field
    const taskDescriptionInput = document.getElementById(
      "new-task-description"
    );
    const taskDescription = taskDescriptionInput.value.trim();

    // Check if the input is not empty
    if (taskDescription !== "") {
      // Create a new list item
      const listItem = document.createElement("li");
      listItem.textContent = taskDescription;

      // Create Delete button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function () {
        // Implement the delete functionality here
        taskList.removeChild(listItem);
      });

      // Append buttons to the list item
      listItem.appendChild(deleteButton);

      // Add the new task to the task list
      taskList.appendChild(listItem);

      // Clear the input field
      taskDescriptionInput.value = "";
    } else {
      // Log a message if the input is empty
      console.log("Please enter a task description.");
    }
  });
});