var r = require("./48041.js");
var i = require("./785903.js");
var a = require("./683455.js");
var o = {};
function s(e) {
  if (!o[e]) {
    o[e] = new RegExp(e, "i");
  }
  return o[e];
}
var u = s(["грн.", "ден.", "лв.", "ман.", "դր.", "ج.م.", "د.إ.", "د.ا.", "د.ب.", "د.ت.", "د.ج.", "د.ع.", "د.ك.", "د.ل.", "د.م.", "ر.س.", "ر.ع.", "ر.ق.", "ر.ي.", "ل.س.", "ل.ل.", "ރ.", "B/.", "Bs.", "Fr.", "kr.", "L.", "p.", "S/."].reduce(function (e, t, n) {
  return e + (n ? "|" : "") + "(" + a(t) + ")";
}, ""));
function l(e, t) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ".";
  var i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
    primaryGroupSize: 3,
    secondaryGroupSize: 3
  };
  var u = arguments.length > 6 ? arguments[6] : undefined;
  var l = o.primaryGroupSize || 3;
  var f = o.secondaryGroupSize || l;
  var d = u && u.digits;
  var h = (t == null ? e.toString() : typeof e == "string" ? m(e, t) : p(e, t)).split(".");
  var v = h[0];
  var g = h[1];
  if (Math.abs(parseInt(v, 10)).toString().length >= i) {
    var y = "";
    var b = "$1" + n + "$2$3";
    var w = "(\\d)(\\d{" + (l - 0) + "})($|\\D)";
    if ((y = v.replace(s(w), b)) != v) {
      v = y;
      for (var _ = "(\\d)(\\d{" + (f - 0) + "})(" + a(n) + ")", x = s(_); (y = v.replace(x, b)) != v;) {
        v = y;
      }
    }
  }
  if (d != null) {
    v = c(v, d);
    g = g && c(g, d);
  }
  var S = v;
  if (g) {
    S += r + g;
  }
  return S;
}
function c(e, t) {
  for (var n = "", r = 0; r < e.length; ++r) {
    var i = t[e.charCodeAt(r) - 48];
    n += i !== undefined ? i : e[r];
  }
  return n;
}
function f() {
  var e = r.getNumberFormatConfigOverride();
  return e || i.get(r.getViewerContext().locale);
}
function d(e, t) {
  var n = f();
  return l(e, t, n.numberDelimiter, n.decimalSeparator, n.minDigitsForThousandsSeparator, n.standardDecimalPatternInfo, n.numberingSystemData);
}
function h(e) {
  return e && Math.floor(Math.log10(Math.abs(e)));
}
function p(e, t) {
  var n = t == null ? 0 : t;
  var r = Math.pow(10, n);
  var i = e;
  i = Math.round(i * r) / r;
  i += "";
  if (!n) {
    return i;
  }
  if (i.indexOf("e-") !== -1) {
    return i;
  }
  var a = i.indexOf(".");
  var o = 0;
  if (a == -1) {
    i += ".";
    o = n;
  } else {
    o = n - (i.length - a - 1);
  }
  for (var s = 0, u = o; s < u; s++) {
    i += "0";
  }
  return i;
}
function m(e, t) {
  var n = e.indexOf(".");
  var r = n === -1 ? e : e.slice(0, n);
  var i = n === -1 ? "" : e.slice(n + 1);
  if (t != null) {
    return r + "." + function (e, t) {
      for (var n = e, r = 0; r < t; r++) {
        n += "0";
      }
      return n;
    }(i.slice(0, t), t - i.length);
  } else {
    return r;
  }
}
function v(e, t) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var r = y();
  var i = e;
  if (r) {
    i = e.split("").map(function (e) {
      return r[e] || e;
    }).join("").trim();
  }
  i = (i = i.replace(/^[^\d]*\-/, "")).replace(u, "");
  var o = a(t);
  var l = a(n);
  var c = s("^[^\\d]*\\d.*" + o + ".*\\d[^\\d]*$");
  if (!c.test(i)) {
    var f = s("(^[^\\d]*)" + o + "(\\d*[^\\d]*$)");
    if (f.test(i)) {
      return g(i = i.replace(f, "$1$2"));
    }
    var d = s("^[^\\d]*[\\d " + a(l) + "]*[^\\d]*$");
    if (!d.test(i)) {
      i = "";
    }
    return g(i);
  }
  var h = s("(^[^\\d]*[\\d " + l + "]*)" + o + "(\\d*[^\\d]*$)");
  return g(i = h.test(i) ? i.replace(h, "$1$2") : "");
}
function g(e) {
  var t = e.replace(/[^0-9\u0001\u0002]/g, "").replace("", ".").replace("", "-");
  var n = Number(t);
  if (t === "" || isNaN(n)) {
    return null;
  } else {
    return n;
  }
}
function y() {
  var e = f();
  var t = {};
  var n = e.numberingSystemData && e.numberingSystemData.digits;
  if (n == null) {
    return null;
  }
  for (var r = 0; r < n.length; r++) {
    t[n.charAt(r)] = r.toString();
  }
  return t;
}
var b = {
  formatNumber: function (e, t) {
    var n = f();
    return l(e, t, "", n.decimalSeparator, n.minDigitsForThousandsSeparator, n.standardDecimalPatternInfo, n.numberingSystemData);
  },
  formatNumberRaw: l,
  formatNumberWithThousandDelimiters: d,
  formatNumberWithLimitedSigFig: function (e, t, n) {
    var r = h(e);
    var i = e;
    if (r < n) {
      i = e * Math.pow(10, -r + n);
    }
    var a = Math.pow(10, h(i) - n + 1);
    var o = Math.round(i / a) * a;
    if (r < n && (o /= Math.pow(10, -r + n), t == null)) {
      return d(o, n - r - 1);
    } else {
      return d(o, t);
    }
  },
  parseNumber: function (e) {
    var t = f();
    return v(e, t.decimalSeparator || ".", t.numberDelimiter);
  },
  parseNumberRaw: v,
  truncateLongNumber: m,
  getFloatString: function (e, t, n) {
    var r = String(e).split(".");
    var i = b.getIntegerString(r[0], t);
    if (r.length === 1) {
      return i;
    } else {
      return i + n + r[1];
    }
  },
  getIntegerString: function (e, t) {
    var n = t;
    if (n === "") {
      n = ",";
    }
    for (var r = String(e), i = /(\d+)(\d{3})/; i.test(r);) {
      r = r.replace(i, "$1" + n + "$2");
    }
    return r;
  }
};
module.exports = b;