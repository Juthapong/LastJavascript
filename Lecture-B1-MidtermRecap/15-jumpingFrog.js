function jumpingForg(n, arr) {
    let maxJump = 0;
    
    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            return "no chance :-(";
        }
        
        maxJump = Math.max(maxJump, i + arr[i]);
        
        if (maxJump >= n - 1) {
            return i + 1;
        }
    }
    
    return "no chance :-(";
}
console.log(jumpingForg(5,[1,1,1,1,1])); //output:6
console.log(jumpingForg(5,[1,3,1,1,1])); //output:4
console.log(jumpingForg(5,[1,1,0,1,1])); //output:"no chance :-("
