function r(e, t, n) {
  if (t in e) {
    Object.defineProperty(e, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    e[t] = n;
  }
  return e;
}
var i = require("./48041.js");
var a = require("./781536.js");
var o = require("./575748.js");
var s = require("./441143.js");
var u = function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {};
    var i = Object.keys(n);
    if (typeof Object.getOwnPropertySymbols == "function") {
      i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable;
      }));
    }
    i.forEach(function (t) {
      r(e, t, n[t]);
    });
  }
  return e;
}({}, o, {
  _param: function (e, t, n) {
    if (!(typeof t == "string" || t instanceof a)) {
      s(false);
    }
    return o._param(e, t, n);
  },
  _plural: function (e, t, n) {
    if (!(n == null || typeof n == "string" || n instanceof a)) {
      s(false);
    }
    return o._plural(e, t, n);
  },
  _wrapContent: function (e, t, n, r) {
    var a = typeof e == "string" ? [e] : e;
    var o = i.getErrorListener({
      hash: n,
      translation: t
    });
    return i.getFbsResult({
      contents: a,
      errorListener: o,
      extraOptions: r,
      patternHash: n,
      patternString: t
    });
  }
});
module.exports = u;