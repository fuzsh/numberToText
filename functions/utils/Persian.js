const numbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
module.exports = persianNumbers = input => {
  return input.toString().replace(/[0-9]/g, w => numbers[+w]);
};
