var r = require("./14841.js");
module.exports = function (e) {
  return function (t, n) {
    if (!(typeof t == "string" && typeof n == "string")) {
      t = r(t);
      n = r(n);
    }
    return e(t, n);
  };
};