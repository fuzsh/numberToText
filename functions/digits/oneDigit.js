module.exports = oneDigit = (input, language) => {
  const { oneToTwenty } = require("../../numberToString")(language);

  return oneToTwenty[input];
};
