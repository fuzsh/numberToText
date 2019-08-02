module.exports = lauguage => {
  switch (lauguage.toLowerCase()) {
    case "fa":
      return " و ";
    case "azari":
      return " ";
    case "tr":
      return " ";
    case "de":
      return "und";
    default:
      return " ";
  }
};
