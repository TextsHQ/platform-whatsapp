module.exports = function (e) {
  return function (t) {
    if (t == null) {
      return undefined;
    } else {
      return t[e];
    }
  };
};