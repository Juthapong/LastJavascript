function leapYear(year) {
    if ((year % 4==0) ) {
        return true;
    } else {
       return false;
    }
}
console.log(leapYear(1990));
console.log(leapYear(1924));
console.log(leapYear(2021));
console.log(leapYear(2023));
console.log(leapYear(1992));
console.log(leapYear(1900));