var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WAReactionNotification = undefined;
exports.nonHydratedShouldMuteReactionNotification = w;
var i = r(require("../vendor/81109.js"));
var a = require("./287461.js");
var o = require("./583759.js");
var s = require("./642838.js");
var l = r(require("./846870.js"));
var u = require("./177938.js");
var c = require("./660666.js");
var d = require("./235630.js");
var p = require("./70354.js");
var f = require("./163755.js");
var _ = require("./266162.js");
var g = r(require("./667845.js"));
var m = require("./97858.js");
var h = require("./61113.js");
var y = require("./787742.js");
var E = r(require("./565754.js"));
var S = require("./373070.js");
var v = require("./971804.js");
var T = require("./14346.js");
var M = require("./545413.js");
var A = require("./911600.js");
var b = require("./762897.js");
var C = r(require("./634152.js"));
var P = require("./459857.js");
var O = r(require("./124928.js"));
var I = require("./669050.js");
var R = require("./931019.js");
var N = require("../vendor/548360.js");
class D extends o.WABaseNotification {
  constructor(e) {
    let {
      reactionMsg: t
    } = e;
    super();
    this._handleChatOpenUpdateMsgLevelSquelch = () => {
      if ((0, f.getChat)(this.parentMsg) != null && this.parentMsg != null && (0, f.getChat)(this.parentMsg).reactionSquelch === l.default.SQUELCH_RESET_VALUE) {
        this.parentMsg.squelch = l.default.SQUELCH_RESET_VALUE;
      }
    };
    __LOG__(2)`WAReactionNotification: constructor`;
    this.reactionMsg = t;
    const n = h.MsgCollection.get(this.reactionMsg.parentMsgKey);
    if (n == null) {
      return void __LOG__(3)`WAReactionNotification: parentMsg is not present in the MsgCollection. It may need to be hydrated.`;
    }
    this.parentMsg = n;
    const r = b.ReactionsCollection.get(this.parentMsg.id.toString());
    if (r) {
      const {
        reactionSenderModel: e
      } = b.ReactionsCollection.getAggregateEmojiAndSender(r, this.reactionMsg.senderUserJid);
      this.reactionSender = e;
    } else {
      __LOG__(3)`WAReactionNotification: Reaction model not found`;
    }
  }
  afterBannerShown(e) {
    if (this.reactionSender != null) {
      const t = this.reactionSender;
      const n = (0, f.getChat)(this.parentMsg);
      t.on("revoked change:read", this.closeBanner);
      n.on("change:reactionSquelch", this._handleChatOpenUpdateMsgLevelSquelch);
      e.waitForClose().then(() => {
        __LOG__(2)`WAReactionNotification: cleaning up reaction notification`;
        t.off("revoked change:read", this.closeBanner);
        n.off("change:reactionSquelch", this._handleChatOpenUpdateMsgLevelSquelch);
      });
    }
  }
  shouldMute() {
    return !!w(this.reactionMsg) || this.parentMsg == null || !!((0, a.getABPropConfigValue)("web_abprop_mute_notifications_on_app_focus") ? (0, M.appIsActive)() : (0, M.chatIsActive)((0, f.getChat)(this.parentMsg))) || !!(0, f.getChat)(this.parentMsg).mute.isMuted || !!function (e) {
      if (!(0, m.archiveV2Supported)()) {
        return false;
      }
      if (!C.default.showArchiveV2) {
        return false;
      }
      if (!e.archive) {
        return false;
      }
      return true;
    }((0, f.getChat)(this.parentMsg));
  }
  shouldSquelch() {
    if (T.WANotificationController.notificationExists(this.buildKey())) {
      return false;
    }
    const e = (0, f.getChat)(this.parentMsg);
    return !!(0, M.shouldSquelch)(e, false) || !!function (e, t) {
      if (!e.isGroup) {
        return false;
      }
      const n = Date.now();
      const r = t.squelch || 0;
      if (n > r) {
        g.default.find(e.id).then(n => {
          if (n != null) {
            const r = (0, M._calculateTimeoutFromGroupMetadata)(e.id, n);
            const i = Date.now() + r;
            t.squelch = i;
            if (e.reactionSquelch === l.default.SQUELCH_RESET_VALUE) {
              e.reactionSquelch = i;
            }
          }
        });
        return false;
      }
      return true;
    }(e, this.parentMsg);
  }
  buildKey() {
    return `reaction:${this.parentMsg.id.toString()}-${this.reactionMsg.senderUserJid}`;
  }
  matchesChat(e) {
    return O.default.equals((0, f.getChat)(this.parentMsg).id, e);
  }
  getChatKind() {
    return (0, f.getChat)(this.parentMsg).kind;
  }
  getDefaultIcon() {
    return (0, M.getNotificationIcon)((0, f.getChat)(this.parentMsg));
  }
  getBannerOptions() {
    const e = this.parentMsg;
    const t = (0, f.getChat)(e);
    const n = (0, _.getNotificationBody)((0, i.default)((0, i.default)({}, function (e, t) {
      var n;
      let r;
      let i;
      if ((0, y.getIsGroupMsg)(e)) {
        const n = (0, I.createUserWid)(t.senderUserJid);
        const r = u.ContactCollection.gadd(n);
        const l = (0, f.getChat)(e);
        const p = (0, d.elevatedPushNamesM2Enabled)(l);
        if (n.isLid() && r.phoneNumber) {
          var a;
          const e = u.ContactCollection.get(r.phoneNumber);
          const t = (0, d.pushNameCanBeUsed)(e) && p;
          const n = e != null ? (0, c.getNotifyName)(e) : null;
          i = (a = e == null ? undefined : e.name) !== null && a !== undefined ? a : t && n != null ? (0, s.getFormattedNotifyName)(n).toString() : (0, R.widToFormattedUser)(r.phoneNumber);
        } else {
          var o;
          const e = (0, d.pushNameCanBeUsed)(r) && p;
          i = (o = r.name) !== null && o !== undefined ? o : e && (0, c.getNotifyName)(r) != null ? (0, s.getFormattedNotifyName)((0, c.getNotifyName)(r)).toString() : (0, R.widToFormattedUser)(r.id);
        }
      }
      const l = (n = p.EmojiUtil.normalizeEmojiFromString(t.reactionText)) !== null && n !== undefined ? n : p.OPEN_BOX_CHAR;
      const g = N.fbt._("Reacted {emoji} to", [N.fbt._param("emoji", l)], {
        hk: "3aQqby"
      });
      if (e.type !== S.MSG_TYPE.CHAT || e.shouldShowNotificationPreview()) {
        r = (0, _.getNotificationMessageBody)(e);
        r = N.fbt._("\"{originalMessageBody}\"", [N.fbt._param("originalMessageBody", r)], {
          hk: "2by891"
        });
      } else {
        r = N.fbt._("a message", null, {
          hk: "3BTW7N"
        });
      }
      return {
        body: r.toString(),
        author: i,
        action: g.toString()
      };
    }(e, this.reactionMsg)), {}, {
      msgDir: (0, f.getDir)(e)
    }));
    return {
      wid: t.id,
      msgId: e.id.toString(),
      tag: e.id.toString(),
      title: (0, M.getNotificationTitle)(t),
      body: n,
      canReply: false,
      canMarkAsRead: false
    };
  }
}
function w(e) {
  const {
    orphan: t,
    read: n,
    senderUserJid: r,
    parentMsgKey: i,
    reactionText: a
  } = e;
  if (t === 1) {
    return true;
  }
  if (n === true) {
    return true;
  }
  if ((0, P.isSerializedWidMe)(r)) {
    return true;
  }
  return !E.default.fromString(i).fromMe || a === A.REVOKED_REACTION_TEXT || !!(0, M.isOfflineResumeInProgress)() || !!v.MuteCollection.globalMute().isMuted || !!v.MuteCollection.globalReactionsMute().isMuted;
}
exports.WAReactionNotification = D;