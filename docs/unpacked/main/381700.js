var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgBridgeApi = undefined;
var r = require("./972441.js");
var o = require("../app/366202.js");
var l = require("../app/164831.js");
var i = require("./128969.js");
var u = require("./798254.js");
var s = require("./170235.js");
var c = require("../app/61777.js");
var d = require("../app/61113.js");
var f = require("./236381.js");
var p = require("./613318.js");
var m = require("./510073.js");
var h = require("./279995.js");
var g = a(require("./701064.js"));
const E = {
  processMultipleMessages(e) {
    let {
      chatId: t,
      msgObjs: n,
      meta: a,
      processMessagesOrigin: r,
      chatMsgsCollection: o,
      preserveOrder: l
    } = e;
    return d.MsgCollection.processMultipleMessages(t, n, a, r, o, l);
  },
  addInitialBotTypingIndicatorToChat(e) {
    let {
      chatId: t,
      msgKey: n
    } = e;
    return d.MsgCollection.addInitialBotTypingIndicatorToChat(t, n);
  },
  msgCollectionTrigger(e) {
    let {
      name: t,
      args: n
    } = e;
    d.MsgCollection.trigger(t, n);
  },
  processKeepInChatMessages(e) {
    let {
      keepInChatMessages: t,
      allowNotification: n
    } = e;
    return (0, s.processKeepInChatMessages)(t, n);
  },
  updateUnattributedMessages(e) {
    let {
      messageInfo: t,
      messages: n
    } = e;
    return (0, o.updateUnattributedMessages)(t, n);
  },
  processKeepInChatMessage(e) {
    let {
      keepInChatMessage: t,
      allowNotification: n
    } = e;
    return (0, s.processKeepInChatMessage)(t, {
      allowNotification: n
    });
  },
  updateEditedMessagesAction(e) {
    let {
      messageEdits: t
    } = e;
    (0, f.updateEditedMessagesAction)(t);
  },
  updateMessageUI(e) {
    let {
      chatId: t,
      msg: n,
      messageOverwriteOption: a,
      preserveOrder: r
    } = e;
    return (0, p.updateUI)(t, n, a, r);
  },
  updateMsgModelAcks(e) {
    let {
      updates: t
    } = e;
    t.forEach(e => {
      const t = d.MsgCollection.get(e.id);
      if (t != null) {
        t.ack = e.ack;
      }
    });
  },
  updateReactionUI(e) {
    let {
      msg: t,
      reparsing: n
    } = e;
    return (0, h.updateReactionUI)(t, n);
  },
  processOrphanReadReceipts(e) {
    let {
      msgIds: t
    } = e;
    return (0, r.processOrphanReadReceipts)(t);
  },
  updateMsgPeerAcks(e) {
    let {
      msgKeys: t,
      ack: n,
      t: a
    } = e;
    return (0, m.updateMsgPeerAcks)(t, n, a);
  },
  updateMsgOtherAcks(e) {
    let {
      msgKeys: t,
      ack: n,
      t: a
    } = e;
    return (0, m.updateMsgOtherAcks)(t, n, a);
  },
  handleDeferredMessages: () => g.default === null || g.default === undefined ? undefined : g.default.handleDeferredMessages(),
  processEphemeralSyncResponse(e) {
    let {
      msg: t
    } = e;
    return (0, l.processEphemeralSyncResponse)(t);
  },
  refreshAltLinkingCode(e) {
    let {
      ref: t
    } = e;
    return (0, c.refreshAltLinkingCode)(t);
  },
  forceManualRefresh(e) {
    let {
      ref: t
    } = e;
    return (0, c.forceManualRefresh)(t);
  },
  errorAltLinking: () => (0, c.errorAltLinking)(),
  primaryHelloReceivedAltLinking: () => (0, c.primaryHelloReceivedAltLinking)(),
  changeOptInStatusForExternalWebBeta() {
    i.WAWebExternalBetaEvents.triggerBetaOptInStatusChanges();
  },
  successHistorySyncOd(e) {
    let {
      chatId: t
    } = e;
    return (0, u.successHistorySyncOd)(t);
  },
  errorHistorySyncOd(e) {
    let {
      chatId: t
    } = e;
    return (0, u.errorHistorySyncOd)(t);
  },
  hasMsgsInCollection(e) {
    let {
      msgKeys: t
    } = e;
    return t.map(e => Boolean(d.MsgCollection.get(e)));
  },
  deleteAssociatedBotCarouselMsgs(e) {
    let {
      msgKeys: t
    } = e;
    t.forEach(e => {
      const t = d.MsgCollection.get(e);
      if (t) {
        t.delete();
        d.MsgCollection.remove(t);
      }
    });
  }
};
exports.MsgBridgeApi = E;