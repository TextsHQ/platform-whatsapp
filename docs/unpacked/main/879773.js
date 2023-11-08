var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/618446.js"));
var o = require("../app/690495.js");
var l = a(require("../app/469733.js"));
var i = a(require("../app/932325.js"));
var u = require("../app/73225.js");
var s = require("./339855.js");
var c = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = p(t);
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
var d = a(require("../app/156720.js"));
var f = a(require("../app/49710.js"));
function p(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (p = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const m = {
  rollerContainer: {
    height: "ilf8vifs",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    marginStart: "qnz2jpws",
    marginEnd: "kjemk6od"
  },
  counterContainer: {
    minHeight: "dn5wc90o",
    height: "ilf8vifs",
    alignItems: "gndfcl4n",
    display: "p357zi0d"
  },
  counter: {
    fontSize: "f8jlpxt4",
    textAlign: "qfejxiq4",
    color: "ce5kru2g"
  },
  rollerAnimation: {
    animationDuration: "nq7eualt",
    animationTimingFunction: "mjl5wphb",
    animationFillMode: "a21kwdn3",
    backfaceVisibility: "ou3430m0"
  },
  animateFirstUp: {
    animationName: "m21mz96n"
  },
  animateSecondUp: {
    animationName: "g2k4c4jm"
  },
  animateFirstDown: {
    animationName: "lvug1qsr",
    position: "g0rxnol2",
    top: "te4632jy"
  },
  animateSecondDown: {
    position: "g0rxnol2",
    animationName: "pev8zhet",
    top: "qq0sjtgm"
  }
};
function h(e) {
  let {
    counter: t,
    shouldAnimate: n,
    rollerCounterOptions: a
  } = e;
  const r = "999+";
  const p = (0, f.default)(t);
  const h = (0, s.useRollerCounter)(p, t);
  const g = h.currentValueProp != null ? h.currentValueProp : 0;
  let E = g > 999 && (a == null ? undefined : a.showAggregateMax) ? r : g;
  if ((0, u.isLargeNumberFormatEnabled)()) {
    E = i.default.d(g);
  }
  const v = [];
  if (g === 1 && (a == null ? undefined : a.showOneToTwoAnimation)) {
    return null;
  }
  if (h.previousValueProp != null && h.previousValueProp !== g && n) {
    const e = g - h.previousValueProp;
    let t = h.previousValueProp > 999 ? r : h.previousValueProp;
    t = (0, u.isLargeNumberFormatEnabled)() && h.previousValueProp != null ? i.default.d(h.previousValueProp) : t;
    let n = t;
    let o = E;
    let l = m.animateFirstUp;
    let s = m.animateSecondUp;
    if (e < 0) {
      n = E;
      o = t;
      l = m.animateFirstDown;
      s = m.animateSecondDown;
    }
    if (h.previousValueProp === 1 && g === 2 && (a == null ? undefined : a.showOneToTwoAnimation)) {
      n = " ";
    }
    const f = c.default.createElement("div", {
      key: String(h.previousValueProp),
      className: (0, d.default)([m.counterContainer, m.rollerAnimation, l])
    }, c.default.createElement("span", {
      className: (0, d.default)(m.counter)
    }, i.default.n(n)));
    const p = c.default.createElement("div", {
      key: String(E),
      className: (0, d.default)([m.counterContainer, m.rollerAnimation, s]),
      ref: t => {
        if (!(t == null)) {
          t.addEventListener("animationend", () => {
            t.style.display = e < 0 ? "none" : "flex";
          });
        }
      }
    }, c.default.createElement("span", {
      className: (0, d.default)(m.counter)
    }, i.default.n(o)));
    v.push(f, p);
  } else {
    const e = c.default.createElement("div", {
      key: String(E),
      className: (0, d.default)([m.counterContainer])
    }, c.default.createElement("span", {
      className: (0, d.default)(m.counter)
    }, i.default.n(E)));
    v.push(e);
  }
  return c.default.createElement(l.default, {
    align: "center",
    shrink: 0
  }, c.default.createElement(o.FlexColumn, {
    xstyle: m.rollerContainer
  }, v));
}
function g(e, t) {
  return (0, r.default)(e, t);
}
var E = (0, c.memo)(h, g);
exports.default = E;