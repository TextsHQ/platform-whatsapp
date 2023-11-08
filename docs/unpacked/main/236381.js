var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateEditedMessagesAction = function (e) {
  for (const {
    parentMsg: n,
    editedMsgData: a,
    protocolMsg: l,
    mentionOfMe: u
  } of e) {
    const e = f.MsgCollection.get(n.id);
    if (!e) {
      return;
    }
    var t;
    if (a.mediaKey !== e.mediaKey) {
      e.thumbnailHQ = "";
    }
    if ((0, o.shouldAnimateAsBotStream)(e) || e.botEditType != null) {
      a.lastBotEditBodyLength = (t = e.body) === null || t === undefined ? undefined : t.length;
    }
    const c = new E.WAMsgNotification({
      msg: e
    }).buildKey();
    e.set(a);
    (0, i.clearFtsCache)((0, s.getChat)(e));
    _(e, c, u);
    if (!(0, p.getIsSentByMe)(l)) {
      (0, s.getChat)(e).unreadEditTimestampMs = (0, r.unixTimeMs)();
    }
    if (u) {
      y(e, u);
    }
    e.clearRawLinks();
    e.clearRawPhoneNumbers();
    const d = f.MsgCollection.get(l.id);
    if (d && d.type === h.MSG_TYPE.CIPHERTEXT) {
      d.delete();
    }
    m.MsgInfoCollection.remove(e.id);
  }
  f.MsgCollection.processEditedMessages(e.map(e => {
    let {
      parentMsg: t
    } = e;
    return f.MsgCollection.get(t.id);
  }));
};
var r = require("../app/632157.js");
var o = require("../app/354458.js");
var l = require("../app/37237.js");
var i = require("../app/713105.js");
var u = require("../app/52045.js");
var s = require("../app/163755.js");
var c = require("../app/188690.js");
var d = require("../app/483460.js");
var f = require("../app/61113.js");
var p = require("../app/787742.js");
var m = require("../app/241164.js");
var h = require("../app/373070.js");
var g = require("../app/14346.js");
var E = require("../app/338993.js");
var v = a(require("../app/128882.js"));
function _(e, t, n) {
  const a = g.WANotificationController.getNotification(t);
  const r = new E.WAMsgNotification({
    msg: e
  });
  if ((0, o.isBotReceiveEnabled)() && a && (0, p.getIsMetaBotResponse)(e)) {
    return void (e.botEditType === l.BotMsgEditType.LAST && g.WANotificationController.triggerNotification(r));
  }
  if (a) {
    g.WANotificationController.triggerNotification(r);
  }
  const i = (0, s.getChat)(e);
  if (i.mute.isMuted && n) {
    switch (n) {
      case u.EditedMentionOfMe.Added:
        if (i.isUnreadMsg(e)) {
          g.WANotificationController.triggerNotification(r);
        }
        break;
      case u.EditedMentionOfMe.Removed:
        if (!(a == null)) {
          a.closeBanner();
        }
    }
  }
}
function y(e, t) {
  var n;
  if (!(0, d.receiveCaptionEditEnabled)()) {
    return;
  }
  const a = (0, s.getChat)(e);
  switch (t) {
    case u.EditedMentionOfMe.Added:
      if (a.isUnreadMsg(e)) {
        var r;
        const t = new v.default({
          id: e.id,
          timestamp: e.latestEditSenderTimestampMs
        });
        if (!((r = a.groupMetadata) === null || r === undefined)) {
          r.unreadMentionMetadata.addUnreadMentions([t], c.UnreadMessageType.NEW_MESSAGE);
        }
      }
      break;
    case u.EditedMentionOfMe.Removed:
      if (!((n = a.groupMetadata) === null || n === undefined)) {
        n.unreadMentionMetadata.removeUnreadMentions(e.id.toString());
      }
  }
}