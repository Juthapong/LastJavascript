function longestValidParentheses(s) {
    let maxLength = 0;
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i); // Push index of '('
        } else {
            if (stack.length === 0 || s[stack[stack.length - 1]] === ')') {
                stack.push(i); // Push index of ')'
            } else {
                stack.pop(); // Pop matching '('
                maxLength = Math.max(maxLength, i - (stack.length === 0 ? -1 : stack[stack.length - 1]));
            }
        }
    }
    
    return maxLength;
}
console.log(longestValidParentheses("(()")); //output:2
console.log(longestValidParentheses(")()())")); //output:4
console.log(longestValidParentheses("())))))(()())(")); //output:6