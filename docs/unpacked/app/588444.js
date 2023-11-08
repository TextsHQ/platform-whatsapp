Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertRequestTypeEnumForLogging = p;
exports.logHistorySyncOnDemandResponse = function (e, t) {
  new a.NonMessagePeerDataOperationResponseWamEvent({
    peerDataRequestType: l.PEER_DATA_REQUEST_TYPE.HISTORY_SYNC_ON_DEMAND,
    peerDataResponseApplyResult: e,
    peerDataRequestSessionId: t
  }).commit();
};
exports.logLinkPreviewResponse = function (e, t, n) {
  var i;
  let a;
  const o = (0, r.unixTimeMs)();
  if (e != null) {
    const t = c.get(e);
    if (t != null) {
      a = o - t;
    }
  }
  __LOG__(2)`link preview: session id: ${e}, is success: ${t}, durationMs: ${a}`;
  new u.WebcLinkPreviewResponseHandleWamEvent({
    previewSessionId: e,
    isPreviewSuccess: t,
    previewDurationMs: (i = a) !== null && i !== undefined ? i : undefined,
    didRespondHqPreview: n
  }).commit();
  if (e != null) {
    c.delete(e);
  }
};
exports.logMediaUpload = function (e, t, n, r, a, o, l) {
  if (e !== s.Message$PeerDataOperationRequestType.UPLOAD_STICKER) {
    return;
  }
  const u = p(e);
  new i.NonMessagePeerDataMediaUploadWamEvent({
    peerDataRequestCount: n,
    peerDataSuccessUploadCount: r,
    peerDataExistingDataNoUploadCount: a,
    peerDataErrorCount: o,
    peerDataNotFoundCount: l,
    peerDataRequestType: u,
    peerDataRequestSessionId: t
  }).commit();
};
exports.logNonMessagePeerDataRequest = function (e, t) {
  const n = p(e);
  new o.NonMessagePeerDataRequestWamEvent({
    peerDataRequestCount: d(e, t),
    peerDataRequestType: n,
    peerDataRequestSessionId: t.id.id
  }).commit();
};
exports.logNonMessagePeerDataResponse = function (e, t, n, r, i, o, s) {
  const l = p(e);
  new a.NonMessagePeerDataOperationResponseWamEvent({
    peerDataResponseCount: n,
    peerDataSuccessResponseCount: r,
    peerDataSuccessProcessCount: i,
    peerDataErrorCount: o,
    peerDataNotFoundCount: s,
    peerDataRequestType: l,
    peerDataRequestSessionId: t
  }).commit();
};
exports.logPlaceholderMessageResendResponse = function (e, t, n, r, i, o) {
  const s = p(e);
  new a.NonMessagePeerDataOperationResponseWamEvent({
    peerDataResponseCount: r,
    peerDataSuccessResponseCount: i,
    peerDataErrorCount: o,
    peerDataResponseApplyResult: n,
    peerDataRequestType: s,
    peerDataRequestSessionId: t
  }).commit();
};
exports.sendTimes = undefined;
var r = require("./632157.js");
var i = require("./856147.js");
var a = require("./165881.js");
var o = require("./911518.js");
var s = require("./533494.js");
var l = require("./77834.js");
var u = require("./835072.js");
const c = new Map();
function d(e, t) {
  switch (e) {
    case s.Message$PeerDataOperationRequestType.SEND_RECENT_STICKER_BOOTSTRAP:
      return 1;
    case s.Message$PeerDataOperationRequestType.UPLOAD_STICKER:
      {
        var n;
        var r;
        const e = (n = t.peerDataOperationRequestMessage) === null || n === undefined ? undefined : n.requestStickerReupload;
        if ((r = e == null ? undefined : e.length) !== null && r !== undefined) {
          return r;
        } else {
          return 0;
        }
      }
    case s.Message$PeerDataOperationRequestType.GENERATE_LINK_PREVIEW:
      {
        var i;
        var a;
        const e = (i = t.peerDataOperationRequestMessage) === null || i === undefined ? undefined : i.requestStickerReupload;
        if ((a = e == null ? undefined : e.length) !== null && a !== undefined) {
          return a;
        } else {
          return 0;
        }
      }
    case s.Message$PeerDataOperationRequestType.HISTORY_SYNC_ON_DEMAND:
      return 1;
    case s.Message$PeerDataOperationRequestType.PLACEHOLDER_MESSAGE_RESEND:
      {
        var o;
        var l;
        const e = (o = t.peerDataOperationRequestMessage) === null || o === undefined ? undefined : o.placeholderMessageResendRequest;
        if ((l = e == null ? undefined : e.length) !== null && l !== undefined) {
          return l;
        } else {
          return 0;
        }
      }
  }
}
function p(e) {
  switch (e) {
    case s.Message$PeerDataOperationRequestType.UPLOAD_STICKER:
      return l.PEER_DATA_REQUEST_TYPE.UPLOAD_STICKER;
    case s.Message$PeerDataOperationRequestType.SEND_RECENT_STICKER_BOOTSTRAP:
      return l.PEER_DATA_REQUEST_TYPE.SEND_RECENT_STICKER_BOOTSTRAP;
    case s.Message$PeerDataOperationRequestType.GENERATE_LINK_PREVIEW:
      return l.PEER_DATA_REQUEST_TYPE.GENERAL_LINK_PREVIEW;
    case s.Message$PeerDataOperationRequestType.HISTORY_SYNC_ON_DEMAND:
      return l.PEER_DATA_REQUEST_TYPE.HISTORY_SYNC_ON_DEMAND;
    case s.Message$PeerDataOperationRequestType.PLACEHOLDER_MESSAGE_RESEND:
      return l.PEER_DATA_REQUEST_TYPE.PLACEHOLDER_MESSAGE_RESEND;
  }
}
exports.sendTimes = c;