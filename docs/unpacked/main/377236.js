var a = require("../app/530066.js").default;
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    canCompose: t,
    selectable: n,
    setScrollBottom: r,
    getScrollBottom: f,
    onComposeHeightChange: p
  } = e;
  const h = (0, c.useRef)(null);
  const g = (0, c.useRef)(0);
  const E = (0, c.useRef)(null);
  const v = (0, c.useRef)();
  const _ = (0, c.useRef)(false);
  (0, c.useEffect)(() => {
    if (!t) {
      g.current = 0;
    }
  }, [t]);
  const y = () => Math.max(0, g.current);
  const C = () => {
    const e = y();
    if (h.current) {
      h.current.style.height = `${e}px`;
    }
  };
  let b;
  if (n) {
    b = c.default.createElement("div", {
      ref: h,
      className: (0, d.default)(m)
    });
  } else if (t) {
    b = c.default.createElement("div", {
      ref: h,
      style: {
        height: `${y()}px`
      },
      className: (0, d.default)(m)
    });
  }
  return {
    msgPanelRef: E,
    filler: b,
    handleComposeHeightChange: (e, t) => {
      var n;
      let {
        input: c,
        overlay: d = 0
      } = e;
      const m = E.current;
      const h = f();
      if (!m || h == null) {
        return;
      }
      if (c !== undefined) {
        return void p(c);
      }
      if (t) {
        g.current = d;
        C();
        return void r(h);
      }
      var y;
      g.current += d;
      if (d < 0) {
        C();
        r(h);
      }
      if (v.current) {
        _.current = true;
        if (!((y = v.current) === null || y === undefined)) {
          y.controller.abort();
        }
      }
      const b = new a();
      const M = b.signal;
      const S = (((n = v.current) === null || n === undefined ? undefined : n.promise) || Promise.resolve()).then(() => (0, s.default)(m, {
        translateY: d > 0 ? [-d, 0] : [0, d]
      }, {
        duration: 300,
        easing: [0.1, 0.82, 0.25, 1]
      }));
      const T = (0, i.default)(S, M).catch((0, l.filteredCatch)(u.Unmount, () => {})).then(() => {
        if (M.aborted) {
          throw new o.AbortError();
        }
        if (d > 0) {
          C();
        }
        m.style.transform = "";
        if (d > 0) {
          r(h);
        }
      }).catch((0, o.catchAbort)(() => {
        (0, s.default)(m, "finish", true);
      })).then(() => {
        if (_.current) {
          _.current = false;
        } else {
          v.current = undefined;
        }
      });
      v.current = {
        promise: T,
        controller: b
      };
    }
  };
};
var o = require("../app/898817.js");
var l = require("../app/122583.js");
var i = r(require("../app/229922.js"));
var u = p(require("../app/288057.js"));
var s = r(require("../app/330619.js"));
var c = p(require("../vendor/667294.js"));
var d = r(require("../app/156720.js"));
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
}
const m = {
  flexGrow: "tvf2evcx",
  flexShrink: "oq44ahr5",
  flexBasis: "lb5m6g5c",
  order: "e3u7tipa"
};