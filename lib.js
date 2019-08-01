const {
  digitGroupedTypeChecker,
  typeError
} = require("./functions/variablesType");
const isRequired = require("./functions/isRequired");
const formatFragment = require("./functions/formatFragment");

Number.prototype.format = function(n, x, comma) {
  const re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\." : "$") + ")";
  return this.toFixed(Math.max(0, ~~n)).replace(
    new RegExp(re, "g"),
    `$&${comma}`
  );
};

class Iramount {
  constructor(amount = isRequired("amount"), language = "En") {
    if (typeof amount !== "number") typeError("amount", "number");
    const amountVal = amount;
    const languageVal = language;
    const { oneToTwenty, thousandMultiples } = require("./numberToString")(
      languageVal
    );

    return {
      amount: amountVal,
      language: languageVal,
      languageNumbers: require("./functions/utils")(languageVal),
      seprator: require("./functions/utils/seprator")(languageVal),
      digitGrouped: this.digitGrouped,
      oneToTwenty: oneToTwenty,
      thousandMultiples: thousandMultiples,
      toText: this.toText
    };
  }
}

Iramount.prototype.digitGrouped = function(options = {}) {
  let {
    numbersInEnglishCharcters = false,
    groupDigitBy = 3,
    decimalCount = 0,
    amount = this.amount,
    comma = ","
  } = options;

  digitGroupedTypeChecker(
    amount,
    groupDigitBy,
    numbersInEnglishCharcters,
    decimalCount,
    comma
  );

  if (numbersInEnglishCharcters === true)
    return amount.format(decimalCount, groupDigitBy, comma);
  return this.languageNumbers(amount.format(decimalCount, groupDigitBy, comma));
};

Iramount.prototype.toText = function(options = {}) {
  const {
    withDecimals = false,
    badge = "",
    seprator = this.seprator,
    secondBadge = ""
  } = options;
  if (!withDecimals || this.amount % 10 === 0)
    return toTextFormat.call(this, { badge, amount: parseInt(this.amount) });

  return (
    toTextFormat.call(this, { badge, amount: parseInt(this.amount) }) +
    seprator +
    toTextFormat.call(this, {
      badge: secondBadge,
      amount: parseInt((this.amount + "").split(".")[1])
    })
  );
};

function toTextFormat(options = {}) {
  const { badge = "", amount = this.amount } = options;
  const groups = this.digitGrouped({
    numbersInEnglishCharcters: true,
    amount
  }).split(",");
  return (
    groups
      .map((group, index) => {
        let number = parseInt(group);
        let Rep = "";
        if (number !== 0 && index !== 0) Rep += this.seprator;
        Rep += formatFragment(number, this.language, this.seprator);
        if (number !== 0)
          Rep += ` ${this.thousandMultiples[groups.length - 1 - index]}`;
        return Rep;
      })
      .join("")
      .trim() + ` ${badge}`
  );
}

module.exports = Iramount;
