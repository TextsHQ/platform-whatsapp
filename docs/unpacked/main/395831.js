var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    startAnimation: t,
    animationFrames: n,
    maxLoops: a
  } = e;
  const s = (0, u.default)();
  const c = (0, i.useRef)(false);
  const d = (0, i.useRef)(0);
  const f = (0, i.useRef)(false);
  const [p, m] = (0, i.useState)(null);
  const h = () => {
    if (!c.current) {
      c.current = true;
      (0, o.default)({
        animationFrames: n,
        signal: s,
        onFrameChange: e => m(e),
        shouldStop: () => d.current >= a || (f.current || d.current++, false)
      }).catch(e => {
        if (e.name !== r.ABORT_ERROR) {
          throw e;
        }
      }).finally(() => {
        c.current = false;
      });
    }
  };
  (0, i.useEffect)(() => {
    if (t) {
      h();
    } else {
      (() => {
        if (n.length === 0) {
          return;
        }
        m(n[0].rgbaBuffer);
      })();
    }
  }, []);
  if (!p) {
    return null;
  }
  return i.default.createElement(l.default, {
    rgbaBuffer: p,
    className: e.className,
    width: e.width,
    height: e.height,
    onClick: e.onClick,
    onMouseEnter: () => {
      if (a !== 1 / 0) {
        f.current = true;
        d.current = 1;
        h();
      }
    },
    onMouseLeave: () => {
      f.current = false;
    }
  });
};
var r = require("../app/898817.js");
var o = a(require("./724199.js"));
var l = a(require("./406102.js"));
var i = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = s(t);
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
var u = a(require("../app/895851.js"));
function s(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (s = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}