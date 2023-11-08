module.exports = function (e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= 9007199254740991;
};