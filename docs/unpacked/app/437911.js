var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleanRequestAfterTimeout = N;
exports.sendPeerDataOperationRequest = function () {
  return T.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./685639.js");
var o = require("./632157.js");
var s = require("./287461.js");
var l = require("./731165.js");
var u = require("./355813.js");
var c = require("./974637.js");
var d = r(require("./565754.js"));
var p = require("./510306.js");
var f = require("./588444.js");
var _ = require("./443261.js");
var g = require("./535538.js");
var m = require("./533494.js");
var h = require("./635881.js");
var y = require("./142601.js");
var E = require("./459857.js");
var S = require("./814173.js");
var v = require("./669050.js");
function T() {
  return (T = (0, i.default)(function* (e, t, n) {
    const r = yield M(e, t, n);
    if (r == null) {
      return void __LOG__(3)`[rdu] the constructed peer data operation request message is null`;
    }
    __LOG__(2)`[rdu] build rdu message successfully, ## type: ${e}, ## msg: ${r.id.id}`;
    R(e, r);
    (0, f.logNonMessagePeerDataRequest)(e, r);
    yield (0, l.storePeerMessages)([r]);
    f.sendTimes.set(r.id.id, (0, o.unixTimeMs)());
    const i = D(e);
    return (0, h.encryptAndSendKeyMsg)(r, i != null ? i : undefined);
  })).apply(this, arguments);
}
function M() {
  return A.apply(this, arguments);
}
function A() {
  return (A = (0, i.default)(function* (e, t, n) {
    __LOG__(2)`[rdu] start building rdu message, ## type: ${e}`;
    const r = {
      peerDataOperationRequestType: e,
      requestUrlPreview: [],
      requestStickerReupload: [],
      placeholderMessageResendRequest: []
    };
    switch (e) {
      case m.Message$PeerDataOperationRequestType.SEND_RECENT_STICKER_BOOTSTRAP:
        break;
      case m.Message$PeerDataOperationRequestType.UPLOAD_STICKER:
        {
          const e = b(t);
          if (e == null) {
            return null;
          }
          r.requestStickerReupload = e;
          break;
        }
      case m.Message$PeerDataOperationRequestType.GENERATE_LINK_PREVIEW:
        {
          const e = C(t);
          if (e == null) {
            return null;
          }
          r.requestUrlPreview = e;
          break;
        }
      case m.Message$PeerDataOperationRequestType.HISTORY_SYNC_ON_DEMAND:
        {
          const e = yield P(t);
          if (e == null) {
            return null;
          }
          r.historySyncOnDemandRequest = e;
          break;
        }
      case m.Message$PeerDataOperationRequestType.PLACEHOLDER_MESSAGE_RESEND:
        {
          const e = I(t);
          if (e == null) {
            return null;
          }
          r.placeholderMessageResendRequest = e;
          break;
        }
    }
    return {
      id: new d.default({
        fromMe: true,
        remote: (0, E.getMeUser)(),
        id: n != null ? n : yield d.default.newId()
      }),
      to: (0, v.createDeviceWidFromUserAndDevice)((0, E.assertGetMe)().user, (0, E.assertGetMe)().server, 0),
      type: "protocol",
      subtype: "peer_data_operation_request_message",
      peerDataOperationRequestMessage: r
    };
  })).apply(this, arguments);
}
function b(e) {
  var t;
  const n = e.fileSha256Arr;
  const r = n == null || (t = n.filter(e => !_.inFlightStickerRequests.has(e))) === null || t === undefined ? undefined : t.map(e => {
    N(m.Message$PeerDataOperationRequestType.UPLOAD_STICKER, _.inFlightStickerRequests, e);
    return {
      fileSha256: e
    };
  });
  if ((r == null ? undefined : r.length) === 0) {
    return null;
  } else {
    return r;
  }
}
function C(e) {
  const t = e.urls;
  if (t == null) {
    return undefined;
  } else {
    return t.map(t => ({
      url: t,
      includeHqThumbnail: e.includeHqThumbnail
    }));
  }
}
function P() {
  return O.apply(this, arguments);
}
function O() {
  return (O = (0, i.default)(function* (e) {
    if (!(0, y.isHistorySyncOnDemandEnabled)()) {
      return null;
    }
    if ((0, s.getABPropConfigValue)("history_sync_on_demand_request_send_killswitch") && p.historySyncOnDemandRequestsFailureRecord.disableRequestSending) {
      __LOG__(2)`[rdu] stop sending history sync on demand request as it fails too many times`;
      return null;
    }
    const t = e.chatId;
    if (t == null) {
      return null;
    }
    const n = (0, u.CHAT_JID)(t).toString();
    if (new Set(p.inFlightHistorySyncOnDemandRequests.values()).has(n)) {
      __LOG__(2)`[rdu] drop history sync on demand request as it's in flight`;
      return null;
    }
    const r = yield (0, p.getOldestMsgInChatFromDB)(t);
    const i = yield (0, s.getABPropConfigValue)("history_sync_on_demand_message_count");
    return {
      chatJid: n,
      oldestMsgId: r == null ? undefined : r.id.id,
      oldestMsgFromMe: r == null ? undefined : r.id.fromMe,
      onDemandMsgCount: i,
      oldestMsgTimestampMs: r == null ? undefined : r.t
    };
  })).apply(this, arguments);
}
function I(e) {
  if (!(0, y.isPlaceholderMessageResendEnabled)()) {
    return null;
  }
  const t = e.msgKeys;
  if (t == null || t.length === 0) {
    return null;
  } else {
    return t.filter(e => !g.inFlightPlaceholderResendRequests.has(e.id)).map(e => {
      N(m.Message$PeerDataOperationRequestType.PLACEHOLDER_MESSAGE_RESEND, g.inFlightPlaceholderResendRequests, e.id);
      return {
        messageKey: (0, c.msgKeyToProtobuf)(e)
      };
    });
  }
}
function R(e, t) {
  switch (e) {
    case m.Message$PeerDataOperationRequestType.UPLOAD_STICKER:
      {
        var n;
        const e = (n = t.peerDataOperationRequestMessage) === null || n === undefined ? undefined : n.requestStickerReupload;
        if (e != null) {
          e.forEach(e => {
            const t = e.fileSha256;
            var n;
            if (t != null) {
              _.inFlightStickerRequests.add(t);
              _.mediaReuploadRequestCountMap.set(t, ((n = _.mediaReuploadRequestCountMap.get(t)) !== null && n !== undefined ? n : 0) + 1);
            }
          });
        }
        break;
      }
    case m.Message$PeerDataOperationRequestType.HISTORY_SYNC_ON_DEMAND:
      {
        var r;
        const e = (r = t.peerDataOperationRequestMessage) === null || r === undefined ? undefined : r.historySyncOnDemandRequest;
        if (e != null) {
          var i;
          const n = (i = e.chatJid) !== null && i !== undefined ? i : "";
          p.inFlightHistorySyncOnDemandRequests.set(t.id.id, n);
          const r = (0, s.getABPropConfigValue)("history_sync_on_demand_timeout_ms");
          N(m.Message$PeerDataOperationRequestType.HISTORY_SYNC_ON_DEMAND, p.inFlightHistorySyncOnDemandRequests, t.id.id, r, () => {
            __LOG__(2)`[history sync][rdu] dropping history sync on demand response as it's timeout with key ${""}.`;
            (0, p.handleHistorySyncOnDemandFailure)(n);
            (0, f.logHistorySyncOnDemandResponse)(S.PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.REQUEST_TIMEOUT, t.id.id);
          });
        }
        break;
      }
    case m.Message$PeerDataOperationRequestType.PLACEHOLDER_MESSAGE_RESEND:
      {
        var a;
        const e = (a = t.peerDataOperationRequestMessage) === null || a === undefined ? undefined : a.placeholderMessageResendRequest;
        if (e != null) {
          e.forEach(e => {
            var t;
            const n = (t = e.messageKey) === null || t === undefined ? undefined : t.id;
            if (n != null) {
              g.inFlightPlaceholderResendRequests.add(n);
            }
          });
        }
        break;
      }
  }
}
function N(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 3000;
  let i = arguments.length > 4 ? arguments[4] : undefined;
  new a.ShiftTimer(() => {
    if (t.has(n)) {
      __LOG__(2)`[rdu] clean rdu message request after timeout with key ${""}, ## type: ${e}`;
      t.delete(n);
      if (!(i == null)) {
        i();
      }
    }
  }).onOrAfter(r);
}
function D(e) {
  switch (e) {
    case m.Message$PeerDataOperationRequestType.GENERATE_LINK_PREVIEW:
      if ((0, y.isWebLinkPreviewNseSupportEnabled)()) {
        return "high_force";
      } else {
        return null;
      }
    case m.Message$PeerDataOperationRequestType.PLACEHOLDER_MESSAGE_RESEND:
      if ((0, y.isMessagePlaceholderResendNseSupportEnabled)()) {
        return "high_force";
      } else {
        return null;
      }
    case m.Message$PeerDataOperationRequestType.HISTORY_SYNC_ON_DEMAND:
      if ((0, y.isHistorySyncOnDemandEnabled)()) {
        return "high_force";
      } else {
        return null;
      }
    default:
      return null;
  }
}