var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewMsgForChat = function (e, t) {
  if (e.isNewsletter && !(0, A.isNewsletterEnabled)()) {
    return Promise.resolve();
  }
  if (!t) {
    return Promise.resolve();
  }
  let n = Promise.resolve();
  if (!(!(0, T.getIsSentByMe)(t) || e.notSpam || e.isNewsletter)) {
    n = (0, b.sendNotSpam)(e, false);
  }
  if ((0, E.getEventType)(t) === m.EventType.IGNORE) {
    return Promise.resolve();
  }
  return n.then((0, a.default)(function* () {
    const n = {};
    if (e.promises.updateSortTime) {
      e.promises.updateSortTime.abortController.abort();
    }
    if ((0, T.getIsSentByMeFromWeb)(t) && e.archive && (0, C.shouldUnarchiveChat)((0, T.getIsSentByMe)(t))) {
      n.archive = false;
    }
    if (e.promises.setArchive) {
      e.promises.setArchive.abortController.abort();
    }
    if (!(e.isNewsletter || t.subtype === c.BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE)) {
      if ((0, T.getIsSentByMe)(t)) {
        e.markedUnread = false;
      } else {
        (0, d.default)({
          id: e.id,
          participant: t.author,
          type: "idle"
        }, false);
      }
    }
    yield (0, y.updateChatTable)(e.id, n);
    const r = (0, i.default)({}, n);
    try {
      if (N()) {
        r.t = t.t;
        if (!((0, E.getEventType)(t) !== m.EventType.AMBIENT && (0, E.getEventType)(t) !== m.EventType.DEFAULT || t.id.fromMe)) {
          r.unreadCount = e.unreadCount + 1 || 1;
          if (e.activeUnreadCount > 0) {
            r.activeUnreadCount = e.activeUnreadCount + 1;
          }
        }
      } else {
        const {
          unreadCount: t,
          timestamp: n
        } = yield (0, l.getChatMeta)(e.id);
        r.unreadCount = t;
        r.t = n;
        if (e.activeUnreadCount > 0) {
          r.activeUnreadCount = e.activeUnreadCount + 1;
        }
      }
      r.unreadDividerOffset = 0;
    } catch (t) {
      __LOG__(4, undefined, new Error())`onNewMsg: unable to find metadata from chat table for id:${e.id.toLogString()}`;
    }
    return r;
  })).then(n => {
    e.set(n);
    if (t.ctwaContext != null) {
      (0, g.handleConsumerTransparencyForNewMsg)(e, t.ctwaContext.conversionData, t.ctwaContext.conversionSource);
    }
    const r = h.default.get(e.id);
    if (r) {
      r.timestamp = (0, s.unixTime)();
    } else if (t.ctwaContext != null) {
      const {
        conversionSource: n,
        conversionData: r
      } = t.ctwaContext;
      h.default.add({
        conversionSource: n,
        conversionData: r,
        id: e.id,
        timestamp: (0, s.unixTime)()
      }, {
        merge: true
      });
    }
    if (!(t.type !== "gp2" || t.subtype !== "add" && t.subtype !== "create")) {
      e.getGroupMetadataCollection().trigger(`group_participant_change_${(0, O.getMaybeMeUser)().toString()}`, e.id);
    }
    if (!(0, T.getIsSentByMe)(t)) {
      switch ((0, E.getEventType)(t)) {
        case m.EventType.DEFAULT:
        case m.EventType.AMBIENT:
          if ((0, E.getEventType)(t) === m.EventType.DEFAULT) {
            f.Cmd.alertNewMsg(t);
          }
          if (e.msgs.length < _.MSG_PRELOAD_THRESHOLD && !e.isNewsletter) {
            p.loadEarlierMsgs(e, undefined, I.WEBC_QUERY_TRIGGER_TYPE.NEW_MESSAGE_PREFETCH).catch((0, o.filteredCatch)(u.E404, () => {})).catch(e => {
              __LOG__(2)`chat:onNewMsg failed\n${e}`;
            });
          }
          break;
        case m.EventType.NOTEWORTHY:
          if (!(t.type !== M.MSG_TYPE.CALL_LOG && t.subtype !== "sender_invite")) {
            f.Cmd.alertNewMsg(t);
          }
          break;
        case m.EventType.SIGNIFICANT:
          if (t.type === "gp2" && t.subtype === "add" && (0, O.getMaybeMeUser)().equals(t.recipients[0]) && !e.contact.name) {
            return;
          }
          f.Cmd.alertNewMsg(t);
          e.getGroupMetadataCollection().trigger(`group_participant_change_${(0, O.getMaybeMeUser)().toString()}`, e.id);
          break;
      }
      const r = t.mediaData;
      if (!(!r || r.type !== "image" && r.type !== "video")) {
        f.Cmd.newMediaMsg(t);
      }
      if (n.unreadCount != null && n.unreadCount > 0 && !N()) {
        (0, v.processOrphanPeerReceipt)(t.id);
      }
      if ((0, T.getIsImportantMessage)(t)) {
        var i;
        const n = new P.default({
          id: t.id.toString(),
          timestamp: t.t
        });
        if (!((i = e.groupMetadata) === null || i === undefined)) {
          i.unreadMentionMetadata.addUnreadMentions(n, S.UnreadMessageType.NEW_MESSAGE);
        }
        if (e.archiveAtMentionViewedInDrawer) {
          const t = new Map();
          t.set(e.id.toString(), false);
          (0, l.updateChatArchiveDrawer)(t);
          e.archiveAtMentionViewedInDrawer = false;
        }
      }
    }
  });
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./122583.js");
var s = require("./632157.js");
var l = require("./35234.js");
var u = require("./984330.js");
var c = require("./169571.js");
var d = r(require("./482503.js"));
var p = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = R(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("./743643.js"));
var f = require("./780549.js");
var _ = require("./292220.js");
var g = require("./188131.js");
var m = require("./147980.js");
var h = r(require("./528420.js"));
var y = require("./840089.js");
var E = require("./163755.js");
var S = require("./188690.js");
var v = require("./522841.js");
var T = require("./787742.js");
var M = require("./373070.js");
var A = require("./73225.js");
var b = require("./383296.js");
var C = require("./2306.js");
var P = r(require("./128882.js"));
var O = require("./459857.js");
var I = require("./780898.js");
function R(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (R = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function N() {
  return !f.Cmd.isOfflineDeliveryEnd;
}