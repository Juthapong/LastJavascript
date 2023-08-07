function highestDigit(number) {
  let highest = 0;
  const numString = number.toString();

  for (let i = 0; i < numString.length; i++) {
    const digit = parseInt(numString.charAt(i));
    if (digit > highest) {
      highest = digit;
    }
  }
  return highest;
}

console.log(highestDigit(379)); // Output: 9
console.log(highestDigit(2)); // Output: 2
console.log(highestDigit(377401)); // Output: 7
