function tuckIn(arr1,arr2) {
    let StArr=arr1.length/2;
    const c =","
    return arr1.slice(0,StArr)+c+arr2+c+arr1.slice(StArr);
    
    // return arr1[0]+","+arr2+","+arr1[1];
}
console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
console.log(tuckIn([15, 150], [45, 75, 35]));
console.log(tuckIn([5,15, 150,170], [45, 75, 35]));
// console.log(tuckIn);