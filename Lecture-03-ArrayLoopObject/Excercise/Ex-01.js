let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true];
let values3 = ['Mars', 9, 'Apple'];
// let text=[];
// for (let value1 of values1) {
//   for (let value2 of values2) {
//     for (let value3 of values3) {
//       if (value1 === value2 && value2 === value3) {
//         text.push(value1);
//       }
//     }
//   }
// }

// console.log(text);

let value = values1.filter(x => values2.includes(x) || values3.includes(x));

console.log(value);
