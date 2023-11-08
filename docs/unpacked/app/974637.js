var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertToTextWithoutSpecialEmojis = function (e) {
  if (!e) {
    return e;
  }
  if ((0, v.getMobilePlatform)() === v.PLATFORMS.ANDROID) {
    return e;
  }
  return (0, f.convertToTextWithoutSpecialEmojis)(e);
};
exports.createMessageKey = function (e) {
  const t = U(e.to);
  const n = {
    fromMe: true,
    id: e.id.id
  };
  if ((0, s.isString)(t)) {
    n.remoteJid = t;
  }
  return n;
};
exports.decodeJid = k;
exports.decryptFailAttributeFromProtobuf = function (e) {
  var t;
  var n;
  var r;
  var i;
  var a;
  if (e.reactionMessage != null || e.encReactionMessage != null || ((t = e.pollUpdateMessage) === null || t === undefined ? undefined : t.vote) != null || e.keepInChatMessage != null || e.editedMessage != null || e.pinInChatMessage != null || e.protocolMessage != null && e.protocolMessage.type === b.Message$ProtocolMessage$Type.EPHEMERAL_SYNC_RESPONSE || ((n = e.botInvokeMessage) === null || n === undefined || (r = n.message) === null || r === undefined || (i = r.protocolMessage) === null || i === undefined ? undefined : i.type) === b.Message$ProtocolMessage$Type.REQUEST_WELCOME_MESSAGE || ((a = e.protocolMessage) === null || a === undefined ? undefined : a.type) === b.Message$ProtocolMessage$Type.REQUEST_WELCOME_MESSAGE) {
    return c.DecryptFailType.Hide;
  }
  return c.DecryptFailType.Show;
};
exports.disappearingModeInitiatorToProto = function (e, t, n) {
  let r;
  let i;
  let a;
  switch (e) {
    case _.DisappearingModeInitiator.ChangedInChat:
      r = b.DisappearingMode$Initiator.CHANGED_IN_CHAT;
      break;
    case _.DisappearingModeInitiator.InitiatedByMe:
      r = b.DisappearingMode$Initiator.INITIATED_BY_ME;
      break;
    case _.DisappearingModeInitiator.InitiatedByOther:
      r = b.DisappearingMode$Initiator.INITIATED_BY_OTHER;
  }
  if ((0, l.getABPropConfigValue)("dm_initiator_trigger")) {
    if (t) {
      switch (t) {
        case _.DisappearingModeTrigger.ChatSettings:
          i = b.DisappearingMode$Trigger.CHAT_SETTING;
          break;
        case _.DisappearingModeTrigger.AccountSettings:
          i = b.DisappearingMode$Trigger.ACCOUNT_SETTING;
          break;
        case _.DisappearingModeTrigger.BulkChange:
          i = b.DisappearingMode$Trigger.BULK_CHANGE;
          break;
        case _.DisappearingModeTrigger.Unknown:
          i = b.DisappearingMode$Trigger.UNKNOWN;
      }
    }
    if (n != null) {
      a = n;
    }
  }
  return {
    initiator: r,
    trigger: i,
    initiatedByMe: a
  };
};
exports.encodeBytes = function (e) {
  if (e) {
    return (0, i.decodeB64)(e);
  } else {
    return undefined;
  }
};
exports.encodeJid = U;
exports.encodeKey = function (e) {
  const t = {
    fromMe: e.fromMe,
    id: e.id
  };
  const n = U(e.remote);
  const r = U(e.participant);
  if ((0, s.isString)(n)) {
    t.remoteJid = n;
  }
  if ((0, s.isString)(r)) {
    t.participant = r;
  }
  return t;
};
exports.extractCommentTargetIdAndSenderLid = function (e) {
  if ((0, p.isCommentMessagesEnabled)() && e.type === M.MSG_TYPE.COMMENT) {
    var t;
    var n;
    const r = (t = e.targetMessageKey) === null || t === undefined ? undefined : t.id;
    const i = (n = e.targetMessageKey) === null || n === undefined ? undefined : n.participant;
    if (r != null && i != null) {
      const e = (0, u.getCurrentLid)(i);
      if (e != null) {
        return {
          threadMsgId: r,
          threadMsgSenderLid: e
        };
      }
    }
  }
  return {
    threadMsgId: null,
    threadMsgSenderLid: null
  };
};
exports.getBizNativeFlowName = function (e) {
  var t;
  var n;
  var r;
  var i;
  var a;
  var o;
  if (((t = e.interactiveMessage) === null || t === undefined || (n = t.nativeFlowMessage) === null || n === undefined || (r = n.buttons) === null || r === undefined ? undefined : r.length) === 1) {
    return (0, A.getNativeFlowNameByButtonName)(e.interactiveMessage.nativeFlowMessage.buttons[0].name);
  }
  if (((i = e.buttonsMessage) === null || i === undefined || (a = i.buttons) === null || a === undefined ? undefined : a.length) === 1) {
    return (0, A.getNativeFlowNameByButtonName)((o = e.buttonsMessage.buttons[0].nativeFlowInfo) === null || o === undefined ? undefined : o.name);
  }
};
exports.getInteractiveMessageFieldNameForType = w;
exports.getInteractiveMessageTypeForProto = function (e) {
  for (const t of h.default.members()) {
    if (w(t) in e) {
      return t;
    }
  }
  return null;
};
exports.getInteractiveResponseMessageFieldNameForType = L;
exports.getInteractiveResponseMessageTypeForProto = function (e) {
  for (const t of y.default.members()) {
    if (L(t) in e) {
      return t;
    }
  }
  return null;
};
exports.getInteractiveResponsePayload = function (e, t, n) {
  switch (e) {
    case y.default.NATIVE_FLOW:
      {
        const r = (0, o.default)(t.nativeFlowResponseMessage, "message.nativeFlowResponseMessage");
        const i = (0, o.default)(m.default.cast(r.name), "NativeFlowName.cast(payload.name)");
        const a = (0, o.default)(r.version, "payload.version");
        if (a > 1 || !N(i, n)) {
          throw (0, I.default)("Invalid message");
        }
        return {
          name: i,
          version: a,
          type: e,
          paramsJson: (0, o.default)(r.paramsJson, "payload.paramsJson")
        };
      }
  }
};
exports.getMsgKey = function (e, t) {
  if (!e) {
    throw (0, I.default)("getMsgKey: no message key is defined for protocol message");
  }
  const {
    id: n
  } = e;
  if (!n) {
    throw (0, I.default)("getMsgKey: no message id is defined for protocol message");
  }
  return G(n, e, t);
};
exports.getMutableMessageProtobuf = undefined;
exports.hasUnsupportedButtons = function (e) {
  return e.some(e => e.nativeFlowInfo && D.includes(e.nativeFlowInfo.name) || D.includes(e.buttonId));
};
exports.hasUnsupportedCurrency = function (e) {
  var t;
  const n = (e == null || (t = e.primaryAmount) === null || t === undefined ? undefined : t.currencyCode) || (e == null ? undefined : e.currency);
  if (["XUS", "XDX", "USDP"].includes(n == null ? undefined : n.toUpperCase())) {
    return true;
  }
  return false;
};
exports.isEitherSenderOrReceiverOfPaymentMessage = function (e, t) {
  var n;
  if (e.remote.isGroup() && !((n = e.participant) === null || n === undefined ? undefined : n.equals((0, C.getMeUser)())) && !t.equals((0, C.getMeUser)())) {
    return false;
  }
  return true;
};
exports.isInteractiveMessageTypeEnabled = function (e) {
  switch (e) {
    case h.default.NATIVE_FLOW:
      return (0, d.interactiveNativeFlowMessagesEnabled)();
    case h.default.SHOPS_STOREFRONT:
      return (0, d.shopsInteractiveMessageEnabled)();
    case h.default.CAROUSEL:
      return (0, d.carouselsEnabled)();
  }
};
exports.isInteractiveResponseMessageTypeEnabled = function (e) {
  switch (e) {
    case y.default.NATIVE_FLOW:
      return (0, d.interactiveNativeFlowResponseMessagesEnabled)();
  }
};
exports.isQuotedSupported = function (e) {
  if (e.reactionMessage != null) {
    return false;
  }
  return true;
};
exports.isSupportedInteractiveMessageVersion = function (e, t) {
  const n = t == null ? undefined : t.messageVersion;
  if (n == null || e == null) {
    return false;
  }
  switch (e) {
    case h.default.NATIVE_FLOW:
    case h.default.SHOPS_STOREFRONT:
    case h.default.CAROUSEL:
      return n <= 1;
  }
};
exports.isValidNativeFlowName = N;
exports.msgKeyToProtobuf = function (e) {
  var t;
  return {
    fromMe: e.fromMe,
    id: e.id,
    participant: e.fromMe || (t = e.participant) === null || t === undefined ? undefined : t.toString({
      legacy: true
    }),
    remoteJid: e.remote.toString({
      legacy: true
    })
  };
};
exports.parseMsgPaymentInfo = function (e) {
  return {
    paymentStatus: e.status,
    paymentTxnStatus: e.txnStatus,
    paymentCurrency: e.currency || "",
    paymentAmount1000: (0, o.default)((0, a.maybeNumberOrThrowIfTooLarge)(e.amount1000), "maybeNumberOrThrowIfTooLarge(paymentInfo.amount1000)"),
    paymentMessageReceiverJid: (0, O.createWid)((0, o.default)(e.receiverJid, "paymentInfo.receiverJid")),
    paymentExpiryTimestamp: (0, a.maybeNumberOrThrowIfTooLarge)(e.expiryTimestamp),
    paymentTransactionTimestamp: (0, o.default)((0, a.maybeNumberOrThrowIfTooLarge)(e.transactionTimestamp), "maybeNumberOrThrowIfTooLarge(paymentInfo.transactionTimestamp)")
  };
};
exports.pollTypeAttributeFromProtobuf = function (e) {
  var t;
  if (e.pollCreationMessage != null || e.pollCreationMessageV2 != null || e.pollCreationMessageV3 != null) {
    return g.POLL_TYPES.creation;
  }
  if (((t = e.pollUpdateMessage) === null || t === undefined ? undefined : t.vote) != null) {
    return g.POLL_TYPES.vote;
  }
  return null;
};
exports.protoToDisappearingMode = function (e, t) {
  if (!(0, l.getABPropConfigValue)("dm_initiator_trigger")) {
    return;
  }
  const n = (0, C.isMeAccount)(e.from);
  const {
    initiator: r,
    trigger: i,
    initiatedByMe: a
  } = t;
  if (i != null && a != null) {
    return {
      disappearingModeTrigger: x(i),
      initiatedByMe: n ? a : !a
    };
  }
  if (t.initiator == null) {
    return;
  }
  if (r != null) {
    switch (r) {
      case b.DisappearingMode$Initiator.CHANGED_IN_CHAT:
        return {
          disappearingModeTrigger: _.DisappearingModeTrigger.ChatSettings
        };
      case b.DisappearingMode$Initiator.INITIATED_BY_ME:
        return {
          disappearingModeTrigger: _.DisappearingModeTrigger.AccountSettings,
          initiatedByMe: n
        };
      case b.DisappearingMode$Initiator.INITIATED_BY_OTHER:
        return {
          disappearingModeTrigger: _.DisappearingModeTrigger.AccountSettings,
          initiatedByMe: !n
        };
    }
  }
};
exports.protoToDisappearingModeInitiator = function (e, t) {
  if (e.from == null) {
    return;
  }
  const n = (0, C.isMeAccount)(e.from);
  if (t.initiator == null) {
    return;
  }
  switch (t.initiator) {
    case b.DisappearingMode$Initiator.CHANGED_IN_CHAT:
      return _.DisappearingModeInitiator.ChangedInChat;
    case b.DisappearingMode$Initiator.INITIATED_BY_ME:
      if (n) {
        return _.DisappearingModeInitiator.InitiatedByMe;
      } else {
        return _.DisappearingModeInitiator.InitiatedByOther;
      }
    case b.DisappearingMode$Initiator.INITIATED_BY_OTHER:
      if (n) {
        return _.DisappearingModeInitiator.InitiatedByOther;
      } else {
        return _.DisappearingModeInitiator.InitiatedByMe;
      }
  }
};
exports.protobufToMsgKey = function (e) {
  const {
    fromMe: t,
    id: n,
    participant: r,
    remoteJid: i
  } = e;
  (0, R.default)(t != null && i != null && n != null, "fromMe, remoteJid, and id should be set");
  let a = r != null && (0, O.isWidlike)(r) ? (0, O.createWid)(r) : undefined;
  const o = (0, O.createWid)(i);
  if ((o.isGroup() || o.isBroadcast()) && t) {
    a = (0, C.getMaybeMeUser)();
  }
  return new T.default({
    fromMe: t,
    id: n,
    participant: a,
    remote: (0, O.createWid)(i)
  });
};
exports.shouldParseNFM = function (e, t) {
  if (e != null || (t == null ? undefined : t.nativeFlowName) != null) {
    return !!(0, d.nativeFlowMessagesEnabled)() && N(e, t);
  }
  return true;
};
exports.strictDecodeJid = function (e) {
  if (e == null) {
    return;
  }
  (0, R.default)(P.default.isWid(e), "Provided Jid is not a valid Wid");
  return (0, O.createWid)(e);
};
exports.translateKeyToLocalReference = G;
exports.typeAttributeFromProtobuf = function e(t) {
  var n;
  if (t.ephemeralMessage) {
    const {
      message: n
    } = t.ephemeralMessage;
    if (n) {
      return e(n);
    } else {
      return g.STANZA_MSG_TYPES.text;
    }
  }
  if (t.groupMentionedMessage) {
    const {
      message: n
    } = t.groupMentionedMessage;
    if (n) {
      return e(n);
    } else {
      return g.STANZA_MSG_TYPES.text;
    }
  }
  if (t.botInvokeMessage) {
    const {
      message: n
    } = t.botInvokeMessage;
    if (n) {
      return e(n);
    } else {
      return g.STANZA_MSG_TYPES.text;
    }
  }
  if (t.deviceSentMessage) {
    const {
      message: n
    } = t.deviceSentMessage;
    if (n) {
      return e(n);
    } else {
      return g.STANZA_MSG_TYPES.text;
    }
  }
  if (t.reactionMessage || t.encReactionMessage) {
    return g.STANZA_MSG_TYPES.reaction;
  }
  if (t.pollCreationMessage || t.pollCreationMessageV2 || t.pollCreationMessageV3 || t.pollUpdateMessage) {
    return g.STANZA_MSG_TYPES.poll;
  }
  if (((n = t.extendedTextMessage) === null || n === undefined ? undefined : n.canonicalUrl) != null && t.extendedTextMessage.canonicalUrl.trim() !== "") {
    return g.STANZA_MSG_TYPES.media;
  }
  if (t.conversation || t.extendedTextMessage || t.templateButtonReplyMessage || t.protocolMessage || t.interactiveMessage || t.keepInChatMessage || t.requestPhoneNumberMessage || t.editedMessage || t.pinInChatMessage || t.encCommentMessage) {
    return g.STANZA_MSG_TYPES.text;
  }
  return g.STANZA_MSG_TYPES.media;
};
exports.validateOutgoingRequiredMediaProperties = function (e, t, n) {
  if (t.viewOnce) {
    return;
  }
  if (t.directPath == null && t.staticUrl == null) {
    __LOG__(2, undefined, undefined, true)`directPath missing from msg type ${e}`;
    SEND_LOGS(`outgoing-${e}-message-missing-direct-path`);
  }
  if (t.fileSha256 == null) {
    __LOG__(2, undefined, undefined, true)`fileSha256 missing from msg type ${e}`;
    SEND_LOGS(`outgoing-${e}-message-missing-file-sha`);
  }
  if (!(n || t.fileEncSha256 != null)) {
    __LOG__(2, undefined, undefined, true)`fileEncSha256 missing from msg type ${e}`;
    SEND_LOGS(`outgoing-${e}-message-missing-file-enc-sha`);
  }
  if (!(t.url != null || t.staticUrl != null || n)) {
    __LOG__(2, undefined, undefined, true)`url(deprecatedMms3Url) missing from msg type ${e}`;
    SEND_LOGS(`outgoing-${e}-message-missing-mms3-url`);
  }
};
var i = require("./417405.js");
var a = require("./229079.js");
var o = r(require("./670983.js"));
var s = require("./724976.js");
var l = require("./287461.js");
var u = require("./12643.js");
var c = require("./303754.js");
var d = require("./72696.js");
var p = require("./174834.js");
var f = require("./39707.js");
var _ = require("./448609.js");
var g = require("./883310.js");
var m = r(require("./753110.js"));
var h = r(require("./182394.js"));
var y = r(require("./654143.js"));
var E = r(require("./196331.js"));
var S = require("./714443.js");
var v = require("./94602.js");
var T = r(require("./565754.js"));
var M = require("./373070.js");
var A = require("./903373.js");
var b = require("./533494.js");
var C = require("./459857.js");
var P = r(require("./124928.js"));
var O = require("./669050.js");
var I = r(require("./556869.js"));
var R = r(require("../vendor/441143.js"));
function N(e, t) {
  return e == null && (t == null ? undefined : t.nativeFlowName) == null || (t == null ? undefined : t.nativeFlowName) == null || e != null && m.default.cast(t.nativeFlowName) === e;
}
const D = ["novi_login", "novi_report_transaction", "novi_hub", "novi_view_code", "novi_view_transaction", "novi_view_bank_detail", "novi_view_card_detail", "wa_payment_transaction_details", "wa_payment_learn_more", "wa_payment_fbpin_reset"];
function w(e) {
  switch (e) {
    case h.default.NATIVE_FLOW:
      return "nativeFlowMessage";
    case h.default.SHOPS_STOREFRONT:
      return "shopStorefrontMessage";
    case h.default.CAROUSEL:
      return "carouselMessage";
  }
}
function L(e) {
  switch (e) {
    case y.default.NATIVE_FLOW:
      return "nativeFlowResponseMessage";
  }
}
function k(e) {
  if (e && P.default.isWid(e)) {
    return (0, O.createWid)(e);
  } else {
    return e;
  }
}
function G(e, t, n) {
  var r;
  let i;
  let a;
  let s;
  if (n == null || (r = n.id) === null || r === undefined ? undefined : r.fromMe) {
    i = Boolean(t.fromMe);
    s = k(t.remoteJid);
    if (t.fromMe === true) {
      if (s instanceof P.default && !s.isUser()) {
        var l;
        a = E.default.isCag(s) || !((l = n.author) === null || l === undefined ? undefined : l.isLid()) ? (0, C.getMeUser)() : (0, o.default)((0, C.getMaybeMeLidUser)(), "getMaybeMeLidUser()");
      }
    } else {
      a = k(t.participant);
    }
  } else {
    s = n.id.remote;
    const e = E.default.isCag(s);
    if (t.fromMe === true) {
      var c;
      i = false;
      a = n.author;
      if (e && ((c = a) === null || c === undefined ? undefined : c.isLid())) {
        const e = (0, u.getPhoneNumber)(n.author);
        if (e != null) {
          a = e;
        }
      }
    } else {
      const n = k(t.participant);
      if (n instanceof P.default) {
        const t = e || !n.isLid() ? (0, C.getMeUser)() : (0, o.default)((0, C.getMaybeMeLidUser)(), "getMaybeMeLidUser()");
        i = t.equals(n);
        if (!(s.isUser() && !n.isBot())) {
          a = i ? t : n;
        }
      } else {
        i = true;
      }
    }
  }
  if (n.type === M.MSG_TYPE.REACTION && s != null && (s instanceof P.default && s.isBroadcast() && !s.isStatusV3() || (0, S.interpretAndValidateJid)(s.toString()).jidType === "broadcast")) {
    s = k(t.participant);
    a = undefined;
  }
  return new T.default({
    id: e,
    fromMe: i,
    remote: s,
    participant: a
  });
}
function U(e) {
  if (e instanceof P.default) {
    return e.toString({
      legacy: true
    });
  } else if ((0, s.isString)(e)) {
    return e.replace(/@c.us$/, "@s.whatsapp.net");
  } else {
    return undefined;
  }
}
function x(e) {
  switch (e) {
    case b.DisappearingMode$Trigger.CHAT_SETTING:
      return _.DisappearingModeTrigger.ChatSettings;
    case b.DisappearingMode$Trigger.ACCOUNT_SETTING:
      return _.DisappearingModeTrigger.AccountSettings;
    case b.DisappearingMode$Trigger.BULK_CHANGE:
      return _.DisappearingModeTrigger.BulkChange;
    case b.DisappearingMode$Trigger.UNKNOWN:
      return _.DisappearingModeTrigger.Unknown;
  }
}
exports.getMutableMessageProtobuf = e => e;