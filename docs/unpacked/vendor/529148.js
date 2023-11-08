var r = require("./274318.js");
var i = require("./257157.js");
var a = require("./593147.js");
var o = require("./540419.js");
var s = require("./477133.js");
module.exports = function (e, t, n) {
  var u = e.constructor;
  switch (t) {
    case "[object ArrayBuffer]":
      return r(e);
    case "[object Boolean]":
    case "[object Date]":
      return new u(+e);
    case "[object DataView]":
      return i(e, n);
    case "[object Float32Array]":
    case "[object Float64Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object Int32Array]":
    case "[object Uint8Array]":
    case "[object Uint8ClampedArray]":
    case "[object Uint16Array]":
    case "[object Uint32Array]":
      return s(e, n);
    case "[object Map]":
      return new u();
    case "[object Number]":
    case "[object String]":
      return new u(e);
    case "[object RegExp]":
      return a(e);
    case "[object Set]":
      return new u();
    case "[object Symbol]":
      return o(e);
  }
};