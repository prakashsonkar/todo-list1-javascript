const todolist = [
  {
    name: 'make dinner',
    dueDate: '2022-12-22'
  },
  {
    name: 'wash dishes',
    dueDate: '2022-12-22'
  }
];

renderTodoList();

function renderTodoList() {

  let todoListHtml = '';

  todolist.forEach((todoObject) => {

    const { name, dueDate } = todoObject;

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button">
        Delete
      </button>
    `;

    todoListHtml += html;

  });

  document.querySelector('.js-todo-list').innerHTML = todoListHtml;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {

      deleteButton.addEventListener('click', () => {
        todolist.splice(index, 1);
        renderTodoList();
      });

    });
}

function addTodo() {

  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todolist.push({
    name: name,
    dueDate: dueDate
  });

  inputElement.value = '';
  dateInputElement.value = '';

  renderTodoList();
}

document.querySelector('.js-add-todo-button').addEventListener('click', addTodo);