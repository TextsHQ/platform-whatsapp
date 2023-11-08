var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processOrphansForNewMsg = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/385564.js"));
var o = require("./652056.js");
var s = require("./34214.js");
var l = require("./724367.js");
var u = require("./730280.js");
var c = require("./292174.js");
function d() {
  return (d = (0, i.default)(function* (e, t) {
    const n = yield (0, l.getMessageOrphansByParentMsgKey)(e.id);
    if (n.length) {
      __LOG__(2)`processOrphansForNewMsg: found orphans`;
    }
    const {
      unifiedAddons: r,
      otherOrphans: i
    } = (0, s.sortAddonOrphans)(n);
    const d = yield (0, u.mapOrphansToProviders)(i);
    const p = [(0, o.processMsgs)(r)];
    for (const [n, r] of d.entries()) {
      p.push(n.processOrphansForNewMsg(e, t, r));
    }
    yield Promise.all(p);
    let f = (0, a.default)(Array.from(d.values())).map(e => e.msgKey);
    f = f.concat(r.map(e => e.id.toString()));
    yield (0, c.getMessageOrphanTable)().bulkRemove(f);
  })).apply(this, arguments);
}