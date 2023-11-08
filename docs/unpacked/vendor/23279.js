var r = require("./513218.js");
var i = require("./707771.js");
var a = require("./14841.js");
var o = Math.max;
var s = Math.min;
module.exports = function (e, t, n) {
  var u;
  var l;
  var c;
  var f;
  var d;
  var h;
  var p = 0;
  var m = false;
  var v = false;
  var g = true;
  if (typeof e != "function") {
    throw new TypeError("Expected a function");
  }
  function y(t) {
    var n = u;
    var r = l;
    u = l = undefined;
    p = t;
    return f = e.apply(r, n);
  }
  function b(e) {
    p = e;
    d = setTimeout(_, t);
    if (m) {
      return y(e);
    } else {
      return f;
    }
  }
  function w(e) {
    var n = e - h;
    return h === undefined || n >= t || n < 0 || v && e - p >= c;
  }
  function _() {
    var e = i();
    if (w(e)) {
      return x(e);
    }
    d = setTimeout(_, function (e) {
      var n = t - (e - h);
      if (v) {
        return s(n, c - (e - p));
      } else {
        return n;
      }
    }(e));
  }
  function x(e) {
    d = undefined;
    if (g && u) {
      return y(e);
    } else {
      u = l = undefined;
      return f;
    }
  }
  function S() {
    var e = i();
    var n = w(e);
    u = arguments;
    l = this;
    h = e;
    if (n) {
      if (d === undefined) {
        return b(h);
      }
      if (v) {
        clearTimeout(d);
        d = setTimeout(_, t);
        return y(h);
      }
    }
    if (d === undefined) {
      d = setTimeout(_, t);
    }
    return f;
  }
  t = a(t) || 0;
  if (r(n)) {
    m = !!n.leading;
    c = (v = "maxWait" in n) ? o(a(n.maxWait) || 0, t) : c;
    g = "trailing" in n ? !!n.trailing : g;
  }
  S.cancel = function () {
    if (d !== undefined) {
      clearTimeout(d);
    }
    p = 0;
    u = h = l = d = undefined;
  };
  S.flush = function () {
    if (d === undefined) {
      return f;
    } else {
      return x(i());
    }
  };
  return S;
};