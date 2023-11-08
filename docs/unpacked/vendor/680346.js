var t = Function.prototype.toString;
module.exports = function (e) {
  if (e != null) {
    try {
      return t.call(e);
    } catch (e) {}
    try {
      return e + "";
    } catch (e) {}
  }
  return "";
};