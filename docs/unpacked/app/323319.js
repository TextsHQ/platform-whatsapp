var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllStatuses = function () {
  const e = (0, _.createWid)(a.STATUS_JID);
  return l.DbEncKeyStore.waitForFinalDbMsgEncKey().then(() => (0, c.queryChatMessageHelper)((0, d.beginningOfChat)(e), (0, d.endOfChat)(e), {
    lowerInclusive: false,
    upperInclusive: false
  }).then(e => {
    const t = [];
    const n = [];
    e.forEach(e => {
      if (e.author) {
        if ((0, o.happenedWithin)((0, o.castToUnixTime)(e.t), o.DAY_SECONDS) && e.type === p.MSG_TYPE.CHAT) {
          n.push((0, u.messageFromDbRow)(e));
        } else {
          t.push(e.id);
        }
      } else {
        __LOG__(3)`Author is null for status v3 message`;
      }
    });
    (0, f.getMessageTable)().bulkRemove(t);
    const r = (0, i.default)(n, e => e.author.toString());
    const a = [];
    for (const e in r) {
      const t = r[e];
      const n = t.filter(e => e.ack < s.ACK.READ).length;
      const i = t[t.length - 1].t;
      a.push({
        id: (0, _.createWid)(e),
        unreadCount: n,
        totalCount: t.length,
        t: i,
        _msgs: t
      });
    }
    return a;
  }));
};
var i = r(require("../vendor/607739.js"));
var a = require("./418987.js");
var o = require("./632157.js");
var s = require("./402994.js");
var l = require("./659102.js");
var u = require("./907539.js");
var c = require("./702018.js");
var d = require("./878685.js");
var p = require("./373070.js");
var f = require("./851698.js");
var _ = require("./669050.js");