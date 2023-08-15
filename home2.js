function findCommonPrefix(words) {
    if (words.length === 0) {
      return "";
    }
  
    let commonPrefix = words[0];
    
    for (let i = 1; i < words.length; i++) {
      for (let j = 0; j < commonPrefix.length; j++) {
        if (commonPrefix[j] !== words[i][j]) {
          commonPrefix = commonPrefix.slice(0, j);
          break;
        }
      }
    }
    
    return commonPrefix;
  }
  
  console.log(findCommonPrefix(["accompany", "account", "accountant"])); // Output: "acco"
  