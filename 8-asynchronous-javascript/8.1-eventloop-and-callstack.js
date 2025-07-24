// const test1 = () => {
//   console.log("========>", 1);

//   setTimeout(() => {
//     console.log("========>", 2);
//   }, 2000);

//   console.log("========>", 3);
// };

// test1();

const test2 = () => {
  console.log("========>", 1);

  setTimeout(() => {
    console.log("========>", 2);
  }, 3000);

  setTimeout(() => {
    console.log("========>", 3);
  }, 2000);
};

test2();

// const test3 = () => {
//   console.log("========>", 1);

//   setTimeout(() => {
//     console.log("========>", 2);
//   }, 2000);

//   setTimeout(() => {
//     console.log("========>", 3);
//   }, 2000);
// };

// test3();
