/*
===========================================
🛒 Higher-Order Functions: Product Utilities
===========================================

🎯 Objective:
Students will create and work with higher-order functions to transform and manipulate data.

They will:
- Write higher-order functions that accept callbacks to apply transformations dynamically
- Practice returning functions from higher-order functions for reusable, customizable utilities
- Gain experience using `map`, `filter`, and `reduce` to perform practical data transformations
*/

// ============================================
// 📦 Starting Dataset: Product List
// ============================================

const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 800, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
  { name: "Keyboard", price: 100, inStock: false },
];

// ============================================
// 🔧 Tasks
// ============================================

/*
🔹 Task 1: Filter Products by Availability

Create a function `filterProducts` that accepts:
- an array of products
- a callback function

The callback should determine which products to include.
Example: filter by availability or price threshold.

Step-by-Step:
1. Define the `filterProducts` function with appropriate parameters.
2. Use the `filter()` method to apply the callback to the array.
3. Return the filtered result.
*/

const inStockOnly = (product) => product.inStock === true;

const productsInStock = products.filter(inStockOnly);
const priceAbove500 = (product) => product.price > 500;

const productsAbove500 = products.filter(priceAbove500);



/*
🔹 Task 2: Transform Product Names

Use `map()` to create a new array of product names in UPPERCASE.

Step-by-Step:
1. Use `map()` on the products array.
2. Extract and transform the `name` property to uppercase.
3. Store the result in a new variable.
*/
const uppercasedNames = products.map((product) => product.name.toUpperCase());

/*
🔹 Task 3: Generate Discounted Prices

Write a higher-order function `applyDiscount` that:
- Accepts a discount percentage as a whole number
- Returns a function that takes in a product object and returns a discounted price

Step-by-Step:
1. Define a function `applyDiscount` with a parameter `discountPercent`.
2. Return a new function that takes a product object.
3. Use this returned function inside a `forEach()` call to add a new property, `salePrice`, to each product object.
4. Print the array of products to verify the new property and value have been added to each product object.
*/

const applyDiscount = (discountPercent) => {
  return (product) => {
    const discount = product.price * (discountPercent / 100);
    return product.price - discount;
  };
};
const discount10 = applyDiscount(10);

products.forEach((product) => {
  product.salePrice = discount10(product);
});
/*
🔹 Task 4: Calculate Total Inventory Value

Use `reduce()` to calculate the total value of products that are currently in stock.

Step-by-Step:
1. Use the `reduce()` method on the products array.
2. Add only the prices of products where `inStock` is true.
3. Store the total in a new variable.
*/
const totalInStockValue = products.reduce((total, product) => {
  return product.inStock ? total + product.price : total;
}, 0);

// ============================================
// 🧪 Console Test Your Work
// ============================================

// console.log("Filtered products:", ...);
// console.log("Uppercased names:", ...);
// console.log("Discounted products:", ...);
// console.log("Total value in stock:", ...);

console.log("Products in stock:", productsInStock);
console.log("Products above $500:", productsAbove500);
console.log("Uppercased names:", uppercasedNames);
console.log("Discounted products:", products);
console.log("Total value in stock:", totalInStockValue);

//Extra test cases
// 🔹 Extra Test 3: Products NOT in stock
const notInStock = (product) => product.inStock === false;
const productsNotInStock = products.filter(notInStock);
console.log("TEST 3 — Products NOT in stock:", productsNotInStock);

// 🔹 Extra Test 4: Products priced 250 or more
const price250OrMore = (product) => product.price >= 250;
const products250OrMore = products.filter(price250OrMore);
console.log("TEST 4 — Products priced >= 250:", products250OrMore);