Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleGenerateLinkPreviewOperationRequestResponse = function (e) {
  var t;
  var n;
  var a;
  (0, r.logLinkPreviewResponse)(e.stanzaId, ((t = e.peerDataOperationResult[0]) === null || t === undefined ? undefined : t.mediaUploadResult) === o.MediaRetryNotification$ResultType.SUCCESS, ((n = e.peerDataOperationResult[0]) === null || n === undefined || (a = n.linkPreviewResponse) === null || a === undefined ? undefined : a.hqThumbnail) != null);
  if (e.stanzaId != null) {
    const t = e.stanzaId;
    if (l.has(t)) {
      const n = l.get(t);
      l.delete(t);
      if (!(n == null)) {
        n.resolve(e.peerDataOperationResult[0]);
      }
    }
  }
};
exports.registerLinkPreviewHandlerHook = function (e) {
  const t = new a.Resolvable();
  l.set(e, t);
  return t;
};
var a = require("../app/950376.js");
var r = require("../app/588444.js");
var o = require("../app/229479.js");
const l = new Map();