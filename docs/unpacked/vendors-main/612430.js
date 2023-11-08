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
var a = n(require("../vendor/667294.js"));
var o = require("./339015.js");
var i = n(require("./360044.js"));
var u = n(require("./28615.js"));
var c = require("./181752.js");
var s = require("./234911.js");
exports.default = function (e) {
  var t = e.activeStartDate;
  var r = e.calendarType;
  var n = e.onClickWeekNumber;
  var l = e.onMouseLeave;
  var f = e.showFixedNumberOfWeeks;
  var d = (0, s.mapCalendarType)(r);
  var p = function () {
    if (f) {
      return 6;
    }
    var e = (0, o.getDaysInMonth)(t) - (7 - (0, c.getDayOfWeek)(t, d));
    return 1 + Math.ceil(e / 7);
  }();
  var v = function () {
    for (var e = (0, o.getYear)(t), r = (0, o.getMonth)(t), n = (0, o.getDate)(t), a = [], i = 0; i < p; i += 1) {
      a.push((0, c.getBeginOfWeek)(new Date(e, r, n + i * 7), d));
    }
    return a;
  }();
  var h = v.map(function (e) {
    return (0, c.getWeekNumber)(e, d);
  });
  return a.default.createElement(u.default, {
    className: "react-calendar__month-view__weekNumbers",
    count: p,
    direction: "column",
    onFocus: l,
    onMouseOver: l,
    style: {
      flexBasis: "calc(100% * (1 / 8)",
      flexShrink: 0
    }
  }, h.map(function (e, t) {
    var r = v[t];
    if (!r) {
      throw new Error("date is not defined");
    }
    return a.default.createElement(i.default, {
      key: e,
      date: r,
      onClickWeekNumber: n,
      weekNumber: e
    });
  }));
};