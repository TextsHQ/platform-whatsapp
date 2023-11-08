var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatBridgeApi = undefined;
var r = a(require("../vendor/506479.js"));
var o = require("../app/351053.js");
var l = a(require("../app/565754.js"));
var i = require("../app/251444.js");
var u = require("./599487.js");
var s = require("../app/397516.js");
const c = ["id"];
const d = {
  getChat(e) {
    let {
      chatId: t
    } = e;
    return o.ChatCollection.get(t);
  },
  hasChat(e) {
    let {
      chatId: t
    } = e;
    return Boolean(o.ChatCollection.get(t));
  },
  getChatForMsg(e) {
    let {
      msgKey: t
    } = e;
    const n = o.ChatCollection.get(l.default.from(t).remote);
    if (n == null) {
      __LOG__(2)`getChat: msgKey = ${t.toString()}`;
      __LOG__(4, undefined, new Error(), true)`getChat: unexpected null chat`;
      SEND_LOGS("get-chat-unexpected-null");
    }
    return n;
  },
  chatCollectionAdd(e) {
    let {
      things: t,
      options: n
    } = e;
    return o.ChatCollection.add(t, n);
  },
  chatCollectionGadd(e) {
    let {
      chat: t
    } = e;
    return o.ChatCollection.gadd(t);
  },
  chatCollectionTrigger(e) {
    let {
      name: t,
      args: n
    } = e;
    o.ChatCollection.trigger(t, n);
  },
  updateOfflinePeerReceipt(e) {
    let {
      chatUpdates: t,
      ackUpdates: n
    } = e;
    (0, u.updateOfflinePeerReceipt)(t, n);
  },
  chatCollectionUpdate(e) {
    let {
      updates: t
    } = e;
    t.forEach(e => {
      const {
        id: t
      } = e;
      const n = (0, r.default)(e, c);
      const a = o.ChatCollection.get(t);
      if (a) {
        a.set(n);
      }
    });
  },
  updateChatReadStatus(e) {
    let {
      id: t,
      read: n
    } = e;
    const a = o.ChatCollection.get(t);
    if (a) {
      if (n) {
        (0, s.markSeen)(a);
      } else {
        (0, s.markUnseen)(a);
      }
    }
  },
  updateChatUnreadMsgCountAndClearMentions(e) {
    let {
      remote: t
    } = e;
    const n = o.ChatCollection.get(t);
    if (n) {
      (0, s.updateUnreadCountMD)(n, 0, false);
      (0, s.clearUnreadMentions)(n);
    }
  },
  updateChatLastAddOnPreview(e) {
    let {
      chatMap: t
    } = e;
    (0, i.updateModelsForLastAddOnPreview)(t);
  },
  updateChatSortListener(e) {
    let {
      enable: t
    } = e;
    if (t) {
      o.ChatCollection.enableSortListener(true);
    } else {
      o.ChatCollection.disableSortListener();
    }
  },
  resetChatPreviewT(e) {
    let {
      chatIds: t
    } = e;
    t.forEach(e => {
      const t = o.ChatCollection.get(e);
      if (t) {
        t.previewT = undefined;
      }
    });
  },
  updateChatPreviewT(e) {
    let {
      threadMeta: t
    } = e;
    o.ChatCollection.forEach(e => {
      const n = t == null ? undefined : t[e.id.toString({
        legacy: true
      })];
      if (n != null) {
        e.previewT = n;
      }
    });
  },
  updateBotInvokeSystemMsgCreated(e) {
    let {
      chatId: t
    } = e;
    const n = o.ChatCollection.get(t);
    if (n != null) {
      if (n.hasCreatedBotInvokeSystemMsg === true) {
        return Promise.resolve();
      } else {
        return n.updateBotInvokeSystemMsgCreated();
      }
    }
  }
};
exports.ChatBridgeApi = d;