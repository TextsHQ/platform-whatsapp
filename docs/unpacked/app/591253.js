var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getParentMessages = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("./670983.js"));
var o = require("./817690.js");
var s = require("./373070.js");
var l = require("./525119.js");
var u = require("./612919.js");
function c() {
  return (c = (0, i.default)(function* (e) {
    const t = new Set(e.map(d));
    const {
      matParentMsgKeys: n,
      alternateWidMap: r
    } = (0, u.getAlternateWidMapForPolls)(e);
    n.forEach(e => {
      t.add(e);
    });
    const i = yield (0, o.getMsgsByMsgKey)(Array.from(t));
    const a = new Map(i.map(e => [e.id.toString(), e]));
    const c = new Map();
    const p = [];
    for (const t of e) {
      let e = a.get(d(t));
      if (e == null && (0, l.isMatFullyEnabled)()) {
        const n = r.get(d(t));
        if (n != null) {
          e = a.get(n.id.toString());
        }
      }
      if (e == null || e.type === s.MSG_TYPE.UNKNOWN) {
        p.push(t);
      } else {
        c.set(t, e);
      }
    }
    return {
      pollUpdateMsgsToParentMsgs: c,
      orphans: p
    };
  })).apply(this, arguments);
}
function d(e) {
  return (0, a.default)(e.pollUpdateParentKey, "pollUpdateMsgData.pollUpdateParentKey").toString();
}