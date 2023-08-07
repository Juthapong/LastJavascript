function numberSplit(num) {
    let result = Math.floor(num / 2);
  if (num % 2 === 0) {
    return [result, result];
  } else {
    return [result, result + 1];
  }
}
console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));
