const oneDigit = require("../oneDigit");

module.exports = twoDigit = (input, language, seprator) => {
  const { oneToTwenty, tenMultiples } = require("../../../numberToString")(
    language
  );
  if (input <= 20) return oneToTwenty[input];
  if (input === 71) return "soixante et onze";
  if (input >= 70 && input <= 79) return "soixante-" + oneToTwenty[input - 60];
  if (input === 80) return "quarte-vingts";
  if (input >= 81 && input <= 89)
    return "quarte-vingt-" + oneDigit(input - 80, language);
  if (input >= 90) return "quatre-vingt-" + oneToTwenty[input - 80];

  const divOfTen = Math.floor(input / 10);
  const remOfTen = input % 10;
  return remOfTen !== 0
    ? remOfTen !== 1
      ? tenMultiples[divOfTen] + "-" + oneDigit(remOfTen, language)
      : tenMultiples[divOfTen] + " et " + oneDigit(remOfTen, language)
    : tenMultiples[divOfTen];
};
