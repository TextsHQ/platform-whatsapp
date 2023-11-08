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
exports.formatYear = exports.formatWeekday = exports.formatShortWeekday = exports.formatMonthYear = exports.formatMonth = exports.formatLongDate = exports.formatDay = exports.formatDate = undefined;
var a = n(require("./760235.js"));
var o = new Map();
function i(e) {
  return function (t, r) {
    return function (e) {
      return function (t, r) {
        var n = t || (0, a.default)();
        if (!o.has(n)) {
          o.set(n, new Map());
        }
        var i = o.get(n);
        if (!i.has(e)) {
          i.set(e, new Intl.DateTimeFormat(n || undefined, e).format);
        }
        return i.get(e)(r);
      };
    }(e)(t, function (e) {
      var t = new Date(e);
      return new Date(t.setHours(12));
    }(r));
  };
}
exports.formatDate = i({
  day: "numeric",
  month: "numeric",
  year: "numeric"
});
exports.formatDay = i({
  day: "numeric"
});
exports.formatLongDate = i({
  day: "numeric",
  month: "long",
  year: "numeric"
});
exports.formatMonth = i({
  month: "long"
});
exports.formatMonthYear = i({
  month: "long",
  year: "numeric"
});
exports.formatShortWeekday = i({
  weekday: "short"
});
exports.formatWeekday = i({
  weekday: "long"
});
exports.formatYear = i({
  year: "numeric"
});