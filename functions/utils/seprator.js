module.exports = lauguage => {
  switch (lauguage.toLowerCase()) {
    case "fa":
      return " و ";
    case "de":
      return "und";
    default:
      return " ";
  }
};
