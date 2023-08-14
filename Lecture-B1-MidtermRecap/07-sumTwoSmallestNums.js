function sumTwoSmallestNums(numbers) {
    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (const num of numbers) {
        if (num > 0) {
            if (num < smallest) {
                secondSmallest = smallest;
                smallest = num;
            } else if (num < secondSmallest) {
                secondSmallest = num;
            }
        }
    }

    return smallest + secondSmallest;
}

console.log(sumTwoSmallestNums([19, 5, 42, 2, 771])); // Output: 7
console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453])); // Output: 3453445
console.log(sumTwoSmallestNums([2, 9, 6, -1])); // Output: 8
console.log(sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587])); // Output: 513
console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385])); // Output: 4519
