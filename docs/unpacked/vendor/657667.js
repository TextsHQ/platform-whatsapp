var r = require("./894536.js");
var i = Object.prototype.hasOwnProperty;
module.exports = function (e) {
  var t = this.__data__;
  if (r) {
    var n = t[e];
    if (n === "__lodash_hash_undefined__") {
      return undefined;
    } else {
      return n;
    }
  }
  if (i.call(t, e)) {
    return t[e];
  } else {
    return undefined;
  }
};