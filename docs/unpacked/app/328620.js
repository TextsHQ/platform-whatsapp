var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionToast = function (e) {
  const {
    settleDuration: t = _,
    toastPosition: n = g.LEFT,
    initialAction: i,
    pendingAction: a,
    id: c = m()
  } = e;
  const [f, h] = (0, d.useState)(i);
  const [y, E] = (0, d.useState)(i);
  const [S, v] = (0, d.useState)(true);
  const T = (0, p.default)(f);
  const M = (0, d.useRef)(null);
  const A = () => {
    if (y && y.handler) {
      y.handler().catch(() => {});
    }
  };
  (0, d.useEffect)(() => {
    if (i !== T) {
      h(i);
      E(i);
      v(true);
    }
  }, [i, T]);
  const b = () => {
    u.ToastManager.close(c);
  };
  (0, d.useEffect)(() => {
    (e => {
      if (M.current) {
        M.current.controller.abort();
      }
      const n = new r();
      const i = n.signal;
      const a = e.then(e => {
        if (i.aborted) {
          throw new o.AbortError();
        }
        E(e);
        v(false);
      }).catch(e => {
        if (e.name === o.ABORT_ERROR) {
          throw e;
        }
        E(e);
        v(false);
      }).then(() => (0, s.delayMs)(t)).then(() => {
        if (i.aborted) {
          throw new o.AbortError();
        }
        u.ToastManager.close(c);
      }).catch((0, o.catchAbort)(() => {}));
      M.current = {
        promise: a,
        controller: n
      };
    })(a);
  }, [a]);
  if (!y) {
    return null;
  }
  let C;
  let P;
  if (y.action && y.handler) {
    C = d.default.createElement(l.ToastActionBtn, {
      buttonText: y.action,
      onClick: A
    });
  }
  if (!S) {
    P = d.default.createElement(l.ToastDismissBtn, {
      onClick: b
    });
  }
  return d.default.createElement(l.ToastBody, {
    toastPosition: n,
    actionText: y.text,
    actionButtons: C,
    dismissButton: P
  });
};
exports.ToastPosition = exports.ActionType = undefined;
exports.genId = m;
var a = i(require("../vendor/873955.js"));
var o = require("./898817.js");
var s = require("./8304.js");
var l = require("./625786.js");
var u = require("./390737.js");
var c = i(require("./556869.js"));
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
var p = i(require("./49710.js"));
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
const _ = 5000;
const g = {
  LEFT: "LEFT",
  RIGHT: "RIGHT"
};
exports.ToastPosition = g;
function m(e) {
  return (0, a.default)(e || "action_toast");
}
exports.ActionType = class {
  constructor(e, t) {
    if (!e) {
      throw (0, c.default)("ActionType must have text!");
    }
    this.text = e;
    if (t) {
      this.action = t.actionText;
      this.handler = t.actionHandler;
    }
  }
};