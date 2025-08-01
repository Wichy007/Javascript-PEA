// This file provides examples of Promises in JavaScript.

// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Promise resolved!");
  } else {
    reject("Promise rejected!");
  }
});

myPromise
  .then(message => console.log(message))
  .catch(error => console.error(error));

// Promise Hell (also known as the Pyramid of Doom)
// This happens when you have multiple nested promises.
new Promise((resolve, reject) => {
  resolve(1);
})
  .then(result1 => {
    console.log(result1); // 1
    return new Promise((resolve, reject) => {
      resolve(result1 * 2);
    }).then(result2 => {
      console.log(result2); // 2
      return new Promise((resolve, reject) => {
        resolve(result2 * 2);
      }).then(result3 => {
        console.log(result3); // 4
      });
    });
  })
  .catch(error => console.error(error));

// Avoiding Promise Hell with Promise Chaining
// You can avoid promise hell by chaining .then() calls.
new Promise((resolve, reject) => {
  resolve(1);
})
  .then(result1 => {
    console.log(result1); // 1
    return result1 * 2;
  })
  .then(result2 => {
    console.log(result2); // 2
    return result2 * 2;
  })
  .then(result3 => {
    console.log(result3); // 4
  })
  .catch(error => console.error(error));

// Real-world example with fetch
const fetchData = () => {
  return new Promise((resolve, reject) => {
    fetch('https://api.github.com/users/github')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
};

fetchData()
  .then(data => {
    console.log('Fetched data:', data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });