const isRequired = require("./isRequired");

const typeError = (paramName, type = isRequired("type")) => {
  throw new Error(`param |${paramName || ""}| type should be |${type}|`);
};

const digitGroupedTypeChecker = (
  amount,
  groupDigitBy,
  enChar,
  decimalCount,
  comma
) => {
  if (typeof amount !== "number") return typeError("amount", "number");
  if (typeof groupDigitBy !== "number")
    return typeError("groupDigitBy", "number");
  if (typeof enChar !== "boolean")
    return typeError("numbersInEnglishCharcters", "boolean");
  if (typeof decimalCount !== "number")
    return typeError("decimalCount", "number");
  if (typeof comma !== "string") return typeError("comma", "String");
  if (comma.length > 1) return typeError("comma", "Length Error");
};

module.exports = {
  digitGroupedTypeChecker,
  typeError
};
