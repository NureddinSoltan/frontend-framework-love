const todoList = [{
  name: 'make dinner',
  dueDate: '2026-07-12',
}, {
  name: 'wash dished',
  dueDate: '2026-07-12'
}];

renderTodoList()

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name
    // const dueDate = todoObject.dueDate
    // Shortcut for todoObject.name and todoObject.dueDate. This is called the `shorthand property`
    const { name, dueDate } = todoObject
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick= "
      todoList.splice(${i}, 1)
      renderTodoList();
      " class="delete-todo-button">Delete</button> 
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input')
  const name = inputElement.value

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value

  todoList.push({
    // name: name,
    // dueDate: dueDate
    // we can just type it out once if the name is the same ==> that's called `shorthand property`
    name,
    dueDate,
  });

  inputElement.value = '';

  renderTodoList()
}