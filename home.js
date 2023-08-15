function findCommonPrefix(words) {
    if (words.length === 0) {
      return "";
    }
  
    let commonPrefix = words[0];
    
    for (let i = 1; i < words.length; i++) {
      while (words[i].indexOf(commonPrefix) !== 0) {
        commonPrefix = commonPrefix.slice(0, commonPrefix.length - 1);
      }
    }
    
    return commonPrefix;
  }
  
  console.log(findCommonPrefix(["accompany", "account", "accountant"])); // Output: "acco"
  