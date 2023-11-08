Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handlePeerDataOperationRequest = function (e, t) {
  if (t.peerDataOperationRequestType == null) {
    return;
  }
  switch (t.peerDataOperationRequestType) {
    case l.Message$PeerDataOperationRequestType.UPLOAD_STICKER:
      return void (0, o.handleUploadStickerPeerDataOperationRequest)(e, t.requestStickerReupload);
  }
};
exports.handlePeerDataOperationRequestResponse = function (e, t) {
  if (t.peerDataOperationRequestType == null) {
    return;
  }
  switch (t.peerDataOperationRequestType) {
    case l.Message$PeerDataOperationRequestType.UPLOAD_STICKER:
      return void (0, o.handleUploadStickerPeerDataOperationRequestResponse)(e, t.peerDataOperationResult);
    case l.Message$PeerDataOperationRequestType.GENERATE_LINK_PREVIEW:
      return void (0, a.handleGenerateLinkPreviewOperationRequestResponse)(t);
    case l.Message$PeerDataOperationRequestType.PLACEHOLDER_MESSAGE_RESEND:
      return void (0, r.handlePlaceholderResendOperationRequestResponse)(e, t.peerDataOperationResult);
  }
};
var a = require("./495751.js");
var r = require("./667825.js");
var o = require("./11991.js");
var l = require("../app/533494.js");