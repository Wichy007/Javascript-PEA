document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form') as HTMLFormElement;
    const todoInput = document.getElementById('todo-input') as HTMLInputElement;
    const todoList = document.getElementById('todo-list') as HTMLUListElement;

    todoForm.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        addTodo(todoInput.value);
        todoInput.value = '';
    });

    function addTodo(task: string): void {
        if (task === '') return;

        const li: HTMLLIElement = document.createElement('li');

        const taskText: HTMLSpanElement = document.createElement('span');
        taskText.innerHTML = task;
        li.appendChild(taskText);

        const editInput: HTMLInputElement = document.createElement('input');
        editInput.setAttribute('type', 'text');
        editInput.setAttribute('style', 'display: none;');
        editInput.setAttribute('onkeyup', "this.setAttribute('data-value', this.value)");
        li.appendChild(editInput);

        const editButton: HTMLButtonElement = document.createElement('button');
        editButton.innerHTML = 'Edit';
        li.appendChild(editButton);

        const deleteButton: HTMLButtonElement = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        li.appendChild(deleteButton);

        todoList.appendChild(li);

        taskText.addEventListener('click', () => {
            const currentClass = li.getAttribute('class');
            if (currentClass === 'completed') {
                li.setAttribute('class', '');
            } else {
                li.setAttribute('class', 'completed');
            }
        });

        deleteButton.addEventListener('click', () => {
            li.setAttribute('style', 'display: none;');
        });

        editButton.addEventListener('click', () => {
            const isEditing = li.getAttribute('data-editing');

            if (isEditing === 'true') {
                const newValue = editInput.getAttribute('data-value') || '';
                taskText.innerHTML = newValue;
                editInput.setAttribute('value', newValue);

                taskText.setAttribute('style', 'display: inline;');
                editInput.setAttribute('style', 'display: none;');
                editButton.innerHTML = 'Edit';
                li.setAttribute('data-editing', 'false');
            } else {
                editInput.setAttribute('value', taskText.innerHTML);
                editInput.setAttribute('data-value', taskText.innerHTML);

                taskText.setAttribute('style', 'display: none;');
                editInput.setAttribute('style', 'display: inline;');
                editButton.innerHTML = 'Save';
                li.setAttribute('data-editing', 'true');
            }
        });
    }
});
