var r = require("./859713.js");
function i(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    if (t) {
      r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      });
    }
    n.push.apply(n, r);
  }
  return n;
}
module.exports = function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    if (t % 2) {
      i(Object(n), true).forEach(function (t) {
        r(e, t, n[t]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
    } else {
      i(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
  }
  return e;
};
module.exports.default = module.exports;
module.exports.__esModule = true;