function dividesEvenly(a,b) {
    if (a % b === 0) {
        return true;
    }
    else{
        return false;
    }
}
console.log(dividesEvenly(98,7));  // Output: true
console.log(dividesEvenly(85,4)); // Output: false