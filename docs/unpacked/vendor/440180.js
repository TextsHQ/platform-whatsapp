var r = require("./314259.js");
module.exports = function (e, t, n) {
  var i = e.length;
  n = n === undefined ? i : n;
  if (!t && n >= i) {
    return e;
  } else {
    return r(e, t, n);
  }
};