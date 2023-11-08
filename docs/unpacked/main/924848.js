var a = require("../app/530066.js").default;
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var o = r(require("../vendor/348926.js"));
var l = require("../app/898817.js");
var i = require("../app/8304.js");
var u = r(require("../app/229922.js"));
var s = require("../app/780549.js");
var c = require("../app/806279.js");
var d = r(require("./929796.js"));
var f = r(require("../app/359599.js"));
var p = r(require("../app/330619.js"));
var m = r(require("../vendor/441143.js"));
var h = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = g(t);
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
function g(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (g = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const E = {
  duration: 300,
  easing: [0.1, 0.82, 0.25, 1]
};
class v extends h.Component {
  constructor() {
    super(...arguments);
    this.containerHeight = 0;
    this._childAnimations = [];
    this.didCancel = false;
    this._unmounting = false;
    this.state = {
      children: this.props.children
    };
    this._refChildren = new Map();
    this._setRefChild = (e, t) => {
      if (t) {
        this._refChildren.set(e, t);
      } else {
        this._refChildren.delete(e);
      }
    };
    this._setChildRefCache = new f.default(this._setRefChild);
    this._heightCallbackCache = new Map();
  }
  componentWillUnmount() {
    this._unmounting = true;
  }
  _getHeightChange(e, t) {
    return e.reduce((e, n) => {
      if (n < t) {
        return e;
      }
      const a = this._refChildren.get(`${n}`);
      if (a) {
        return e + a.clientHeight;
      } else {
        return e;
      }
    }, 0);
  }
  _animateElement(e, t, n, r) {
    var o;
    if (this._childAnimations[e]) {
      this.didCancel = true;
      this._childAnimations[e].controller.abort();
    }
    const c = n > 0 ? [0, n] : [-n, 0];
    const d = new a();
    const f = (((o = this._childAnimations[e]) === null || o === undefined ? undefined : o.promise) || Promise.resolve()).then(() => (0, p.default)(t, {
      translateY: c
    }, E)).then(() => (0, i.delayMs)(100));
    const m = (0, u.default)(f, d.signal).then(() => {
      if (d.signal.aborted) {
        throw new l.AbortError();
      }
      if (n < 0) {
        if (r.includes(e)) {
          t.style.opacity = "0";
        } else {
          t.style.transform = "";
        }
      }
      return e;
    }).catch((0, l.catchAbort)(() => {
      (0, p.default)(t, "stop", true);
      t.style.transform = "";
      return false;
    })).finally(t => {
      if (!this.didCancel) {
        delete this._childAnimations[e];
        s.Cmd.setUiBusy(false);
        return t;
      }
      this.didCancel = false;
    });
    this._childAnimations[e] = {
      promise: m,
      controller: d
    };
    return m;
  }
  _transitionAffected(e, t) {
    var n = this;
    return (0, o.default)(function* () {
      if (!e) {
        return Promise.resolve(new Set());
      }
      const a = [];
      const [r] = e.slice(-1);
      for (let o = 0; o <= r; ++o) {
        const r = n._refChildren.get(`${o}`);
        if (r) {
          a.push(n._animateElement(o, r, (t ? 1 : -1) * n._getHeightChange(e, o), e));
        }
      }
      const o = yield Promise.all(a);
      return new Set(o.reduce((e, t) => {
        if (t !== false) {
          e.push(t);
        }
        return e;
      }, []));
    })();
  }
  _notifyHeightChange(e, t) {
    if (e.length && this.props.onHeightChange) {
      this.props.onHeightChange((t ? 1 : -1) * this._getHeightChange(e, 0));
    }
  }
  static getDerivedStateFromProps(e, t) {
    const n = e.children;
    const a = t.children;
    let r = false;
    const o = a.map((e, t) => {
      var a;
      const o = (a = n[t]) !== null && a !== undefined ? a : e;
      if (o !== e) {
        r = true;
      }
      return o;
    });
    if (r) {
      return {
        children: o
      };
    } else {
      return null;
    }
  }
  componentDidUpdate(e, t) {
    const n = this.state.children;
    const a = t.children;
    (0, m.default)(n.length === a.length && this.props.children.length === n.length, "The number of children in an AnimationGroup must remain constant. Render null for children you don't want to appear.");
    const r = n.map((e, t) => t);
    const o = r.filter(t => this.props.children[t] != null && e.children[t] == null);
    const l = r.filter(t => this.props.children[t] == null && e.children[t] != null);
    if (l.length > 0) {
      l.forEach(() => {
        this.busyId = c.UIBusyTasks.setBusy(this.busyId);
        s.Cmd.setUiBusy(true);
      });
      this._notifyHeightChange(l, false);
      this._transitionAffected(l, false).then(e => {
        if (!this._unmounting) {
          if (e.size !== 0) {
            this.setState(t => ({
              children: t.children.map((t, n) => e.has(n) ? null : t)
            }), () => {
              c.UIBusyTasks.decBusy(this.busyId);
            });
          }
        }
      });
    }
    if (o.length > 0) {
      o.forEach(() => {
        this.busyId = c.UIBusyTasks.setBusy(this.busyId);
        s.Cmd.setUiBusy(true);
      });
      this._notifyHeightChange(o, true);
      this._transitionAffected(o, true).then(() => {
        c.UIBusyTasks.decBusy(this.busyId);
      });
    }
  }
  componentDidMount() {
    const e = this.state.children.reduce((e, t, n) => {
      const a = this._refChildren.get(`${n}`);
      if (a) {
        a.style.transform = "translateY(0)";
        return e + a.clientHeight;
      } else {
        return e;
      }
    }, 0);
    this.props.onHeightChange(e, true);
  }
  _childHeightCallback(e) {
    const t = this._heightCallbackCache.get(e);
    if (t) {
      return t;
    }
    const n = this._refChildren.get(`${e}`);
    let a = n ? n.clientHeight : 0;
    const r = e => {
      let {
        height: t
      } = e;
      if (a && t && t !== a) {
        this.props.onHeightChange(t - a);
        a = t;
      } else {
        a = t;
      }
    };
    this._heightCallbackCache.set(e, r);
    return r;
  }
  _cloneChild(e, t) {
    if (!e) {
      return e;
    }
    const n = this._setChildRefCache.getRefSetter(`${t}`);
    return (0, h.cloneElement)(e, {
      ref: t => {
        n(t);
        const a = e.ref;
        if (a) {
          if (typeof a == "function") {
            a(t);
          } else {
            a.current = t;
          }
        }
      }
    });
  }
  render() {
    return this.state.children.map((e, t) => h.default.createElement(d.default, {
      key: `.${t}`,
      onResize: this._childHeightCallback(t)
    }, this._cloneChild(e, t)));
  }
}
exports.default = v;
v.displayName = "AnimationGroup";