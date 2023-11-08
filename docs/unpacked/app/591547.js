var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log = exports.LoggerImpl = exports.Logger = exports.LOG_CAPACITY_IN_DATABASE = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./473490.js");
var o = r(require("./869898.js"));
var s = require("./685639.js");
var l = r(require("./97359.js"));
var u = r(require("./356344.js"));
var c = require("./994569.js");
var d = require("./381162.js");
var p = require("./191873.js");
var f = r(require("./556869.js"));
var _ = r(require("../vendor/730381.js"));
(0, a.initTagsLogger)();
exports.LOG_CAPACITY_IN_DATABASE = 5000;
const g = "LTSXOo+_*-=.<^!#?".split("");
function m() {
  return g[Math.round(Math.random() * (g.length - 1))];
}
const h = m() + m() + m() + m();
const y = {
  [y.ALL = 0]: "all",
  [y.INFO = 1]: "info",
  [y.LOG = 2]: "log",
  [y.WARN = 3]: "warn",
  [y.ERROR = 4]: "error",
  [y.OFF = 5]: "off"
};
class E {
  constructor(e, t) {
    var n = this;
    let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    this.localCursor = 0;
    this.writeFrom = 0;
    this.pending = undefined;
    this.timer = new s.ShiftTimer(() => this._persistIdb());
    this.runningTimestamp = 0;
    this.isTakeOver = false;
    this.log = (0, o.default)(function (e) {
      let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
      let r = arguments.length > 2 ? arguments[2] : undefined;
      let i = arguments.length > 3 ? arguments[3] : undefined;
      let a = arguments.length > 4 ? arguments[4] : undefined;
      return function (o) {
        for (var s = arguments.length, l = new Array(s > 1 ? s - 1 : 0), c = 1; c < s; c++) {
          l[c - 1] = arguments[c];
        }
        const d = (0, u.default)(o, l, !t);
        n.logImpl(e, d, r, i, a);
        return d;
      };
    }, (e, t, n, r, i) => n || i ? null : String(e) + String(Boolean(t)) + String(Boolean(r)));
    this.logsDBProvider = e;
    this.logCapacityInDatabase = t;
    this.logs = new Array(t);
    this.microStep = 1 / this.logCapacityInDatabase;
    this.processTag = r;
  }
  logImpl(e, t, n, r, i) {
    const a = Date.now();
    const o = (0, _.default)(a).locale("en").format("YYYY-MM-DD HH:mm:ss.SSS:");
    const s = n ? `\n${(0, p.normalizeStack)(n, true)}` : "";
    const l = [S(e), r && !(0, d.isWaitingForUpload)() ? "sendlogs" : null, ...(i != null ? i : []), this.processTag].filter(Boolean).map(e => `[${e}]`).join("");
    const u = `${h} ${o}` + (l ? `${l} ` : "") + t + s;
    this.logs[this.localCursor] = {
      m: u,
      t: a
    };
    this.localCursor = (this.localCursor + 1) % this.logCapacityInDatabase;
    if (this.logs[this.localCursor] != null) {
      this.writeFrom = this.localCursor;
    }
    if (!this.isTakeOver) {
      this.timer.debounceAndCap(250, 1000);
    }
  }
  _persistIdb() {
    var e = this;
    if (!(this.pending || this.logs[this.writeFrom] == null || this.isTakeOver)) {
      this.pending = this.logsDBProvider().then(t => t.transaction("rw", t.logs, (0, i.default)(function* () {
        var n;
        let r = yield t.logs.orderBy("count").last();
        if (!r) {
          r = yield t.logs.orderBy("timestamp").last();
        }
        let i = r ? r.line + 1 : 0;
        let a = ((n = r) === null || n === undefined ? undefined : n.count) ? r.count + 1 : i;
        for (; e.logs[e.writeFrom] != null;) {
          const n = e.logs[e.writeFrom];
          e.logs[e.writeFrom] = undefined;
          e.writeFrom = (e.writeFrom + 1) % e.logCapacityInDatabase;
          e.runningTimestamp = n.t <= e.runningTimestamp ? e.runningTimestamp + e.microStep : n.t;
          t.logs.put({
            line: i++ % e.logCapacityInDatabase,
            log: n.m,
            timestamp: e.runningTimestamp,
            count: a++
          });
        }
      }))).then(() => {
        if (this.logs[this.writeFrom] != null) {
          this.timer.debounceAndCap(250, 1000);
        }
      }).catch(() => {}).finally(() => {
        this.pending = undefined;
      });
    }
  }
  getLogs() {
    let e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    const n = [];
    if (this.pending) {
      n.push(this.pending);
    }
    if (this.timer.isScheduled()) {
      this.timer.forceRunNow();
      if (this.pending) {
        n.push(this.pending);
      }
    }
    return Promise.all(n).then(() => this.logsDBProvider()).then(n => (0, c.getTimeboxedAndTrimmedLogs)(n, e ? 0 : Date.now() - 604800000, t)).then(e => e.map(e => e.log)).catch(() => this.logs.filter(Boolean).map(e => e.m));
  }
  clearLogs() {
    return this.logsDBProvider().then(function () {
      var e = (0, i.default)(function* (e) {
        yield e.logs.clear();
      });
      return function () {
        return e.apply(this, arguments);
      };
    }()).catch(() => {}).finally(() => {
      this.localCursor = 0;
      this.writeFrom = 0;
      this.logs = new Array(this.logCapacityInDatabase);
    });
  }
  logUncaughtError(e, t) {
    const n = e instanceof Error && e.stack ? e : undefined;
    let r;
    r = n ? String(e) : t ? `unhandled-rejection: ${String(e)}` : `Error: ${String(e)}`;
    this.logImpl(y.ERROR, r, n, true, ["uncaught"]);
    if (t != null) {
      const e = String(t);
      this.logImpl(y.WARN, e);
    }
    return r;
  }
  onTakeOver() {
    this.isTakeOver = true;
  }
  registerErrorNotificationListener(e) {
    this._errorNotificationCallback = e;
  }
}
function S(e) {
  switch (e) {
    case y.INFO:
    case y.LOG:
    case y.WARN:
    case y.ERROR:
      return y[e];
    default:
      throw (0, f.default)(`Unexpected numeric log level: ${e}`);
  }
}
exports.LoggerImpl = E;
const v = new E(() => (0, l.default)(require("./584666.js")).idb(), 5000);
exports.Logger = v;
const T = v.log;
exports.log = T;