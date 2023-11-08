var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UIMState = exports.UIM = exports.DismissReason = undefined;
var i = r(require("../vendor/84753.js"));
var a = r(require("../vendor/82729.js"));
var o = r(require("./953268.js"));
const s = require("../vendor/76672.js").Mirrored(["ACTIVE", "PASSIVE", "INACTIVE", "DEAD"]);
exports.UIMState = s;
const l = require("../vendor/76672.js").Mirrored(["LIFECYCLE", "UIM_INTERACTION"]);
exports.DismissReason = l;
class u {
  static maybePreventScroll(e) {
    var t;
    const n = (t = u.Manager.getTop()) === null || t === undefined ? undefined : t.getNode();
    if (e.target instanceof HTMLElement && n && !n.contains(e.target)) {
      e.preventDefault();
      e.stopPropagation();
    }
  }
  constructor(e, t) {
    this.shouldRequestFocus = true;
    this.parent = t || this;
    if (!t) {
      if (u.Manager.root) {
        __LOG__(4, undefined, new Error(), true)`Attempting to set multiple UIM tree roots. Expecting only one.`;
        SEND_LOGS("multiple-uim-roots");
      }
      u.Manager.root = this;
    }
    this.displayName = e.displayName;
    this.popable = e.popable;
    this.escapable = e.escapable;
    this.requestFocus = e.requestFocus;
    this._requestDismiss = e.requestDismiss;
    this.getNode = e.getNode;
    this.dismissOnWindowResize = e.dismissOnWindowResize;
    this.children = [];
    this.setState(e.uimState);
  }
  getState() {
    return this._state;
  }
  setState(e) {
    switch (e) {
      case s.ACTIVE:
        this.lastActive = Date.now();
        u.Manager.setTop(this);
        break;
      case s.PASSIVE:
        this.lastActive = Date.now();
        if (this._state !== s.ACTIVE) {
          u.Manager.setTop(u.findMostRecentlyActiveFocusable());
        }
        break;
      case s.INACTIVE:
        if (this._state && this._state !== e) {
          u.Manager.setTop(u.findMostRecentlyActiveFocusable());
        }
        break;
      case s.DEAD:
    }
    this._state = e;
  }
  activate() {
    this.setState(this._state);
  }
  branch(e) {
    const t = new u(e, this);
    this.children.push(t);
    u.pprint();
    return t;
  }
  pop() {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : l.UIM_INTERACTION;
    let t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
    if (this.getState() === s.DEAD) {
      return;
    }
    this._invalidateAndDismissChildren(this.children, e);
    (0, a.default)(this.parent.children, e => e === this);
    const n = u.findMostRecentlyActiveFocusable(this);
    if (n) {
      n.shouldRequestFocus = t;
    }
    u.Manager.setTop(n);
    u.pprint();
  }
  requestDismiss(e, t) {
    __LOG__(2)`[UIM] request dismiss: ${this.displayName}`;
    this._requestDismiss(e, t);
  }
  _invalidateAndDismissChildren(e, t) {
    e.forEach(e => {
      e.setState(s.DEAD);
      e.requestDismiss(t);
      this._invalidateAndDismissChildren(e.children, t);
    });
  }
  static findMostRecentlyActiveFocusable(e) {
    const {
      root: t
    } = u.Manager;
    if (t) {
      return c(t, e, e => {
        const t = e.getState();
        return t === s.ACTIVE || t === s.PASSIVE;
      });
    }
  }
  static findMostRecentlyActiveDismissable(e) {
    const {
      root: t
    } = u.Manager;
    if (t) {
      return c(t, e, e => e.getState() === s.ACTIVE) || c(t, e, e => e.getState() === s.PASSIVE);
    }
  }
  static pprint(e) {
    if (!e && !u.Manager.verbose) {
      return;
    }
    const {
      root: t
    } = u.Manager;
    if (t) {
      __LOG__(2)`[UIM] ${p(t, [])}`;
    }
  }
}
function c(e, t, n) {
  if (!e.children.length) {
    return e;
  }
  const r = e.children.filter(e => e !== t).map(e => c(e, t, n)).concat([e]).filter(Boolean).filter(n);
  return (0, i.default)(r, "lastActive");
}
exports.UIM = u;
u.State = s;
u.Manager = new class {
  constructor() {
    this.verbose = false;
  }
  setTop(e) {
    var t;
    if (e) {
      e.lastActive = Date.now();
    }
    if (e && this._top !== e && e.getState() !== s.INACTIVE && e.getState() !== s.DEAD && e.shouldRequestFocus) {
      e.requestFocus();
    }
    if (e) {
      e.shouldRequestFocus = true;
    }
    if ((t = this._top) === null || t === undefined ? undefined : t.popable) {
      window.removeEventListener("wheel", u.maybePreventScroll, {
        passive: false,
        capture: true
      });
    }
    if (e == null ? undefined : e.popable) {
      window.addEventListener("wheel", u.maybePreventScroll, {
        passive: false,
        capture: true
      });
    }
    this._top = e;
  }
  getTop() {
    return this._top;
  }
  refocusTopUie() {
    self.setTimeout(() => {
      if (this._top != null && document.activeElement === document.body) {
        this._top.requestFocus();
      }
    }, 0);
  }
}();
function d(e, t, n, r) {
  let i;
  i = n && r ? "├─┬" : n && !r ? "├──" : !n && r ? "└─┬" : "└──";
  if (e === u.Manager.root) {
    i = "▶";
  }
  let a = e.displayName;
  if (e === u.Manager.getTop()) {
    a = `${a} ⬥`;
  }
  const o = `(${function (e) {
    switch (e) {
      case s.ACTIVE:
        return "A";
      case s.PASSIVE:
        return "P";
      case s.INACTIVE:
        return "I";
      case s.DEAD:
        return "D";
    }
  }(e.getState())})${r ? "\n" : ""}`;
  return `${t.join("")}${i} ${a} ${o}`;
}
function p(e, t, n) {
  return d(e, t, n, !!e.children.length) + e.children.map((r, i) => {
    const a = i < e.children.length - 1;
    return p(r, n ? t.concat(["│ "]) : t.concat(["  "]), a);
  }).join("\n");
}
window.addEventListener("keydown", e => {
  if (e.keyCode !== o.default.ESC) {
    return;
  }
  const t = u.Manager.getTop();
  const n = (t == null ? undefined : t.getState()) === s.ACTIVE ? m(t) || t : u.findMostRecentlyActiveDismissable();
  if (n) {
    if (n.escapable) {
      e.stopPropagation();
      e.preventDefault();
      n.requestDismiss(l.UIM_INTERACTION);
    } else {
      __LOG__(2)`[UIM] non-escapable item cannot be dismissed: ${n.displayName}`;
    }
  }
}, {
  capture: true
});
const f = new WeakSet();
window.addEventListener("resize", () => {
  const e = u.Manager.getTop();
  const t = (e == null ? undefined : e.getState()) === s.ACTIVE ? e : u.findMostRecentlyActiveDismissable();
  if ((t == null ? undefined : t.dismissOnWindowResize) && (t == null ? undefined : t.escapable) && !f.has(t)) {
    t.requestDismiss(l.UIM_INTERACTION);
    f.add(t);
  }
});
let _ = null;
function g(e, t) {
  const n = e && e.getState() === s.ACTIVE && e.popable ? e : u.findMostRecentlyActiveDismissable();
  if (!n || !n.popable) {
    return null;
  }
  const r = n.getNode();
  if (r && t.target instanceof Node && r.contains(t.target)) {
    return null;
  } else {
    return n;
  }
}
function m(e) {
  if (!e) {
    return null;
  }
  let t;
  for (const n of e.children) {
    t = m(n);
    if (t) {
      return t;
    }
  }
  if (e.getState() === s.ACTIVE) {
    return e;
  } else {
    return null;
  }
}
window.addEventListener("mousedown", e => {
  _ = null;
  if (!e.screenX || !e.screenY) {
    return;
  }
  const t = g(u.Manager.getTop(), e);
  if (t && e.button === 2) {
    t.requestDismiss(l.UIM_INTERACTION);
  } else {
    _ = t;
  }
}, {
  capture: true
});
window.addEventListener("mouseup", e => {
  if (!e.screenX || !e.screenY) {
    return void (_ = null);
  }
  const t = g(u.Manager.getTop(), e);
  if (t && t === _) {
    self.setTimeout(() => t.requestDismiss(l.UIM_INTERACTION, e), 0);
  }
  _ = null;
}, {
  capture: true
});