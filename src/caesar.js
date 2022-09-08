const caesarModule = (function () {
  const caesar = (input, shift, encode = true) => {
    if (!shift || shift == 0 || shift < -25 || shift > 25) return false;
    if (encode === false) shift = shift - shift * 2;
    const lowerCaseInput = input.toLowerCase();
    const codedInput = [...lowerCaseInput].map((letter) => {
      let letterNum = letter.charCodeAt()
      if (letterNum < 97 || letterNum > 122)
        return String.fromCharCode(letterNum);
      let shiftedNum = letterNum + shift
      if (shiftedNum < 97) shiftedNum += 26
      if (shiftedNum > 122) shiftedNum -= 26
      return String.fromCharCode(shiftedNum);
    })
    return codedInput.join("")
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
