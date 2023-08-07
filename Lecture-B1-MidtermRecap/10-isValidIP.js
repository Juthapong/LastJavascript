function isValidIP(ip) {
  const parts = ip.split(".");
  if (parts.length !== 4) {
    return false;
  }

  for (const part of parts) {
    const num = parseInt(part);
    if (
      isNaN(num) ||
      num < 1 ||
      num > 255 ||
      (part[0] === "0" && part.length > 1)
    ) {
      return false;
    }
  }

  return true;
}
console.log(isValidIP("1.2.3.4")); // Output: true
console.log(isValidIP("1.2.3")); // Output: false
console.log(isValidIP("1.2.3.4.5")); // Output: false
console.log(isValidIP("123.45.67.89")); // Output: true
console.log(isValidIP("123.456.78.90")); // Output: false
console.log(isValidIP("123.045.067.089")); // Output: false
