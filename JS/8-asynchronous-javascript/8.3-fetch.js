// This file provides examples of fetching data using the Fetch API in JavaScript.

// The Fetch API provides an interface for fetching resources (e.g., across the network).
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));