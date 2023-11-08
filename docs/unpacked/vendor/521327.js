var r = require("./894536.js");
var i = Object.prototype.hasOwnProperty;
module.exports = function (e) {
  var t = this.__data__;
  if (r) {
    return t[e] !== undefined;
  } else {
    return i.call(t, e);
  }
};