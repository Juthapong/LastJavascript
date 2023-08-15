const string1 = ["flower", "flow", "flood"];
const string2 = ["racecar", "rare"];
const string3 = ["computer", "computing", "compute", "computation"];

let result1 = string1[0];
let result2 = string2[0];
let result3 = string3[0];

for (let i = 0; i < string1.length; i++) {
  for (let j = 0; j < result1.length; j++) {
    if (result1[j] !== string1[i][j]) {
      result1 = result1.slice(0, j);
    }
  }
}
for (let i = 0; i < string2.length; i++) {
  for (let j = 0; j < result2.length; j++) {
    if (result2[j] !== string2[i][j]) {
      result2 = result2.slice(0, j);
    }
  }
}
for (let i = 0; i < string3.length; i++) {
  for (let j = 0; j < result3.length; j++) {
    if (result3[j] !== string3[i][j]) {
      result3 = result3.slice(0, j);
    }
  }
}
console.log("Longest Common Prefix of :" + string1 + " are: " + "[" + result1 + "]");
console.log("Longest Common Prefix of :" + string2 + " are: " + "[" + result2 + "]");
console.log("Longest Common Prefix of :" + string3 + " are: " + "[" + result3 + "]");