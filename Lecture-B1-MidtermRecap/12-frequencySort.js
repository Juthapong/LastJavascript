function frequencySort(s) {
  // Create a frequency map to count characters
  const frequencyMap = {};
  for (const char of s) {
    frequencyMap[char] = (frequencyMap[char] || 0) + 1;
  }

  // Convert the frequency map into an array of character-frequency pairs
  const charFrequencyPairs = [];
  for (const char in frequencyMap) {
    charFrequencyPairs.push({ char, frequency: frequencyMap[char] });
  }

  // Sort the array based on frequency in descending order
  charFrequencyPairs.sort((a, b) => b.frequency - a.frequency);

  // Reconstruct the sorted string while maintaining case and order
  let sortedString = "";
  for (const pair of charFrequencyPairs) {
    sortedString += pair.char.repeat(pair.frequency);
  }

  return sortedString;
}
console.log(frequencySort("tree")); //output:"eert"
console.log(frequencySort("cccaaa")); //output:"aaaccc"
console.log(frequencySort("bbAa")); //output:"bbAa"
