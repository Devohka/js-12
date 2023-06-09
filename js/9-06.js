
// завдання 1
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// Change code below this line

// const result = makePizza();

// const pointer = result;
// console.log(pointer);


// завдання 2

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line

// function makeMessage(pizzaName, callback) {
//     const pizza = callback(pizzaName);
//    return pizza;
// }

// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Margarita", deliverPizza));


// завдання 3

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);

//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });

// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`);
// });


// завдання 4

// function actionsText(text, callback) {
//     alert("");
//     const texxt = callback(text);
//     return texxt;
// }

// function outputText(text) {
//     return alert(`${text}`);
// }

// console.log(actionsText("Hello World!", outputText));


// завдання 5

// wait be please goes loading...


// завдання 6

// const applyCallbackToEachElement = function (arr, callback) {
//     const newCallback = callback(arr);
//     return newCallback;
//   }

// const squareCallback = function (arr) {
//     arr = [];
//     arr.splice(1, 2, 1, 4, 9, 16, 25);
//     return arr;
// }

// const arr1 = [1, 2, 3, 4, 5];
 
//   const result = applyCallbackToEachElement(arr1, squareCallback);

// console.log(result); // [1, 4, 9, 16, 25]


// завдання 7

const calculateDiscountedPrice = function (price, discount, callback) {
    const priceDiscount = callback(price, discount);
    return priceDiscount;

  };

const showDiscountedPrice = function (price, discount) {
      return price - discount;
  }

 console.log(calculateDiscountedPrice(100, 10, showDiscountedPrice));