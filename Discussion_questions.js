// // Guess the outputs :)

// // ###################### Question-0 ############################

// {

//   var a = 10;
// }
// console.log(a);

// function demo() {

//   var b = 10;
// }
// console.log(b);

// // ###################### Question-1 ############################

// var a;
// let b;
// const c;
// console.log(a, b, c);

// // ###################### Question-2 ############################

// console.log(a, b, c);
//  var a;
//  let b;
//  const c;

// // ###################### Question-3 ############################

// {
//   let log = function () {
//     console.log(message);
//   };

//   let message = "Hello";
//   log();
// }

// ###################### Question-4 ############################

// for (var i = 0; i < 10; i++) {}
// console.log(i);

// function demo() {
//   var j = 20;
// }

// console.log(j);

// ###################### Question-5 ############################

// {
//   function demo() {
//     var b = 200;
//   }

//   {
//     let b = 100;
//   }
// }
// console.log(b);

// ###################### Question-6  ############################

// for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000);
// }

// ###################### Question-7  ############################

// for (var i = 0; i < 5; i++) {
//     (function (j) {
//         setTimeout(function () {
//             console.log(j);
//         }, 1000);
//     })(i);
// }

// ###################### Question-8 ############################

// const result1 = function () {
//   let counter = 1;
//   return (counter += 1);
// };

// console.log(result1());
// console.log(result1());

// const result2 = (function () {
//   let counter = 0;
//   return function () {
//     return (counter += 1);
//   };
// })();

// console.log(result2());
// console.log(result2());

const arr = [1, 2, [3, 4, [6, 7]], 5];

const res = arr.filter((item) => {
  return item.length > 0;
});

// console.log(arr);

const arr2 = [];

const a = [1, 2, 3, 4].reduce((acc, ele) => {
  return acc + ele;
}, 0);

console.log(a);
