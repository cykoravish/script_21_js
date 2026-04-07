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
