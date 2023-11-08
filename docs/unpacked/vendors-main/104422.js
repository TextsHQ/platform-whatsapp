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
var o = this && this.__importDefault || function (e) {
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
var i = o(require("../vendor/667294.js"));
var u = require("./339015.js");
var c = o(require("./544491.js"));
var s = require("./181752.js");
var l = require("./567286.js");
var f = require("./234911.js");
var d = "react-calendar__month-view__days__day";
exports.default = function (e) {
  var t = e.calendarType;
  var r = e.classes;
  var o = r === undefined ? [] : r;
  var p = e.currentMonthIndex;
  var v = e.formatDay;
  var h = v === undefined ? l.formatDay : v;
  var y = e.formatLongDate;
  var g = y === undefined ? l.formatLongDate : y;
  var m = a(e, ["calendarType", "classes", "currentMonthIndex", "formatDay", "formatLongDate"]);
  var _ = (0, f.mapCalendarType)(t);
  var b = m.date;
  var w = m.locale;
  var E = [];
  if (o) {
    E.push.apply(E, o);
  }
  E.push(d);
  if ((0, s.isWeekend)(b, _)) {
    E.push("".concat(d, "--weekend"));
  }
  if (b.getMonth() !== p) {
    E.push("".concat(d, "--neighboringMonth"));
  }
  return i.default.createElement(c.default, n({}, m, {
    classes: E,
    formatAbbr: g,
    maxDateTransform: u.getDayEnd,
    minDateTransform: u.getDayStart,
    view: "month"
  }), h(w, b));
};