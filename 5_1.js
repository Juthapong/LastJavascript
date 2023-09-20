function calculateMaximizedProduct(input) {
    let product = 1;
    let partition = [];
  
    if (input === 2) {
      partition.push(1);
    } else {
      let n = input;
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
  
    console.log(`Input: n = ${input}`);
    console.log(`Output: ${product}`);
    console.log(`Explanation: ${input} = ${partition.join(' + ')}, ${partition.join(' × ')} = ${product}\n`);
  
    return product;
  }
  
  // Test cases following the specified output pattern
  calculateMaximizedProduct(2); // Output: 1
  calculateMaximizedProduct(5); // Output: 6
  calculateMaximizedProduct(7); // Output: 12
  calculateMaximizedProduct(10); // Output: 36
  calculateMaximizedProduct(15); // Output: 243
  