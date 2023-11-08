var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TYPES = undefined;
exports.defineEvents = function (e) {
  for (const n in e) {
    var t;
    const r = e[n];
    const i = r[2];
    let a = 1;
    a = i[2];
    const o = (t = r[3]) !== null && t !== undefined ? t : "regular";
    const s = r.length === 5 ? r[4] : -1;
    return m({
      name: n,
      id: r[0],
      props: r[1],
      weight: a,
      wamChannel: o,
      privateStatsIdInt: s
    });
  }
};
exports.defineGlobal = function (e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    const [i, a, o = ["regular"]] = r;
    const s = _.defineGlobal(n, i, a, o);
    t[n] = {
      type: s.validator,
      set(e) {
        if (this.commitOnSet) {
          const t = (0, d.getWamRuntime)();
          if (t) {
            t.set(s, e);
          } else {
            (0, u.queueMetric)(s, e);
          }
        }
      }
    };
  }
  return new ((0, p.defineTypeHash)("Global", t, h))();
};
exports.metrics = exports.events = undefined;
var i = r(require("../vendor/722205.js"));
var a = r(require("./817173.js"));
var o = require("./508247.js");
var s = require("./226924.js");
var l = require("./777634.js");
var u = require("./330964.js");
var c = require("./824194.js");
var d = require("./413950.js");
var p = require("./623703.js");
const f = Object.freeze({
  BOOLEAN: "boolean",
  INTEGER: "integer",
  NUMBER: "number",
  STRING: "string",
  TIMER: "timer"
});
exports.TYPES = f;
const _ = new s.Metrics();
exports.metrics = _;
const g = {};
function m(e) {
  let {
    name: t,
    id: n,
    weight: r,
    props: s,
    wamChannel: u,
    privateStatsIdInt: d
  } = e;
  const m = {
    id: n,
    weight: r,
    wamChannel: u,
    privateStatsIdInt: d
  };
  const h = {};
  const y = [];
  for (const e in s) {
    const n = s[e];
    const r = _.define(t, e, n[0], n[1]);
    h[e] = r.validator;
    if (n[1] === f.TIMER) {
      y.push(e);
    }
  }
  const E = (0, p.defineTypeHash)(t, h, l.WamEvent);
  y.forEach(e => {
    m["mark" + (0, a.default)(e)] = function (n) {
      var r;
      var i;
      const {
        startMarkers: a,
        eventTime: s
      } = this;
      this[e] = Date.now() - ((r = (i = a[e]) === null || i === undefined ? undefined : i.ts) !== null && r !== undefined ? r : s);
      const l = (n == null ? undefined : n.showInTimeline) !== false;
      const u = this.startMark;
      if (o.USER_TIMINGS && u != null && l && self.performance !== undefined && self.performance.mark && self.performance.measure) {
        var d;
        var p;
        const {
          $className: n,
          instanceId: r
        } = this;
        const i = `${n} ${r}: End`;
        self.performance.mark(i);
        self.performance.measure((0, c.formatMeasureLabel)(`${t}.${e}`), (d = (p = this.startMarkers[e]) === null || p === undefined ? undefined : p.name) !== null && d !== undefined ? d : u, i);
      }
    };
    m[`start${(0, a.default)(e)}`] = function (t) {
      const n = Date.now();
      this.startMarkers[e] = {
        ts: n
      };
      const r = (t == null ? undefined : t.showInTimeline) !== false;
      if (o.USER_TIMINGS && r && self.performance !== undefined && self.performance.mark && self.performance.measure) {
        const {
          $className: t,
          instanceId: r
        } = this;
        const i = `${t} ${r} ${e}: Start`;
        self.performance.mark(i);
        this.startMarkers[e] = {
          name: i,
          ts: n
        };
      }
    };
  });
  (0, i.default)(E.prototype, m);
  g[t] = E;
  return E;
}
exports.events = g;
class h extends p.TypeHash {
  constructor() {
    super(...arguments);
    this.commitOnSet = true;
  }
}