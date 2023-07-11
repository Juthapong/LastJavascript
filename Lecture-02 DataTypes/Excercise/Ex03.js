function numbersplit(num) {
    // var digit1,digit2;
    // digit1= num / 2;
    // digit2=num/2
    // return (Math.floor (num /2)), num/2
    const comma = ",";
    return (Math.floor(num / 2))+comma+(Math.ceil(num / 2))
    // return console.log(Math.floor(num / 2)),(Math.ceil(num / 2))
}
console.log(numbersplit(4));
console.log(numbersplit(10));
console.log(numbersplit(11));
console.log(numbersplit(-9));