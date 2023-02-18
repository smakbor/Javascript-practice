// const obj = {
//   user: {
//     name: "SM Akbor",
//     age: 23,
//     mobile: 015173224,
//   },
//   topResults: {
//     amount: 3,
//     score: [100, 123, 543],
//   },
// };

// const newObj = {
//   ...obj,
//   ["user"]: {
//     ...obj["user"],
//     name: "Jahid Hasan",
//   },
// };
// // console.log(newObj);
// // console.log(obj["user"].name);
// const nestedObj = obj["topResults"]["score"];
// console.log(nestedObj);

// const d = {
//   ...obj,
//   ["topResults"]: {
//     ...obj["topResults"],
//     score: [...nestedObj, 900],
//   },
// };
// console.log(d);

// const arr = ["pen", "pencil", "book", "js", "reactJs"];

// arr.splice(3);
// console.log(arr);

// const obj3 = { ...arr };
// console.log(obj3);

const studentArray = [
  {
    name: "Jhon",
    age: 24,
    id: Math.random(),
  },
  {
    name: "Jane",
    age: 25,
    id: Math.random(),
  },
  {
    name: "Yeakub",
    age: 22,
    id: Math.random(),
  },
];

const young = studentArray.filter((obj) => {
  let flag = false;

  Object.values(obj).forEach((val) => {
    if (String(val).indexOf("J") > -1) {
      flag = true;
      return;
    }
  });
  if (flag) return obj;
});
// console.log(young);

// for (let value of Object.values(studentArray)) {
//   const obj = {};
//   console.log(value);
// }

// const obj = {
//   name: "SM Akbor",
//   des: "Front-end-developer",
//   salary: 1222,
//   skill: ["Javascript", "NodeJs", "React", "Bootstrap"],
// };
// console.log(obj);
// delete obj.salary;
// console.log(obj);

const obj = {
  user: {
    name: "SM Akbor",
    age: 23,
    mobile: 015173224,
  },
  topResults: {
    amount: 3,
    score: [100, 123, 543],
  },
};
// const nestObj = obj["topResults"]["score"];
// const filterObject = {
//   ...obj,
//   ["user"]: {
//     ...obj["user"],
//     name: "Jahid Hasan",
//   },
//   ["topResults"]: {
//     ...obj["topResults"],
//     amount: 5,
//     score: [...nestObj, 123],
//   },
// };
// console.log(filterObject);

let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

const convertObj = Object.fromEntries(
  Object.entries(prices).map((val) => [val[0], val[1] * 2])
);
// console.log(convertObj);

let doublePrices = Object.fromEntries(
  // convert prices to array, map each key/value pair into another pair
  // and then fromEntries gives back the object
  Object.entries(prices).map((entry) => [entry[0], entry[1] * 2])
);

// console.log(doublePrices);

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const newObj = {
  ...salaries,
  John: 600,
};
// console.log(newObj);
// console.log(
//   Object.values(salaries).reduce((acc, curr) => {
//     acc += curr;
//     return acc;
//   }, 0)
// );

const sumValue = (salaries) => {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;
};
// console.log(sumValue(newObj));

const date = new Date();
// console.log(date.getMonth());

// const myDate = new Date("August 26, 1986 22:15:00");

// const myHour = myDate.getDay();
// console.log(myHour);
// const d = new Date();
// const curDate = d.getDate();
// let curMonth = d.getMonth();
// curMonth++;
// const curYear = d.getFullYear();

// console.log(curDate + "/" + curMonth + "/" + curYear);

// iterate over the arr and calculate the value
// const arr = [1, 2, 3];
// const fn = (x, y, z) => {
//   return x + y + z;
// };
// console.log(fn(...arr));

// const arr = [1, 2, 3, 4, 5, 6, 7];

// const mainFunction = (array, cb) => {
//   for (let i = 0; i < array.length; i++) {
//     cb(array[i]);
//   }
// };

// const filterFunction = (item) => {
//   let filterArr = [];
//   if (item == 2) {
//     filterArr.push(item);
//   }
//   return filterArr;
// };

// console.log(filterFunction());
// console.log(mainFunction(arr, filterFunction));

// const student = [
//   {
//     id: 2011034195,
//     name: "SM Akbor",
//     city: "Narail",
//     skill: {
//       programming: "Javascript",
//     },
//   },
//   {
//     id: 201203211,
//     name: "Jahid Hasan",
//     city: "Jessore",
//     skill: {
//       videoEditing: "Camptia",
//     },
//   },
//   {
//     id: 2012032114,
//     name: "Yeakub Alli",
//     city: "Khustia",
//     skill: {
//       graphics: "Canva",
//     },
//   },
// ];

// const newStudent = student.map((item) => {
//   return {
//     ...item,
//     skill: {
//       ...skill,
//       graphics: "hello",
//     },
//   };
// });
// console.log(newStudent);

const student = {
  id: 2011034195,
  name: "SM Akbor",
  city: "Narail",
  skill: {
    programming: "Javascript",
    marketing: "Disital Marketing",
  },
};

const newStudent = {
  ...student,
  skill: {
    ...student.skill,
    programming: "NodeJs",
  },
};

console.log(newStudent);
