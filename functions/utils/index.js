module.exports = lauguage => {
  switch (lauguage.toLowerCase()) {
    case "fa":
      return (persianNumbers = require("./Persian"));
    case "s-ch":
      return (simpleChinese = require("./simpleChinese"));
    default:
      return (englishNumbers = require("./English"));
  }
};
