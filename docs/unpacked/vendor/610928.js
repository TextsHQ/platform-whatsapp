module.exports = function (e) {
  var t = e == null ? 0 : e.length;
  if (t) {
    return e[t - 1];
  } else {
    return undefined;
  }
};