var r = require("./640554.js");
module.exports = function (e, t) {
  var n;
  if (typeof t != "function") {
    throw new TypeError("Expected a function");
  }
  e = r(e);
  return function () {
    if (--e > 0) {
      n = t.apply(this, arguments);
    }
    if (e <= 1) {
      t = undefined;
    }
    return n;
  };
};