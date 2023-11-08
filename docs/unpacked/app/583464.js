var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addOrphanRevokes = function (e) {
  return f.bulkCreateOrReplaceOrphanRevokes(e);
};
exports.applyOrphanRevokes = function () {
  return _.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("./670983.js"));
var o = require("./787742.js");
var s = require("./373070.js");
var l = require("./434030.js");
var u = r(require("./124928.js"));
var c = require("./669050.js");
let d = new Map();
let p = false;
const f = {
  reset: () => {
    d = new Map();
    p = false;
  },
  bulkRemoveOrphans: e => {
    e.forEach(e => {
      d.delete(e.msgKey);
    });
    return (0, l.getOrphanRevokeTable)().bulkRemove(e.map(e => e.msgKey));
  },
  bulkCreateOrReplaceOrphanRevokes: e => {
    e.forEach(e => {
      if (d.has(e.msgKey)) {
        d.delete(e.msgKey);
      }
      d.set(e.msgKey, e);
    });
    return (0, l.getOrphanRevokeTable)().bulkCreateOrReplace(e);
  },
  getAllOrphanRevokes: () => (0, i.default)(function* () {
    if (!p) {
      const e = yield (0, l.getOrphanRevokeTable)().all();
      d = new Map(e.map(e => [e.msgKey, e]));
      p = true;
    }
    return d;
  })()
};
function _() {
  return (_ = (0, i.default)(function* (e) {
    const t = yield f.getAllOrphanRevokes();
    const n = [];
    const r = [];
    e.forEach(e => {
      const i = e.id.toString();
      if (t.has(i)) {
        const d = (0, a.default)(t.get(i), "orphanRevokesCache.get(messageId)");
        var l;
        __LOG__(2)`applyOrphanRevokes: found orphan revoke for message ${e.id.toString()}`;
        if (!u.default.isStatusV3(e.id.remote)) {
          r.push({
            id: e.id,
            to: e.to,
            author: e.author,
            revokeSender: (0, c.createWidFromWidLike)((l = d.sender) !== null && l !== undefined ? l : (0, o.getSender)(e)),
            type: s.MSG_TYPE.REVOKED,
            subtype: d.subtype === "admin_revoke" ? "admin" : "sender",
            protocolMessageKey: e.id,
            from: e.from,
            t: e.t,
            broadcast: e.broadcast
          });
        }
        n.push(d);
      } else {
        r.push(e);
      }
    });
    f.bulkRemoveOrphans(n);
    return r;
  })).apply(this, arguments);
}