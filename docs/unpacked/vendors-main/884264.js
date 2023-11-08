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
var u = o(require("./657531.js"));
var c = o(require("./557966.js"));
var s = o(require("./382316.js"));
var l = o(require("./513775.js"));
var f = o(require("./612430.js"));
var d = require("./771290.js");
var p = require("./151592.js");
var v = function (e) {
  var t = e.activeStartDate;
  var r = e.locale;
  var o = e.onMouseLeave;
  var u = e.showFixedNumberOfWeeks;
  var p = e.calendarType;
  var v = p === undefined ? function (e) {
    if (e) {
      for (var t = 0, r = Object.entries(d.CALENDAR_TYPE_LOCALES); t < r.length; t++) {
        var n = r[t];
        var a = n[0];
        if (n[1].includes(e)) {
          return a;
        }
      }
    }
    return d.CALENDAR_TYPES.ISO_8601;
  }(r) : p;
  var h = e.formatShortWeekday;
  var y = e.formatWeekday;
  var g = e.onClickWeekNumber;
  var m = e.showWeekNumbers;
  var _ = a(e, ["calendarType", "formatShortWeekday", "formatWeekday", "onClickWeekNumber", "showWeekNumbers"]);
  var b = "react-calendar__month-view";
  return i.default.createElement("div", {
    className: (0, c.default)(b, m ? "".concat(b, "--weekNumbers") : "")
  }, i.default.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end"
    }
  }, m ? i.default.createElement(f.default, {
    activeStartDate: t,
    calendarType: v,
    onClickWeekNumber: g,
    onMouseLeave: o,
    showFixedNumberOfWeeks: u
  }) : null, i.default.createElement("div", {
    style: {
      flexGrow: 1,
      width: "100%"
    }
  }, i.default.createElement(l.default, {
    calendarType: v,
    formatShortWeekday: h,
    formatWeekday: y,
    locale: r,
    onMouseLeave: o
  }), i.default.createElement(s.default, n({
    calendarType: v
  }, _)))));
};
v.propTypes = n(n({}, p.tileGroupProps), {
  calendarType: p.isCalendarType,
  formatDay: u.default.func,
  formatLongDate: u.default.func,
  formatShortWeekday: u.default.func,
  formatWeekday: u.default.func,
  onClickWeekNumber: u.default.func,
  onMouseLeave: u.default.func,
  showFixedNumberOfWeeks: u.default.bool,
  showNeighboringMonth: u.default.bool,
  showWeekNumbers: u.default.bool
});
exports.default = v;