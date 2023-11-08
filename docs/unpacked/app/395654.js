var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/873955.js"));
var a = r(require("../vendor/441609.js"));
var o = r(require("../vendor/751463.js"));
var s = r(require("./556869.js"));
const l = /\s+/;
exports.default = class {
  on(e, t, n) {
    if (!t) {
      return this;
    }
    if (typeof t != "function") {
      throw (0, s.default)("Callback parameter passed is not a function");
    }
    if (!this._multiEvent(this.on, ...arguments)) {
      this._getOrCreateEvents(e).push({
        callback: t,
        context: n,
        ctx: n || this
      });
    }
    return this;
  }
  once(e, t, n) {
    if (!t) {
      return this;
    }
    if (this._multiEvent(this.once, ...arguments)) {
      return this;
    }
    const r = this;
    const i = (0, o.default)(function () {
      r.off(e, i);
      t.apply(this, arguments);
    });
    i._callback = t;
    return this.on(e, i, n);
  }
  off(e, t, n) {
    const r = this._events;
    if (!r) {
      return this;
    }
    if (this._multiEvent(this.off, ...arguments)) {
      return this;
    }
    if (!e && !t && !n) {
      this._events = undefined;
      return this;
    }
    const i = e ? [e] : Object.keys(r);
    for (let e = 0; e < i.length; e++) {
      const a = i[e];
      const o = r[a];
      if (o) {
        r[a] = [];
        if (t || n) {
          for (let e = 0; e < o.length; e++) {
            const i = o[e];
            if (t && t !== i.callback && t !== i.callback._callback || n && i.context !== n) {
              r[a].push(i);
            }
          }
        }
        if (!r[a].length) {
          delete r[a];
        }
      }
    }
    return this;
  }
  trigger(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {
      n[r - 1] = arguments[r];
    }
    if (!this._events) {
      return this;
    }
    if (this._multiEvent(this.trigger, ...arguments)) {
      return this;
    }
    const i = this._getEvents(e);
    const a = this._getEvents("all");
    if (i) {
      this._triggerEvents(i, n);
    }
    if (a) {
      this._triggerEvents(a, arguments);
    }
    return this;
  }
  stopListening(e, t, n) {
    const r = this._listeningTo;
    if (!r) {
      return this;
    }
    const i = e == null ? undefined : e._listenId;
    const o = i ? {
      [i]: e
    } : r;
    for (const e in o) {
      const i = o[e];
      i.off(t, n, this);
      if (!t && !n || (0, a.default)(i._events)) {
        delete r[e];
      }
    }
    if ((0, a.default)(this._listeningTo)) {
      delete this._listeningTo;
    }
    return this;
  }
  listenTo(e, t, n) {
    if (n) {
      this._addListeningTo(e);
      e.on(t, n, this);
      return this;
    } else {
      return this;
    }
  }
  listenToOnce(e, t, n) {
    this._addListeningTo(e);
    e.once(t, n, this);
    return this;
  }
  listenToAndRun(e, t, n) {
    this.listenTo.apply(this, arguments);
    n.apply(this);
    return this;
  }
  isListening(e) {
    const t = this._events;
    return !!t && (typeof e == "string" ? !!t[e] : (0, a.default)(t));
  }
  _addListeningTo(e) {
    (this._listeningTo || (this._listeningTo = {}))[e._listenId || (e._listenId = (0, i.default)("l"))] = e;
  }
  _getOrCreateEvents(e) {
    const t = this._events || (this._events = {});
    return t[e] || (t[e] = []);
  }
  _getEvents(e) {
    if (!e) {
      return;
    }
    const t = this._events;
    if (t) {
      return t[e];
    } else {
      return undefined;
    }
  }
  _multiEvent(e, t) {
    if (l.test(t)) {
      const a = t.split(l);
      for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) {
        r[i - 2] = arguments[i];
      }
      for (let t = 0; t < a.length; t++) {
        e.call(this, a[t], ...r);
      }
      return true;
    }
    return false;
  }
  _triggerEvents(e, t) {
    let n;
    let r = -1;
    const i = e.length;
    const a = t[0];
    const o = t[1];
    const s = t[2];
    switch (t.length) {
      case 0:
        for (; ++r < i;) {
          (n = e[r]).callback.call(n.ctx);
        }
        return;
      case 1:
        for (; ++r < i;) {
          (n = e[r]).callback.call(n.ctx, a);
        }
        return;
      case 2:
        for (; ++r < i;) {
          (n = e[r]).callback.call(n.ctx, a, o);
        }
        return;
      case 3:
        for (; ++r < i;) {
          (n = e[r]).callback.call(n.ctx, a, o, s);
        }
        return;
      default:
        for (; ++r < i;) {
          (n = e[r]).callback.apply(n.ctx, t);
        }
    }
  }
  bind() {
    return this.on(...arguments);
  }
  unbind() {
    return this.off(...arguments);
  }
  removeListener() {
    return this.off(...arguments);
  }
  removeAllListeners() {
    return this.off();
  }
  emit() {
    for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) {
      t[n - 1] = arguments[n];
    }
    return this.trigger(arguments);
  }
};