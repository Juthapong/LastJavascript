function frequencySort(s) {
    const frequencyMap = {};
    
    // Count character frequencies
    for (let char of s) {
        if (frequencyMap[char]) {
            frequencyMap[char]++;
        } else {
            frequencyMap[char] = 1;
        }
    }
    const sortedChars = Object.keys(frequencyMap).sort((a, b) => {
        // Sort by frequency, if equal, sort by character code
        return frequencyMap[b] - frequencyMap[a] || a.charCodeAt(0) - b.charCodeAt(0);
    });
    let sortedString = '';
    // Reconstruct the sorted string
    for (let char of sortedChars) {
        sortedString += char.repeat(frequencyMap[char]);
    }
    return sortedString;
}
console.log(frequencySort("tree")); //output:"eert"
console.log(frequencySort("cccaaa")); //output:"aaaccc"
console.log(frequencySort("bbAa")); //output:"bbAa"
