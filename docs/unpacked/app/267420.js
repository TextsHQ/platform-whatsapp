var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genPlaceholderMsg = function () {
  return H.apply(this, arguments);
};
exports.getDeviceType = Z;
exports.getFrom = ee;
exports.messageInfoToKey = X;
exports.parseMessage = function () {
  return w.apply(this, arguments);
};
exports.parseProtocolMessage = D;
exports.placeholderCheck = V;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/506479.js"));
var o = r(require("../vendor/348926.js"));
var s = require("./418987.js");
var l = r(require("./670983.js"));
var u = require("./402994.js");
var c = require("./303754.js");
var d = require("./354458.js");
var p = require("./428261.js");
var f = require("./588733.js");
var _ = require("./740293.js");
var g = require("./796006.js");
var m = require("./177205.js");
var h = require("./257845.js");
var y = r(require("./565754.js"));
var E = require("./580046.js");
var S = require("./373070.js");
var v = require("./459857.js");
var T = require("./622195.js");
var M = require("./630230.js");
var A = require("./816793.js");
var b = r(require("./124928.js"));
var C = require("./669050.js");
var P = r(require("./556869.js"));
const O = ["msgProtobuf"];
const I = ["msgProtobuf"];
const R = ["msgProtobuf"];
const N = ["decrypted", "reparsing"];
function D(e) {
  var t;
  var n;
  var r;
  var i;
  var a;
  var o;
  let s;
  let {
    info: u,
    msgProtobuf: c,
    paymentInfo: d,
    bizInfo: p,
    msgBotInfo: f
  } = e;
  const g = ee(u);
  if ((0, v.isMeAccountNonLid)(g)) {
    if (((t = c.protocolMessage) === null || t === undefined ? undefined : t.historySyncNotification) != null) {
      const e = (0, _.parseMsgProto)(c, z(u), "relay", d, undefined, undefined, p);
      q(e, f);
      s = {
        history: (0, l.default)(e.historySyncMetaData, "msg.historySyncMetaData")
      };
    } else if (((n = c.protocolMessage) === null || n === undefined ? undefined : n.initialSecurityNotificationSettingSync) != null) {
      var m;
      s = {
        securityNotificationEnabled: {
          isEnabled: (m = c.protocolMessage.initialSecurityNotificationSettingSync.securityNotificationEnabled) === null || m === undefined || m
        }
      };
    } else if (((r = c.protocolMessage) === null || r === undefined ? undefined : r.appStateSyncKeyShare) != null) {
      s = {
        appStateSyncKeyShare: c.protocolMessage.appStateSyncKeyShare
      };
    } else if (((i = c.protocolMessage) === null || i === undefined ? undefined : i.appStateSyncKeyRequest) != null) {
      s = {
        appStateSyncKeyRequest: c.protocolMessage.appStateSyncKeyRequest
      };
    } else if (((a = c.protocolMessage) === null || a === undefined ? undefined : a.peerDataOperationRequestResponseMessage) != null) {
      var h;
      s = {
        peerDataOperationRequestResponseMessage: (h = c.protocolMessage) === null || h === undefined ? undefined : h.peerDataOperationRequestResponseMessage
      };
    } else if (((o = c.protocolMessage) === null || o === undefined ? undefined : o.peerDataOperationRequestMessage) != null) {
      var y;
      s = {
        peerDataOperationRequestMessage: (y = c.protocolMessage) === null || y === undefined ? undefined : y.peerDataOperationRequestMessage
      };
    }
    return s;
  }
  !function (e) {
    var t;
    var n;
    var r;
    var i;
    var a;
    var o;
    let s = "";
    if (((t = e.protocolMessage) === null || t === undefined ? undefined : t.historySyncNotification) != null) {
      s = "historySyncNotification";
    } else if (((n = e.protocolMessage) === null || n === undefined ? undefined : n.initialSecurityNotificationSettingSync) != null) {
      s = "initialSecurityNotificationSettingSync";
    } else if (((r = e.protocolMessage) === null || r === undefined ? undefined : r.appStateSyncKeyRequest) != null) {
      s = "appStateSyncKeyRequest";
    } else if (((i = e.protocolMessage) === null || i === undefined ? undefined : i.appStateSyncKeyShare) != null) {
      s = "appStateSyncKeyShare";
    } else if (((a = e.protocolMessage) === null || a === undefined ? undefined : a.peerDataOperationRequestResponseMessage) != null) {
      s = "peerDataOperationRequestResponseMessage";
    } else if (((o = e.protocolMessage) === null || o === undefined ? undefined : o.peerDataOperationRequestMessage) != null) {
      s = "peerDataOperationRequestMessage";
    }
    __LOG__(4, undefined, new Error(), true)`protocol message: wid error in type ${s}`;
    SEND_LOGS("wid error");
  }(c);
}
function w() {
  return (w = (0, o.default)(function* (e) {
    var t;
    var n;
    var r;
    var i;
    var a;
    var o;
    const {
      msgProtobuf: s,
      info: l
    } = e;
    if (((t = s.protocolMessage) === null || t === undefined ? undefined : t.historySyncNotification) != null || ((n = s.protocolMessage) === null || n === undefined ? undefined : n.initialSecurityNotificationSettingSync) != null || ((r = s.protocolMessage) === null || r === undefined ? undefined : r.appStateSyncKeyShare) != null || ((i = s.protocolMessage) === null || i === undefined ? undefined : i.appStateSyncKeyRequest) != null || ((a = s.protocolMessage) === null || a === undefined ? undefined : a.peerDataOperationRequestResponseMessage) != null || ((o = s.protocolMessage) === null || o === undefined ? undefined : o.peerDataOperationRequestMessage) != null) {
      return D({
        info: l,
        msgProtobuf: s,
        paymentInfo: e.paymentInfo,
        bizInfo: e.bizInfo,
        hsmInfo: e.hsmInfo
      });
    }
    switch (l.type) {
      case h.MESSAGE_TYPE.CHAT:
        if ((0, v.isMeAccount)(l.author)) {
          return G(e);
        } else {
          return F(e);
        }
      case h.MESSAGE_TYPE.GROUP:
        if ((0, v.isMeAccount)(l.author) && l.isDirect) {
          return G(e);
        } else {
          return F(e);
        }
      case h.MESSAGE_TYPE.PEER_BROADCAST:
        if (e.ciphertextType === c.CiphertextType.Skmsg) {
          if (!l.bclHashValidated) {
            throw (0, P.default)("parseMessage: participants for peer broadcast message is not validated");
          }
          return F(e);
        }
        return x(e);
      case h.MESSAGE_TYPE.OTHER_BROADCAST:
        return F(e);
      case h.MESSAGE_TYPE.DIRECT_PEER_STATUS:
        if (l.isDirect === true) {
          return L(e);
        } else {
          return x(e);
        }
      case h.MESSAGE_TYPE.OTHER_STATUS:
        return F(e);
      default:
        throw (0, P.default)("Unrecognized MESSAGE_TYPE");
    }
  })).apply(this, arguments);
}
function L() {
  return k.apply(this, arguments);
}
function k() {
  return (k = (0, o.default)(function* (e) {
    try {
      return yield G(e);
    } catch (t) {
      if (t instanceof m.DeviceSentMessageError) {
        const t = Object.keys(e.msgProtobuf).filter(e => e !== "$$unknownFieldCount" && e !== "messageContextInfo");
        if (t.length === 1 && t[0] === "senderKeyDistributionMessage") {
          return F(e);
        }
      }
      throw t;
    }
  })).apply(this, arguments);
}
function G() {
  return U.apply(this, arguments);
}
function U() {
  return (U = (0, o.default)(function* (e) {
    let {
      msgProtobuf: t
    } = e;
    let n = (0, a.default)(e, O);
    const {
      deviceSentMessage: r
    } = t;
    if (r == null) {
      throw new m.DeviceSentMessageError(Z(n.info.author), M.DSM_ERROR.MISSING_DSM);
    }
    if (r.destinationJid == null) {
      throw new m.DeviceSentMessageError(Z(n.info.author), M.DSM_ERROR.INVALID_DSM);
    }
    const {
      destinationJid: o
    } = r;
    const s = yield Y((0, f.unwrapDeviceSentMessage)(t), n);
    return (0, i.default)({
      deviceSent: {
        destination: (0, C.createWid)(o)
      }
    }, s);
  })).apply(this, arguments);
}
function x() {
  return B.apply(this, arguments);
}
function B() {
  return (B = (0, o.default)(function* (e) {
    let {
      msgProtobuf: t
    } = e;
    let n = (0, a.default)(e, I);
    const {
      info: r
    } = n;
    const {
      deviceSentMessage: o
    } = t;
    if (o == null) {
      throw new m.DeviceSentMessageError(Z(r.author), M.DSM_ERROR.MISSING_DSM);
    }
    if (o.phash == null) {
      throw new m.DeviceSentMessageError(Z(r.author), M.DSM_ERROR.INVALID_DSM);
    }
    const {
      phash: s
    } = o;
    const l = yield Y((0, f.unwrapDeviceSentMessage)(t), n);
    return (0, i.default)({
      deviceSent: {
        phash: s,
        info: r
      }
    }, l);
  })).apply(this, arguments);
}
function F() {
  return j.apply(this, arguments);
}
function j() {
  return (j = (0, o.default)(function* (e) {
    let {
      msgProtobuf: t
    } = e;
    let n = (0, a.default)(e, R);
    if (t.deviceSentMessage != null) {
      throw new m.DeviceSentMessageError(Z(n.info.author), M.DSM_ERROR.INVALID_SENDER);
    }
    const r = yield Y(t, n);
    return (0, i.default)({
      deviceSent: null
    }, r);
  })).apply(this, arguments);
}
function Y() {
  return K.apply(this, arguments);
}
function K() {
  return (K = (0, o.default)(function* (e, t) {
    var n;
    var r;
    var o;
    var s;
    let {
      info: u,
      paymentInfo: c,
      bizInfo: d,
      hidePlaceholder: p,
      processDecryptedProtoParams: f,
      hsmInfo: m,
      msgBotInfo: y
    } = t;
    if (e == null) {
      return {
        senderKey: null,
        storeMsg: null,
        renderableMsgs: []
      };
    }
    const E = (0, i.default)({}, (0, _.parseMsgProto)(e, z(u), "relay", c, undefined, undefined, d, u.edit, f == null ? undefined : f.rcat, f == null || (n = f.msgMeta) === null || n === undefined ? undefined : n.bizSource));
    var T;
    q(E, y, f == null || (r = f.msgMeta) === null || r === undefined ? undefined : r.targetSenderJid, f == null || (o = f.msgMeta) === null || o === undefined ? undefined : o.targetId);
    if (m != null) {
      E.hsmTag = m.tag;
      E.hsmCategory = m.category;
    }
    if ((f == null || (s = f.msgMeta) === null || s === undefined ? undefined : s.bizSource) != null) {
      E.bizSource = f == null || (T = f.msgMeta) === null || T === undefined ? undefined : T.bizSource;
    }
    const M = e.senderKeyDistributionMessage != null ? W(u, e.senderKeyDistributionMessage) : null;
    const A = E.type === S.MSG_TYPE.UNKNOWN && M == null;
    const b = E.type === S.MSG_TYPE.UNKNOWN && M != null;
    let C = null;
    if (A && f != null) {
      const {
        decrypted: e,
        reparsing: t
      } = f;
      const n = (0, a.default)(f, N);
      E.futureproofParams = n;
      E.futureproofBuffer = e;
    }
    if (u.type === h.MESSAGE_TYPE.OTHER_STATUS) {
      E.campaignId = u.campaignId;
      E.campaignDuration = u.campaignDuration;
    }
    if (u.type === h.MESSAGE_TYPE.PEER_BROADCAST) {
      E.broadcastId = u.chat;
      E.broadcastParticipants = u.bclParticipants;
      E.broadcastEphSettings = u.bclEphSettings;
      C = E;
    }
    if (u.type === h.MESSAGE_TYPE.OTHER_BROADCAST) {
      E.broadcastId = u.chat;
      const e = u.ephSetting;
      const t = E.ephemeralSharedSecret;
      if (e != null && t != null) {
        const {
          ephemeralDuration: n,
          ephemeralSettingTimestamp: r
        } = yield (0, g.decodeBroadcastEphemeralSetting)(u.chat, u.author.isLid() ? (0, l.default)((0, v.getMaybeMeLidUser)(), "getMaybeMeLidUser()") : (0, v.getMeUser)(), u.author, e, t);
        E.ephemeralDuration = n;
        E.ephemeralSettingTimestamp = r;
      }
    }
    let P = [];
    const O = E.type === S.MSG_TYPE.UNKNOWN;
    if (!(b || O && p === true && E.futureproofType !== S.MSG_TYPE.KEEP_IN_CHAT && E.futureproofType !== S.MSG_TYPE.PIN_MESSAGE && E.futureproofType !== S.MSG_TYPE.POLL_UPDATE && E.futureproofType !== S.MSG_TYPE.REACTION && E.futureproofType !== S.MSG_TYPE.COMMENT && E.futureproofType !== S.MSG_TYPE.REACTION_ENC)) {
      if (u.type === h.MESSAGE_TYPE.PEER_BROADCAST) {
        P = yield J(E, u.bclParticipants, u.bclEphSettings);
      } else if (E.subtype !== "payment_transaction_request_cancelled" && E.subtype !== "payment_action_request_declined" || E.paymentRequestMessageKey != null) {
        P = [E];
      }
    }
    return {
      senderKey: M,
      storeMsg: C,
      renderableMsgs: P
    };
  })).apply(this, arguments);
}
function W(e, t) {
  if (!e.chat.isGroup() && !e.chat.isBroadcast()) {
    throw (0, P.default)("should not have senderkey");
  }
  const {
    groupId: n,
    axolotlSenderKeyDistributionMessage: r
  } = t;
  if (n == null || e.chat.toString({
    legacy: true
  }) !== n) {
    throw (0, P.default)(`senderKeyDistributionMessage: from ${e.chat.toString()} mismatched to ${n || "null"}`);
  }
  if (!r) {
    throw (0, P.default)(`senderKeyDistributionMessage: from ${e.author.toString()} has no content`);
  }
  return {
    groupId: n,
    key: r
  };
}
function V(e) {
  return e.edit !== u.EDIT_ATTR.SENDER_REVOKE || e.type === h.MESSAGE_TYPE.PEER_BROADCAST;
}
function H() {
  return (H = (0, o.default)(function* (e, t, n, r) {
    if (!V(e)) {
      return [];
    }
    let a = null;
    switch (t) {
      case h.PlaceholderType.E2E:
        a = undefined;
        break;
      case h.PlaceholderType.BOT_UNAVAILABLE_FANOUT:
        a = "bot_unavailable_fanout";
        break;
      default:
        a = "fanout";
    }
    const o = (0, i.default)((0, i.default)({}, z(e)), {}, {
      type: S.MSG_TYPE.CIPHERTEXT,
      subtype: a,
      e2eSenderType: (0, A.getWamE2eSenderType)(e.author),
      placeholderAddReason: n,
      broadcastParticipants: e.type === h.MESSAGE_TYPE.PEER_BROADCAST ? e.bclParticipants : undefined,
      broadcastEphSettings: e.type === h.MESSAGE_TYPE.PEER_BROADCAST ? e.bclEphSettings : undefined
    });
    q(o, r);
    if (e.type === h.MESSAGE_TYPE.PEER_BROADCAST) {
      (0, p.storeMessages)([o], o.id.remote);
      if (e.edit === u.EDIT_ATTR.SENDER_REVOKE) {
        return [];
      } else {
        return J(o, e.bclParticipants);
      }
    } else {
      return [o];
    }
  })).apply(this, arguments);
}
function $(e, t) {
  if ((0, d.isBotMsgParseEnabledForFutureproofOrFullRecv)() && t.botParticipant != null) {
    return t.botParticipant;
  } else if (!e.fromMe && b.default.isGroup(e.remote) || b.default.isStatusV3(e.remote)) {
    return e.participant;
  } else if (!(0, v.isMeDevice)(t.author) && (0, v.isMeAccount)(t.author)) {
    return t.author;
  } else {
    return undefined;
  }
}
function z(e) {
  const t = X(e);
  const n = (0, v.getMeUser)();
  const r = (0, v.getMaybeMeLidUser)();
  let i;
  i = t.fromMe && b.default.isGroup(t.remote) && e.author.isLid() && r != null ? r : n;
  return {
    id: t,
    from: t.fromMe ? i : t.remote,
    to: t.fromMe ? t.remote : n,
    type: S.MSG_TYPE.UNKNOWN,
    t: e.ts || 0,
    ack: (0, E.isNoteToSelf)(t) ? u.ACK.READ : u.ACK.SENT,
    author: $(t, e),
    notifyName: e.pushname || "",
    invis: false,
    count: e.count
  };
}
function q(e, t, n, r) {
  if (t != null && (0, d.isBotMsgParseEnabledForFutureproofOrFullRecv)()) {
    Object.assign(e, {
      botEditTargetId: t.botEditTargetId,
      botEditType: t.botEditType,
      bizBotType: t.bizBotType,
      botTargetSenderJid: n,
      botResponseTargetId: r
    });
  }
}
function J() {
  return Q.apply(this, arguments);
}
function Q() {
  return (Q = (0, o.default)(function* (e, t, n) {
    return (yield Promise.all(t.map(function () {
      var t = (0, o.default)(function* (t) {
        let r;
        let a;
        let o;
        try {
          r = new y.default({
            remote: t,
            fromMe: true,
            id: e.id.id
          });
        } catch (e) {
          __LOG__(3)`drop: cannot create MsgKey: ${e.stack}`;
          return null;
        }
        const s = n ? n[t.toString()] : null;
        const u = e.ephemeralSharedSecret;
        const c = e.broadcastId;
        if (c != null && s != null && u != null) {
          ({
            ephemeralDuration: a,
            ephemeralSettingTimestamp: o
          } = yield (0, g.decodeBroadcastEphemeralSetting)(c, t, t.isLid() ? (0, l.default)((0, v.getMaybeMeLidUser)(), "getMaybeMeLidUser()") : (0, v.getMeUser)(), s, u));
        }
        return (0, i.default)((0, i.default)({}, e), {}, {
          id: r,
          from: (0, v.getMeUser)(),
          to: t,
          broadcast: true,
          ephemeralDuration: a,
          ephemeralSettingTimestamp: o,
          protocolMessageKey: e.protocolMessageKey == null ? undefined : new y.default({
            remote: t,
            fromMe: true,
            id: e.protocolMessageKey.id
          })
        });
      });
      return function () {
        return t.apply(this, arguments);
      };
    }()))).filter(Boolean);
  })).apply(this, arguments);
}
function X(e) {
  if (e.type === h.MESSAGE_TYPE.OTHER_BROADCAST) {
    return new y.default({
      remote: (0, C.toUserWid)(e.author),
      fromMe: false,
      id: e.externalId
    });
  } else if (e.type === h.MESSAGE_TYPE.CHAT) {
    if ((0, d.isBotMsgParseEnabledForFutureproofOrFullRecv)() && e.botParticipant != null) {
      return new y.default({
        remote: e.chat,
        fromMe: (0, v.isMeAccount)(e.author),
        id: e.externalId,
        participant: (0, C.toUserWid)((0, l.default)(e.botParticipant, "info.botParticipant"))
      });
    } else {
      return new y.default({
        remote: e.chat,
        fromMe: (0, v.isMeAccount)(e.author),
        id: e.externalId
      });
    }
  } else {
    return new y.default({
      remote: e.chat,
      fromMe: (0, v.isMeAccount)(e.author),
      participant: (0, C.toUserWid)(e.author),
      id: e.externalId
    });
  }
}
function Z(e) {
  if (e.device == null || e.device === s.DEFAULT_DEVICE_ID) {
    return T.DEVICE_TYPE.PRIMARY;
  } else {
    return T.DEVICE_TYPE.COMPANION;
  }
}
function ee(e) {
  if (e.type === h.MESSAGE_TYPE.CHAT) {
    return e.author;
  } else {
    return e.chat;
  }
}