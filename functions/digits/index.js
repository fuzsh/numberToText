module.exports = language => {
  switch (language.toLowerCase()) {
    case "de":
      return {
        oneDigit: require("./oneDigit"),
        twoDigit: require("./germany/twoDigit"),
        threeDigit: require("./germany/threeDigit")
      };
    default:
      return {
        oneDigit: require("./oneDigit"),
        twoDigit: require("./twoDigit"),
        threeDigit: require("./threeDigit")
      };
  }
};
