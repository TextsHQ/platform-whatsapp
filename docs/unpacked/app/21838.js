var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAddonProtobuf = function (e) {
  return m(e);
};
exports.createMsgProtobuf = function (e, t) {
  var n;
  return m(function (e) {
    const t = e.id;
    const n = e.toJSON();
    delete n.status;
    delete n.mimetype;
    delete n.height;
    delete n.width;
    delete n.recipients;
    delete n.chat;
    delete n.broadcast;
    delete n.ack;
    delete n.invis;
    delete n.filehash;
    delete n.recvFresh;
    delete n.mediaData;
    if (!_.default.isHttp(e.clientUrl)) {
      delete n.clientUrl;
    }
    if (!_.default.isHttp(e.deprecatedMms3Url)) {
      delete n.deprecatedMms3Url;
    }
    for (const e in n) {
      if (n[e] == null) {
        delete n[e];
      }
    }
    const r = u.default.get(t.remote);
    if (r) {
      n.conversionTuple = r.serialize();
    }
    return n;
  }(e), t, (n = e.utm) !== null && n !== undefined ? n : undefined);
};
exports.createPeerMsgProtobuf = function (e) {
  if (e.type !== p.MSG_TYPE.PROTOCOL) {
    return {};
  }
  switch (e.subtype) {
    case "app_state_sync_key_share":
      return {
        protocolMessage: {
          type: f.Message$ProtocolMessage$Type.APP_STATE_SYNC_KEY_SHARE,
          appStateSyncKeyShare: e.appStateSyncKeyShare
        }
      };
    case "app_state_sync_key_request":
      return {
        protocolMessage: {
          type: f.Message$ProtocolMessage$Type.APP_STATE_SYNC_KEY_REQUEST,
          appStateSyncKeyRequest: e.appStateSyncKeyRequest
        }
      };
    case "app_state_fatal_exception_notification":
      return {
        protocolMessage: {
          type: f.Message$ProtocolMessage$Type.APP_STATE_FATAL_EXCEPTION_NOTIFICATION,
          appStateFatalExceptionNotification: e.appStateFatalExceptionNotification
        }
      };
    case "peer_data_operation_request_message":
      return {
        protocolMessage: {
          type: f.Message$ProtocolMessage$Type.PEER_DATA_OPERATION_REQUEST_MESSAGE,
          peerDataOperationRequestMessage: e.peerDataOperationRequestMessage
        }
      };
    case "peer_data_operation_request_response_message":
      return {
        protocolMessage: {
          type: f.Message$ProtocolMessage$Type.PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE,
          peerDataOperationRequestResponseMessage: e.peerDataOperationRequestResponseMessage
        }
      };
  }
  return {};
};
exports.getProtobufMessage = h;
exports.populateMessageContextInfo = function (e, t, n) {
  if (!t && !n) {
    return;
  }
  e.messageContextInfo = (0, i.default)((0, i.default)({}, e.messageContextInfo), {}, {
    deviceListMetadata: {
      senderKeyHash: t == null ? undefined : t.keyHash,
      senderTimestamp: t == null ? undefined : t.timestamp,
      senderKeyIndexes: t == null ? undefined : t.keyIndexes,
      recipientKeyHash: n == null ? undefined : n.keyHash,
      recipientTimestamp: n == null ? undefined : n.timestamp,
      recipientKeyIndexes: n == null ? undefined : n.keyIndexes
    },
    deviceListMetadataVersion: 2
  });
};
exports.updateBotInvokeMsgProtoCopyForCapi = function (e, t) {
  var n;
  var r;
  var o;
  var s;
  var l;
  var u;
  var c;
  var d;
  const p = (0, a.default)(e);
  p.messageContextInfo = (0, i.default)((0, i.default)({}, p.messageContextInfo), {}, {
    messageSecret: null
  });
  if (t) {
    p.messageContextInfo = (0, i.default)((0, i.default)({}, p.messageContextInfo), {}, {
      botMessageSecret: t
    });
  }
  const _ = (p == null || (n = p.botInvokeMessage) === null || n === undefined || (r = n.message) === null || r === undefined || (o = r.extendedTextMessage) === null || o === undefined ? undefined : o.contextInfo) || (p == null || (s = p.extendedTextMessage) === null || s === undefined ? undefined : s.contextInfo);
  var m;
  if ((_ == null ? undefined : _.quotedMessage) != null && _.participant != null && ((m = (0, g.createWid)(_.participant)) === null || m === undefined ? undefined : m.isBot()) !== true) {
    delete _.quotedMessage;
    delete _.stanzaId;
    delete _.remoteJid;
    delete _.participant;
  }
  const h = p == null || (l = p.protocolMessage) === null || l === undefined || (u = l.botFeedbackMessage) === null || u === undefined ? undefined : u.messageKey;
  if (h != null && h.remoteJid != null) {
    delete h.remoteJid;
  }
  const y = (p == null || (c = p.protocolMessage) === null || c === undefined ? undefined : c.type) === f.Message$ProtocolMessage$Type.REVOKE ? p == null || (d = p.protocolMessage) === null || d === undefined ? undefined : d.key : null;
  if (y != null && y.remoteJid != null) {
    delete y.remoteJid;
  }
  return p;
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/150361.js"));
var o = require("./724976.js");
var s = require("./354458.js");
var l = require("./878797.js");
var u = r(require("./528420.js"));
var c = require("./974637.js");
var d = require("./755733.js");
var p = require("./373070.js");
var f = require("./533494.js");
var _ = r(require("./79291.js"));
var g = require("./669050.js");
function m(e, t, n) {
  const r = {};
  if (e.quotedMsg) {
    const t = e.quotedMsg.mentionedJidList;
    const n = e.quotedMsg.groupMentions;
    const i = [];
    const a = [];
    if (Array.isArray(t) && t.length > 0) {
      i.push(...t.map(c.encodeJid));
    }
    if (Array.isArray(n) && n.length > 0) {
      a.push(...n.map(e => ({
        groupSubject: e.groupSubject,
        groupJid: (0, c.encodeJid)(e.groupJid)
      })));
    }
    const s = i.length > 0 || a.length > 0 ? {
      mentionedJid: i,
      groupMentions: a
    } : undefined;
    r.stanzaId = e.quotedStanzaID;
    r.remoteJid = (0, c.encodeJid)(e.quotedRemoteJid);
    r.participant = (0, c.encodeJid)(e.quotedParticipant);
    const l = {
      duration: e.quotedMsg.duration,
      directPath: e.quotedMsg.directPath,
      encFilehash: e.quotedMsg.encFilehash,
      filehash: e.quotedMsg.filehash,
      height: e.quotedMsg.height,
      mediaKey: e.quotedMsg.mediaKey,
      mediaKeyTimestamp: (0, o.isNumber)(e.quotedMsg.mediaKeyTimestamp) ? e.quotedMsg.mediaKeyTimestamp : undefined,
      mimetype: e.quotedMsg.mimetype,
      url: e.quotedMsg.clientUrl || e.quotedMsg.deprecatedMms3Url,
      width: e.quotedMsg.width
    };
    r.quotedMessage = h(e.quotedMsg, l, s, undefined, "quoted");
  } else if (e.quotedRemoteJid && e.quotedGroupSubject && e.quotedParentGroupJid) {
    r.remoteJid = (0, c.encodeJid)(e.quotedRemoteJid);
    r.groupSubject = e.quotedGroupSubject;
    r.parentGroupJid = (0, c.encodeJid)(e.quotedParentGroupJid);
  } else if (e.quotedRemoteJid) {
    r.remoteJid = (0, c.encodeJid)(e.quotedRemoteJid);
  }
  if (e.mentionedJidList && e.mentionedJidList.length > 0) {
    const t = e.mentionedJidList;
    r.mentionedJid = t.map(c.encodeJid);
  }
  if (e.groupMentions && e.groupMentions.length > 0) {
    r.groupMentions = e.groupMentions.map(e => ({
      groupSubject: e.groupSubject,
      groupJid: (0, c.encodeJid)(e.groupJid)
    }));
  }
  if (e.conversionTuple) {
    Object.assign(r, e.conversionTuple);
  }
  if (e.isForwarded) {
    r.isForwarded = e.isForwarded;
  }
  if (e.forwardingScore) {
    r.forwardingScore = e.forwardingScore;
  }
  if (e.forwardedNewsletterMessageInfo) {
    const {
      newsletterId: t,
      newsletterName: n,
      serverMessageId: i
    } = e.forwardedNewsletterMessageInfo;
    r.forwardedNewsletterMessageInfo = {
      newsletterJid: (0, c.encodeJid)(t),
      newsletterName: n,
      serverMessageId: i
    };
  }
  if (e.ephemeralDuration) {
    r.expiration = e.ephemeralDuration;
  }
  if (e.ephemeralSettingTimestamp) {
    r.ephemeralSettingTimestamp = e.ephemeralSettingTimestamp;
  }
  if (e.disappearingModeInitiator) {
    r.disappearingMode = (0, c.disappearingModeInitiatorToProto)(e.disappearingModeInitiator, e.disappearingModeTrigger, e.disappearingModeInitiatedByMe);
  }
  if (e.ctwaContext) {
    r.externalAdReply = {
      sourceUrl: e.ctwaContext.sourceUrl,
      sourceId: e.ctwaContext.sourceId,
      sourceType: e.ctwaContext.sourceType,
      body: e.ctwaContext.description,
      title: e.ctwaContext.title,
      thumbnailUrl: e.ctwaContext.thumbnailUrl,
      thumbnail: e.ctwaContext.thumbnail ? (0, c.encodeBytes)(e.ctwaContext.thumbnail) : undefined,
      mediaType: e.ctwaContext.mediaType,
      mediaUrl: e.ctwaContext.mediaUrl
    };
  }
  if (n) {
    r.utm = {
      utmCampaign: n.campaign != null ? n.campaign : undefined,
      utmSource: n.source != null ? n.source : undefined
    };
  }
  return h(e, t, Object.keys(r).length > 0 ? r : undefined);
}
function h(e) {
  var t;
  let n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  let a = arguments.length > 3 ? arguments[3] : undefined;
  let o = arguments.length > 4 ? arguments[4] : undefined;
  let l = y(e, n, r, a, o);
  if (!((0, s.isBotEnabled)() && ((t = e.invokedBotWid) === null || t === undefined ? undefined : t.isBot()) || !e.messageSecret)) {
    l.messageContextInfo = (0, i.default)((0, i.default)({}, l.messageContextInfo), {}, {
      messageSecret: e.messageSecret
    });
  }
  if ((0, s.isBotEnabled)() && e.botPersonaId != null) {
    l.messageContextInfo = (0, i.default)((0, i.default)({}, l.messageContextInfo), {}, {
      botMetadata: {
        personaId: e.botPersonaId
      }
    });
  }
  l = E(l, e, r);
  return l;
}
function y(e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  let r = arguments.length > 3 ? arguments[3] : undefined;
  let i = arguments.length > 4 ? arguments[4] : undefined;
  const a = r || {};
  const o = (0, d.generateProtobuf)({
    message: a,
    msgContext: i,
    contextInfo: n,
    json: e,
    mediaMetadata: t
  });
  if (o != null) {
    return o;
  }
  switch (e.type) {
    case "template":
      if (e.subtype === "text") {
        e.type = "chat";
        if (e.title) {
          e.body = "*" + e.title + "*\n" + e.body;
        }
      } else {
        e.type = e.subtype;
      }
      return h(e, t, n, a);
  }
  return a;
}
function E(e, t, n) {
  var r;
  var a;
  var o;
  var u;
  let c = e;
  var d;
  if (t.isViewOnce) {
    c = {
      viewOnceMessage: {
        message: c
      }
    };
  }
  if (t.isDynamicReplyButtonsMsg === true) {
    c = (0, l.createDynamicReplyButtonsMessage)(c, t, n);
  }
  if (t.type === p.MSG_TYPE.DOCUMENT && Boolean((r = c.documentMessage) === null || r === undefined ? undefined : r.caption)) {
    c = function (e) {
      return {
        documentWithCaptionMessage: {
          message: e
        }
      };
    }(c);
  }
  if (((a = c.protocolMessage) === null || a === undefined ? undefined : a.type) === f.Message$ProtocolMessage$Type.MESSAGE_EDIT) {
    c = function (e) {
      return {
        editedMessage: {
          message: e
        }
      };
    }(c);
  }
  if (n == null || (o = n.groupMentions) === null || o === undefined ? undefined : o.length) {
    c = function (e) {
      return {
        groupMentionedMessage: {
          message: e
        }
      };
    }(c);
  }
  if (((u = t.invokedBotWid) === null || u === undefined ? undefined : u.isBot()) || t.subtype === "bot_request_welcome") {
    c = function (e) {
      return {
        botInvokeMessage: {
          message: e
        }
      };
    }(c);
    if ((0, s.isBotEnabled)()) {
      c.messageContextInfo = (0, i.default)((0, i.default)({}, c.messageContextInfo), {}, {
        messageSecret: t.messageSecret,
        botMetadata: (d = e.messageContextInfo) === null || d === undefined ? undefined : d.botMetadata
      });
    }
  }
  return c;
}