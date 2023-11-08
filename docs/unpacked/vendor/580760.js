var r = require("./989881.js");
module.exports = function (e, t) {
  var n = [];
  r(e, function (e, r, i) {
    if (t(e, r, i)) {
      n.push(e);
    }
  });
  return n;
};