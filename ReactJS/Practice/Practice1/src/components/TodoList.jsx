// import React, { useState, useEffect, useRef } from "react";
// import "./styles.css";

// const TodoList = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   // ✅ Lazy initializer ensures persistence loads once and safely
//   const [todos, setTodos] = useState(() => {
//     const saved = localStorage.getItem("todos");
//     return saved ? JSON.parse(saved) : [];
//   });

//   const titleRef = useRef(null);

//   // ✅ Persist whenever todos change
//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   const handleAddTodo = () => {
//     if (!title.trim() || !description.trim()) {
//       alert("Please enter both title and description!");
//       return;
//     }

//     const newTodo = {
//       id: Date.now(),
//       title,
//       description,
//       completed: false,
//     };

//     setTodos((prev) => [...prev, newTodo]);
//     setTitle("");
//     setDescription("");
//     titleRef.current?.focus();
//   };

//   const handleToggle = (id) => {
//     setTodos((prev) =>
//       prev.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this todo?")) {
//       setTodos((prev) => prev.filter((todo) => todo.id !== id));
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") handleAddTodo();
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         background: "#f9fafb",
//         padding: "2rem",
//         fontFamily: "Inter, sans-serif",
//       }}
//     >
//       <h1 style={{ color: "#1f2937", marginBottom: "1rem" }}>
//         📝 Todo List Application
//       </h1>

//       {/* Input Section */}
//       <div
//         style={{
//           display: "flex",
//           gap: "10px",
//           marginBottom: "1.5rem",
//           alignItems: "center",
//           flexWrap: "wrap",
//           justifyContent: "center",
//         }}
//       >
//         <input
//           ref={titleRef}
//           type="text"
//           placeholder="Enter todo title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           onKeyDown={handleKeyPress}
//           style={{
//             padding: "8px",
//             width: "180px",
//             borderRadius: "8px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <input
//           type="text"
//           placeholder="Enter todo description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           onKeyDown={handleKeyPress}
//           style={{
//             padding: "8px",
//             width: "220px",
//             borderRadius: "8px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <button
//           onClick={handleAddTodo}
//           disabled={!title.trim() || !description.trim()}
//           style={{
//             backgroundColor:
//               !title.trim() || !description.trim() ? "#93c5fd" : "#2563eb",
//             color: "white",
//             border: "none",
//             borderRadius: "8px",
//             padding: "8px 16px",
//             cursor:
//               !title.trim() || !description.trim() ? "not-allowed" : "pointer",
//             fontWeight: "bold",
//             transition: "0.2s",
//           }}
//         >
//           Add Todo
//         </button>
//       </div>

//       {/* Todo Table */}
//       <div
//         style={{
//           background: "white",
//           borderRadius: "12px",
//           padding: "1.5rem",
//           boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//           width: "min(600px, 90%)",
//         }}
//       >
//         {todos.length === 0 ? (
//           <p
//             style={{
//               textAlign: "center",
//               color: "#666",
//               fontStyle: "italic",
//             }}
//           >
//             No todos yet! 🎉
//           </p>
//         ) : (
//           <table style={{ width: "100%", borderCollapse: "collapse" }}>
//             <thead>
//               <tr
//                 style={{
//                   backgroundColor: "#f1f5f9",
//                   color: "#333",
//                   textAlign: "left",
//                 }}
//               >
//                 <th style={{ padding: "8px" }}>Title</th>
//                 <th style={{ padding: "8px" }}>Description</th>
//                 <th style={{ padding: "8px", textAlign: "center" }}>Status</th>
//                 <th style={{ padding: "8px", textAlign: "center" }}>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {todos.map((todo) => (
//                 <tr
//                   key={todo.id}
//                   style={{
//                     borderBottom: "1px solid #e5e7eb",
//                   }}
//                 >
//                   <td
//                     style={{
//                       padding: "8px",
//                       textDecoration: todo.completed ? "line-through" : "none",
//                       color: todo.completed ? "#6b7280" : "#111827",
//                     }}
//                   >
//                     {todo.title}
//                   </td>
//                   <td
//                     style={{
//                       padding: "8px",
//                       textDecoration: todo.completed ? "line-through" : "none",
//                       color: todo.completed ? "#6b7280" : "#374151",
//                     }}
//                   >
//                     {todo.description}
//                   </td>
//                   <td style={{ textAlign: "center" }}>
//                     <input
//                       type="checkbox"
//                       checked={todo.completed}
//                       onChange={() => handleToggle(todo.id)}
//                     />
//                   </td>
//                   <td style={{ textAlign: "center" }}>
//                     <button
//                       onClick={() => handleDelete(todo.id)}
//                       style={{
//                         backgroundColor: "#ef4444",
//                         color: "white",
//                         border: "none",
//                         borderRadius: "6px",
//                         padding: "4px 10px",
//                         cursor: "pointer",
//                         transition: "0.2s",
//                       }}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}

