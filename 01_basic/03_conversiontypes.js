let score = null;

// console.log(typeof score);
// console.log(typeof score);

// let valueInNuber = Number(score);

// console.log(typeof valueInNuber);
// console.log(valueInNuber);

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(typeof(isLoggedIn));
// console.log(isLoggedIn);
// console.log(typeof(booleanIsLoggedIn));
// console.log(booleanIsLoggedIn);

// 1=> true, 0=> false
// "sukrut"=>true, ""=>false

let someNumber = 33;
let convertedNumber = String(someNumber);
// console.log(typeof someNumber);
// console.log(someNumber);
// console.log(typeof convertedNumber);
// console.log(convertedNumber);
let value = 3;
let negValue = -value;
// console.log(value);
// console.log(negValue);

let str1 = "hello";
let str2 = " Sukrut";
str1 += str2;
// console.log(str1);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack memory(primitive) , heap memory(non primitive)

let name = "Sukrut";

let myName = name;

myName = "Nigavekar";

// console.log("myName value is "+myName);
// console.log("name value is "+name);

let userOne = {
  email: "sukrut@gmail.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "SukrutCoder@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
