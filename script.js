document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const newTaskInput = document.getElementById('new-task');
    const taskDateInput = document.getElementById('task-date');
    const taskTimeInput = document.getElementById('task-time');
    const pendingList = document.getElementById('pending-list');
    const completedList = document.getElementById('completed-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(newTaskInput.value, taskDateInput.value, taskTimeInput.value);
        newTaskInput.value = '';
        taskDateInput.value = '';
        taskTimeInput.value = '';
    });

    function addTask(taskText, taskDate, taskTime) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText} - ${taskDate} ${taskTime}</span>
            <div>
                <button class="complete">Complete</button>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        `;

        taskItem.querySelector('.complete').addEventListener('click', () => {
            completeTask(taskItem);
        });

        taskItem.querySelector('.edit').addEventListener('click', () => {
            editTask(taskItem);
        });

        taskItem.querySelector('.delete').addEventListener('click', () => {
            deleteTask(taskItem);
        });

        pendingList.appendChild(taskItem);
    }

    function completeTask(taskItem) {
        taskItem.querySelector('.complete').remove();
        completedList.appendChild(taskItem);
    }

    function editTask(taskItem) {
        const taskText = taskItem.querySelector('span').innerText.split(' - ')[0];
        const [taskDate, taskTime] = taskItem.querySelector('span').innerText.split(' - ')[1].split(' ');
        newTaskInput.value = taskText;
        taskDateInput.value = taskDate;
        taskTimeInput.value = taskTime;
        taskItem.remove();
    }

    function deleteTask(taskItem) {
        taskItem.remove();
    }
});
