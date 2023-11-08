var r = require("./538777.js");
module.exports = function (e, t, n) {
  if (t == "__proto__" && r) {
    r(e, t, {
      configurable: true,
      enumerable: true,
      value: n,
      writable: true
    });
  } else {
    e[t] = n;
  }
};