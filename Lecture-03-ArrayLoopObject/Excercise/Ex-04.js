function numberSum(arr) {
  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      totalSum += arr[i];
    }
  }
  return totalSum;
}
console.log(numberSum([1, 2, "13", "4", "645"])); // Output: 3
console.log(numberSum([true, false, "123", "75"])); // Output: 0
console.log(numberSum([1, 2, 3, 4, 5, true])); // Output: 15