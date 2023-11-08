var t = Array.prototype.reverse;
module.exports = function (e) {
  if (e == null) {
    return e;
  } else {
    return t.call(e);
  }
};