const { test } = require("node:test");

const stringLength = (string) => {
  if (string.length > 0 && string.length <= 10) {
    return string.length;
  } else { 
    throw new Error("string's length must be bigger than 0 and less or equal to 10")
  }
  
}

const reverseString = (string) => {
  return string.split("").reverse().join("")
}

module.exports = { stringLength, reverseString }


