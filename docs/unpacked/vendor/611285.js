var r = require("./45050.js");
module.exports = function (e) {
  var t = r(this, e).delete(e);
  this.size -= t ? 1 : 0;
  return t;
};