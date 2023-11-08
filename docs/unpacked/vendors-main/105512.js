var n = require("../vendor/442118.js");
module.exports = function (e, t) {
  for (var r = e.length; r-- && n(t, e[r], 0) > -1;);
  return r;
};