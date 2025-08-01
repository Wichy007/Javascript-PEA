document.addEventListener('DOMContentLoaded', function () {
    var todoForm = document.getElementById('todo-form');
    var todoInput = document.getElementById('todo-input');
    var todoList = document.getElementById('todo-list');
    todoForm.addEventListener('submit', function (e) {
        e.preventDefault();
        addTodo(todoInput.value);
        todoInput.value = '';
    });
    function addTodo(task) {
        if (task === '')
            return;
        var li = document.createElement('li');
        var taskText = document.createElement('span');
        taskText.innerHTML = task;
        li.appendChild(taskText);
        var editInput = document.createElement('input');
        editInput.setAttribute('type', 'text');
        editInput.setAttribute('style', 'display: none;');
        editInput.setAttribute('onkeyup', "this.setAttribute('data-value', this.value)");
        li.appendChild(editInput);
        var editButton = document.createElement('button');
        editButton.innerHTML = 'Edit';
        li.appendChild(editButton);
        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        li.appendChild(deleteButton);
        todoList.appendChild(li);
        taskText.addEventListener('click', function () {
            var currentClass = li.getAttribute('class');
            if (currentClass === 'completed') {
                li.setAttribute('class', '');
            }
            else {
                li.setAttribute('class', 'completed');
            }
        });
        deleteButton.addEventListener('click', function () {
            li.setAttribute('style', 'display: none;');
        });
        editButton.addEventListener('click', function () {
            var isEditing = li.getAttribute('data-editing');
            if (isEditing === 'true') {
                var newValue = editInput.getAttribute('data-value') || '';
                taskText.innerHTML = newValue;
                editInput.setAttribute('value', newValue);
                taskText.setAttribute('style', 'display: inline;');
                editInput.setAttribute('style', 'display: none;');
                editButton.innerHTML = 'Edit';
                li.setAttribute('data-editing', 'false');
            }
            else {
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
