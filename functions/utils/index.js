module.exports = lauguage => {
  switch (lauguage.toLowerCase()) {
    case "fa":
      return (persianNumbers = require("./Persian"));
    case "azari":
      return (azariNumbers = require("./Azari"));
    case "s-ch":
      return (simpleChinese = require("./simpleChinese"));
    default:
      return (englishNumbers = require("./English"));
  }
};
