var r = require("./894536.js");
module.exports = function (e, t) {
  var n = this.__data__;
  this.size += this.has(e) ? 0 : 1;
  n[e] = r && t === undefined ? "__lodash_hash_undefined__" : t;
  return this;
};