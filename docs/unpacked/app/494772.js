var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NOT_HANDLED = exports.DynamicRouter = undefined;
var i = r(require("./415227.js"));
const a = {
  sentinel: "RESPONSE_NAMESPACE"
};
const o = {
  sentinel: "NOT_HANDLED"
};
exports.NOT_HANDLED = o;
function s(e, t) {
  const n = t.namespace;
  if (n === a) {
    return l;
  } else {
    return e.get(n);
  }
}
function l(e, t, n) {
  n(t);
}
function u(e) {
  if (e != null && (typeof e == "object" || typeof e == "function")) {
    const t = e.then;
    if (typeof t == "function") {
      return t;
    } else {
      return null;
    }
  }
  return null;
}
exports.DynamicRouter = class {
  constructor() {
    var e = this;
    this._basePromise = Promise.resolve();
    this._handlers = new Map();
    this._handlerChangeCount = 0;
    this._firstRoute = null;
    this._nextRoute = null;
    this._lastRoute = null;
    this.fireAndForget = function (t, n, r) {
      var i;
      let a = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
      if (!((i = e._onRouteCalled) === null || i === undefined)) {
        i.call(e, t, n, r);
      }
      e._schedule(t, n, r, null, a);
    };
    this.sendAndReceive = function (t, n, r) {
      var i;
      let o = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
      if (!((i = e._onRouteCalled) === null || i === undefined)) {
        i.call(e, t, n, r);
      }
      return new Promise((i, s) => {
        e._schedule(t, n, r, t => {
          try {
            const n = u(t);
            if (n) {
              n.call(t, t => {
                e._schedule(a, "", t, i, o);
              }, t => {
                e._schedule(a, "", t, s, false);
              });
            } else {
              e._schedule(a, "", t, i, o);
            }
          } catch (t) {
            e._schedule(a, "", t, s, false);
          }
        }, o);
      });
    };
    this._run = () => {
      let e = this._nextRoute;
      if (!e) {
        return;
      }
      const t = this._handlers;
      let n;
      for (; e && !(n = s(t, e));) {
        this._nextRoute = e = e.nextRoute;
      }
      if (!e || !n) {
        return;
      }
      const r = this._runHandler(n, e);
      let i = true;
      if (r !== o) {
        const t = e.prevRoute;
        const n = e.nextRoute;
        if (this._nextRoute === e) {
          this._nextRoute = n;
        }
        if (t) {
          t.nextRoute = n;
        } else {
          this._firstRoute = n;
        }
        if (n) {
          n.prevRoute = t;
        } else {
          i = false;
          this._lastRoute = t;
        }
      }
      if (i) {
        this._basePromise.then(this._run);
      }
      return r;
    };
  }
  hasHandlerForNamespace(e) {
    return this._handlers.has(e);
  }
  getHandledNamespaces() {
    return Array.from(this._handlers.keys());
  }
  setOnRouteCalled(e) {
    this._onRouteCalled = e;
  }
  setNamespaceHandler(e, t) {
    const n = this._handlers;
    const r = n.get(e);
    if (r !== t && (++this._handlerChangeCount, n.set(e, t), !r)) {
      const e = this._firstRoute;
      if (e) {
        if (!this._nextRoute) {
          this._basePromise.then(this._run);
        }
        this._nextRoute = e;
      }
    }
  }
  setHandlers(e, t) {
    this.setNamespaceHandler(e, function (n, r, a) {
      if (t[n] == null) {
        __LOG__(4, undefined, new Error())`${n} is not defined for ${e}`;
        throw (0, i.default)(`${n} is not defined for ${e}`);
      }
      const o = t[n](r);
      if (a) {
        a(o);
      }
    });
  }
  _schedule(e, t, n, r, i) {
    const a = this._lastRoute;
    const o = {
      namespace: e,
      route: t,
      arg: n,
      resolver: r,
      prevRoute: a,
      nextRoute: null,
      silentLog: i
    };
    this._lastRoute = o;
    let l = true;
    if (a) {
      a.nextRoute = o;
      l = !this._nextRoute;
    } else {
      this._firstRoute = o;
    }
    if (l && s(this._handlers, o)) {
      this._nextRoute = o;
      this._basePromise.then(this._run);
    }
  }
  _runHandler(e, t) {
    const {
      route: n,
      arg: r,
      resolver: a,
      silentLog: s
    } = t;
    const l = this._handlerChangeCount;
    let u = null;
    let c = null;
    try {
      u = e(n, r, a, s);
    } catch (e) {
      c = Promise.reject(e);
    }
    if (u === o) {
      if (l !== this._handlerChangeCount) {
        return o;
      }
      c = Promise.reject((0, i.default)("DynamicRouter: NOT_HANDLED can only be used when updating handlers"));
    }
    if (!a) {
      return c;
    }
    if (c) {
      a(c);
    }
  }
};