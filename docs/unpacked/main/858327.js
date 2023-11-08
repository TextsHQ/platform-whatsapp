var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  var n;
  const a = e.maxLines;
  const d = (t = e.style) === null || t === undefined ? undefined : t.singleLine;
  const p = (n = e.style) === null || n === undefined ? undefined : n.multipleLine;
  const [m, h] = (0, i.useState)(d);
  const g = (0, s.default)(m);
  const {
    width: E
  } = (0, c.default)();
  const v = (0, s.default)(E);
  const _ = (0, i.useCallback)(e => {
    if (e == null || !(E > 0)) {
      return;
    }
    if (a === 1 || p == null) {
      return;
    }
    const t = (0, o.getNumberOfLines)(e);
    if (m === d && g === p && t > 1 || m !== p && (v == null || E < v) && t > 1) {
      h(p);
    } else if (m !== d && (v == null || E > v) && t === 1) {
      h(d);
    }
  }, [a, d, p, m, g, E, v]);
  let y;
  (0, l.default)(a >= 1, "expect lines to be >= 1");
  y = a === 1 ? {
    display: "block",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  } : {
    display: "-webkit-box",
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: a
  };
  return i.default.createElement("span", {
    ref: _,
    className: (0, r.classnamesConvertMeToStylexPlease)((0, u.default)(f), m),
    style: y,
    dir: e.dir
  }, e.children);
};
var r = require("../app/396574.js");
var o = require("./340939.js");
var l = a(require("../vendor/441143.js"));
var i = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = d(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../vendor/667294.js"));
var u = a(require("../app/156720.js"));
var s = a(require("../app/49710.js"));
var c = a(require("./28825.js"));
function d(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (d = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const f = {
  position: "g0rxnol2",
  overflowX: "gfz4du6o",
  overflowY: "r7fjleex"
};