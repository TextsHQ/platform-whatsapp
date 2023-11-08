var r = require("./646384.js");
var i = require("./477412.js");
var a = require("./234865.js");
var o = require("./744037.js");
var s = require("./163886.js");
var u = require("./364626.js");
var l = require("./200278.js");
var c = require("./318805.js");
var f = require("./201911.js");
var d = require("./458234.js");
var h = require("./946904.js");
var p = require("./664160.js");
var m = require("./43824.js");
var v = require("./529148.js");
var g = require("./738517.js");
var y = require("./701469.js");
var b = require("./644144.js");
var w = require("./356688.js");
var _ = require("./513218.js");
var x = require("./472928.js");
var S = require("./3674.js");
var E = require("./481704.js");
var k = "[object Arguments]";
var O = "[object Function]";
var N = "[object Object]";
var T = {};
T[k] = T["[object Array]"] = T["[object ArrayBuffer]"] = T["[object DataView]"] = T["[object Boolean]"] = T["[object Date]"] = T["[object Float32Array]"] = T["[object Float64Array]"] = T["[object Int8Array]"] = T["[object Int16Array]"] = T["[object Int32Array]"] = T["[object Map]"] = T["[object Number]"] = T[N] = T["[object RegExp]"] = T["[object Set]"] = T["[object String]"] = T["[object Symbol]"] = T["[object Uint8Array]"] = T["[object Uint8ClampedArray]"] = T["[object Uint16Array]"] = T["[object Uint32Array]"] = true;
T["[object Error]"] = T[O] = T["[object WeakMap]"] = false;
module.exports = function e(t, n, M, R, A, P) {
  var C;
  var D = n & 1;
  var U = n & 2;
  var I = n & 4;
  if (M) {
    C = A ? M(t, R, A, P) : M(t);
  }
  if (C !== undefined) {
    return C;
  }
  if (!_(t)) {
    return t;
  }
  var L = y(t);
  if (L) {
    C = m(t);
    if (!D) {
      return l(t, C);
    }
  } else {
    var j = p(t);
    var F = j == O || j == "[object GeneratorFunction]";
    if (b(t)) {
      return u(t, D);
    }
    if (j == N || j == k || F && !A) {
      C = U || F ? {} : g(t);
      if (!D) {
        if (U) {
          return f(t, s(C, t));
        } else {
          return c(t, o(C, t));
        }
      }
    } else {
      if (!T[j]) {
        if (A) {
          return t;
        } else {
          return {};
        }
      }
      C = v(t, j, D);
    }
  }
  if (!P) {
    P = new r();
  }
  var z = P.get(t);
  if (z) {
    return z;
  }
  P.set(t, C);
  if (x(t)) {
    t.forEach(function (r) {
      C.add(e(r, n, M, r, t, P));
    });
  } else if (w(t)) {
    t.forEach(function (r, i) {
      C.set(i, e(r, n, M, i, t, P));
    });
  }
  var B = L ? undefined : (I ? U ? h : d : U ? E : S)(t);
  i(B || t, function (r, i) {
    if (B) {
      r = t[i = r];
    }
    a(C, i, e(r, n, M, i, t, P));
  });
  return C;
};