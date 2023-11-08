var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    annotations: t,
    onTooltipDisplay: n,
    onTooltipDismiss: a
  } = e;
  const [g, E] = (0, p.useState)(null);
  const v = () => {
    E(null);
    if (a) {
      a();
    }
  };
  const C = (e, t, a) => {
    if (t == null && a == null) {
      return;
    }
    const {
      location: s
    } = e;
    const c = (0, u.getMapUrl)((0, o.default)(s.degreesLatitude, "location.degreesLatitude"), (0, o.default)(s.degreesLongitude, "location.degreesLongitude"));
    let d = {
      menu: p.default.createElement(i.ExternalLink, {
        href: c,
        className: (0, m.default)(_),
        onClick: v
      }, f.fbt._("See Location", null, {
        hk: "2Uutdu"
      })),
      type: l.MenuType.Tooltip,
      dirX: l.DirX.RIGHT,
      dirY: l.DirY.TOP
    };
    d = t != null ? (0, r.default)((0, r.default)({}, d), {}, {
      event: t,
      autoFocus: false,
      offsetX: 0,
      offsetY: 0
    }) : (0, r.default)((0, r.default)({}, d), {}, {
      anchor: a,
      autoFocus: true
    });
    E(d);
    if (n) {
      n();
    }
  };
  const M = (0, h.default)(() => {
    v();
  }, 100);
  if (!t.length) {
    return null;
  }
  const S = g && p.default.createElement(c.UIE, {
    displayName: "InteractiveAnnotationTooltip",
    popable: true,
    escapable: true,
    dismissOnWindowResize: true,
    requestDismiss: v,
    requestRecentFocusOnUnmount: false
  }, p.default.createElement(d.default, {
    tooltip: g
  }));
  return p.default.createElement(p.default.Fragment, null, t.map(e => function (e) {
    const {
      polygonVertices: t,
      location: n
    } = e;
    const [a,, r] = t;
    if (a == null || a.x == null || a.y == null || r == null || r.x == null || r.y == null) {
      return false;
    }
    if (n.degreesLatitude == null || n.degreesLongitude == null) {
      return false;
    }
    return true;
  }(e) && p.default.createElement(b, {
    key: y(e),
    annotation: e,
    onClick: t => ((e, t) => {
      e.stopPropagation();
      C(t, e);
    })(t, e),
    onKeyDown: t => ((e, t) => {
      if (!(e.key !== " " && e.key !== "Enter")) {
        e.preventDefault();
        C(t, null, e.target);
      }
    })(t, e)
  })), S, p.default.createElement(s.default, {
    onResize: M
  }));
};
var r = a(require("../vendor/81109.js"));
var o = a(require("../app/670983.js"));
var l = require("../app/664149.js");
var i = require("../app/753233.js");
var u = require("./300987.js");
var s = a(require("./929796.js"));
var c = require("../app/392632.js");
var d = a(require("./733712.js"));
var f = require("../vendor/548360.js");
var p = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = E(t);
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
var m = a(require("../app/156720.js"));
var h = a(require("../app/710629.js"));
var g = a(require("../app/969651.js"));
function E(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (E = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const v = {
  position: "lhggkp7q",
  zIndex: "thghmljt"
};
const _ = {
  display: "f804f6gw",
  paddingTop: "eujn52yf",
  paddingEnd: "f9ovudaz",
  paddingBottom: "ckm995li",
  paddingStart: "gx1rr48f",
  fontSize: "bjmq0orh"
};
function y(e) {
  const [t,, n] = e.polygonVertices;
  return `${(0, o.default)(t.x, "topLeft.x")}:${(0, o.default)(t.y, "topLeft.y")}:${(0, o.default)(n.x, "bottomRight.x")}:${(0, o.default)(n.y, "bottomRight.y")}`;
}
function C(e, t) {
  if (e == null) {
    return null;
  }
  const n = e.parentNode;
  if (!(n != null && n instanceof HTMLElement)) {
    return null;
  }
  let [a, r, l] = t.polygonVertices;
  if (!((0, o.default)(a.x, "topLeft.x") !== (0, o.default)(r.x, "topRight.x") && (0, o.default)(r.y, "topRight.y") !== (0, o.default)(l.y, "bottomRight.y"))) {
    [, a, r, l] = t.polygonVertices;
  }
  const i = (0, o.default)(a.x, "topLeft.x");
  const u = (0, o.default)(a.y, "topLeft.y");
  const s = (0, o.default)(r.x, "topRight.x");
  const c = (0, o.default)(r.y, "topRight.y");
  const d = (0, o.default)(l.y, "bottomRight.y");
  const f = i * n.offsetWidth;
  const p = u * n.offsetHeight;
  const m = n.offsetWidth * (i - s);
  const h = n.offsetHeight * (u - c);
  const g = i > s ? Math.PI : 0;
  const E = m ? Math.atan(h / m) + g : 0;
  const v = E * 180 / Math.PI;
  const _ = Math.abs(m / Math.cos(E));
  const y = Math.abs(n.offsetHeight * (d - c) / Math.cos(E));
  return {
    left: Math.round(f),
    top: Math.round(p),
    width: Math.round(_),
    height: Math.round(y),
    transform: `rotate(${v}deg)`,
    transformOrigin: "top left"
  };
}
function b(e) {
  const {
    annotation: t
  } = e;
  const n = (0, g.default)();
  const a = (0, p.useRef)(null);
  (0, p.useEffect)(() => {
    n();
  }, []);
  return p.default.createElement("div", {
    ref: a,
    className: (0, m.default)(v),
    style: C(a.current, t),
    onClick: n => e.onClick(n, t),
    onKeyDown: n => e.onKeyDown(n, t),
    role: "button",
    "aria-label": t.location.name,
    tabIndex: "0"
  });
}