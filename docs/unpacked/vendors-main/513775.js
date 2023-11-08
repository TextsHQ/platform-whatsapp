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
var o = n(require("./557966.js"));
var i = require("./339015.js");
var u = n(require("./28615.js"));
var c = require("./181752.js");
var s = require("./567286.js");
var l = require("./234911.js");
var f = "react-calendar__month-view__weekdays";
var d = "".concat(f, "__weekday");
exports.default = function (e) {
  for (var t = e.calendarType, r = e.formatShortWeekday, n = r === undefined ? s.formatShortWeekday : r, p = e.formatWeekday, v = p === undefined ? s.formatWeekday : p, h = e.locale, y = e.onMouseLeave, g = (0, l.mapCalendarType)(t), m = new Date(), _ = (0, i.getMonthStart)(m), b = (0, i.getYear)(_), w = (0, i.getMonth)(_), E = [], D = 1; D <= 7; D += 1) {
    var O = new Date(b, w, D - (0, c.getDayOfWeek)(_, g));
    var S = v(h, O);
    E.push(a.default.createElement("div", {
      key: D,
      className: (0, o.default)(d, (0, c.isCurrentDayOfWeek)(O) && "".concat(d, "--current"), (0, c.isWeekend)(O, g) && "".concat(d, "--weekend"))
    }, a.default.createElement("abbr", {
      "aria-label": S,
      title: S
    }, n(h, O).replace(".", ""))));
  }
  return a.default.createElement(u.default, {
    className: f,
    count: 7,
    onFocus: y,
    onMouseOver: y
  }, E);
};