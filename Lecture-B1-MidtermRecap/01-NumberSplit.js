function numberSplit(num) {
    let result = Math.floor(num / 2);
  if (num % 2 === 0) {
    return [result, result];
  } else {
    return [result, result + 1];
  }
}
console.log(numberSplit(4)); // Output:[ 2, 2 ]
console.log(numberSplit(10)); // Output:[ 5, 5 ]
console.log(numberSplit(11)); // Output:[ 5, 6 ]
console.log(numberSplit(-9)); // Output:[ -5, -4 ]
