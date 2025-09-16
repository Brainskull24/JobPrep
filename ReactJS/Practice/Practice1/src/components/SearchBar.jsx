import React, { useState, useEffect } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Debounce state
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  // Update debouncedQuery after 500ms delay
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); // debounce delay (500ms)

    return () => clearTimeout(handler); // cleanup
  }, [query]);

  // Fetch data when debouncedQuery changes
  useEffect(() => {
    if (!debouncedQuery) {
      setResults([]);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?q=${debouncedQuery}`
        );

        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        const filtered = data.filter((post) =>
          post.title.toLowerCase().includes(debouncedQuery.toLowerCase())
        );
        setResults(filtered);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [debouncedQuery]);

  return (
    <div style={{ width: "400px", margin: "20px auto", textAlign: "center" }}>
      <h2>Search with Debounce</h2>
      <input
        type="text"
        value={query}
        placeholder="Search posts..."
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul style={{ textAlign: "left" }}>
        {results.slice(0, 5).map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
