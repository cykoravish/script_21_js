// 1. Find the maximum of three numbers
// input: 10 20 5
// output: 20

// function findMax(num1, num2, num3){
//     let max = num1;
//     if(num2 > max)max = num2;
//     if(num3 > max)max = num3;
//     return max;
// }
// console.log(findMax(10, 20, 5));

/////////////////////////////////////////////////////////////////////////////////////////

//2. Check if a number is positive, Negative or Zero
// Input: -9
// Output: Negative
// function checkNumber(num){
//     if(num>0){
//         return "Positive"
//     }else if(num<0){
//         return "Negative"
//     }else{
//         return "zero"
//     }
// }
// console.log(checkNumber(0))

/////////////////////////////////////////////////////////////////////////////////////////

//3. Calculate electricity bill
// input: 230
// output: 1500 Rs
// example logic:
// 0 - 100 units => 5rs per unit
// 101 - 200 units => 7rs per unit
// 201 - 300 units => 10rs per unit
// Above 300 units => 12rs per unit

// solution 1
// function claculateBill(units) {
//   if (!units || isNaN(units)) return "please enter valid bill units";

//   let totalAmount = 0;
//   for (let i = 1; i <= units; i++) {
//     if (i <= 100) {
//       totalAmount += 5;
//     } else if (i > 100 && i <= 200) {
//       totalAmount += 7;
//     } else if (i > 200 && i <= 300) {
//       totalAmount += 10;
//     } else {
//       totalAmount += 12;
//     }
//   }
//   return totalAmount;
// }
// console.log(claculateBill(230))

// // solution - 2
// function claculateBill(units) {
//   if (!units || isNaN(units)) return "please enter valid bill units";

//   let totalAmount = 0;
//   let unitsLeft = units;

//   if (unitsLeft > 300) {
//     totalAmount = (unitsLeft - 300) * 12;
//     unitsLeft = 300;
//   }
//   if (unitsLeft > 200 && unitsLeft <= 300) {
//     totalAmount += (unitsLeft - 200) * 10;
//     unitsLeft = 200;
//   }
//   if (unitsLeft > 100 && unitsLeft <= 200) {
//     totalAmount += (unitsLeft - 100) * 7;
//     unitsLeft = 100;
//   }
//   if (unitsLeft <= 100) {
//     totalAmount += unitsLeft * 5;
//     unitsLeft = 0;
//   }

//   return totalAmount;
// }
// console.log(claculateBill(230));

/////////////////////////////////////////////////////////////////////////////////////////

// 4. check if a character is a Vowel or a Consonent
// function checkChar(char) {
//   if (!char || typeof char !== "string")
//     return "please enter a valid character";

//   let vowels = "aeiou";
//   return vowels.toLocaleLowerCase().split("").includes(char) ? "Vowel" : "Consonent";
// }
// console.log(checkChar("u"))

//5. check if a year is leap year
//  a year is a leap year if it satisfies these conditions

//  -> it is divisible by 4
//  -> but not divisible by 100
//  -> unless it also divisible by 400
// function isLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     return "Leap Year";
//   } else {
//     return "Not a Leap Year";
//   }
// }

// console.log(isLeapYear(2024)); // Leap Year