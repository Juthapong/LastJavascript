function getMaximizedProduct(n) {
  let product = 1;
  let partition = [];

  if (n === 2) {
    partition.push(1);
  } else {
    while (n > 0) {
      if (n <= 3) {
        partition.push(n);
        break;
      }
      partition.push(3);
      n -= 3;
    }
  }

  product = partition.reduce((acc, num) => acc * num, 1);

  return { partition, product };
}

function outputPattern(input, expectedOutput) {
  const { partition, product } = getMaximizedProduct(input);

  console.log(`Input: n = ${input}`);
  console.log(`Output: ${product}`);
  console.log(`Explanation: ${input} = ${partition.join(' + ')}, ${partition.join(' × ')} = ${product}\n`);

  // Check if the output matches the expected output
  const expectedProduct = parseInt(expectedOutput, 10);
  if (product === expectedProduct) {
    console.log(`Expected output matches the calculated product: ${expectedProduct}\n`);
  } else {
    console.log(`Expected output (${expectedProduct}) does not match the calculated product (${product}) for input ${input}\n`);
  }
}

// Test cases following the specified output pattern
outputPattern(2, 1);
outputPattern(5, 6);
outputPattern(7, 12);
outputPattern(10, 36);
outputPattern(15, 243);


  

//   Given an integer n, break it into the sum of k positive integers, where k >= 2, and find maximize the product of those integers.


// Exmaple output:
// Input: n = 2
// Output: 1
// Explanation: 2 = 1 + 1, 1 × 1 = 1
// Input: n = 5
// Output: 6
// Explanation: 5 = 2 + 3, 2 × 3 = 6
// Input: n = 7
// Output: 12
// Explanation: 7 = 2 + 2 + 3, 2 × 2 × 3 = 12
// Input: n = 10
// Output: 36
// Explanation: 10 = 2 + 2 + 3 + 3, 2 × 2 × 3 × 3 = 36
// Input: n = 15
// Output: 243
// Explanation: 15 = 3 + 3 + 3 + 3 + 3, 3 × 3 × 3 × 3 × 3 = 243