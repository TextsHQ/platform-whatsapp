var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusLink = undefined;
exports.cleanUrl = l;
exports.redactUrl = u;
var i = r(require("./679384.js"));
var a = require("./958971.js");
var o = r(require("../vendor/667294.js"));
function s(e, t) {
  if (t.length > 12 || t.length + e.length > 34) {
    return t.slice(0, function (e, t) {
      const n = Math.min(t.length, Math.max(t.length - 12, t.length + e.length - 34));
      return t.length - n;
    }(e, t));
  } else {
    return t;
  }
}
function l(e) {
  let {
    domain: t,
    path: n
  } = e;
  return [t.replace(/^www\./, ""), n == null || n.length === 1 ? "" : n];
}
function u(e, t) {
  const n = s(e, t);
  const r = e + (n.length === 1 ? "" : n);
  return (r.length > 34 ? `...${r.slice(r.length - 34)}` : r) + (t !== n ? "..." : "");
}
class c extends i.default {
  static jsx(e, t, n) {
    const [r, i] = l(t);
    const s = u(r, i);
    var c;
    if (s !== r + i) {
      return o.default.createElement(a.LongLink, {
        xstyle: n.linkXstyle,
        selectable: (c = n.selectable) !== null && c !== undefined && c,
        link: t
      }, s);
    } else {
      return super.jsx([r + i], t, n);
    }
  }
}
exports.StatusLink = c;