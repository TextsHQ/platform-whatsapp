var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Metrics = exports.Metric = exports.GlobalMetric = undefined;
var i = r(require("./670983.js"));
var a = require("./901032.js");
function o(e) {
  return typeof e == "number" && e === Math.floor(e);
}
class s {
  constructor(e, t, n) {
    this.name = e;
    this.id = t;
    this.type = n;
    if (typeof n == "object") {
      const e = new Set(Object.values(n));
      this.validator = t => e.has(t);
    } else if (n === a.TYPES.INTEGER || n === a.TYPES.TIMER) {
      this.validator = o;
    } else {
      this.validator = n;
    }
  }
}
exports.Metric = s;
class l extends s {
  constructor(e, t, n, r) {
    super(e, t, n);
    this.channels = r;
  }
}
exports.GlobalMetric = l;
exports.Metrics = class {
  constructor() {
    this._events = {};
    this._globalMetrics = new Map();
  }
  _key(e, t) {
    return `${e}::${t}`;
  }
  getEvent(e, t) {
    const n = this._key(e, t);
    return (0, i.default)(this._events[n], n);
  }
  define(e, t, n, r) {
    const i = this._key(e, t);
    if (!(i in this._events)) {
      this._events[i] = new s(t, n, r);
    }
    return this._events[i];
  }
  defineGlobal(e, t, n, r) {
    if (!this._globalMetrics.has(e)) {
      this._globalMetrics.set(e, new l(e, t, n, r));
    }
    return (0, i.default)(this._globalMetrics.get(e), e);
  }
  getGlobal(e) {
    return (0, i.default)(this._globalMetrics.get(e), e);
  }
};