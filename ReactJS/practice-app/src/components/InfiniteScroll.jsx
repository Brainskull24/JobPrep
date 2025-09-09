import React, { useState, useEffect } from "react";

const InfiniteScroll = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [initialLoad, setInitialLoad] = useState(true); // ✅ track first load
  const limit = 10;
  const totalPages = 10;

  const fetchPosts = async (pageNum) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${pageNum}&_limit=${limit}`
      );
      if (!res.ok) throw new Error("Failed to fetch posts");
      const data = await res.json();

      setPosts((prev) => {
        const ids = new Set(prev.map((p) => p.id));
        const newData = data.filter((p) => !ids.has(p.id));
        return [...prev, ...newData];
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch when page changes
  useEffect(() => {
    fetchPosts(page);
    setInitialLoad(false); // after first fetch
  }, [page]);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      // ✅ skip triggering during first load
      if (initialLoad) return;

      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        if (!loading && page < totalPages) {
          setPage((prev) => prev + 1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, page, initialLoad]);

  return (
    <div>
      <h1>Infinite Scroll Demo</h1>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{ borderBottom: "1px solid #ccc", margin: "10px 0" }}
        >
          <h3>
            {post.id}. {post.title}
          </h3>
          <p>{post.body}</p>
        </div>
      ))}

      {loading && <p style={{ color: "blue" }}>Loading more posts...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {page >= totalPages && !loading && <p>No more posts to load.</p>}
    </div>
  );
};

export default InfiniteScroll;
