var t = Object.prototype;
module.exports = function (e) {
  var n = e && e.constructor;
  return e === (typeof n == "function" && n.prototype || t);
};