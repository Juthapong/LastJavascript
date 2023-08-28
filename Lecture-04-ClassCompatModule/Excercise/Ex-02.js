function filterArray(arr) {
    let totalSum = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      totalSum.push(arr[i])
    }
  }
  return totalSum;

}
console.log(filterArray([1,2,"a","b"])); // Output: [ 1, 2 ]
console.log(filterArray([1,"a","b",0,15])); // Output: [ 1, 0, 15 ]
console.log(filterArray([1,2,"aasf","1","123",123])); // Output: [ 1, 2, 123 ]