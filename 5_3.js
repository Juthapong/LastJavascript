function calculateMaximizedProduct(input) {
    let product = 1;
    let partition = [];
  
    if (input <= 3) {
      partition.push(input);
    } else {
      let twos = 0;
      while (input > 4) {
        partition.push(3);
        input -= 3;
      }
  
      if (input === 2) {
        partition.push(1);
        partition.push(1);  // Change this line to add two 1s instead of a single 2
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
          partition.push(1);
          partition.push(1);  // Change this line to add two 1s instead of a single 2
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
    }
  
    product = partition.reduce((acc, num) => acc * num, 1);
  
    console.log(`Input: n = ${input}`);
    console.log(`Output: ${product}`);
    console.log(`Explanation: ${input} = ${partition.join(' + ')}, ${partition.join(' × ')} = ${product}\n`);
  
    return product;
  }
  
  calculateMaximizedProduct(2); // Output: 1
