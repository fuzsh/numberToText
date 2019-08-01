module.exports = lauguage => {
  switch (lauguage.toLowerCase()) {
    case "fa":
      return {
        oneToTwenty: require("./persian/oneToTwenty"),
        tenMultiples: require("./persian/tenMultiples"),
        hundredMultiples: require("./persian/hundredMultiples"),
        thousandMultiples: require("./persian/thousandMultiples")
      };
    case "azari":
      return {
        oneToTwenty: require("./azari/oneToTwenty"),
        tenMultiples: require("./azari/tenMultiples"),
        hundredMultiples: require("./azari/hundredMultiples"),
        thousandMultiples: require("./azari/thousandMultiples")
      };
    default:
      return {
        oneToTwenty: require("./persian/oneToTwenty"),
        tenMultiples: require("./persian/tenMultiples"),
        hundredMultiples: require("./persian/hundredMultiples"),
        thousandMultiples: require("./persian/thousandMultiples")
      };
  }
};
