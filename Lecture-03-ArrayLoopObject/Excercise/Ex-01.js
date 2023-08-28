let values1 = ["Apple", 1, false];
let values2 = ["Fries", 9, true, "Mars"];
let values3 = ["Mars", 9, "Apple"];
let out = [];
for (let index = 0; index < values1.length; index++) {
  const x = values1[index];
  for (let index = 0; index < values3.length; index++) {
    const y = values3[index];
    if (x === y) {
      console.log("values1 & values3 :", (out = x));
    }
  }
}
for (let index = 0; index < values2.length; index++) {
  const x = values2[index];
  for (let index = 0; index < values3.length; index++) {
    const y = values3[index];
    if (x === y) {
      console.log("values2 & values3 :", (out = x));
    }
  }
}
for (let index = 0; index < values1.length; index++) {
  const x = values1[index];
  for (let index = 0; index < values2.length; index++) {
    const y = values2[index];
    if (x === y) {
      console.log("values1 & values2 :", (out = x));
    }
  }
}
console.log("--------------output----------");
