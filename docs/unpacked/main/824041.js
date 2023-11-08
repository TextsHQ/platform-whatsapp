var a = require("../app/530066.js").default;
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repairNewsletterMsgHistory = function () {
  return v.apply(this, arguments);
};
var o = r(require("../vendor/348926.js"));
var l = require("../app/8304.js");
var i = r(require("../app/60748.js"));
var u = require("../app/927531.js");
var s = require("../app/678794.js");
var c = require("../app/692544.js");
var d = require("../app/73225.js");
var f = require("../app/455245.js");
var p = require("../app/115861.js");
var m = require("../app/425280.js");
var h = require("../app/263318.js");
var g = require("../app/163139.js");
var E = r(require("../app/124928.js"));
function v() {
  return (v = (0, o.default)(function* (e) {
    var t;
    const n = (0, g.unproxy)(e.chat);
    if (!E.default.isNewsletter(n.id)) {
      return;
    }
    if (!(0, d.isProactiveGapFillingEnabled)()) {
      return;
    }
    const r = (t = e.msgCollection) !== null && t !== undefined ? t : n.msgs;
    if (r !== n.msgs) {
      return;
    }
    if (r.repairMsgHistoryPromise != null) {
      return r.repairMsgHistoryPromise;
    }
    const o = n.newsletterMetadata;
    if (o == null || o.membershipType === u.NewsletterMembershipType.Guest) {
      return;
    }
    const v = r.sort().last();
    if (v == null || v.serverId == null) {
      return;
    }
    const _ = new a();
    try {
      var y;
      (0, i.default)([_.signal, e.unmountSignal], () => (0, l.delayMs)(1000, _.signal).then(() => {
        r.msgLoadState.isRepairingMsgHistory = true;
      }).catch(() => {}));
      if (e.fetchLastMessage) {
        const [e] = yield (0, m.pullNewsletterMessagesFromServer)(n, {
          messageCount: 1,
          resetUnreadCount: true,
          shouldUpdateMsg: e => e.serverId !== v.serverId
        });
        if (e == null) {
          return;
        }
        if (!(e.serverId === v.serverId)) {
          (0, f.logHistoryGap)({
            gapSize: 1,
            newsletterJidOrWid: n.id
          });
        }
      }
      r.repairMsgHistoryPromise = (0, p.fillMsgHistoryGaps)((0, h.toNewsletterJidOrThrow)(n.id.toJid()), r.toArray().map(s.msgDataFromMsgModel)).then(e => e.map(c.msgModelFromMsgData));
      const t = (y = yield n.msgs.repairMsgHistoryPromise) !== null && y !== undefined ? y : [];
      if (r.length === t.length) {
        return;
      }
      r.add(t, {
        silent: true
      });
      r.sort({
        silent: true
      });
      n.trigger("msgs:history_repaired");
    } finally {
      _.abort();
      r.msgLoadState.isRepairingMsgHistory = false;
      r.repairMsgHistoryPromise = null;
    }
  })).apply(this, arguments);
}