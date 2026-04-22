// API Configuration
const API_URL = 'http://localhost:3000/api/tasks';

// Get the elements from HTML
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// When page loads, fetch tasks from server
document.addEventListener('DOMContentLoaded', function() {
    loadTasksFromServer();
});

// When user clicks "Add Task" button
addBtn.addEventListener('click', function() {
    addTask();
});

// When user presses Enter key in the text box
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// ==================== LOAD TASKS FROM SERVER ====================

function loadTasksFromServer() {
    console.log('📥 Loading tasks from server...');

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            console.log('✅ Tasks received from server:', data);

            if (data.ok && data.data.length > 0) {
                // Clear the list
                taskList.innerHTML = '';

                // Display each task
                data.data.forEach(task => {
                    displayTask(task);
                });
            } else {
                console.log('No tasks yet');
            }
        })
        .catch(error => {
            console.error('❌ Error loading tasks:', error);
            alert('Could not load tasks from server. Make sure the server is running!');
        });
}

// ==================== ADD TASK ====================

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please type a task!');
        return;
    }

    console.log('📤 Sending task to server:', taskText);

    // Send task to server
    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: taskText
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('✅ Task created:', data);

        if (data.ok) {
            // Display the new task
            displayTask(data.data);

            // Clear the input box
            taskInput.value = '';

            // Focus back on input
            taskInput.focus();
        } else {
            alert('Error: ' + data.error);
        }
    })
    .catch(error => {
        console.error('❌ Error adding task:', error);
        alert('Could not add task. Make sure the server is running!');
    });
}

// ==================== DISPLAY TASK ====================

function displayTask(task) {
    console.log('🎨 Displaying task:', task);

    // Create a new list item
    const li = document.createElement('li');
    li.className = 'task-item';
    li.dataset.taskId = task.id;  // Store task ID

    // Create the task text
    const span = document.createElement('span');
    span.textContent = task.title;

    // Create the delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '❌ Delete';

    // When delete button is clicked
    deleteBtn.addEventListener('click', function() {
        deleteTask(task.id, li);
    });

    // Put the text and button inside the list item
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Add the list item to the task list
    taskList.appendChild(li);
}

// ==================== DELETE TASK ====================

function deleteTask(taskId, listElement) {
    console.log('🗑️ Deleting task:', taskId);

    const deleteUrl = `${API_URL}/${taskId}`;

    fetch(deleteUrl, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('✅ Task deleted:', data);

        if (data.ok) {
            // Remove from display
            listElement.remove();
        } else {
            alert('Error: ' + data.error);
        }
    })
    .catch(error => {
        console.error('❌ Error deleting task:', error);
        alert('Could not delete task. Make sure the server is running!');
    });
}
