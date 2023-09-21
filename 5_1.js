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

    if (input === 4) {
      partition.unshift(2, 2);
    } else if (input === 5) {
      partition.unshift(2, 3);
    } else if (input === 3) {
      partition.unshift(3);
    } else if (input === 2) {
      partition.unshift(1, 1);
    } else {
      let twos = Math.floor(input / 2);
      let threes = input % 2;
      for (let i = 0; i < twos; i++) {
        partition.unshift(2);
      }
      for (let i = 0; i < threes; i++) {
        partition.unshift(3);
      }
    }

    product = partition.reduce((acc, num) => acc * num, 1);
    return `Input: n = ${originalInput}\nOutput: ${product}\nExplanation: ${originalInput} = ${partition.join(
      " + "
    )}, ${partition.join(" × ")} = ${product}`;
  }
}

console.log(maxProductExplanation(2));
console.log(maxProductExplanation(5));
console.log(maxProductExplanation(7));
console.log(maxProductExplanation(10));
console.log(maxProductExplanation(19));
