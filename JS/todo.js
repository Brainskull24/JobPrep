const API_URL = 'https://jsonplaceholder.typicode.com/todos';
const todoList = document.getElementById('todoList');
const addBtn = document.getElementById('addBtn');
const newTodoInput = document.getElementById('newTodo');

// Fetch and render existing todos
async function fetchTodos() {
  try {
    const response = await fetch(`${API_URL}?_limit=5`);
    const todos = await response.json();
    renderTodos(todos);
  } catch (err) {
    console.error('Error fetching todos:', err);
  }
}

// Render todos in the list
function renderTodos(todos) {
  todoList.innerHTML = ''; // Clear old list
  todos.forEach(todo => {
    const li = document.createElement('li');
    li.textContent = `${todo.title} ${todo.completed ? '(done)' : ''}`;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => deleteTodo(todo.id, li);
    
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

// Add a new todo
async function addTodo() {
  const title = newTodoInput.value.trim();
  if (!title) return alert('Enter a task!');
  
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, completed: false, userId: 1 })
    });
    const newTodo = await response.json();
    renderTodos([{ ...newTodo }, ...Array.from(todoList.children).map(li => ({ title: li.firstChild.textContent }))]);
    newTodoInput.value = '';
  } catch (err) {
    console.error('Error adding todo:', err);
  }
}

// Delete a todo (mock delete on API)
async function deleteTodo(id, li) {
  try {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    li.remove();
  } catch (err) {
    console.error('Error deleting todo:', err);
  }
}

addBtn.addEventListener('click', addTodo);
fetchTodos();
