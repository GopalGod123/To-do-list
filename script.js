// Get references to HTML elements
const inputBox = document.getElementById("input-Box");
const listContainer = document.getElementById("list-container");
const taskCounter = document.querySelector(".TaskCounter");

// Function to add a new task
function addTask() {
  // Check if the input is not empty
  if (inputBox.value == "") {
    alert("You must write something!");
  } else {
    // Create a new list item
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // Create a close button (span) for the new task
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  // Clear the input box
  inputBox.value = "";

  // Update the task counter and save data
  updateCounter();
  saveData();
}

// Event listener for clicks on the list container
listContainer.addEventListener(
  "click",
  function (e) {
    // Check if the clicked element is a list item (LI)
    if (e.target.tagName === "LI") {
      // Toggle the "checked" class for the clicked list item
      e.target.classList.toggle("checked");

      // Update the task counter and save data
      updateCounter();
      saveData();
    } else if (e.target.tagName === "SPAN") {
      // If the clicked element is a close button (SPAN),
      // remove the parent list item
      e.target.parentElement.remove();

      // Update the task counter and save data
      updateCounter();
      saveData();
    }
  },
  false
);

// Function to update the task counter
function updateCounter() {
  // Count the number of list items inside the list container
  const tasks = document.querySelectorAll("#list-container li").length;

  // Update the text content of the task counter element
  taskCounter.textContent = `Tasks left: ${tasks}`;
}

// Function to save the current state of the list container to local storage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// Function to show tasks from local storage
function showTasks() {
  // Retrieve saved data from local storage and set the HTML content of the list container
  listContainer.innerHTML = localStorage.getItem("data");

  // Update the task counter
  updateCounter();
}

// Call the showTasks function to display tasks when the page loads
showTasks();
