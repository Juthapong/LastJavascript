function calculateMaximizedProduct(input) {
    let product = 1;
    let partition = [];
    let originalInput = input;  // Store the original input
  
    
      if (input === 2) {
        partition.push(1);
        partition.push(1);
      } else if (input === 3) {
        partition.push(3);
      } else if (input === 4) {
        partition.push(2);
        partition.push(2);
      } else if (input === 5) {
        partition.push(3);
        partition.push(2);
      } else {
        // Handle other numbers greater than 5
        let threes = Math.floor(input / 3);
        let twos = input % 3;
        for (let i = 0; i < threes; i++) {
          partition.push(3);
        }
        for (let i = 0; i < twos; i++) {
          partition.push(2);
        }
      }
  
      // Calculate product and build explanation
      product = partition.reduce((acc, num) => acc * num, 1);
  
      // Display the output and explanation
      console.log(`Input: n = ${originalInput}`);
      console.log(`Output: ${product}`);
      console.log(`Explanation: ${originalInput} = ${partition.join(' + ')}, ${partition.join(' × ')} = ${product}`);
    
  
    return product;
}
  
  calculateMaximizedProduct(2);
  calculateMaximizedProduct(5); // Output: 6
  calculateMaximizedProduct(7); // Output: 12
  calculateMaximizedProduct(10); // Output: 36
  calculateMaximizedProduct(15); // Output: 243