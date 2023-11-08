var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Type = exports.ContextMenuManager = undefined;
var i = r(require("../vendor/81109.js"));
var a = require("./780549.js");
var o = require("./664149.js");
var s = r(require("./932325.js"));
var l = r(require("./8073.js"));
var u = r(require("./114078.js"));
var c = r(require("./844453.js"));
var d = function (e, t) {
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
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("../vendor/667294.js"));
var p = require("./808446.js");
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
const _ = {
  MENU: "MENU",
  TOOLTIP: "TOOLTIP"
};
function g(e, t) {
  const n = (0, d.useRef)(null);
  const r = (0, d.useRef)(null);
  const [f, g] = (0, d.useState)(null);
  const [m, y] = (0, d.useState)(null);
  (0, p.useListener)(a.Cmd, e.type === _.MENU ? "open_context_menu" : "open_tooltip", (e, t) => {
    var n;
    var a;
    var l;
    var u;
    var c;
    var d;
    var p;
    var _;
    var m;
    if (!(f == null)) {
      f.uim.pop();
    }
    r.current = t;
    const {
      menuOptions: h,
      uim: E
    } = e;
    const {
      event: S
    } = h;
    if (!(S == null)) {
      S.stopPropagation();
    }
    const v = S == null ? 0 : 10;
    y(null);
    g((0, i.default)((0, i.default)({}, h), {}, {
      type: (n = h.type) !== null && n !== undefined ? n : o.MenuType.Dropdown,
      originX: (a = (l = S == null ? undefined : S.clientX) !== null && l !== undefined ? l : h.offsetX) !== null && a !== undefined ? a : 0,
      originY: (u = (c = S == null ? undefined : S.clientY) !== null && c !== undefined ? c : h.offsetY) !== null && u !== undefined ? u : 0,
      offsetX: (d = h.offsetX) !== null && d !== undefined ? d : v,
      offsetY: (p = h.offsetY) !== null && p !== undefined ? p : v,
      dirX: (_ = h.dirX) !== null && _ !== undefined ? _ : s.default.isRTL() ? o.DirX.LEFT : o.DirX.RIGHT,
      dirY: (m = h.dirY) !== null && m !== undefined ? m : o.DirY.BOTTOM,
      key: Math.random(),
      uim: E
    }));
  });
  (0, p.useListener)(a.Cmd, e.type === _.MENU ? "close_context_menu" : "close_tooltip", e => {
    if (!(e != null && (f == null ? undefined : f.uim) !== e)) {
      g(null);
      y(null);
    }
  });
  (0, d.useLayoutEffect)(() => {
    const e = n.current;
    if (f == null || e == null) {
      return;
    }
    if (m != null) {
      return;
    }
    const t = e.clientWidth;
    const r = e.clientHeight + 10;
    y(function (e) {
      const {
        anchor: t,
        temporaryMenuPosition: n,
        menuWidth: r,
        menuHeight: i
      } = e;
      const a = window.innerWidth;
      const s = window.innerHeight;
      const {
        originX: l,
        originY: u,
        offsetX: c,
        offsetY: d,
        dirX: p,
        dirY: f
      } = n;
      let _ = l;
      let g = l;
      let m = u;
      let y = u;
      let E = 0;
      if (t && t instanceof HTMLElement) {
        const e = t.getBoundingClientRect();
        _ = e.left;
        g = e.right;
        y = e.bottom;
        m = e.top;
        E = t.offsetWidth;
      }
      let S = p;
      if (S === o.DirX.RIGHT && _ + r > a && g - r > 0) {
        S = o.DirX.LEFT;
      } else if (S === o.DirX.LEFT && g - r < 0 && _ + r < a) {
        S = o.DirX.RIGHT;
      } else if (S === o.DirX.CENTER) {
        if (g + r / 2 > a) {
          S = o.DirX.LEFT;
        } else if (_ - r / 2 < 0) {
          S = o.DirX.RIGHT;
        }
      }
      let v;
      let T = f;
      if (T === o.DirY.BOTTOM && y + i + d > s && m - i > 0) {
        T = o.DirY.TOP;
      } else if (T === o.DirY.TOP && m - i < 0 && y + i + d < s) {
        T = o.DirY.BOTTOM;
      }
      v = T === o.DirY.TOP ? m : y;
      let M = c;
      let A = d;
      if (!t) {
        if (S === o.DirX.LEFT) {
          M = 0;
        }
        if (T === o.DirY.TOP) {
          A = 0;
        }
      }
      return {
        dirX: S,
        dirY: T,
        originX: h(S, _, g, E),
        originY: v,
        offsetX: M,
        offsetY: A
      };
    }({
      anchor: f.anchor,
      temporaryMenuPosition: f,
      menuWidth: t,
      menuHeight: r
    }));
  }, [f, m]);
  (0, d.useImperativeHandle)(t, () => ({
    isOpen: () => f != null
  }));
  const E = (0, d.useCallback)(e => {
    var t;
    if (e != null) {
      if (!((t = r.current) === null || t === undefined)) {
        t.call(r, e.getElement());
      }
      r.current = null;
    }
  }, []);
  let S;
  if (f == null) {
    S = d.default.createElement(c.default, {
      transitionName: "dropdown"
    });
  } else {
    const {
      menu: e,
      key: t,
      type: r,
      autoFocus: i,
      findFirstItem: a,
      horizontal: s,
      theme: l,
      tooltipColorScheme: p
    } = f;
    const {
      originX: _,
      originY: g,
      offsetX: h,
      offsetY: y,
      dirX: v,
      dirY: T
    } = m != null ? m : f;
    const M = Array.isArray(e) ? e.map(e => (0, d.cloneElement)(e, {
      theme: l
    })) : e;
    S = d.default.createElement(c.default, {
      transitionName: r === o.MenuType.Picker ? "dropdown-picker" : "dropdown"
    }, d.default.createElement(o.Dropdown, {
      ref: n,
      origin: {
        x: _ + h,
        y: g + y
      },
      type: r,
      key: `key-${t}`,
      dirX: v,
      dirY: T,
      horizontal: s,
      autoFocus: i,
      findFirstItem: a,
      isTemporaryRender: m == null,
      tooltipColorScheme: p
    }, d.default.createElement(u.default, {
      ref: E
    }, M)));
  }
  return d.default.createElement(l.default.Consumer, null, e => d.default.createElement(l.default.Provider, {
    value: (f == null ? undefined : f.uim) || e
  }, S));
}
exports.Type = _;
const m = (0, d.forwardRef)(g);
function h(e, t, n, r) {
  switch (e) {
    case o.DirX.RIGHT:
      return t;
    case o.DirX.LEFT:
      return n;
    case o.DirX.CENTER:
      return t + r / 2;
  }
}
exports.ContextMenuManager = m;
m.displayName = "ContextMenuManager";