var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classifyMsgs = k;
exports.storeMsgs = function () {
  return D.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./998667.js");
var o = require("./317851.js");
var s = require("./652056.js");
var l = require("./34214.js");
var u = require("./583464.js");
var c = require("./359987.js");
var d = require("./354458.js");
var p = require("./577743.js");
var f = require("./502280.js");
var _ = require("./621180.js");
var g = require("./147980.js");
var m = require("./187845.js");
var h = require("./907539.js");
var y = require("./52045.js");
var E = require("./795360.js");
var S = require("./422662.js");
var v = require("./963495.js");
var T = require("./348336.js");
var M = require("./460810.js");
var A = require("./488300.js");
var b = require("./641473.js");
var C = require("./787742.js");
var P = require("./373070.js");
var O = require("./323829.js");
var I = require("./441425.js");
var R = require("./591800.js");
var N = require("./851698.js");
function D() {
  return (D = (0, i.default)(function* (e) {
    if (e.length !== 0) {
      try {
        const t = yield k(e);
        const n = Object.entries(t).map(e => {
          let [t, n] = e;
          return Array.isArray(n) && n.length > 0 && `${t}: ${n.length}`;
        }).filter(Boolean).join(", ");
        __LOG__(2)`[store-msgs] start: ${n}`;
        const {
          newMsgs: r,
          replaceMsgs: i,
          revokeMsgs: o,
          paymentMsgs: l,
          reactionMsgs: p,
          groupInviteMsgs: f,
          chatsWithNewOfflineMsg: g,
          pollUpdateMsgs: h,
          removedPlaceholders: A,
          keepInChatMessages: C,
          editProtocolMsgs: P,
          replyMsgs: O,
          newsletterMsgs: D,
          pinMsgs: G,
          unifiedAddons: U,
          botInvokeSystemMsgs: x
        } = t;
        const B = yield (0, u.applyOrphanRevokes)(r);
        yield (0, m.persistNewMessagesInBulk)(B, g);
        yield (0, m.persistNewNewsletterMessagesInBulk)(D);
        yield (0, N.getMessageTable)().bulkCreateOrReplace(i);
        yield L(o);
        yield (0, S.processPaymentMessages)(l);
        yield (0, T.processReactionMsgs)(p);
        yield (0, E.processGroupInviteMessages)(f);
        yield (0, c.frontendSendAndReceive)("processKeepInChatMessages", {
          keepInChatMessages: C,
          allowNotification: false
        });
        yield (0, y.processEditProtocolMsgs)(P);
        yield (0, M.processReplyMsgs)(O);
        yield (0, v.processPollUpdateMsgs)(h);
        if ((0, R.isPinnedMessagesM1ReceiverEnabled)()) {
          yield (0, I.groupAndProcessPinMessages)(G);
        }
        yield (0, s.processMsgs)(U);
        yield (0, b.handleOfflineForMessageRange)(e);
        if ((0, d.isBotReceiveEnabled)() && x.length > 0) {
          const e = new Set();
          x.forEach(t => {
            if (!e.has(t.id.remote.toString())) {
              e.add(t.id.remote.toString());
              (0, c.frontendFireAndForget)("updateBotInvokeSystemMsgCreated", {
                chatId: t.id.remote
              });
            }
          });
        }
        const F = e.map(e => e.id.toString());
        try {
          yield (0, a.checkOrphanMutations)(F, g);
          yield (0, _.checkUpdateForOrphanReactions)(F);
        } catch (t) {
          __LOG__(4, undefined, new Error())`storeMsgs: checkOrphanMutations failed during handleSingleMsg for: ${String(F.join(" "))} chat: ${String(e[0].id.remote)} Error: ${t.name}, message: ${t.message}, stack: ${t.stack}`;
        }
        w(r, A);
        __LOG__(2)`[store-msgs] done: ${n}`;
      } catch (e) {
        __LOG__(4, undefined, new Error(), true)`[store-msgs] Error: ${e.name}, message: ${e.message}, stack: ${e.stack}`;
        SEND_LOGS("storeMsgs-error", 0.01);
      }
    }
  })).apply(this, arguments);
}
function w(e, t) {
  const n = e.filter(e => (0, g.isPlaceholderMsg)(e.type));
  if (n.length > 0) {
    (0, c.frontendFireAndForget)("addPlaceholderWamActions", {
      msgs: n
    });
  }
  if (t.length > 0) {
    (0, c.frontendFireAndForget)("populatePlaceholderWamActions", {
      msgs: t
    });
  }
}
function L(e) {
  const t = [];
  e.forEach(e => {
    if (e.protocolMessageKey) {
      t.push({
        revokeMsgKey: e.protocolMessageKey,
        newMsgKey: e.id,
        timestamp: e.t,
        subtype: e.subtype,
        sender: (0, C.getSender)(e),
        revokeTimestamp: e.t,
        disappearingModeInitiator: e.disappearingModeInitiator,
        ephemeralDuration: e.ephemeralDuration,
        ephemeralSettingTimestamp: e.ephemeralSettingTimestamp
      });
    }
  });
  return (0, A.processRevokeMsgs)(t).then(function () {
    var e = (0, i.default)(function* (e) {
      if (t.length > 0) {
        const e = [];
        const r = new Set();
        t.forEach(t => {
          e.push(t.revokeMsgKey.toString());
          const n = t.revokeMsgKey.remote.toString();
          r.add(n);
        });
        const i = require("./628905.js").getJobManager;
        yield i().waitUntilPersisted(O.jobSerializers.deleteAddOns(Array.from(r.values()).join(","), e));
      }
      return e;
    });
    return function () {
      return e.apply(this, arguments);
    };
  }());
}
function k() {
  return G.apply(this, arguments);
}
function G() {
  return (G = (0, i.default)(function* (e) {
    const t = yield (0, N.getMessageTable)().bulkGet(e.map(e => String(e.id)), false);
    const n = [];
    const r = [];
    const i = [];
    const a = [];
    const s = [];
    const u = [];
    const c = [];
    const d = [];
    const _ = [];
    const m = [];
    const y = [];
    const E = [];
    const S = [];
    const v = new Set();
    const T = new Map();
    const M = new Map();
    const A = [];
    e.forEach((e, b) => {
      const O = String(e.id);
      const I = t[b];
      if (I != null && x(e, I)) {
        const t = (0, h.dbRowFromMessage)(e);
        t.t = I.t;
        t.internalId = I.internalId;
        t.rowId = I.rowId;
        t.pendingReadReceipt = I.pendingReadReceipt;
        r.push(t);
        if ((0, g.isPlaceholderMsg)(I.type)) {
          M.set(O, e);
        }
      } else if (!I || (0, g.isFutureproofMsg)(I.type) && U(e)) {
        const t = T.get(O);
        if (t && !(0, g.isPlaceholderMsg)(t.type)) {
          n.push(e.id.id);
        } else {
          if (e.type === P.MSG_TYPE.NOTIFICATION_TEMPLATE && e.subtype === "bot_invoke_disclaimer") {
            A.push(e);
          }
          if ((0, C.getIsNewsletterMsg)(e) && e.type !== P.MSG_TYPE.PROTOCOL && e.subtype !== "admin_revoke") {
            y.push(e);
          } else if ((0, o.isUnifiedInfraEnabledForType)(e.type) && (0, l.castToAddonMsgData)(e) != null) {
            const t = (0, l.castToAddonMsgData)(e);
            if (t != null) {
              S.push(t);
            }
          } else if (e.type === P.MSG_TYPE.KEEP_IN_CHAT) {
            c.push(e);
          } else if ((0, f.castToReactionMsgData)(e) != null) {
            a.push((0, f.assertReactionMsgData)(e));
          } else if ((0, p.castToPollVoteEncryptedMsgData)(e) != null) {
            u.push((0, p.assertPollVoteEncryptedMsgData)(e));
          } else if (e.type === P.MSG_TYPE.PIN_MESSAGE) {
            E.push(e);
          } else if (["sender_revoke", "admin_revoke"].includes(e.subtype)) {
            i.push(e);
          } else if (e.type === P.MSG_TYPE.PAYMENT && e.subtype === "send" || e.subtype === "payment_action_request_declined" || e.subtype === "payment_transaction_request_cancelled") {
            s.push(e);
            T.set(O, e);
            v.add(String(e.id.remote));
          } else if (e.type === P.MSG_TYPE.GROUPS_V4_INVITE) {
            d.push(e);
            T.set(O, e);
            v.add(String(e.id.remote));
          } else if (e.type === P.MSG_TYPE.PROTOCOL && e.subtype === "message_edit") {
            _.push(e);
          } else if (e.quotedMsg) {
            m.push(e);
            T.set(O, e);
            v.add(String(e.id.remote));
          } else if (e.type !== P.MSG_TYPE.PROTOCOL) {
            T.set(O, e);
            v.add(String(e.id.remote));
          }
        }
      } else {
        n.push(e.id.id);
      }
    });
    if (n.length > 0) {
      __LOG__(2)`[store-msgs] [classify-msgs]: skip for ${n.length} duplicate messages, with id ${n}`;
    }
    return {
      newMsgs: Array.from(T.values()),
      chatsWithNewOfflineMsg: Array.from(v),
      removedPlaceholders: Array.from(M.values()),
      replaceMsgs: r,
      revokeMsgs: i,
      paymentMsgs: s,
      reactionMsgs: a,
      pollUpdateMsgs: u,
      keepInChatMessages: c,
      groupInviteMsgs: d,
      editProtocolMsgs: _,
      replyMsgs: m,
      newsletterMsgs: y,
      pinMsgs: E,
      unifiedAddons: S,
      botInvokeSystemMsgs: A
    };
  })).apply(this, arguments);
}
function U(e) {
  const {
    getAddOnProviderForMsg: t
  } = require("./944749.js");
  return Boolean(t(e));
}
function x(e, t) {
  return (0, g.isPlaceholderMsg)(t.type) && !(0, g.isPlaceholderMsg)(e.type) || (0, g.isFutureproofMsg)(t.type) && !(0, g.isFutureproofMsg)(e.type) && !U(e);
}