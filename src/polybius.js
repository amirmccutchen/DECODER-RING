const polybiusModule = (function () {
  let decodes = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "(i/j)",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  }
  let encodes = {
    a: "11",
    b: "21",
    c: "31",
    d: "41",
    e: "51",
    f: "12",
    g: "22",
    h: "32",
    i: "42",
    j: "42",
    k: "52",
    l: "13",
    m: "23",
    n: "33",
    o: "43",
    p: "53",
    q: "14",
    r: "24",
    s: "34",
    t: "44",
    u: "54",
    v: "15",
    w: "25",
    x: "35",
    y: "45",
    z: "55",
  }
  const polybius = (input, encode = true) => {
    if (encode) {
      let lowerCase = input.toLowerCase();
      let encodedMessage = [...lowerCase].map((letter) => {
        if (letter.charCodeAt() < 97 || letter.charCodeAt() > 122)
          return letter;
        return encodes[letter];
      });
      return encodedMessage.join("");
    } else if (encode === false) {
      const result = [];
      if (input.split(" ").join("").length % 2 == 1) return false;
      for (let i = 0; i < input.length; i = i + 2) {
        let firstNumber = input[i];
        let nextNumber = input[i + 1];
        if (firstNumber === " ") {
          result.push(firstNumber);
          i = i - 1;
        } else {
          result.push(`${firstNumber}${nextNumber}`);
        }
      }
      let decodedResult = result.map((num) => {
        if (num === " ") return num;
        return decodes[num];
      });
      return decodedResult.join("");
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
