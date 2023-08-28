function lessThen100(num1,num2) {
    if (num1+num2<=100) {
        return true;
    }
    else{
        return false;
    }
}
console.log(lessThen100(22,15)); // Output: true
console.log(lessThen100(83,34)); // Output: false
console.log(lessThen100(3,77)); // Output: true