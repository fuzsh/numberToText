const numbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
module.exports = azariNumbers = input => {
  return input.toString().replace(/[0-9]/g, w => numbers[+w]);
};
