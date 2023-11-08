var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateOfflinePeerReceipt = function (e, t) {
  if (!o.Cmd.isMainStreamReadyMd) {
    return;
  }
  e.forEach(e => {
    var t;
    let {
      chatId: n,
      unreadCount: a,
      unreadMentionsOfMe: o
    } = e;
    const i = (t = r.ChatCollection.get(n)) !== null && t !== undefined ? t : u.default.get(n);
    if (i != null) {
      var c;
      var d;
      const e = o.map(e => new s.default({
        id: e.id,
        timestamp: e.timestamp
      }));
      if (!((c = i.groupMetadata) === null || c === undefined)) {
        c.unreadMentionMetadata.reset();
      }
      if (!((d = i.groupMetadata) === null || d === undefined)) {
        d.unreadMentionMetadata.addUnreadMentions(e, l.UnreadMessageType.PERSISTANCE_LOAD);
      }
      i.set({
        unreadCount: a
      });
    }
  });
  t.forEach(e => {
    let {
      msgKey: t,
      ack: n
    } = e;
    const a = i.MsgCollection.get(t);
    if (a) {
      a.updateAck(n);
    }
  });
};
var r = require("../app/351053.js");
var o = require("../app/780549.js");
var l = require("../app/188690.js");
var i = require("../app/61113.js");
var u = a(require("../app/358533.js"));
var s = a(require("../app/128882.js"));