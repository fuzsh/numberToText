const numbers = ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
module.exports = simpleChineseNumbers = input => {
  return input.toString().replace(/[0-9]/g, w => numbers[+w]);
};
