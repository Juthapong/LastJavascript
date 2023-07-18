function indexMuliplir(arr) {
  var result = 0;
  for (let index = 0; index < arr.length; index++) {
    result += arr[index] * index;
  }
  return result;
}
console.log(indexMuliplir([1, 2, 3, 4, 5]));
console.log(indexMuliplir([-3, 0, 8, -6]));
