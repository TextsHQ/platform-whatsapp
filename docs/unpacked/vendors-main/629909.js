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
var o = n(require("./28615.js"));
var i = require("./234911.js");
exports.default = function (e) {
  for (var t = e.className, r = e.count, n = r === undefined ? 3 : r, u = e.dateTransform, c = e.dateType, s = e.end, l = e.hover, f = e.offset, d = e.renderTile, p = e.start, v = e.step, h = v === undefined ? 1 : v, y = e.value, g = e.valueType, m = [], _ = p; _ <= s; _ += h) {
    var b = u(_);
    m.push(d({
      classes: (0, i.getTileClasses)({
        date: b,
        dateType: c,
        hover: l,
        value: y,
        valueType: g
      }),
      date: b
    }));
  }
  return a.default.createElement(o.default, {
    className: t,
    count: n,
    offset: f,
    wrap: true
  }, m);
};