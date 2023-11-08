var r = require("./218470.js");
module.exports = function (e) {
  var t = this.__data__;
  var n = r(t, e);
  if (n < 0) {
    return undefined;
  } else {
    return t[n][1];
  }
};