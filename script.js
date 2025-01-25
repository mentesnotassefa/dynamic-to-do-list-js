document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get the task text from the input field
        const taskText = taskInput.value.trim();

        // Check if the task text is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
         listItem.setAttribute('id', 'listItem'); // added for demonstration purposes

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';

        // Add event listener to remove button
        removeButton.onclick = function() {
            listItem.remove();
        };

        // Append the remove button to the list item
         removeButton.setAttribute('id', 'removeButton'); // added for demonstration purposes
        listItem.appendChild(removeButton);
        //add a class to both list and remove buttons.
        listItem.classList.add('task-item');
        removeButton.classList.add('remove-btn');

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }

    // Add event listener to the add button
    addButton.addEventListener('click', addTask);

    // Add event listener to the input field for the 'keypress' event
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
