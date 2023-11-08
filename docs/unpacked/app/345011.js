var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.purgeExpiredOrphanRecords = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./730280.js");
var o = require("./939314.js");
var s = require("./373070.js");
var l = require("./851698.js");
var u = require("./292174.js");
var c = r(require("../vendor/730381.js"));
function d() {
  return (d = (0, i.default)(function* (e, t) {
    const n = (0, c.default)().subtract(e, "days").unix();
    const r = (0, c.default)().subtract(t, "days").unix();
    const i = yield (0, u.getMessageOrphanTable)().between(["t"], 0, n);
    const d = new Set(i.map(e => e.parentMsgKey));
    const p = yield (0, l.getMessageTable)().bulkGet(Array.from(d));
    const f = new Set(p.filter(e => e && e.type === s.MSG_TYPE.UNKNOWN).map(e => e == null ? undefined : e.id));
    const _ = i.filter(e => !f.has(e.parentMsgKey) || e.t < r).map(o.orphanFromDbRow);
    const g = yield (0, a.mapOrphansToProviders)(_);
    const m = [];
    for (const [e, t] of g.entries()) {
      if (e.onRecordsPurged != null) {
        m.push(e.onRecordsPurged(t));
      }
    }
    yield Promise.all(m);
    const h = _.map(e => e.msgKey);
    return (0, u.getMessageOrphanTable)().bulkRemove(h);
  })).apply(this, arguments);
}