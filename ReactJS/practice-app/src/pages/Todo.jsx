// import React, { useState, useEffect } from "react";

// const API_URL = "http://localhost:3001/todos"; // backend URL

// const Todo = () => {
//   const [todos, setTodos] = useState([]);
//   const [todoInput, setTodoInput] = useState("");
//   const [filter, setFilter] = useState("all");
//   const [search, setSearch] = useState("");
//   const [editingId, setEditingId] = useState(null);
//   const [editText, setEditText] = useState("");

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const fetchTodos = async () => {
//     try {
//       const res = await fetch(API_URL);
//       const data = await res.json();
//       setTodos(data.data || []); // assuming backend sends {data: todos}
//     } catch (error) {
//       console.error("Error fetching todos:", error);
//     }
//   };

//   // ✅ Add new todo
//   const addTodo = async () => {
//     if (!todoInput) {
//       alert("Please enter a task name");
//       return;
//     }

//     try {
//       await fetch(API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ title: todoInput }),
//       });
//       setTodoInput("");
//       fetchTodos();
//     } catch (error) {
//       console.error("Error adding todo:", error);
//     }
//   };

//   // ✅ Delete todo
//   const deleteTodo = async (id) => {
//     try {
//       await fetch(`${API_URL}/${id}`, { method: "DELETE" });
//       fetchTodos();
//     } catch (error) {
//       console.error("Error deleting todo:", error);
//     }
//   };

//   // ✅ Toggle completion
//   const toggleTodo = async (id, completed) => {
//     try {
//       await fetch(`${API_URL}/${id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ completed: !completed }),
//       });
//       fetchTodos();
//     } catch (error) {
//       console.error("Error toggling todo:", error);
//     }
//   };

//   // ✅ Start editing
//   const startEditing = (id, text) => {
//     setEditingId(id);
//     setEditText(text);
//   };

//   // ✅ Save edit
//   const saveEdit = async (id) => {
//     try {
//       await fetch(`${API_URL}/${id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ title: editText }),
//       });
//       setEditingId(null);
//       setEditText("");
//       fetchTodos();
//     } catch (error) {
//       console.error("Error updating todo:", error);
//     }
//   };

//   // ✅ Apply filter + search
//   const filteredTodos = todos.filter((todo) => {
//     if (filter === "completed") return todo.completed;
//     if (filter === "pending") return !todo.completed;
//     return true;
//   });

//   const searchedTodos = filteredTodos.filter((todo) =>
//     todo.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="todo-container">
//       <h1 className="todo-heading">Todo App</h1>

//       {/* Input Section */}
//       <div className="todo-header">
//         <input
//           type="text"
//           placeholder="Enter name for task"
//           className="todo-input"
//           value={todoInput}
//           onChange={(e) => setTodoInput(e.target.value)}
//         />
//         <button className="todo-btn" onClick={addTodo}>
//           Add Todo
//         </button>
//       </div>

//       {/* Search & Filter */}
//       <div className="todo-controls">
//         <input
//           type="text"
//           placeholder="Search tasks..."
//           className="todo-input"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <div className="filters">
//           <button
//             className={`filter-btn ${filter === "all" ? "active" : ""}`}
//             onClick={() => setFilter("all")}
//           >
//             All
//           </button>
//           <button
//             className={`filter-btn ${filter === "pending" ? "active" : ""}`}
//             onClick={() => setFilter("pending")}
//           >
//             Pending
//           </button>
//           <button
//             className={`filter-btn ${filter === "completed" ? "active" : ""}`}
//             onClick={() => setFilter("completed")}
//           >
//             Completed
//           </button>
//         </div>
//       </div>

//       {/* Table Section */}
//       <div className="todo-table">
//         <table>
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Task</th>
//               <th>Status</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {searchedTodos.length === 0 ? (
//               <tr>
//                 <td colSpan="4" style={{ textAlign: "center", color: "#888" }}>
//                   No tasks found
//                 </td>
//               </tr>
//             ) : (
//               searchedTodos.map((todo, index) => (
//                 <tr key={todo._id}>
//                   <td>{index + 1}</td>
//                   <td>
//                     {editingId === todo._id ? (
//                       <input
//                         type="text"
//                         value={editText}
//                         onChange={(e) => setEditText(e.target.value)}
//                       />
//                     ) : (
//                       todo.title
//                     )}
//                   </td>
//                   <td>
//                     {todo.completed ? (
//                       <span className="status completed">Completed</span>
//                     ) : (
//                       <span className="status pending">Pending</span>
//                     )}
//                   </td>
//                   <td>
//                     <input
//                       type="checkbox"
//                       className="checkbox-btn"
//                       checked={todo.completed}
//                       onChange={() => toggleTodo(todo._id, todo.completed)}
//                     />
//                     {editingId === todo._id ? (
//                       <button
//                         className="todo-btn save-btn"
//                         onClick={() => saveEdit(todo._id)}
//                       >
//                         Save
//                       </button>
//                     ) : (
//                       <button
//                         className="todo-btn edit-btn"
//                         onClick={() => startEditing(todo._id, todo.title)}
//                       >
//                         Edit
//                       </button>
//                     )}
//                     <button
//                       className="todo-delete-btn"
//                       onClick={() => deleteTodo(todo._id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Footer */}
//       <div className="todo-footer">
//         <span>
//           Pending Tasks: {todos.filter((todo) => !todo.completed).length}
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Todo;

import React, { useState, useEffect, useContext } from "react";
import api from "../api";
import { AuthContext } from "../context/AuthContext";

const Todo = () => {
  const { user, logout } = useContext(AuthContext);
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const res = await api.get("/todos");
      setTodos(res.data);
    } catch (err) {
      console.error(err);
      if (err.response?.status === 401) {
        alert("Session expired. Please login again.");
        logout();
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line
  }, []);

  const addTodo = async () => {
    if (!todoInput.trim()) {
      alert("Please enter a task name");
      return;
    }
    try {
      const res = await api.post("/todos", { text: todoInput });
      setTodos((prev) => [res.data, ...prev]);
      setTodoInput("");
    } catch (err) {
      alert(err.response?.data?.message || "Failed to add todo");
    }
  };

  const deleteTodo = async (id) => {
    try {
      await api.delete(`/todos/${id}`);
      setTodos((prev) => prev.filter((t) => t._id !== id));
    } catch (err) {
      alert(err.response?.data?.message || "Delete failed");
    }
  };

  const toggleTodo = async (id) => {
    const todo = todos.find((t) => t._id === id);
    if (!todo) return;
    try {
      const res = await api.put(`/todos/${id}`, { completed: !todo.completed });
      setTodos((prev) => prev.map((t) => (t._id === id ? res.data : t)));
    } catch (err) {
      alert(err.response?.data?.message || "Update failed");
    }
  };

  const startEditing = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const saveEdit = async (id) => {
    try {
      const res = await api.put(`/todos/${id}`, { text: editText });
      setTodos((prev) => prev.map((t) => (t._id === id ? res.data : t)));
      setEditingId(null);
      setEditText("");
    } catch (err) {
      alert(err.response?.data?.message || "Update failed");
    }
  };

  const clearAll = async () => {
    // Option: delete multiple one-by-one or create a special endpoint.
    try {
      await Promise.all(todos.map((t) => api.delete(`/todos/${t._id}`)));
      setTodos([]);
    } catch (err) {
      alert("Clear failed");
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  const searchedTodos = filteredTodos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="todo-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 className="todo-heading">Todo App</h1>
        <div>
          <span style={{ marginRight: 12 }}>Hello, {user?.name}</span>
          <button className="todo-clear-btn" onClick={logout}>
            Logout
          </button>
        </div>
      </div>

      {/* Input Section */}
      <div className="todo-header">
        <input
          type="text"
          placeholder="Enter name for task"
          className="todo-input"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button className="todo-btn" onClick={addTodo}>
          Add Todo
        </button>
      </div>

      {/* Search & Filter */}
      <div className="todo-controls">
        <input
          type="text"
          placeholder="Search tasks..."
          className="todo-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="filters">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`filter-btn ${filter === "pending" ? "active" : ""}`}
            onClick={() => setFilter("pending")}
          >
            Pending
          </button>
          <button
            className={`filter-btn ${filter === "completed" ? "active" : ""}`}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="todo-table">
        {loading ? (
          <p style={{ textAlign: "center" }}>Loading...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Task</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {searchedTodos.length === 0 ? (
                <tr>
                  <td
                    colSpan="4"
                    style={{ textAlign: "center", color: "#888" }}
                  >
                    No tasks found
                  </td>
                </tr>
              ) : (
                searchedTodos.map((todo, index) => (
                  <tr key={todo._id}>
                    <td>{index + 1}</td>
                    <td>
                      {editingId === todo._id ? (
                        <input
                          type="text"
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                        />
                      ) : (
                        todo.text
                      )}
                    </td>
                    <td>
                      {todo.completed ? (
                        <span className="status completed">Completed</span>
                      ) : (
                        <span className="status pending">Pending</span>
                      )}
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        className="checkbox-btn"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo._id)}
                      />
                      {editingId === todo._id ? (
                        <button
                          className="todo-btn save-btn"
                          onClick={() => saveEdit(todo._id)}
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          className="todo-btn edit-btn"
                          onClick={() => startEditing(todo._id, todo.text)}
                        >
                          Edit
                        </button>
                      )}
                      <button
                        className="todo-delete-btn"
                        onClick={() => deleteTodo(todo._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* Footer */}
      <div className="todo-footer">
        <span>Pending Tasks: {todos.filter((t) => !t.completed).length}</span>
        <div>
          <button className="todo-clear-btn" onClick={clearAll}>
            Clear All Tasks
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
