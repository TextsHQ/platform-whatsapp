var n = this && this.__assign || function () {
  return (n = Object.assign || function (e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      for (var a in t = arguments[r]) {
        if (Object.prototype.hasOwnProperty.call(t, a)) {
          e[a] = t[a];
        }
      }
    }
    return e;
  }).apply(this, arguments);
};
var a = this && this.__rest || function (e, t) {
  var r = {};
  for (var n in e) {
    if (Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0) {
      r[n] = e[n];
    }
  }
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var a = 0;
    for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) {
      if (t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a])) {
        r[n[a]] = e[n[a]];
      }
    }
  }
  return r;
};
var o = this && this.__spreadArray || function (e, t, r) {
  if (r || arguments.length === 2) {
    for (var n, a = 0, o = t.length; a < o; a++) {
      if (!(!n && a in t)) {
        if (!n) {
          n = Array.prototype.slice.call(t, 0, a);
        }
        n[a] = t[a];
      }
    }
  }
  return e.concat(n || Array.prototype.slice.call(t));
};
var i = this && this.__importDefault || function (e) {
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
var u = i(require("../vendor/667294.js"));
var c = require("./339015.js");
var s = i(require("./544491.js"));
var l = require("./567286.js");
exports.default = function (e) {
  var t = e.classes;
  var r = t === undefined ? [] : t;
  var i = e.formatYear;
  var f = i === undefined ? l.formatYear : i;
  var d = a(e, ["classes", "formatYear"]);
  var p = d.date;
  var v = d.locale;
  return u.default.createElement(s.default, n({}, d, {
    classes: o(o([], r, true), ["react-calendar__decade-view__years__year"], false),
    maxDateTransform: c.getYearEnd,
    minDateTransform: c.getYearStart,
    view: "decade"
  }), f(v, p));
};