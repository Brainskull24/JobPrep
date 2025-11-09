import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController(); // for cleanup
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(url, { signal });
        if (!res.ok) throw new Error("Failed to fetch data");

        const json = await res.json();
        setData(json);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
};

const CustomHook = () => {
  const {
    data: todos,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/todos?_limit=5");

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

export default CustomHook;
