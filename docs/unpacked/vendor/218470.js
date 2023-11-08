var r = require("./977813.js");
module.exports = function (e, t) {
  for (var n = e.length; n--;) {
    if (r(e[n][0], t)) {
      return n;
    }
  }
  return -1;
};