module.exports = lauguage => {  
  switch (lauguage.toLowerCase()) {
    case "fa":
      return {
        oneToTwenty: require("./persian/oneToTwenty"),
        tenMultiples: require("./persian/tenMultiples"),
        hundredMultiples: require("./persian/hundredMultiples"),
        thousandMultiples: require("./persian/thousandMultiples")
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
