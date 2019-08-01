module.exports = language => {
  switch (language.toLowerCase()) {
    case "de":
      return {
        oneDigit: require("./oneDigit"),
        twoDigit: require("./twoDigit"),
        threeDigit: require("./threeDigit")
      };
    default:
      return {
        oneDigit: require("./oneDigit"),
        twoDigit: require("./twoDigit"),
        threeDigit: require("./threeDigit")
      };
  }
};
