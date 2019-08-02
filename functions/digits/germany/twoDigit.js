const oneDigit = require("../oneDigit");

module.exports = twoDigit = (input, language, seprator) => {
  const { oneToTwenty, tenMultiples } = require("../../../numberToString")(
    language
  );
  if (input <= 20) return oneToTwenty[input];
  const divOfTen = Math.floor(input / 10);
  const remOfTen = input % 10;
  return remOfTen !== 0
    ? remOfTen !== 1
      ? oneDigit(remOfTen, language) + seprator + tenMultiples[divOfTen]
      : oneDigit(remOfTen, language).replace(/s$/g, "") +
        seprator +
        tenMultiples[divOfTen]
    : tenMultiples[divOfTen];
};
