var r = require("./288306.js");
module.exports = function (e) {
  var t = r(e, function (e) {
    if (n.size === 500) {
      n.clear();
    }
    return e;
  });
  var n = t.cache;
  return t;
};