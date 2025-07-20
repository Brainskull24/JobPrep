console.log("Start");
setTimeout(() => console.log("Async Task"), 1000);
console.log("End");

/* Output:
Start
End
Async Task (after 1s)
*/

// setTimeout(() => console.log("Runs after 2s"), 2000);

// const id = setInterval(() => console.log("Repeats every 1s"), 1000);
// clearInterval(id); //

// const myPromise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) resolve("Done!");
//   else reject("Error!");
// });

// myPromise
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

// fetchData()
//   .then((data) => processData(data))
//   .then((result) => console.log(result))
//   .catch((err) => console.error(err));

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// async function getData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// }
// getData();

// Promise.all([fetch("url1"), fetch("url2")]).then((responses) =>
//   console.log("All done!")
// );


console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");

/* Output:
1
4
3
2
*/
