function removeDups(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}

// Test cases
console.log(removeDups([1, 0, 1, 0]));           // Output: [1, 0]
console.log(removeDups(["The", "big", "cat"])); // Output: ["The", "big", "cat"]
console.log(removeDups(["John", "Taylor", "John"])); // Output: ["John", "Taylor"]
