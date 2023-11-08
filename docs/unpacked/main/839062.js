var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlowTransitions = undefined;
exports.useFlow = function (e, t) {
  const n = (0, d.default)();
  const {
    transitions: a = h.None,
    onEnd: r
  } = t || {};
  const {
    pushTransition: l,
    popTransition: i
  } = function (e) {
    switch (e) {
      case h.DrawerLeft:
        return {
          pushTransition: "flow-transition-drawer-pop",
          popTransition: "flow-transition-drawer-push"
        };
      case h.DrawerRight:
        return {
          pushTransition: "flow-transition-drawer-push",
          popTransition: "flow-transition-drawer-pop"
        };
      case h.Modal:
        return {
          pushTransition: "flow-transition-modal-push",
          popTransition: "flow-transition-modal-pop"
        };
      case h.None:
        return {
          pushTransition: "none",
          popTransition: "none"
        };
    }
  }(a);
  const [s, f] = (0, u.useReducer)(E, {
    initialStep: e,
    initialTransition: l
  }, g);
  const p = (0, u.useRef)(null);
  const v = (0, u.useCallback)(e => {
    f({
      type: "transition",
      payload: {
        transition: e
      }
    });
  }, []);
  const _ = (0, u.useCallback)(function (e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : l;
    v(t);
    p.current = () => f({
      type: "push",
      payload: {
        step: e
      }
    });
  }, [l, v]);
  const y = (0, u.useCallback)(function () {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : i;
    v(e);
    p.current = () => f({
      type: "pop"
    });
  }, [i, v]);
  (0, u.useEffect)(() => {
    if (p.current != null) {
      p.current();
      p.current = null;
    }
  });
  const C = (0, c.default)(e => {
    if (r) {
      r(e);
    } else {
      (0, o.default)(n, "uim").requestDismiss(e);
    }
  });
  const b = (0, c.default)(() => s.stack.length);
  (0, u.useEffect)(() => {
    if (s.ended) {
      C();
    }
  }, [C, s.ended]);
  const M = {
    push: _,
    pop: y,
    end: C,
    stackSize: b,
    step: s.stack[s.stack.length - 1],
    previousStep: s.previousStep,
    transition: s.transition,
    activeKey: s.activeKey,
    isPushed: s.isPushed
  };
  return [m, M];
};
var r = a(require("../vendor/81109.js"));
var o = a(require("../app/670983.js"));
var l = require("../app/392632.js");
var i = a(require("../app/844453.js"));
var u = function (e, t) {
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
var s = a(require("../app/156720.js"));
var c = a(require("../app/17533.js"));
var d = a(require("../app/321201.js"));
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
const p = {
  height: "ppled2lx",
  start: "tkdu00h0",
  overflowX: "gfz4du6o",
  overflowY: "r7fjleex",
  position: "lhggkp7q",
  top: "qq0sjtgm",
  width: "ln8gz9je"
};
const m = (0, u.forwardRef)((e, t) => {
  const {
    flow: n,
    children: a,
    displayName: r = "FlowDrawer"
  } = e;
  const {
    pop: o,
    transition: c,
    activeKey: d
  } = n;
  if (a == null) {
    return null;
  } else {
    return u.default.createElement(i.default, {
      ref: t,
      transitionName: c,
      className: (0, s.default)(p),
      displayName: `${r}-${d}`
    }, u.default.createElement(l.UIE, {
      displayName: `${r}-${d}`,
      key: d,
      escapable: true,
      requestFocus: () => {
        if (e.requestFocus) {
          e.requestFocus();
        }
      },
      requestDismiss: t => {
        if (e.requestDismiss) {
          e.requestDismiss(t);
        } else {
          o();
        }
      }
    }, a));
  }
});
m.displayName = "FlowComponent";
const h = require("../vendor/76672.js").Mirrored(["DrawerLeft", "DrawerRight", "Modal", "None"]);
function g(e) {
  let {
    initialStep: t,
    initialTransition: n
  } = e;
  return {
    stack: [t],
    previousStep: null,
    transition: n,
    activeKey: 1,
    ended: false,
    isPushed: true
  };
}
function E(e, t) {
  var n;
  var a;
  var o;
  switch (t.type) {
    case "transition":
      return (0, r.default)((0, r.default)({}, e), {}, {
        transition: (n = (a = t.payload) === null || a === undefined ? undefined : a.transition) !== null && n !== undefined ? n : e.transition
      });
    case "push":
      if (((o = t.payload) === null || o === undefined ? undefined : o.step) == null) {
        return e;
      } else {
        return (0, r.default)((0, r.default)({}, e), {}, {
          previousStep: e.stack[e.stack.length - 1],
          stack: e.stack.concat(t.payload.step),
          activeKey: e.activeKey + 1,
          ended: false,
          isPushed: true
        });
      }
    case "pop":
      {
        const t = e.stack.slice(0, -1);
        if (t.length >= 1) {
          return (0, r.default)((0, r.default)({}, e), {}, {
            previousStep: e.stack[e.stack.length - 1],
            stack: t,
            activeKey: e.activeKey - 1,
            isPushed: false
          });
        } else if (e.ended) {
          return e;
        } else {
          return (0, r.default)((0, r.default)({}, e), {}, {
            ended: true
          });
        }
      }
    default:
      return e;
  }
}
exports.FlowTransitions = h;