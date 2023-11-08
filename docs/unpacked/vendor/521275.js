var t = Date.now;
module.exports = function (e) {
  var n = 0;
  var r = 0;
  return function () {
    var i = t();
    var a = 16 - (i - r);
    r = i;
    if (a > 0) {
      if (++n >= 800) {
        return arguments[0];
      }
    } else {
      n = 0;
    }
    return e.apply(undefined, arguments);
  };
};