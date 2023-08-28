function countPosSumNeg(arr) {
  let positiveNum = 0;
  let negativeNum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveNum++;
    } else if (arr[i] < 0) {
      negativeNum += arr[i];
    }
  }
  return arr.length === 0 ? [] : [positiveNum, negativeNum];
}
console.log(countPosSumNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])); // Output: [ 10, -65 ]
console.log(countPosSumNeg([92, 6, 73, -77, 81, -90, 99, 8, -85, 34])); // Output: [ 7, -252]
console.log(countPosSumNeg([91, -4, 80, -73, -28])); // Output: [ 2, -105]
console.log(countPosSumNeg([])); // Output: []
