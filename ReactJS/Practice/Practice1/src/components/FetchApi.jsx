import React, { useState, useEffect } from "react";

const FetchApi = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      if (!res.ok) throw new Error("Failed to fetch data");
      const data = await res.json();
      setTodos(data.slice(0, 5));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {item.id}. {item.title} ✅ {item.completed.toString()}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FetchApi;
