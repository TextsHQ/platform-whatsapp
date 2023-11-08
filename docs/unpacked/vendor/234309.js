var r = require("./738407.js");
var i = require("./357071.js");
var a = require("./883369.js");
module.exports = function (e, t) {
  var n = this.__data__;
  if (n instanceof r) {
    var o = n.__data__;
    if (!i || o.length < 199) {
      o.push([e, t]);
      this.size = ++n.size;
      return this;
    }
    n = this.__data__ = new a(o);
  }
  n.set(e, t);
  this.size = n.size;
  return this;
};