//         {/* Footer Stats */}
//         {todos.length > 0 && (
//           <div
//             style={{
//               marginTop: "1rem",
//               textAlign: "center",
//               color: "#555",
//               fontSize: "14px",
//             }}
//           >
//             Total: <b>{todos.length}</b> | Completed:{" "}
//             <b>{todos.filter((t) => t.completed).length}</b>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TodoList;
import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const TodoList = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [searchTerm, setSearchTerm] = useState("");
  const titleRef = useRef(null);

  // Persist todos to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (!title.trim() || !description.trim()) {
      alert("Please enter both title and description!");
      return;
    }

    const newTodo = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setTitle("");
    setDescription("");
    titleRef.current?.focus();
  };

  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleAddTodo();
  };

  // Filtered todos based on search term
  const filteredTodos = todos.filter(
    (todo) =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      todo.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#f9fafb",
        padding: "2rem",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <h1 style={{ color: "#1f2937", marginBottom: "1rem" }}>
        📝 Todo List Application
      </h1>

      {/* Input Section */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <input
          ref={titleRef}
          type="text"
          placeholder="Enter todo title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={handleKeyPress}
          style={{
            padding: "8px",
            width: "180px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="text"
          placeholder="Enter todo description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onKeyDown={handleKeyPress}
          style={{
            padding: "8px",
            width: "220px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={handleAddTodo}
          disabled={!title.trim() || !description.trim()}
          style={{
            backgroundColor:
              !title.trim() || !description.trim() ? "#93c5fd" : "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "8px 16px",
            cursor:
              !title.trim() || !description.trim() ? "not-allowed" : "pointer",
            fontWeight: "bold",
          }}
        >
          Add Todo
        </button>
      </div>

      {/* Search Section */}
      <div style={{ marginBottom: "1.5rem", width: "min(600px, 90%)" }}>
        <input
          type="text"
          placeholder="Search todos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* Todo Table */}
      <div
        style={{
          background: "white",
          borderRadius: "12px",
          padding: "1.5rem",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          width: "min(600px, 90%)",
        }}
      >
        {filteredTodos.length === 0 ? (
          <p
            style={{
              textAlign: "center",
              color: "#666",
              fontStyle: "italic",
            }}
          >
            No todos found! 🎉
          </p>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr
                style={{
                  backgroundColor: "#f1f5f9",
                  color: "#333",
                  textAlign: "left",
                }}
              >
                <th style={{ padding: "8px" }}>Title</th>
                <th style={{ padding: "8px" }}>Description</th>
                <th style={{ padding: "8px", textAlign: "center" }}>Status</th>
                <th style={{ padding: "8px", textAlign: "center" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTodos.map((todo) => (
                <tr
                  key={todo.id}
                  style={{
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  <td
                    style={{
                      padding: "8px",
                      textDecoration: todo.completed ? "line-through" : "none",
                      color: todo.completed ? "#6b7280" : "#111827",
                    }}
                  >
                    {todo.title}
                  </td>
                  <td
                    style={{
                      padding: "8px",
                      textDecoration: todo.completed ? "line-through" : "none",
                      color: todo.completed ? "#6b7280" : "#374151",
                    }}
                  >
                    {todo.description}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => handleToggle(todo.id)}
                    />
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <button
                      onClick={() => handleDelete(todo.id)}
                      style={{
                        backgroundColor: "#ef4444",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        padding: "4px 10px",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Footer Stats */}
        {todos.length > 0 && (
          <div
            style={{
              marginTop: "1rem",
              textAlign: "center",
              color: "#555",
              fontSize: "14px",
            }}
          >
            Total: <b>{todos.length}</b> | Completed:{" "}
            <b>{todos.filter((t) => t.completed).length}</b>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
