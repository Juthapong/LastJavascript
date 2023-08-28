function numbersplit(num) {
    const comma = ",";
    return (Math.floor(num / 2))+comma+(Math.ceil(num / 2))
    }
console.log(numbersplit(4)); // Output: 2,2
console.log(numbersplit(10)); // Output: 5,5
console.log(numbersplit(11)); // Output: 5,6
console.log(numbersplit(-9)); // Output: -5,-4