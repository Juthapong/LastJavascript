function tuckIn(arr1,arr2) {
    let StArr=arr1.length/2;
    const c =","
    return arr1.slice(0,StArr)+c+arr2+c+arr1.slice(StArr);
}
console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9])); // Output: 1,2,3,4,5,6,7,8,9,10
console.log(tuckIn([15, 150], [45, 75, 35])); // Output: 15,45,75,35,150
console.log(tuckIn([5,15, 150,170], [45, 75, 35])); // Output: 5,15,45,75,35,150,170
