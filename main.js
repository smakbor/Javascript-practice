// const products = [
//   { id: "aefafaera", name: "T-Shirt", price: 12 },
//   { id: "ghdhdghdh", name: "Casual-Shirt", price: 145 },
//   { id: "treyeyet", name: "Black-Shirt", price: 545 },
//   { id: "hjfhjtyra", name: "Office-Shirt", price: 2232 },
// ];

// products.map((data) => console.log(data.name));
// console.log(newProduct);

// const mapObject = products.map((product) => console.log(product.price));
// console.log("I am SM Akbor ");
// console.log("first");

// const arr = [2, 4, 5, 3, 9, 8, 3, 4, 5, 5, 5];

// const findArr = arr.find((ele) => ele > 5);
// console.log(findArr);
// arr.includes(2);

// const spiltString =
//   " hi i am akbor  , i am developer  , i am a student too , i like to write code everyda";
// const spiltArr = spiltString.split(",");
// console.log(spiltArr);

// const text = "i am a react developer ";

// const replaceText = text.replace("react", "Javascript");
// console.log(replaceText);

// console.log(replaceText.split(","));
// console.log(text.search("react"));

// const arr = [2, 3, 4];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// const names = ["SM Akbor", "Shamim", "Shagor", "Rubel"];
// const name = ["Akbor", "Yeakub", "Jahid", "Mizan"];

// function reuse(arr, logic) {
//   for (let i = 0; i < arr.length; i++) {
//     logic(arr[i], i, arr);
//   }
// }

// //map
// const result = [];

// reuse(names, (value) => {
//   result.push(value.length);
// });
// console.log(result);

// function logic(index, value, array) {
//   console.log(index, value, array);
// }
// let sum = 0;
// function logic2(index, value, array) {
//   sum += value;
//   // console.log(sum);
// }

// reuse(names);
// reuse([1, 2, 3, 4, 5], logic);
// reuse([4, 5, 6, 4], logic2);
// console.log(sum);
// reuse();

// const arr = ["akbor", "shamim", "shagor", "rubel"];

// arr.forEach((data, index) => console.log(index, data, arr));

// const products = [
//   { id: "aefafaera", name: "T-Shirt", price: 12 },
//   { id: "ghdhdghdh", name: "Casual-Shirt", price: 145 },
//   { id: "treyeyet", name: "Black-Shirt", price: 545 },
//   { id: "hjfhjtyra", name: "Office-Shirt", price: 2232 },
// ];

// const mappedArr = products.map((data) => {
//   return {
//     ...data,
//     title: "ipsum dolor sit amet consectetur adipisicing ",
//     des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantiu m ut itaque cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis blanditiis veritatis itaque!",
//     mgs: `$ ${data.price} is fixed price . this product name is ${data.name}`,
//   };
// });
// console.log(mappedArr);

// const arrayWithMessages = products
//   .filter((data) => data.price > 100)
//   .map((data) => {
//     return {
//       ...data,
//       mgs: "This is Brand Products",
//     };
//   });
// console.log(arrayWithMessages);
// const object = {
//   name: "SM Akbor",
//   age: 24,
//   country: "Bangladesh",
// };
// const convertArrayFromAnObject = (obj) => {
//   console.log(obj);
// };
// console.log(convertArrayFromAnObject(object));

let hasmeeting = false;
const promise = new Promise((resolve, reject) => {
  if (hasmeeting) {
    resolve("Name is resolved here ");
  } else {
    reject("There was something wrong!");
  }
});
promise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
