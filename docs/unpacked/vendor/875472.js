var r = require("./882689.js");
var i = require("./701469.js");
module.exports = function (e, t, n, a) {
  if (e == null) {
    return [];
  } else {
    if (!i(t)) {
      t = t == null ? [] : [t];
    }
    if (!i(n = a ? undefined : n)) {
      n = n == null ? [] : [n];
    }
    return r(e, t, n);
  }
};