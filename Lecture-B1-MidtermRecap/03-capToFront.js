function capToFront(Text) {
  let capitalLetters = "";
  let lowercaseLetters = "";

  for (let i = 0; i < Text.length; i++) {
    const char = Text.charAt(i);
    if (char >= "A" && char <= "Z") {
      capitalLetters += char;
    } else {
      lowercaseLetters += char;
    }
  }

  return capitalLetters + lowercaseLetters;
}

console.log(capToFront("hApPy")); // Output: "APhpy"
console.log(capToFront("moveMENT")); // Output: "MENTmove"
console.log(capToFront("shOrtCAKE")); // Output: "OCAKEshrt"
