module.exports = function (e, t) {
  return function (n) {
    return n != null && n[e] === t && (t !== undefined || e in Object(n));
  };
};