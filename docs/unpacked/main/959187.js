var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/63014.js");
var o = require("../app/780549.js");
var l = require("../app/305521.js");
var i = a(require("./929091.js"));
var u = a(require("../vendor/730381.js"));
var s = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = f(t);
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
var c = a(require("../app/969651.js"));
var d = require("../app/808446.js");
function f(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (f = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function p(e, t) {
  const {
    isFocusable: n,
    timestamp: a
  } = e;
  const f = (0, c.default)();
  const p = (0, s.useRef)(null);
  const [m, h] = (0, s.useState)(false);
  const g = (0, s.useMemo)(() => a >= (0, u.default)().startOf("day").subtract(7, "day").unix(), [a]);
  (0, d.useListener)(g ? o.Cmd : null, "midnight", f);
  const E = () => a;
  const v = () => {
    if (m) {
      h(false);
    }
  };
  const _ = () => {
    if (!m) {
      h(true);
    }
  };
  const y = () => p.current;
  let C;
  (0, s.useImperativeHandle)(t, () => ({
    getTimestamp: E,
    show: v,
    hide: _,
    getElement: y
  }));
  if (!m) {
    try {
      const t = r.Clock.relativeDateStr(e.timestamp);
      C = s.default.createElement(l.EmojiText, {
        direction: "auto",
        text: t.toString().toUpperCase()
      });
    } catch (e) {
      __LOG__(4, undefined, new Error(), undefined, ["date_marker"])`Clock.relativeDateStr threw with error ${e == null ? undefined : e.name}, stack: ${e == null ? undefined : e.stack}`;
    }
  }
  return s.default.createElement(i.default, {
    ref: p,
    hidden: m,
    isFocusable: n
  }, C);
}
var m = (0, s.forwardRef)(p);
exports.default = m;