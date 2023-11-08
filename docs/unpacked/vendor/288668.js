var r = require("./883369.js");
var i = require("./90619.js");
var a = require("./572385.js");
function o(e) {
  var t = -1;
  var n = e == null ? 0 : e.length;
  for (this.__data__ = new r(); ++t < n;) {
    this.add(e[t]);
  }
}
o.prototype.add = o.prototype.push = i;
o.prototype.has = a;
module.exports = o;