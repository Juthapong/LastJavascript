function maxProductExplanation(input) {
  let product = 1;
  let partition = [];
  let originalInput = input;  

  if (input <= 1) {
    partition.push(input);
  } else {
    while (input > 5) {
      partition.push(3);
      input -= 3;
    }

    if (input === 5) {
      partition.push(3);
      partition.push(2);
    } else if (input === 3) {
      partition.push(3);
    } else if (input === 4) {
      partition.push(2);
      partition.push(2);
    } else if (input === 2) {
      partition.push(1);
      partition.push(1);
    } else {
      
      let threes = Math.floor(input / 3);
      let twos = input % 3;
      for (let i = 0; i < threes; i++) {
        partition.push(3);
      }
      for (let i = 0; i < twos; i++) {
        partition.push(2);
      }
    }

   
    product = partition.reduce((acc, num) => acc * num, 1);

    
    return `Input: n = ${originalInput} \nOutput: ${product}\nExplanation: ${originalInput} = ${partition.join(' + ')}, ${partition.join(' × ')} = ${product}`;
  }
}

console.log(maxProductExplanation(2));
console.log(maxProductExplanation(5)); 
console.log(maxProductExplanation(7)); 
console.log(maxProductExplanation(10));
console.log(maxProductExplanation(15)); 