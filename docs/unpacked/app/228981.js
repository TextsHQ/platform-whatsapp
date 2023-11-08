var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateQPSurfacesFromNotification = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./312158.js");
var o = require("./658265.js");
var s = require("./732011.js");
var l = require("./899137.js");
function u(e) {
  var t;
  var n;
  var r;
  var i;
  var a;
  const o = (t = e.qpConfigPacing) === null || t === undefined ? undefined : t.userInfo;
  return {
    impressions: (n = o == null ? undefined : o.impressionCount) !== null && n !== undefined ? n : 0,
    primaryClicks: (r = o == null ? undefined : o.primaryClickCount) !== null && r !== undefined ? r : 0,
    secondaryClicks: (i = o == null ? undefined : o.secondaryClickCount) !== null && i !== undefined ? i : 0,
    dismisses: (a = o == null ? undefined : o.dismissClickCount) !== null && a !== undefined ? a : 0
  };
}
function c(e, t) {
  var n;
  var r;
  var i;
  var a;
  var o;
  const s = e.tracking;
  const l = (n = t.qpConfigPacing) === null || n === undefined ? undefined : n.userInfo;
  const c = u(t);
  const d = s.dismisses - ((r = l == null ? undefined : l.dismissClickCount) !== null && r !== undefined ? r : 0);
  const p = s.primaryClicks - ((i = l == null ? undefined : l.primaryClickCount) !== null && i !== undefined ? i : 0);
  const f = s.secondaryClicks - ((a = l == null ? undefined : l.secondaryClickCount) !== null && a !== undefined ? a : 0);
  const _ = s.impressions - ((o = l == null ? undefined : l.impressionCount) !== null && o !== undefined ? o : 0);
  if (d > 0) {
    c.dismisses += d;
  }
  if (p > 0) {
    c.primaryClicks += p;
  }
  if (f > 0) {
    c.secondaryClicks += f;
  }
  if (_ > 0) {
    c.impressions += _;
  }
  const {
    lastImpressionTs: g,
    lastPrimaryClickTs: m,
    lastSecondaryClickTs: h,
    lastDismissTs: y
  } = s;
  if (g != null) {
    c.lastImpressionTs = g;
  }
  if (m != null) {
    c.lastPrimaryClickTs = m;
  }
  if (h != null) {
    c.lastSecondaryClickTs = h;
  }
  if (y != null) {
    c.lastDismissTs = y;
  }
  return c;
}
function d() {
  return (d = (0, i.default)(function* (e, t) {
    if (e.length === 0) {
      __LOG__(2)`updateQPSurfacesFromNotification: no surfaces`;
      return Promise.resolve();
    }
    const n = e.map(e => e.id);
    if (new Set(n).size !== n.length) {
      __LOG__(3)`updateQPSurfacesFromNotification: found duplicated surface`;
      return Promise.resolve();
    }
    const r = new Map();
    e.forEach(e => {
      if (a.KNOWN_QP_SURFACES.has(e.id)) {
        e.promotions.forEach(t => {
          r.set(t.id, {
            promotion: t,
            surfaceId: e.id
          });
        });
      }
    });
    yield (0, l.createNonPersistedJob)("updateQPSurfacesFromNotification", () => (0, s.getStorage)().lock(["quick-promotions"], function () {
      var e = (0, i.default)(function* (e) {
        let [i] = e;
        const a = (yield i.anyOf(["surfaceId"], n)).map(e => {
          const {
            id: n
          } = e;
          const a = r.get(n);
          if (a == null) {
            return i.remove(n);
          }
          const o = c(e, a.promotion);
          const s = {
            data: a.promotion,
            ts: t,
            tracking: o
          };
          r.delete(n);
          return i.merge(n, s);
        });
        yield Promise.all(a);
        const o = Array.from(r.values()).map(e => {
          let {
            promotion: n,
            surfaceId: r
          } = e;
          return {
            id: n.id,
            surfaceId: r,
            data: n,
            ts: t,
            tracking: u(n)
          };
        });
        yield i.bulkCreate(o);
      });
      return function () {
        return e.apply(this, arguments);
      };
    }())).waitUntilCompleted();
    yield (0, o.loadQuickPromotions)();
  })).apply(this, arguments);
}