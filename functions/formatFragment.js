const { oneDigit, twoDigit, threeDigit } = require("./digits");

module.exports = formatFragment = (input, language, seprator) => {
  if (input >= 100 && input <= 999)
    return threeDigit(input, language, seprator);
  if (input >= 10 && input <= 99) return twoDigit(input, language, seprator);
  if (input >= 0 && input <= 9) return oneDigit(input, language);
  return "";
};
