"use strict";

const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = todoId => `Todo with id ${todoId} not found`;

const getNewTodoId = todos =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find(todo => todo[todoKeys.id] === todoId);

  if (!todo) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};

const formElement = document.querySelector('.form');
const inputElement = document.querySelector('.input');
const todosContainer = document.querySelector('.todos');
const cteateActions = document.querySelector('.todo-actions');


formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const text = inputElement.value.trim();
    if (text === '') return;

    // 1. Создаем объект в массиве данных
    const newTodo = createTodo(todos, text);
    
    // 2. Создаем HTML-элемент на основе этого объекта
    const todoHtml = renderTodo(newTodo);
    
    // 3. Добавляем его в список <ul>
    todosContainer.append(todoHtml);

    // 4. Очищаем поле ввода
    inputElement.value = '';
});


const createTodoElement = (text) => {
  // 1. Создаем пустой элемент списка <li>
  const li = document.createElement('li');

  // 2. Добавляем ему класс (чтобы работали стили CSS)
  li.classList.add('todo');

  // 3. Записываем текст задачи внутрь этого элемента
  li.textContent = text;

  // 4. Возвращаем готовый "кирпичик" для нашей стены задач
  return li;
};

const handleCreateTodo = (todos, text) => {
  // Сначала проверим, не пустой ли текст
  if (!text.trim()) return;

  // 1. Вызываем твою логику (строка 16 на скрине), чтобы добавить задачу в массив todos
  const newTodo = createTodo(todos, text);

  // 2. Вызываем функцию из Шага 2, чтобы создать HTML-тег на основе данных из нового объекта
  const todoElement = createTodoElement(newTodo[todoKeys.text]);

  // 3. Кладем этот тег в наш список .todos на странице
  todosContainer.append(todoElement);

  // 4. Очищаем поле ввода, чтобы можно было писать следующую задачу
  inputElement.value = '';
};

formElement.addEventListener('submit', (event) => {
  // Отменяем стандартное поведение (чтобы страница не перезагружалась при отправке формы)
  event.preventDefault();

  // Запускаем нашу цепочку, передавая массив задач и текст из инпута
  handleCreateTodo(todos, inputElement.value);
});


// При помощи метода querySelector получаем элементы .form, .input и .todos
// Создаем функцию createTodoElement(text), которая будет создавать todo в виде разметки
// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement
const renderTodo = (todo) => {
    const li = document.createElement('li');
    li.classList.add('todo');


    const textDiv = document.createElement('div');
    textDiv.classList.add('todo-text');
    textDiv.textContent = todo[todoKeys.text];


    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('todo-actions');

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('button-complete', 'button');
    completeBtn.innerHTML = '&#10004;'; // Галка
    completeBtn.onclick = () => {
        completeTodoById(todos, todo[todoKeys.id]);
        li.classList.toggle("complete");
      };

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('button-delete', 'button');
    deleteBtn.innerHTML = '&#10006;';
    deleteBtn.onclick = () => {
        deleteTodoById(todos, todo[todoKeys.id]);
        li.remove();
    };

    actionsDiv.append(completeBtn, deleteBtn);
    li.append(textDiv, actionsDiv);

    return li;
};