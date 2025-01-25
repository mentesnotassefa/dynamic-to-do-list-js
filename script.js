document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
     let tasks = []; // Initialize an empty tasks array
    let taskCounter = 0; // Unique ID generation

     // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            tasks = JSON.parse(storedTasks);
            tasks.forEach(task => {
                const listItem = document.createElement('li');
                listItem.textContent = task.text;
                const uniqueId = `task-${task.id}`;
                listItem.id = uniqueId;


               const removeButton = document.createElement('button');
               removeButton.textContent = 'Remove';
               removeButton.className = 'remove-btn';

            // Add event listener to remove button
removeButton.onclick = function() {
             const itemToRemove = document.getElementById(uniqueId);
                itemToRemove.remove();
                    // Remove the task from the tasks array and save
                    tasks = tasks.filter(t => t.id !== task.id);
                     saveTasks();
                 };
                listItem.appendChild(removeButton);
                taskList.appendChild(listItem);
                taskCounter++;
            });
        }
     }


     // Function to save tasks to Local Storage
      function saveTasks() {
            localStorage.setItem('tasks', JSON.stringify(tasks));
     }

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
        const uniqueId = taskCounter++;
        listItem.id = `task-${uniqueId}`;
        listItem.textContent = taskText;


        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';


        // Add event listener to remove button
        removeButton.onclick = function() {
             const itemToRemove = document.getElementById(`task-${uniqueId}`);
            itemToRemove.remove();

               // Remove the task from the tasks array and save
                 tasks = tasks.filter(t => t.id !== uniqueId);
               saveTasks();
        };


        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);

          // Add the new task to the tasks array and save
           tasks.push({id: uniqueId, text: taskText });
          saveTasks();

        // Clear the input field
        taskInput.value = "";
    }

    // Load tasks from local storage
    loadTasks();

    // Add event listener to the add button
    addButton.addEventListener('click', addTask);

    // Add event listener to the input field for the 'keypress' event
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
