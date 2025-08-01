// Solutions

// 1. Create a variable of each of the following data types: string, number, boolean, and array of strings.
let myName: string = "Alice";
let myAge: number = 30;
let isStudent: boolean = false;
let myHobbies: string[] = ["reading", "hiking", "coding"];

// 2. Create an interface for a `User` with the following properties:
//    - `id` (number)
//    - `name` (string)
//    - `email` (string)
//    - `isAdmin` (boolean, optional)
interface User {
  id: number;
  name: string;
  email: string;
  isAdmin?: boolean;
}

// 3. Create a function that takes a `User` object and prints a welcome message to the console.
function welcomeUser(user: User) {
  console.log(`Welcome, ${user.name}!`);
}

// 4. Create a type alias for a `Product` with the following properties:
//    - `id` (number)
//    - `name` (string)
//    - `price` (number)
type Product = {
  id: number;
  name: string;
  price: number;
};

// 5. Create a function that takes an array of `Product` objects and returns the total price of all products.
function getTotalPrice(products: Product[]): number {
  return products.reduce((total, product) => total + product.price, 0);
}
