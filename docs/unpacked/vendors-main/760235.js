var n = this && this.__importDefault || function (e) {
  if (e && e.__esModule) {
    return e;
  } else {
    return {
      default: e
    };
  }
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserLocale = exports.getUserLocales = undefined;
var a = n(require("./220773.js"));
function o(e) {
  return JSON.stringify(e);
}
function i(e) {
  return typeof e == "string";
}
function u(e, t, r) {
  return r.indexOf(e) === t;
}
function c(e) {
  if (e.indexOf(",") === -1) {
    return e;
  } else {
    return e.split(",");
  }
}
function s(e) {
  if (!e) {
    return e;
  }
  if (e === "C" || e === "posix" || e === "POSIX") {
    return "en-US";
  }
  if (e.indexOf(".") !== -1) {
    var t = e.split(".")[0];
    return s(t === undefined ? "" : t);
  }
  if (e.indexOf("@") !== -1) {
    var r = e.split("@")[0];
    return s(r === undefined ? "" : r);
  }
  if (e.indexOf("-") === -1 || (n = e).toLowerCase() !== n) {
    return e;
  }
  var n;
  var a = e.split("-");
  var o = a[0];
  var i = a[1];
  var u = i === undefined ? "" : i;
  return "".concat(o, "-").concat(u.toUpperCase());
}
exports.getUserLocales = (0, a.default)(function (e) {
  var t = e === undefined ? {} : e;
  var r = t.useFallbackLocale;
  var n = r === undefined || r;
  var a = t.fallbackLocale;
  var o = a === undefined ? "en-US" : a;
  var l = [];
  if (typeof navigator != "undefined") {
    for (var f = [], d = 0, p = navigator.languages || []; d < p.length; d++) {
      var v = p[d];
      f = f.concat(c(v));
    }
    var h = navigator.language;
    var y = h ? c(h) : h;
    l = l.concat(f, y);
  }
  if (n) {
    l.push(o);
  }
  return l.filter(i).map(s).filter(u);
}, o);
exports.getUserLocale = (0, a.default)(function (e) {
  return (0, exports.getUserLocales)(e)[0] || null;
}, o);
exports.default = exports.getUserLocale;