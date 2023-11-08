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
var c = o(require("./629909.js"));
var s = o(require("./104422.js"));
var l = require("./181752.js");
var f = require("./234911.js");
exports.default = function (e) {
  var t = e.activeStartDate;
  var r = e.calendarType;
  var o = e.hover;
  var d = e.showFixedNumberOfWeeks;
  var p = e.showNeighboringMonth;
  var v = e.value;
  var h = e.valueType;
  var y = a(e, ["activeStartDate", "calendarType", "hover", "showFixedNumberOfWeeks", "showNeighboringMonth", "value", "valueType"]);
  var g = (0, f.mapCalendarType)(r);
  var m = (0, u.getYear)(t);
  var _ = (0, u.getMonth)(t);
  var b = d || p;
  var w = (0, l.getDayOfWeek)(t, g);
  var E = b ? 0 : w;
  var D = 1 + (b ? -w : 0);
  var O = function () {
    if (d) {
      return D + 42 - 1;
    }
    var e = (0, u.getDaysInMonth)(t);
    if (p) {
      var r = new Date();
      r.setFullYear(m, _, e);
      r.setHours(0, 0, 0, 0);
      return e + (7 - (0, l.getDayOfWeek)(r, g) - 1);
    }
    return e;
  }();
  return i.default.createElement(c.default, {
    className: "react-calendar__month-view__days",
    count: 7,
    dateTransform: function (e) {
      var t = new Date();
      t.setFullYear(m, _, e);
      return (0, u.getDayStart)(t);
    },
    dateType: "day",
    hover: o,
    end: O,
    renderTile: function (e) {
      var r = e.date;
      var o = a(e, ["date"]);
      return i.default.createElement(s.default, n({
        key: r.getTime()
      }, y, o, {
        activeStartDate: t,
        currentMonthIndex: _,
        date: r
      }));
    },
    offset: E,
    start: D,
    value: v,
    valueType: h
  });
};