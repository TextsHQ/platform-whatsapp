var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.incomingMsgParserForAckOnly = exports.incomingMsgParser = undefined;
exports.parseBizInfo = A;
exports.parseMessageBotInfo = M;
exports.parseMessageInfo = v;
exports.parseMessageMeta = T;
var i = r(require("../vendor/81109.js"));
var a = r(require("./670983.js"));
var o = require("./347387.js");
var s = require("./303754.js");
var l = require("./354458.js");
var u = require("./37237.js");
var c = require("./883310.js");
var d = require("./257845.js");
var p = require("./855765.js");
var f = require("./854379.js");
var _ = require("./530853.js");
var g = require("./186679.js");
var m = require("./968923.js");
var h = require("./115927.js");
var y = require("./459857.js");
var E = require("./669050.js");
const S = new o.WapParser("incomingMsgParser", e => {
  var t;
  var n;
  e.assertTag("message");
  if (e.hasAttr("to")) {
    e.assertAttr("to", (0, y.assertGetMe)().toJid());
  }
  const r = e.maybeChild("plaintext");
  if (r != null) {
    r.throw("not to be present in e2ee messages");
  }
  const i = e.mapChildrenWithTag("enc", e => ({
    e2eType: e.attrEnumValues("type", s.CiphertextType.members()),
    encMediaType: s.EncMediaType.cast(e.maybeAttrString("mediatype")),
    ciphertext: e.contentBytes(),
    retryCount: e.hasAttr("count") ? e.attrInt("count") : 0,
    hideFail: e.maybeAttrString("decrypt-fail") === "hide"
  }));
  const a = e.maybeChild("device-identity");
  const o = a ? a.contentBytes() : null;
  const l = M(e);
  const u = T(e, i);
  const d = v(e, i, l, u);
  const h = A(e, d);
  const S = function (e) {
    let t = null;
    const n = e.hasChild("pay") ? e.child("pay") : null;
    const r = e.hasChild("transaction") ? e.child("transaction") : null;
    const i = (0, f.jidWithTypeToWid)(e.attrJidWithType("from")).isGroup();
    const a = e.hasAttr("participant") ? (0, f.jidWithTypeToWid)(e.attrJidWithType("participant")) : null;
    if ((0, _.isNoviTransaction)(n) || (0, _.isNoviTransaction)(r)) {
      t = {
        futureproofed: true
      };
    } else if (r) {
      const e = (0, _.parseTransactionNode)(r);
      if (e) {
        t = b(i, a, (0, E.createWid)(e.receiver.toString())) ? {
          receiverJid: e.receiver.toString(),
          currency: e.currency,
          amount1000: e.amount1000,
          transactionTimestamp: e.ts,
          txnStatus: (0, g.getPaymentTxnWebStatus)(e.status)
        } : {
          receiverJid: e.receiver.toString(),
          currency: e.currency,
          amount1000: e.amount1000,
          transactionTimestamp: e.ts
        };
      }
    } else if (n) {
      switch (n.attrEnum("type", c.PAY_NODE_TYPES)) {
        case c.PAY_NODE_TYPES.send:
          {
            const {
              amount1000: r,
              currency: o
            } = (0, p.getAmount1000AndCurrency)(n);
            const s = n.hasAttr("receiver") ? n.attrString("receiver") : e.attrString("recipient");
            t = b(i, a, (0, E.createWid)(s)) ? {
              receiverJid: s,
              currency: o,
              amount1000: r,
              transactionTimestamp: e.attrInt("t"),
              txnStatus: m.PaymentInfo$TxnStatus.INIT
            } : {
              receiverJid: s,
              currency: o,
              amount1000: r,
              transactionTimestamp: e.attrInt("t")
            };
            break;
          }
        case c.PAY_NODE_TYPES.request:
        case c.PAY_NODE_TYPES.invite:
      }
    }
    return t;
  }(e);
  return {
    encs: i,
    msgInfo: d,
    msgMeta: u,
    bizInfo: h,
    hsmInfo: function (e) {
      const t = e.maybeChild("hsm");
      if (t != null) {
        const e = t.maybeAttrString("tag");
        const n = t.maybeAttrString("category");
        if (e != null || n != null) {
          return {
            tag: e,
            category: n
          };
        }
      }
      return null;
    }(e),
    paymentInfo: S,
    deviceIdentity: o,
    rcat: (t = (n = e.maybeChild("rcat")) === null || n === undefined ? undefined : n.contentBytes()) !== null && t !== undefined ? t : null,
    msgBotInfo: l
  };
});
function v(e, t, n, r) {
  const o = {
    externalId: e.attrString("id"),
    ts: e.attrTime("t"),
    edit: e.hasAttr("edit") ? e.attrInt("edit") : -1,
    isHsm: e.hasChild("hsm"),
    count: e.hasAttr("count") ? e.attrInt("count") : null,
    pushname: e.hasAttr("notify") ? e.attrString("notify") : null,
    username: e.hasAttr("username") ? e.attrString("username") : null,
    displayName: e.hasAttr("display_name") ? e.attrString("display_name") : null,
    senderPn: e.hasAttr("sender_pn") ? (0, f.userJidToUserWid)(e.attrUserJid("sender_pn")) : null,
    senderLid: e.hasAttr("sender_lid") ? (0, f.userJidToUserWid)(e.attrUserJid("sender_lid")) : null,
    recipientLid: e.hasAttr("recipient_lid") ? (0, f.userJidToUserWid)(e.attrUserJid("recipient_lid")) : null,
    recipientPn: e.hasAttr("recipient_pn") ? (0, f.userJidToUserWid)(e.attrUserJid("recipient_pn")) : null,
    recipientUsername: e.hasAttr("recipient_username") ? e.attrString("recipient_username") : null,
    participantLid: e.hasAttr("participant_lid") ? (0, f.userJidToUserWid)(e.attrLidUserJid("participant_lid")) : null,
    participantPn: e.hasAttr("participant_pn") ? (0, f.userJidToUserWid)(e.attrUserJid("participant_pn")) : null,
    category: e.hasAttr("category") ? e.attrString("category") : null,
    offline: e.hasAttr("offline") ? e.attrString("offline") : null
  };
  const u = (0, f.jidWithTypeToWid)(e.attrJidWithType("from"));
  if (u.isNewsletter()) {
    e.throw("unexpected `from` attribute with newsletter Jid");
  }
  const p = e.hasAttr("participant") ? (0, f.deviceJidToDeviceWid)(e.attrDeviceJid("participant")) : null;
  const _ = e.hasAttr("recipient") ? (0, f.userJidToUserWid)(e.attrUserJid("recipient")) : null;
  const g = t.every(e => e.e2eType !== s.CiphertextType.Skmsg);
  const m = t.some(e => e.retryCount > 0);
  const S = u.isGroup() || u.isBroadcast() ? p : u;
  if (_ != null && S != null && !(0, y.isMeAccount)(S)) {
    return e.throw("Invalid recipient from non peer device");
  }
  let v;
  const T = {};
  const M = e.maybeChild("participants");
  if (M) {
    const e = [];
    M.forEachChildWithTag("to", t => {
      const n = (0, f.deviceJidToDeviceWid)(t.attrDeviceJid("jid"));
      const r = t.maybeAttrString("eph_setting");
      e.push(n);
      if (r != null) {
        T[n.toString()] = r;
      }
    });
    v = e;
  }
  if ((0, l.isBotMsgParseEnabledForFutureproofOrFullRecv)() && n && r && u.isBot() && r.targetChatJid != null) {
    return (0, i.default)((0, i.default)({
      type: d.MESSAGE_TYPE.CHAT
    }, o), {}, {
      chat: (0, E.toUserWid)((0, a.default)(r.targetChatJid, "msgMeta.targetChatJid")),
      author: u,
      botParticipant: u
    });
  }
  if (u.isUser()) {
    if (_ != null) {
      if ((0, y.isMeAccount)(u)) {
        return (0, i.default)((0, i.default)({
          type: d.MESSAGE_TYPE.CHAT
        }, o), {}, {
          chat: (0, E.toUserWid)(_),
          author: u
        });
      } else {
        return e.throw("recipient on non peer chat message");
      }
    } else {
      return (0, i.default)((0, i.default)({
        type: d.MESSAGE_TYPE.CHAT
      }, o), {}, {
        chat: (0, E.toUserWid)(u),
        author: u
      });
    }
  }
  if (u.isGroup()) {
    if (p == null) {
      return e.throw("group message with no participant");
    }
    const t = e.attrEnumOrDefault("addressing_mode", c.STANZA_MSG_ADDRESSING_MODE, c.STANZA_MSG_ADDRESSING_MODE.pn);
    return (0, i.default)((0, i.default)({
      type: d.MESSAGE_TYPE.GROUP
    }, o), {}, {
      chat: u,
      author: p,
      isDirect: g,
      addressingMode: t
    });
  }
  if (u.isBroadcast() && !u.isStatusV3()) {
    if (p == null) {
      return e.throw("broadcast message with no participant");
    }
    if ((0, y.isMeAccount)(p)) {
      if (v == null) {
        if (!m) {
          return e.throw("peer broadcast message with no participants node");
        }
        v = [];
      }
      return (0, i.default)((0, i.default)({
        type: d.MESSAGE_TYPE.PEER_BROADCAST
      }, o), {}, {
        chat: u,
        author: p,
        isDirect: g,
        bclParticipants: v,
        bclHashValidated: false,
        bclEphSettings: T
      });
    }
    return (0, i.default)((0, i.default)({
      type: d.MESSAGE_TYPE.OTHER_BROADCAST
    }, o), {}, {
      chat: u,
      author: p,
      isDirect: g,
      ephSetting: e.maybeAttrString("eph_setting")
    });
  }
  if (u.isBroadcast() && u.isStatusV3()) {
    if (p == null) {
      return e.throw("status message with no participant");
    }
    let t;
    var A;
    var b;
    if ((0, h.isStatusPostingEnabled)()) {
      t = (A = (b = e.maybeChild("meta")) === null || b === undefined ? undefined : b.maybeAttrString("status_setting")) !== null && A !== undefined ? A : undefined;
    }
    if ((0, y.isMeAccount)(p) && g) {
      if (v == null) {
        return (0, i.default)((0, i.default)({
          type: d.MESSAGE_TYPE.DIRECT_PEER_STATUS
        }, o), {}, {
          chat: u,
          author: p,
          isDirect: g,
          statusSetting: t
        });
      } else {
        return (0, i.default)((0, i.default)({
          type: d.MESSAGE_TYPE.DIRECT_PEER_STATUS
        }, o), {}, {
          chat: u,
          author: p,
          bclParticipants: v,
          bclHashValidated: false,
          statusSetting: t
        });
      }
    } else {
      return (0, i.default)((0, i.default)({
        type: d.MESSAGE_TYPE.OTHER_STATUS
      }, o), {}, {
        chat: u,
        author: p,
        isDirect: g,
        statusSetting: t
      });
    }
  }
  return e.throw("Unrecognized message type");
}
function T(e, t) {
  const n = e.hasChild("unavailable");
  if (!(n || t.length !== 0)) {
    e.throw("incomingMsgParser: to have enc node children");
  }
  const r = e.attrEnum("type", c.STANZA_MSG_TYPES);
  const i = e.maybeChild("meta");
  const a = {
    isUnavailable: n,
    type: r,
    pollType: r === c.STANZA_MSG_TYPES.poll ? i == null ? undefined : i.attrEnumOrNullIfUnknown("polltype", c.POLL_TYPES) : null,
    origin: i == null ? undefined : i.attrEnumOrDefault("origin", c.STANZA_MSG_ORIGIN, null),
    rawTs: e.attrString("t"),
    urlNumber: e.hasChild("url_number"),
    urlText: e.hasChild("url_text")
  };
  if (i && i.hasAttr(c.BIZ_SOURCE_ATTR)) {
    a.bizSource = i.attrString(c.BIZ_SOURCE_ATTR);
  }
  if (i && i.hasAttr("target_id")) {
    a.targetId = i.attrString("target_id");
  }
  if (i && i.hasAttr("target_sender_jid")) {
    a.targetSenderJid = (0, f.jidWithTypeToWid)(i.attrJidWithType("target_sender_jid"));
  }
  if (i && i.hasAttr("target_chat_jid")) {
    a.targetChatJid = (0, f.jidWithTypeToWid)(i.attrJidWithType("target_chat_jid"));
  }
  return a;
}
function M(e) {
  const t = e.maybeChild("bot");
  if (!(0, l.isBotMsgParseEnabledForFutureproofOrFullRecv)() || !t) {
    return;
  }
  const n = t.maybeAttrString("sender_timestamp_ms");
  const r = t.maybeAttrString("edit_target_id");
  const i = u.BotMsgEditType.cast(t.maybeAttrString("edit"));
  let a;
  if (t.hasAttr("biz_bot")) {
    if (t.attrString("biz_bot") === "1") {
      a = u.BizBotType.BIZ_1P;
    } else if (t.attrString("biz_bot") === "3") {
      a = u.BizBotType.BIZ_3P;
    }
  }
  return {
    botSenderTimestampMs: n,
    botEditTargetId: r,
    botEditType: i,
    bizBotType: a
  };
}
function A(e, t) {
  var n;
  var r;
  const a = Boolean(t == null || (n = t.author) === null || n === undefined ? undefined : n.isBot());
  if (!Boolean(t == null || (r = t.chat) === null || r === undefined ? undefined : r.isBot()) && a) {
    return {
      verifiedNameSerial: null,
      verifiedLevel: null,
      verifiedNameCert: null,
      privacyMode: null,
      nativeFlowName: null,
      campaignId: null
    };
  }
  const o = e.hasChild("verified_name") ? e.child("verified_name").contentBytes() : null;
  const s = e.attrEnumOrDefault("verified_level", c.MSG_VERIFIED_LEVEL, null);
  const l = e.hasAttr("verified_name") ? e.attrInt("verified_name") : -1;
  const u = e.maybeChild("biz");
  let p = null;
  if (u != null) {
    const e = d.ActualActorsEnumType.cast(u.maybeAttrInt("actual_actors"));
    const t = d.HostStorageEnumType.cast(u.maybeAttrInt("host_storage"));
    const n = u.maybeAttrInt("privacy_mode_ts");
    if (!(e == null || t == null || n == null || a)) {
      p = {
        actualActors: e,
        hostStorage: t,
        privacyModeTs: n
      };
    }
  }
  const f = u == null ? undefined : u.maybeAttrString("native_flow_name");
  const _ = u == null ? undefined : u.maybeAttrString("campaign_id");
  return (0, i.default)({
    verifiedNameCert: o,
    verifiedLevel: s,
    verifiedNameSerial: l,
    privacyMode: p,
    nativeFlowName: f,
    campaignId: _
  }, u && {
    verifiedButtonsEnvelope: u.hasChild("buttons"),
    verifiedListEnvelope: u.hasChild("list"),
    verifiedHsmEnvelope: e.hasChild("hsm")
  });
}
function b(e, t, n) {
  if (e && t != null && n != null) {
    const e = (0, y.getMeUser)();
    if (!e.equals(t) && !e.equals(n)) {
      return false;
    }
  }
  return true;
}
exports.incomingMsgParser = S;
const C = new o.WapParser("incomingMsgParserForAckOnly", e => {
  e.assertTag("message");
  let t = null;
  try {
    t = e.attrEnum("type", c.STANZA_MSG_TYPES);
  } catch (e) {}
  return {
    type: t,
    externalId: e.attrString("id"),
    from: (0, f.jidWithTypeToWid)(e.attrJidWithType("from")),
    participant: e.hasAttr("participant") ? (0, f.deviceJidToDeviceWid)(e.attrDeviceJid("participant")) : null
  };
});
exports.incomingMsgParserForAckOnly = C;