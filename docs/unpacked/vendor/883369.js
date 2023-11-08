var r = require("./924785.js");
var i = require("./611285.js");
var a = require("./396000.js");
var o = require("./349916.js");
var s = require("./195265.js");
function u(e) {
  var t = -1;
  var n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n;) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
u.prototype.clear = r;
u.prototype.delete = i;
u.prototype.get = a;
u.prototype.has = o;
u.prototype.set = s;
module.exports = u;