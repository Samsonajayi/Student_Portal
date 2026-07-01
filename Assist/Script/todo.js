const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const taskList = document.getElementById('task-list');
const taskCount = document.getElementById('task-count');
const clearCompletedButton = document.getElementById('clear-completed');

let tasks = [];

function renderTasks() {
    taskList.innerHTML = '';
    const remaining = tasks.filter(task => !task.completed).length;
    taskCount.textContent = `${remaining} task${remaining === 1 ? '' : 's'}`;

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'task-item';
        if (task.completed) {
            li.classList.add('completed');
        }

        const label = document.createElement('label');
        label.className = 'task-checkbox';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => {
            tasks[index].completed = checkbox.checked;
            renderTasks();
        });

        const span = document.createElement('span');
        span.textContent = task.text;

        const actions = document.createElement('div');
        actions.className = 'task-actions';

        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.className = 'delete-task';
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteBtn.addEventListener('click', () => {
            tasks.splice(index, 1);
            renderTasks();
        });

        label.appendChild(checkbox);
        label.appendChild(span);
        actions.appendChild(deleteBtn);
        li.appendChild(label);
        li.appendChild(actions);
        taskList.appendChild(li);
    });
}

todoForm.addEventListener('submit', event => {
    event.preventDefault();
    const taskText = todoInput.value.trim();
    if (!taskText) return;

    tasks.unshift({ text: taskText, completed: false });
    todoInput.value = '';
    renderTasks();
});

clearCompletedButton.addEventListener('click', () => {
    tasks = tasks.filter(task => !task.completed);
    renderTasks();
});

renderTasks();
