function calculateMaximizedProduct(input) {
  let product = 1;
  let partition = [];

  if (input <= 3) {
    partition.push(input);
  } else {
    let twos = 0;
    let originalInput = input;  // Store the original input
    while (input > 4) {
      partition.push(3);
      input -= 3;
    }

    if (input === 2) {
      partition.push(2);
    } else if (input === 3) {
      partition.push(3);
    } else {
      // If input is 4 or less, we can optimize the partition.
      while (partition.length > 2) {
        partition.pop();
        twos += 1;
      }

      // Handle the remaining numbers (1, 2, 3, or 4)
      if (input === 2) {
        partition.push(2);
        twos -= 1;
      } else if (input === 3) {
        partition.push(3);
      } else if (input === 4) {
        partition.push(2);
        partition.push(2);
      }

      // Distribute the twos optimally
      while (twos > 0) {
        const numTwos = Math.min(twos, 2);
        partition.push(...Array(numTwos).fill(2));
        twos -= numTwos;
      }
    }
    product = partition.reduce((acc, num) => acc * num, 1);
    console.log(`Input: n = ${originalInput}`);  // Display the original input
    console.log(`Output: ${product}`);
    console.log(`Explanation: ${originalInput} = ${partition.join(' + ')}, ${partition.join(' × ')} = ${product}\n`);
  }

  return product;
}
calculateMaximizedProduct(2); // Output: 1
calculateMaximizedProduct(5); // Output: 6
calculateMaximizedProduct(7); // Output: 12
calculateMaximizedProduct(10); // Output: 36
calculateMaximizedProduct(15); // Output: 243

