module.exports = isRequired = paramName => {
  throw new Error(`param |${paramName || ""}| is Required`);
};
