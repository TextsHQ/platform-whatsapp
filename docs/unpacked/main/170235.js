var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keepMessage = function (e, t) {
  return te(e, L.KeepType.KEEP_FOR_ALL, t);
};
exports.processKeepInChatMessage = le;
exports.processKeepInChatMessages = function () {
  return oe.apply(this, arguments);
};
exports.undoKeepMessage = function () {
  return re.apply(this, arguments);
};
var r = a(require("../vendor/81109.js"));
var o = a(require("../vendor/348926.js"));
var l = require("../app/775593.js");
var i = a(require("../app/670983.js"));
var u = require("../app/632157.js");
var s = require("../app/402994.js");
var c = require("../app/351053.js");
var d = require("../app/738501.js");
var f = require("./239523.js");
var p = require("../app/698867.js");
var m = require("../app/486193.js");
var h = require("../app/891244.js");
var g = require("./751461.js");
var E = require("../app/784427.js");
var v = require("../app/808716.js");
var _ = require("./469151.js");
var y = require("../app/163755.js");
var C = require("./897127.js");
var b = require("./978752.js");
var M = require("../app/566509.js");
var S = require("../app/141797.js");
var T = require("../app/420213.js");
var w = require("../app/61113.js");
var A = require("../app/787742.js");
var P = a(require("../app/565754.js"));
var O = require("../app/772358.js");
var k = require("../app/692544.js");
var D = require("../app/373070.js");
var I = require("../app/14346.js");
var R = require("./323910.js");
var N = require("../app/899137.js");
var x = require("../app/525119.js");
var L = require("../app/533494.js");
var j = require("../app/387183.js");
var B = require("../app/625786.js");
var F = require("../app/390737.js");
var G = require("../app/459857.js");
var U = require("./281134.js");
var W = require("./613131.js");
var H = require("./483618.js");
var V = require("./859680.js");
var q = require("./867923.js");
var Y = require("./280511.js");
var z = a(require("../app/124928.js"));
var K = require("../app/669050.js");
var Q = require("../vendor/548360.js");
var X = a(require("../vendor/667294.js"));
function Z() {
  return J.apply(this, arguments);
}
function J() {
  return (J = (0, o.default)(function* (e, t) {
    yield (0, h.updateMessageTable)(e, (0, r.default)((0, r.default)({}, t), {}, {
      kicKey: t.kicKey.toString()
    }));
    const n = w.MsgCollection.get(e);
    if (n) {
      n.set(t);
    }
  })).apply(this, arguments);
}
function $(e, t, n, a) {
  return Z(e, {
    kicState: E.KeepInChatState.KEPT,
    kicKey: t,
    kicTimestampMs: n,
    keptCount: a
  });
}
function ee(e, t, n) {
  return Z(e, {
    kicState: E.KeepInChatState.UNKEPT,
    kicKey: t,
    kicTimestampMs: n
  });
}
function te() {
  return ne.apply(this, arguments);
}
function ne() {
  return (ne = (0, o.default)(function* (e, t, n) {
    var a;
    var i;
    var c;
    var f;
    const m = (0, G.assertGetMeUser)();
    const h = new P.default({
      fromMe: true,
      remote: (0, y.getChat)(e).id,
      id: yield P.default.newId(),
      participant: (0, y.getChat)(e).isGroup ? m : undefined
    });
    const E = (0, u.unixTimeMs)();
    const v = {
      id: h,
      from: m,
      to: (0, y.getChat)(e).id,
      t: (0, u.unixTime)(),
      type: D.MSG_TYPE.KEEP_IN_CHAT,
      keepType: t,
      keptMessageKey: e.id,
      senderTimestampMs: E,
      ack: s.ACK.CLOCK
    };
    const _ = new O.Msg(v);
    _.wamMessageSendReporter = new S.MessageSendReporter(_);
    _.wamMessageSendPerfReporter = new M.MessageSendPerfReporter({
      chatWid: _.to,
      mediaType: _.getWamMediaType(),
      messageType: _.getWamMessageType()
    });
    const C = {
      isAGroup: (0, A.getIsGroupMsg)(e),
      messagesSelected: 1,
      mediaType: e.getWamMediaType(),
      chatEphemeralityDuration: (a = (0, d.getEphemeralSetting)((0, y.getChat)(e))) !== null && a !== undefined ? a : 0,
      kicActor: (0, A.getIsSentByMe)(e) ? W.KIC_ACTOR_TYPE.SENDER : W.KIC_ACTOR_TYPE.RECIPIENT,
      kicEntryPoint: n,
      canEditDmSettings: !(0, y.getChat)(e).isGroup || ((i = (0, y.getChat)(e).groupMetadata) === null || i === undefined ? undefined : i.canSetEphemeralSetting()),
      threadId: yield (0, p.getChatThreadID)((0, y.getChat)(e).id.toJid()),
      isAdmin: undefined
    };
    var b;
    var w;
    if ((0, A.getIsGroupMsg)(e)) {
      C.isAdmin = (b = (0, y.getChat)(e).groupMetadata) === null || b === undefined || (w = b.participants.get(m)) === null || w === undefined ? undefined : w.isAdmin;
    }
    if (!((c = _.wamMessageSendPerfReporter) === null || c === undefined)) {
      c.startRenderedStage();
    }
    switch (t) {
      case L.KeepType.KEEP_FOR_ALL:
        {
          const t = (e.keptCount || 0) + 1;
          $(e.id, h, E, t);
          new g.DisappearingMessageKeepInChatWamEvent((0, r.default)((0, r.default)({}, C), {}, {
            kicActionName: U.KIC_ACTION_NAME_TYPE.KEEP_MESSAGE,
            keptCount: t
          })).commit();
          break;
        }
      case L.KeepType.UNDO_KEEP_FOR_ALL:
        var k;
        ee(e.id, h, E);
        new g.DisappearingMessageKeepInChatWamEvent((0, r.default)((0, r.default)({}, C), {}, {
          kicActionName: U.KIC_ACTION_NAME_TYPE.UNKEEP_MESSAGE,
          keptDelta: ae(e.kicTimestampMs),
          messageExpiryTimer: (k = e.timeUntilExpiration()) !== null && k !== undefined ? k : 0,
          messageExpiredOnUnkeep: e.isExpired(),
          keptCount: e.keptCount
        })).commit();
        break;
      default:
        __LOG__(4, undefined, new Error(), true)`sendKeepInChatMessage: trying to send unknown keepType ${t}`;
        SEND_LOGS("sending-unknown-keeptype");
    }
    if (!((f = _.wamMessageSendPerfReporter) === null || f === undefined)) {
      f.postRenderedStage();
    }
    return (0, N.createNonPersistedJob)("sendMessage", (0, o.default)(function* () {
      var e;
      var t;
      if (!((e = _.wamMessageSendPerfReporter) === null || e === undefined)) {
        e.startSavedStage();
      }
      yield (0, T.storeMessages)([v], (0, y.getChat)(_).id);
      if (!((t = _.wamMessageSendPerfReporter) === null || t === undefined)) {
        t.postSavedStage();
      }
      return yield (0, j.sendMsgRecord)(_);
    }), {
      priority: l.JOB_PRIORITY.UI_ACTION
    }).waitUntilCompleted();
  })).apply(this, arguments);
}
function ae(e) {
  return Math.round(((0, u.unixTime)() - (0, i.default)(e, "kicTimestampMs") / 1000) / 3600);
}
function re() {
  return (re = (0, o.default)(function* (e, t, n) {
    const a = yield te(e, L.KeepType.UNDO_KEEP_FOR_ALL, n);
    if (t != null && t.deleteExpired && e.isExpired()) {
      (0, f.sendDeleteMsgs)((0, y.getChat)(e), [e], true);
      F.ToastManager.open(X.default.createElement(B.Toast, {
        msg: Q.fbt._("Message disappeared.", null, {
          hk: "49zpge"
        })
      }));
    }
    return a;
  })).apply(this, arguments);
}
function oe() {
  return (oe = (0, o.default)(function* (e) {
    yield Promise.all(e.map(e => le(e, {
      allowNotification: false
    })));
  })).apply(this, arguments);
}
function le() {
  return ie.apply(this, arguments);
}
function ie() {
  return (ie = (0, o.default)(function* (e, t) {
    let {
      allowNotification: a
    } = t;
    const r = (0, k.msgModelFromMsgData)(e);
    const o = (0, x.isMatFullyEnabled)() ? yield (0, T.getMsgByMsgKeyMat)(r.keptMessageKey) : yield (0, T.getMsgByMsgKey)(r.keptMessageKey);
    const l = c.ChatCollection.get(r.id.remote);
    let u;
    if (l) {
      u = yield (0, p.getChatThreadID)(l.id.toJid());
    }
    if (o == null || o.type === D.MSG_TYPE.UNKNOWN) {
      if (!o) {
        __LOG__(4, undefined, new Error())`KIC: cannot find associated message`;
        ue(r, l, u);
      }
      const {
        storeMessageOrphans: e
      } = require("../app/522794.js");
      return void e([r], e => e.keptMessageKey);
    }
    if (o.isRevoke) {
      __LOG__(4, undefined, new Error())`KIC: cannot keep/unkeep message because associated message is revoked`;
      return void se(r, o, l, u);
    }
    if (o.kicKey != null && o.kicTimestampMs != null) {
      const e = {
        id: o.kicKey,
        senderTimestampMs: o.kicTimestampMs
      };
      if ((0, v.compareKeepInChatMessages)(r, e) === -1) {
        (0, _.logOlderRequestKic)(r);
        return void __LOG__(4, undefined, new Error())`KIC: incoming KIC message is behind currently stored KIC fields`;
      }
    }
    const s = (0, K.toUserWid)((0, A.getSender)(r));
    if (!(0, v.kicSenderSuperPowerActive)(o) || z.default.equals(s, (0, A.getSender)(o))) {
      switch (r.keepType) {
        case L.KeepType.KEEP_FOR_ALL:
          {
            if (a) {
              var d;
              const e = (d = w.MsgCollection.get(r.keptMessageKey)) !== null && d !== undefined ? d : w.MsgCollection.get(o.id);
              if (e != null) {
                I.WANotificationController.triggerNotification(new R.WAKeepInChatNotification({
                  keepInChatMessage: r,
                  parentMessage: e,
                  onClick: () => {
                    if (l && (0, b.shouldShowKicNux)(l)) {
                      (0, b.openKicNux)(l, Y.TRIGGER_TYPE.USER_MESSAGE_KEPT);
                    }
                  }
                }));
              } else {
                __LOG__(4, undefined, new Error())`KIC: cannot find parent message model!`;
              }
            }
            const e = (o.keptCount || 0) + 1;
            yield $(o.id, r.id, (0, i.default)(r.senderTimestampMs, "kicMsgModel.senderTimestampMs"), e);
            yield (0, m.markFutureproofMessagesReparsed)([r.id.toString()]);
            ce(r, o, V.KIC_REQUEST_TYPE_TYPE.KEEP, l, u);
            break;
          }
        case L.KeepType.UNDO_KEEP_FOR_ALL:
          yield ee(o.id, r.id, (0, i.default)(r.senderTimestampMs, "kicMsgModel.senderTimestampMs"));
          yield (0, m.markFutureproofMessagesReparsed)([r.id.toString()]);
          ce(r, o, V.KIC_REQUEST_TYPE_TYPE.UNKEEP, l, u);
          break;
        default:
          __LOG__(4, undefined, new Error(), true)`KIC: unknown keepType ${r}`;
          SEND_LOGS("processed-unknown-keeptype");
      }
    } else {
      __LOG__(4, undefined, new Error())`KIC: incoming KIC message is dropped due to sender super power: ${r.id} - ${o.id}`;
    }
  })).apply(this, arguments);
}
function ue(e, t, n) {
  const a = new C.KeepInChatPerfWamEvent({
    response: q.RESPONSE_TYPE.ERROR,
    requestSendTime: e.t,
    kicErrorCode: H.KIC_ERROR_CODE_TYPE.MESSAGE_MISSING,
    chatEphemeralityDuration: t && (0, d.getEphemeralSetting)(t) || 0
  });
  if (n != null) {
    a.set({
      threadId: n
    });
  }
  const r = (0, _.parseKeepTypeToMetric)(e.keepType);
  if (r) {
    a.set({
      kicRequestType: r
    });
  }
  a.commit();
}
function se(e, t, n, a) {
  const r = new C.KeepInChatPerfWamEvent({
    response: q.RESPONSE_TYPE.ERROR,
    requestSendTime: e.t,
    kicErrorCode: H.KIC_ERROR_CODE_TYPE.MESSAGE_REVOKED,
    kicMessageEphemeralityDuration: (t == null ? undefined : t.ephemeralDuration) || 0,
    chatEphemeralityDuration: n && (0, d.getEphemeralSetting)(n) || 0
  });
  const o = (0, _.parseKeepTypeToMetric)(e.keepType);
  if (o) {
    r.set({
      kicRequestType: o
    });
  }
  if (a != null) {
    r.set({
      threadId: a
    });
  }
  r.commit();
}
function ce(e, t, n, a, r) {
  const o = new C.KeepInChatPerfWamEvent({
    kicRequestType: n,
    response: q.RESPONSE_TYPE.SUCCESS,
    requestSendTime: e.t,
    kicErrorCode: H.KIC_ERROR_CODE_TYPE.NONE,
    kicMessageEphemeralityDuration: (t == null ? undefined : t.ephemeralDuration) || 0,
    chatEphemeralityDuration: a && (0, d.getEphemeralSetting)(a) || 0
  });
  if (r != null) {
    o.set({
      threadId: r
    });
  }
  o.commit();
}