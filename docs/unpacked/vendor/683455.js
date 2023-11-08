module.exports = function (e) {
  return e.replace(/([.?*+\^$\[\]\\(){}|\-])/g, "\\$1");
};