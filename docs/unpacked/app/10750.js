var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./556869.js"));
const a = {
  ROOT: 1,
  THENABLE: 2,
  FINALLY: 3,
  META: 4
};
const o = {
  PENDING: 1,
  FULFILLED: 2,
  REJECTED: 3
};
function s() {
  let e;
  let t;
  this._parent = null;
  this._subs = [];
  this._catchTypes = null;
  this._onResolve = null;
  this._onReject = null;
  this.type = a.ROOT;
  this.state = o.PENDING;
  this.value = undefined;
  this._forceable = false;
  this._cancellable = false;
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      e = arguments[0];
      break;
    case 2:
      t = arguments[0];
      e = arguments[1];
      break;
    default:
      throw (0, i.default)("TightPromise constructor with " + arguments.length + " arguments");
  }
  this.context = t;
  if (arguments.length > 0) {
    try {
      e.call(t, u.bind(this), c.bind(this));
    } catch (e) {
      c.call(this, e);
    }
  }
}
function l() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
    t[n] = arguments[n];
  }
  const r = new s();
  r.type = a.THENABLE;
  r._onReject = arguments[arguments.length - 1];
  if (arguments.length > 1) {
    r._catchTypes = Array.prototype.slice.call(arguments, 0, arguments.length - 1);
    r._catchTypes.forEach(function (e) {
      if (typeof e != "function") {
        throw (0, i.default)("expected type, got " + e);
      }
    });
  }
  this._addChild(r);
  return r;
}
function u(e) {
  var t;
  if (this.state === o.PENDING) {
    if (typeof (t = e) != "object" && typeof t != "function" || typeof t.then != "function") {
      this.value = e;
      this.state = o.FULFILLED;
      this._notifySubs();
    } else {
      e.then(u.bind(this), c.bind(this));
    }
  }
}
function c(e) {
  if (this.state === o.PENDING) {
    this.value = e;
    this.state = o.REJECTED;
    this._notifySubs();
  }
}
s.STATE = o;
s.TYPE = a;
s.prototype = {
  isPending: function () {
    return this.state === o.PENDING;
  },
  then: function (e, t) {
    if (!e && !t) {
      return this;
    }
    const n = new s();
    n.type = a.THENABLE;
    n._onResolve = e || null;
    n._onReject = t || null;
    this._addChild(n);
    return n;
  },
  catch: l,
  catchType: l,
  catchTypes: l,
  catchTypes3: l,
  catchEqualTo: l,
  finally: function (e) {
    const t = new s();
    t.type = a.FINALLY;
    t._onResolve = e;
    this._addChild(t);
    return t;
  },
  bind: function (e) {
    const t = new s();
    t.type = a.META;
    this._addChild(t);
    t.context = e;
    return t;
  },
  spread: function (e) {
    return this.then(function (t) {
      e.apply(this, t);
    });
  },
  get: function (e) {
    return this.then(function (t) {
      return t[e];
    });
  },
  forceable: function () {
    const e = new s();
    e.context = this.context;
    e.type = a.META;
    this._addChild(e);
    e._forceable = true;
    return e;
  },
  cancellable: function () {
    const e = new s();
    e.context = this.context;
    e.type = a.META;
    this._addChild(e);
    e._cancellable = true;
    return e;
  },
  force: function (e) {
    if (this._forceable) {
      let t = this;
      for (; t.type === a.META;) {
        const e = t._parent;
        if (!(e == null ? undefined : e._forceable) || e.state !== o.PENDING) {
          break;
        }
        t = e;
      }
      u.call(this, e);
    }
  },
  cancel: function (e) {
    let t = e;
    if (this._cancellable) {
      t = t || new Promise.CancellationError();
      let e = this;
      let n = false;
      do {
        const t = e._parent;
        if ((t == null ? undefined : t._cancellable) && t.state === o.PENDING) {
          e = t;
        } else {
          n = true;
        }
      } while (!n);
      c.call(e, t);
    }
  },
  loosen: function () {
    return Promise.resolve(this);
  },
  _run: function (e, t) {
    let n;
    try {
      n = e.call(this.context, t);
    } catch (e) {
      return void c.call(this, e);
    }
    u.call(this, n);
  },
  _handle: function () {
    if (this.state !== o.PENDING) {
      return;
    }
    const e = this._parent;
    switch (this.type) {
      case a.THENABLE:
        if (e.state === o.FULFILLED) {
          const t = this._onResolve;
          if (t) {
            this._run(t, e.value);
          } else {
            u.call(this, e.value);
          }
        } else if (this._onReject) {
          const t = this._catchTypes;
          const n = t ? t.length : 0;
          const r = e.value;
          if (n === 0) {
            return void this._run(this._onReject, r);
          }
          for (let e = 0; e < n; e++) {
            if (r instanceof t[e]) {
              return void this._run(this._onReject, r);
            }
          }
          c.call(this, r);
        } else {
          c.call(this, e.value);
        }
        return;
      case a.FINALLY:
        try {
          this._onResolve.call(this.context);
        } catch (e) {
          !function (e) {
            self.setTimeout(function (e) {
              throw e;
            }, 0, e);
          }(e);
        }
      default:
        if (e.state === o.FULFILLED) {
          u.call(this, e.value);
        } else {
          c.call(this, e.value);
        }
    }
  },
  _addChild: function (e) {
    e._parent = this;
    e.context = this.context;
    e._cancellable = this._cancellable;
    if (e.type === a.META) {
      e._forceable = this._forceable;
    }
    if (this.state === o.PENDING) {
      this._subs.push(e);
    } else {
      e._handle();
    }
  },
  _notifySubs: function () {
    this._subs.forEach(function (e) {
      e._handle();
    });
  }
};
s.delay = function () {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
    t[n] = arguments[n];
  }
  let r;
  let i;
  switch (arguments.length) {
    case 0:
      r = 0;
      break;
    case 1:
      r = arguments[0];
      break;
    default:
      r = arguments[1];
      i = arguments[0];
  }
  return new s(function (e) {
    self.setTimeout(e.bind(null, i), r);
  });
};
s.resolve = function (e) {
  const t = new s();
  u.call(t, e);
  return t;
};
s.reject = function (e) {
  const t = new s();
  c.call(t, e);
  return t;
};
var d = s;
exports.default = d;