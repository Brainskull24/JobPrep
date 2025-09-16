fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json()) // Convert response to JSON
  .then((data) => console.log(data))
  .catch((err) => console.error("Fetch Error:", err));

async function getData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
getData();


async function createPost() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 })
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }
  createPost();
  