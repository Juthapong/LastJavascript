function leapYear(year) {
    if ((year % 4==0) ) {
        return true;
    } else {
       return false;
    }
}
console.log(leapYear(1990)); // Output: false
console.log(leapYear(1924)); // Output: true
console.log(leapYear(2021)); // Output: false