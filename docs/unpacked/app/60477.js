var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VelocityTransition = undefined;
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/81109.js"));
var o = r(require("../vendor/506479.js"));
var s = r(require("../vendor/957557.js"));
var l = r(require("../vendor/441609.js"));
var u = require("./780549.js");
var c = require("./806279.js");
var d = require("./959206.js");
var p = r(require("./330619.js"));
var f = r(require("./556869.js"));
var _ = r(require("../vendor/441143.js"));
var g = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = v(t);
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
var m = require("../vendor/756415.js");
var h = r(require("./558532.js"));
var y = r(require("./895851.js"));
const E = ["children", "transitionName", "delay", "onAnimationComplete", "displayName", "nodeRef", "onEnter", "onExit"];
const S = ["selector"];
function v(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (v = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const T = "appear";
const M = "enter";
const A = "leave";
function b(e) {
  e.preventDefault();
  e.stopPropagation();
}
exports.VelocityTransition = e => {
  const {
    children: t,
    transitionName: n,
    delay: r = 0,
    onAnimationComplete: v,
    displayName: C,
    nodeRef: P,
    onEnter: O,
    onExit: I
  } = e;
  const R = (0, o.default)(e, E);
  const N = (0, y.default)();
  const D = (0, g.useRef)();
  const w = (0, g.useRef)();
  const L = (0, g.useRef)();
  const k = function () {
    let e = !(arguments.length > 0 && arguments[0] !== undefined) || arguments[0];
    if (P != null && P.current != null) {
      return P.current;
    }
    const t = D.current;
    if (t != null) {
      var n;
      if (t instanceof HTMLElement) {
        return t;
      }
      const e = (n = t.getElement) === null || n === undefined ? undefined : n.call(t);
      if (e) {
        return e;
      }
    }
    if (!e) {
      return null;
    }
    const r = w.current;
    if (r != null) {
      __LOG__(4, undefined, new Error(), true)`VelocityTransitionGroupChild: Had to use findDOMNode fallback node in: ${C}`;
      SEND_LOGS("velocity-transition-group-find-dom-node");
    }
    return r;
  };
  (0, h.default)(() => {
    const e = k(false);
    (0, p.default)(e, "finish");
  });
  const G = (0, g.useRef)(false);
  const U = (0, g.useRef)();
  const x = e => {
    let t = e;
    if (t === T) {
      t = M;
    }
    (0, _.default)(t === "enter" || t === "leave", "This will either be 'enter' or 'leave'");
    const i = function (e) {
      if (e && !d.Transitions[e]) {
        __LOG__(4, undefined, new Error(), true)` ${e} wasn't found in VelocityTransitionGroupChild transitions.`;
        SEND_LOGS("transition-name");
        throw (0, f.default)("Invalid transitionName");
      }
      return d.Transitions[e];
    }(n);
    const u = i[t];
    if (!i || !u) {
      return Promise.resolve();
    }
    const c = (0, s.default)(i, A, M);
    const g = k();
    const m = ((e, t) => {
      let n = t;
      if (!n) {
        return [];
      }
      if (!Array.isArray(n)) {
        n = [n];
      }
      const r = {};
      return n.map(t => {
        const {
          selector: n
        } = t;
        const i = (0, o.default)(t, S);
        let s;
        s = n ? n in r ? r[n] : r[n] = e ? Array.from(e.querySelectorAll(n)) : undefined : e;
        if ((0, l.default)(s)) {
          return undefined;
        } else {
          return (0, a.default)({
            nodes: s
          }, i);
        }
      }).filter(Boolean);
    })(g, u);
    if (t === A) {
      if (!(g == null)) {
        g.setAttribute("pointerEvents", "none");
      }
      if (!(g == null)) {
        g.addEventListener("keypress", b, true);
      }
      if (!(g == null)) {
        g.addEventListener("keydown", b, true);
      }
    }
    return Promise.all(m.map(e => {
      const {
        nodes: t,
        props: n,
        easing: i,
        duration: a,
        delay: o,
        stagger: s,
        drag: l
      } = e;
      return (0, p.default)(t, n, {
        easing: i || c.easing || "easeInSine",
        duration: a || c.duration || 0,
        delay: r || o || c.delay || 0,
        queue: c.queue || false,
        stagger: s || false,
        drag: l || false
      });
    })).finally(() => {
      if (c.cleanOnComplete === true && t === M) {
        m.forEach(e => {
          const t = e.nodes;
          (Array.isArray(t) ? t : [t]).forEach(e => e == null ? undefined : e.removeAttribute("style"));
        });
      }
      if (t === A) {
        if (!(g == null)) {
          g.removeEventListener("keypress", b, true);
        }
        if (!(g == null)) {
          g.removeEventListener("keydown", b, true);
        }
      }
      if (!(v == null)) {
        v();
      }
    });
  };
  const B = t => {
    const {
      appear: n = false,
      enter: r = true,
      exit: i = true
    } = e;
    let a = false;
    switch (t) {
      case M:
        a = r;
        break;
      case A:
        a = i;
        break;
      case T:
        a = n;
    }
    var o;
    if (a) {
      U.current = c.UIBusyTasks.setBusy(U.current);
      if (!G.current) {
        G.current = true;
        u.Cmd.setUiBusy(true);
      }
      x(t).finally(() => {
        if (U.current != null) {
          c.UIBusyTasks.clearBusy(U.current);
          delete U.current;
        }
        if (G.current) {
          G.current = false;
          u.Cmd.setUiBusy(false);
        }
      }).then(() => {
        var e;
        if (!(N.aborted || (e = L.current) === null || e === undefined)) {
          e.call(L);
        }
      });
    } else if (!((o = L.current) === null || o === undefined)) {
      o.call(L);
    }
  };
  const F = e => {
    var n;
    var r;
    const i = (n = e == null || (r = e.getComponent) === null || r === undefined ? undefined : r.call(e)) !== null && n !== undefined ? n : e;
    D.current = i;
    const a = t == null ? undefined : t.ref;
    if (a) {
      if (typeof a == "function") {
        a(i);
      } else {
        a.current = i;
      }
    }
  };
  let j = t;
  if (P == null) {
    const e = g.Children.only(j);
    j = (0, g.cloneElement)(e, {
      ref: F
    });
  }
  return g.default.createElement(m.Transition, (0, i.default)({
    nodeRef: P
  }, R, {
    addEndListener: (e, t) => {
      L.current = t;
    },
    onEnter: (e, t) => {
      if (!(O == null)) {
        O();
      }
      w.current = e;
      B(t ? T : M);
    },
    onExit: e => {
      if (!(I == null)) {
        I();
      }
      w.current = e;
      B(A);
    }
  }), j);
};