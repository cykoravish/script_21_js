// 1. Print till the user entered number

// const btn = document.getElementById("btn");
// const inp = document.getElementById("inpNum");
// let numBox = document.getElementById("numBox");
// const clearBtn = document.getElementById("clearBtn");

// btn.addEventListener("click", () => {
//   let value = Math.floor(Number(inp.value));
//   if (!validateNum(value)) {
//     return;
//   }

//   for (let i = 0; i <= value; i++) {
//     numBox.innerHTML += `
//       <span
//         class="border p-2 w-12 h-12 text-center hover:text-blue-500 hover:font-bold hover:border-2"
//         >${i}</span
//       >
//       `;
//   }
//   inp.value = "";
// });

// function validateNum(val) {
//   if (val > 50 || val <= 0) {
//     alert("please enter a number not more than 50 and greater than 0");
//     return false;
//   }
//   return true;
// }

// clearBtn.addEventListener("click", () => {
//   numBox.innerHTML = "";
// });

/////////////////////////////////////////////////////////////////////////////////////////////

//2. Print all even numbers from 1 to N
// Input: 10
// Output: 2 4 6 8 10

// let n = 10;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

/////////////////////////////////////////////////////////////////////////////////////////////

//3. Sum of first N natural numbers.
// input: 5
// output: 15

// //brute force solution - takes 24 seconds to execute
// console.time("sumTime"); //for time check

// let n = 10000000;
// let sum = 0;
// for (let i = 1; i <= n; i++) {  //time complexity = 0(n)
//   sum += i;
// }

// console.log(sum);

// console.timeEnd("sumTime"); //for time check

// // optimized solution - takes 9 seconds to execute
// console.time()

// let num = 10000000;
// let sum = (num * (num + 1) / 2); //time complexity = o(1)
// console.log(sum)

// console.timeEnd()

/////////////////////////////////////////////////////////////////////////////////////////////

// 4. Product (Factorial) of N
// Input: 5
// Output: 120

// //using loop
// let factorialNum = 5;
// let factorial = 1;
// for(let i = factorialNum; i > 0; i--){
//  factorial *= i;
// }
// console.log(factorial)

// //using recursion
// function findFactorial(num) {
//   if (num === 0 || num === 1) return 1;

//   return (num *= findFactorial(num - 1));
// }
// console.log(findFactorial(5));

/////////////////////////////////////////////////////////////////////////////////////////////

//5. find sum of all even numbers to n.

// brute force solution 
// let n = 6;
// let sum = 0;
// for (let i = 2; i <= n; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// //optimized solution
// // formulae = n(n+1)

// let n = 6;
// if(n%2 !== 0){
//   n = n-1;
// }
// n = n/2;
// let sumOfEvenNum = n * (n + 1);
// console.log(sumOfEvenNum)
 