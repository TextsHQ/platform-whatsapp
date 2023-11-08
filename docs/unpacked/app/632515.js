var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var a = require("./898817.js");
var o = require("./250655.js");
var s = i(require("./670983.js"));
var l = i(require("./229922.js"));
var u = require("./950376.js");
var c = require("./806279.js");
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
}(require("./288057.js"));
var p = i(require("./99398.js"));
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
class _ {
  constructor() {
    this._queue = new Map();
    this._inDelay = new Map();
    this._numInProgress = 0;
  }
  static maxInProgressRetry() {
    return 20;
  }
  enqueue(e) {
    const t = this._queue.get(e.key());
    if (t) {
      if (e.hasPrivacyChecks !== t.hasPrivacyChecks) {
        const t = `Img:hasPrivacyChecks shouldn't change ${e.key()}`;
        return Promise.reject(t);
      }
      t.refCount++;
      return t.deferred.promise;
    }
    e.deferred = new u.Resolvable();
    e.refCount++;
    this._addToQueue(e);
    return e.deferred.promise;
  }
  remove(e) {
    const t = e.key();
    this._queue.delete(t);
    const n = this._inDelay.get(t);
    if (n) {
      n.controller.abort();
      this._inDelay.delete(t);
    }
  }
  _addToQueue(e) {
    const t = e.generation;
    e.generation++;
    if (t > 10) {
      const t = `Stop retrying ${e.src} after 10 times`;
      throw new d.GaveUpRetry(t);
    }
    const n = e.key();
    if (t === 0) {
      this._queue.set(n, e);
      this._startProcessing();
    } else {
      const i = new r();
      const s = i.signal;
      const u = (0, l.default)((0, o.expDelaySec)(t, 60, 0), s).catch((0, a.catchAbort)(() => {}));
      this._inDelay.set(e.key(), {
        promise: u,
        controller: i
      });
      u.then(() => {
        this._inDelay.delete(n);
        if (!s.aborted) {
          this._queue.set(n, e);
        }
        this._startProcessing();
      });
    }
  }
  _startProcessing() {
    if (!this._waitPromise) {
      this._waitPromise = p.default.waitIfOffline({
        signal: new r().signal
      }).then(() => {
        this._waitPromise = null;
        c.UIBusyTasks.enqueue(() => {
          this._processRetries();
        });
      });
    }
  }
  _processRetries() {
    const e = this._queue.values();
    let t;
    for (; (t = e.next()) && !t.done && !(this._numInProgress > _.maxInProgressRetry());) {
      const e = t.value;
      this._processRetry((0, s.default)(e, "retry"));
    }
  }
  _processRetry(e) {
    if (!e.inProgress) {
      if (e.deferred.resolveWasCalled()) {
        this._queue.delete(e.key());
      } else {
        this._numInProgress++;
        e.sendXHR().then(t => {
          this._queue.delete(e.key());
          if (t) {
            e.deferred.resolve();
          } else if (e.shouldRetain()) {
            this._addToQueue(e);
          }
        }).catch(t => {
          this._queue.delete(e.key());
          e.deferred.reject(t);
        }).finally(() => {
          this._numInProgress--;
        });
      }
    }
  }
}
exports.default = _;