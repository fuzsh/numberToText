const twoDigit = require("./twoDigit");

module.exports = threeDigit = (input, language, seprator) => {
  const { hundredMultiples } = require("../../../numberToString")(language);

  let result = "";
  const divOfHundred = Math.floor(input / 100);
  const remOfHundred = input % 100;
  result += hundredMultiples[divOfHundred] ;
  //if (remOfHundred !== 0) result += seprator;
  result += twoDigit(remOfHundred, language, seprator) ;
  return result;
};
