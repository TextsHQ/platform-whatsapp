var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PARENT_MSG_PLACEHOLDER_ORPHAN_THRESHOLD = undefined;
exports.pruneExpiredOrphanReactions = function () {
  return (0, s.getStorage)().lock(["reactions"], function () {
    var e = (0, i.default)(function* (e) {
      let [t] = e;
      const n = yield (0, l.getReactionsTable)().equals(["orphan"], 1);
      const r = [];
      n.forEach(e => {
        const t = (0, a.castToUnixTime)(e.timestamp / 1000);
        let n;
        if (e.orphanReason === u.OrphanReactionsReasonType.ParentMsgMissing) {
          n = (0, o.getABPropConfigValue)("reaction_cleanup_days");
        } else if (e.orphanReason === u.OrphanReactionsReasonType.ParentMsgPlaceholder) {
          n = 60;
        } else if (e.orphanReason === u.OrphanReactionsReasonType.ParentMsgFutureproof) {
          n = null;
        }
        if (n != null) {
          if (!(0, a.happenedWithin)(t, a.DAY_SECONDS * n)) {
            r.push(e);
          }
        }
      });
      const i = r.map(e => [e.parentMsgKey, e.senderUserJid]);
      if (i.length > 0) {
        return t.bulkRemove(i);
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }());
};
var i = r(require("../vendor/348926.js"));
var a = require("./632157.js");
var o = require("./287461.js");
var s = require("./732011.js");
var l = require("./603635.js");
var u = require("./916667.js");
exports.PARENT_MSG_PLACEHOLDER_ORPHAN_THRESHOLD = 60;