var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseContextInfoProto = g;
exports.parseMessageContextInfoProto = h;
exports.parseMsgProto = _;
var i = r(require("./670983.js"));
var a = require("./354458.js");
var o = require("./21094.js");
var s = require("./974637.js");
var l = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = f(t);
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
}(require("./446303.js"));
var u = require("./263674.js");
var c = require("./97858.js");
var d = require("./373070.js");
var p = require("./669050.js");
function f(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (f = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function _(e, t, n, r, i, d, p, f, y, E) {
  if (!e) {
    __LOG__(4, undefined, new Error(), true)`drop: not Message`;
    SEND_LOGS("null-message");
  }
  const {
    messageContextInfo: S
  } = e;
  const {
    contextInfo: v,
    msgData: T
  } = function (e, t, n, r, i, o, l, d, p, f) {
    let g;
    const {
      viewOnceMessage: h,
      viewOnceMessageV2: y,
      ephemeralMessage: E,
      documentWithCaptionMessage: S,
      groupMentionedMessage: v,
      editedMessage: T,
      botInvokeMessage: M
    } = e;
    const A = (0, u.parseProtobuf)({
      messageProtobuf: e,
      baseMessage: t,
      msgContext: n,
      paymentInfo: r,
      quotedPaymentInfo: o,
      editAttr: d,
      bizInfo: l,
      finalLocation: i,
      rcat: p,
      bizSource: f
    });
    if (A) {
      return A;
    }
    if (v) {
      m(t, v, n);
    }
    if (S) {
      m(t, S, n);
    }
    if (h) {
      m(t, h, n);
    }
    if (y && (0, c.isViewOnceSunsetEnabled)()) {
      m(t, y, n);
    }
    if (E) {
      m(t, E, n);
    }
    if (T) {
      m(t, T, n);
    }
    const {
      deviceSentMessage: b
    } = e;
    if (b) {
      (function (e, t, n) {
        const r = (0, s.decodeJid)(t.destinationJid);
        e.id.remote = r;
        e.to = r;
        Object.assign(e, _(t.message, e, n));
      })(t, b, n);
    }
    if (M && (0, a.isBotResponseFutureproofMsgEnabled)()) {
      m(t, M, n);
    }
    return {
      contextInfo: g,
      msgData: t
    };
  }(e, t, n, r, i, d, p, f, y, E);
  (function (e, t, n, r) {
    if (!t) {
      return;
    }
    g(e, t, n, r);
    (function (e, t) {
      const n = t.externalAdReply;
      if (!n) {
        return;
      }
      const r = l.findLink(n.sourceUrl || "", false, e.from);
      e.ctwaContext = {
        conversionSource: t.conversionSource,
        conversionData: t.conversionData,
        sourceUrl: n.sourceUrl,
        description: n.body,
        title: n.title,
        thumbnail: n.thumbnail ? (0, o.decodeBytes)(n.thumbnail) : null,
        thumbnailUrl: n.thumbnailUrl,
        mediaType: n.mediaType,
        mediaUrl: n.mediaUrl,
        isSuspiciousLink: (r == null ? undefined : r.suspiciousCharacters) && r.suspiciousCharacters.size > 0
      };
    })(e, t);
  })(T, v, n, d);
  h(T, S);
  return T;
}
function g(e, t, n, r) {
  const i = t.quotedMessage;
  const a = t.mentionedJid;
  const o = t.groupMentions;
  if (i != null && (0, s.isQuotedSupported)(i)) {
    e.quotedMsg = _(i, {
      type: d.MSG_TYPE.UNKNOWN
    }, n === "history" ? "history_quoted" : "quoted");
  }
  if (e.quotedMsg && e.quotedMsg.type === "payment" && r) {
    __LOG__(2)`parseContextInfoProto: payment not supported`;
  }
  e.quotedStanzaID = t.stanzaId;
  e.quotedParticipant = (0, s.decodeJid)(t.participant);
  e.quotedRemoteJid = (0, s.decodeJid)(t.remoteJid);
  e.quotedGroupSubject = (0, s.decodeJid)(t.groupSubject);
  e.quotedParentGroupJid = (0, s.decodeJid)(t.parentGroupJid);
  e.mentionedJidList = Array.isArray(a) ? a.map(s.decodeJid) : a;
  e.groupMentions = Array.isArray(o) ? o.map(e => ({
    groupSubject: e.groupSubject,
    groupJid: (0, s.decodeJid)(e.groupJid)
  })) : o;
  e.isForwarded = t.isForwarded;
  e.forwardingScore = t.forwardingScore;
  if (t.expiration != null) {
    e.ephemeralDuration = t.expiration;
  }
  if (t.ephemeralSettingTimestamp != null) {
    e.ephemeralSettingTimestamp = t.ephemeralSettingTimestamp;
  }
  if (t.ephemeralSharedSecret != null) {
    e.ephemeralSharedSecret = t.ephemeralSharedSecret;
  }
  const {
    disappearingMode: l
  } = t;
  if (l != null) {
    const t = (0, s.protoToDisappearingModeInitiator)(e, l);
    if (t != null) {
      e.disappearingModeInitiator = t;
    }
    const n = (0, s.protoToDisappearingMode)(e, l);
    if (n != null) {
      e.disappearingModeTrigger = n.disappearingModeTrigger;
      e.disappearingModeInitiatedByMe = n.initiatedByMe;
    }
  }
  if (t.actionLink != null) {
    e.actionLink = t.actionLink;
  }
  if (t.smbClientCampaignId != null) {
    e.smbClientCampaignId = t.smbClientCampaignId;
  }
  if (t.forwardedNewsletterMessageInfo != null) {
    try {
      const {
        newsletterJid: n,
        newsletterName: r,
        serverMessageId: i
      } = t.forwardedNewsletterMessageInfo;
      const a = (0, s.strictDecodeJid)(n);
      e.forwardedNewsletterMessageInfo = {
        newsletterId: a != null ? (0, p.toNewsletterWid)(a) : undefined,
        newsletterName: r,
        serverMessageId: i
      };
    } catch (e) {
      __LOG__(4, undefined, new Error(), true)`parseContextInfoProto: failed to parse forwarded newsletter info`;
      SEND_LOGS("Failed to parse Forwarded Newsletter Message Info.");
    }
  }
}
function m(e, t, n) {
  Object.assign(e, _((0, i.default)(t.message, "futureproofMessage.message"), e, n));
}
function h(e, t) {
  var n;
  var r;
  var i;
  var o;
  var s;
  var l;
  var u;
  var c;
  var d;
  var p;
  var f;
  var _;
  if (t) {
    if (t.messageSecret != null) {
      e.messageSecret = new Uint8Array(t.messageSecret);
    }
    if ((0, a.isBotReceiveEnabled)() && (((n = e.id) === null || n === undefined || (r = n.participant) === null || r === undefined ? undefined : r.isBot()) || ((i = e.id) === null || i === undefined || (o = i.remote) === null || o === undefined ? undefined : o.isBot()))) {
      if ((t == null || (s = t.botMetadata) === null || s === undefined || (l = s.pluginMetadata) === null || l === undefined ? undefined : l.pluginType) != null) {
        e.botPluginType = t.botMetadata.pluginMetadata.pluginType;
      }
      if ((t == null || (u = t.botMetadata) === null || u === undefined || (c = u.pluginMetadata) === null || c === undefined ? undefined : c.referenceIndex) != null) {
        e.botPluginReferenceIndex = t.botMetadata.pluginMetadata.referenceIndex;
      }
      if ((t == null || (d = t.botMetadata) === null || d === undefined || (p = d.pluginMetadata) === null || p === undefined ? undefined : p.provider) != null) {
        e.botPluginSearchProvider = t.botMetadata.pluginMetadata.provider;
      }
      if ((t == null || (f = t.botMetadata) === null || f === undefined || (_ = f.pluginMetadata) === null || _ === undefined ? undefined : _.searchProviderUrl) != null) {
        e.botPluginSearchUrl = t.botMetadata.pluginMetadata.searchProviderUrl;
      }
    }
  }
}