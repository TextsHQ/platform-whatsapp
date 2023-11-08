var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./7748.js"));
var a = require("./789437.js");
var o = r(require("./496964.js"));
var s = r(require("./329429.js"));
var l = r(require("./586658.js"));
var u = r(require("./927001.js"));
var c = r(require("./497194.js"));
var d = r(require("./68420.js"));
var p = r(require("../vendor/667294.js"));
var f = r(require("./156720.js"));
class _ extends o.default {
  static jsx(e, t, n) {
    let {
      selectable: r = false,
      linkXstyle: i
    } = n;
    const {
      href: a,
      suspiciousCharacters: o
    } = t;
    if (o == null ? undefined : o.size) {
      return p.default.createElement(d.default, {
        className: (0, f.default)(i),
        link: t,
        selectable: r
      }, e);
    } else {
      return p.default.createElement(u.default, {
        className: (0, f.default)(i),
        href: a,
        selectable: r
      }, e);
    }
  }
}
function g(e) {
  const {
    index: t,
    url: n
  } = e;
  const r = t + n.length - 1;
  return [t, t, r, r, e];
}
function m(e, t) {
  let n = 0;
  let r = 0;
  for (; n < e.length && r < t.length;) {
    const i = t[r][3] - e[n][3];
    if (i > 0) {
      n++;
    } else if (i < 0) {
      r++;
    } else {
      const i = t[r][3] - t[r][2];
      e[n][2] -= i;
      e[n][3] -= i;
      const a = e[n][5];
      a.href = a.href.slice(0, -i);
      a.path = a.path && a.path.slice(0, -i);
      a.url = a.url.slice(0, -i);
      r++;
      n++;
    }
  }
}
exports.default = _;
_.format = false;
_.compatibility = true;
_.match = (e, t) => {
  if (!t) {
    return [];
  }
  const {
    links: n = []
  } = t;
  return n.map(g);
};
_.conflictResolvers = new Map([[i.default, m], [l.default, m], [c.default, m], [s.default, m], [a.Code, m]]);