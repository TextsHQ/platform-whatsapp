var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    lat: t,
    lng: n,
    name: a,
    width: E,
    height: v,
    className: _,
    onClick: y,
    testid: C,
    onLoad: b,
    linkify: M = true,
    showMarker: S = true
  } = e;
  const T = (0, h.default)();
  const [w, A] = (0, m.useState)(null);
  const [P, O] = (0, m.useState)(false);
  const {
    theme: k
  } = (0, m.useContext)(d.ThemeContext);
  const D = (0, g.default)();
  const I = (0, m.useRef)(null);
  const R = (0, m.useCallback)(() => {
    const e = (0, c.getMapImgSrcUrl)({
      height: v,
      lat: t,
      lng: n,
      isDarkTheme: k === "dark",
      showMarker: S,
      width: E
    });
    if (I.current !== e) {
      I.current = e;
      f.default.gsmURL(e, f.default.GSM_NUMS).then(e => {
        if (!D.aborted) {
          A(e);
          O(l.isCached(e));
        }
      });
    }
  }, [v, t, n, k, S, E, D]);
  (0, m.useEffect)(() => {
    R();
  }, [T, R]);
  const N = {
    pointerEvents: "none",
    width: E,
    height: P ? undefined : v
  };
  const x = (0, r.classnamesConvertMeToStylexPlease)(_, {
    [u.default.hidden]: !P
  });
  const L = P ? null : m.default.createElement(s.MapPlaceholderIcon, {
    displayInline: true
  });
  const j = m.default.createElement(i.default, {
    src: w || "",
    className: x,
    style: N,
    hasPrivacyChecks: false,
    onLoad: () => {
      O(true);
      if (!(b == null)) {
        b();
      }
    },
    noXHR: true
  });
  if (M) {
    return m.default.createElement(o.ExternalLink, {
      href: (0, c.getMapUrl)(t, n, a),
      className: u.default.container,
      onClick: y,
      testid: C,
      "aria-label": p.fbt._("Open map location", null, {
        hk: "3LMZEW"
      })
    }, L, j);
  } else {
    return m.default.createElement("span", {
      className: u.default.container
    }, L, j);
  }
};
var r = require("../app/396574.js");
var o = require("../app/753233.js");
var l = v(require("../app/428363.js"));
var i = a(require("../app/488922.js"));
var u = a(require("./942108.js"));
var s = require("./175732.js");
var c = require("./300987.js");
var d = require("../app/667738.js");
var f = a(require("../app/79291.js"));
var p = require("../vendor/548360.js");
var m = v(require("../vendor/667294.js"));
var h = a(require("../app/643934.js"));
var g = a(require("../app/895851.js"));
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
function v(e, t) {
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
}