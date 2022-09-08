const substitutionModule = (function () {
  let theAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let cipher = [];

  const substitution = (input, alphabet, encode = true) => {
    if (!alphabet || alphabet.length !== 26) return false;
    let freshCheck = new Set(alphabet);
    if (theAlphabet.length !== [...freshCheck].length) return false;
    alphabet.split("");
    if (encode) {
      for (let i = 0; i < 25; i++) {
        cipher[theAlphabet[i]] = alphabet[i];
      }
    } else {
      for (let i = 0; i < 25; i++) {
        cipher[alphabet[i]] = theAlphabet[i];
      }
    }
    let result = input
      .toLowerCase()
      .split("")
      .map((letter) => {
        if (letter === " ") return " "
        return cipher[letter]
      });
    return result.join("")
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
