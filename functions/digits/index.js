module.exports = language => {
  switch (language.toLowerCase()) {
    case "de":
      return {
        oneDigit: require("./oneDigit"),
        twoDigit: require("./germany/twoDigit"),
        threeDigit: require("./germany/threeDigit")
      };
    case "fr":
      return {
        oneDigit: require("./oneDigit"),
        twoDigit: require("./french/twoDigit"),
        threeDigit: require("./french/threeDigit")
      };
    default:
      return {
        oneDigit: require("./oneDigit"),
        twoDigit: require("./twoDigit"),
        threeDigit: require("./threeDigit")
      };
  }
};
