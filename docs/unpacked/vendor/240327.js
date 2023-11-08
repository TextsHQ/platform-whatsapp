var r = require("./733448.js");
module.exports = function (e) {
  if (typeof e == "string" || r(e)) {
    return e;
  }
  var t = e + "";
  if (t == "0" && 1 / e == -Infinity) {
    return "-0";
  } else {
    return t;
  }
};