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
    case "tr":
      return {
        oneToTwenty: require("./turkish/oneToTwenty"),
        tenMultiples: require("./turkish/tenMultiples"),
        hundredMultiples: require("./turkish/hundredMultiples"),
        thousandMultiples: require("./turkish/thousandMultiples")
      };
    case "de":
      return {
        oneToTwenty: require("./germany/oneToTwenty"),
        tenMultiples: require("./germany/tenMultiples"),
        hundredMultiples: require("./germany/hundredMultiples"),
        thousandMultiples: require("./germany/thousandMultiples")
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
