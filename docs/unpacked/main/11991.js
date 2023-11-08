var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleUploadStickerPeerDataOperationRequest = function () {
  return C.apply(this, arguments);
};
exports.handleUploadStickerPeerDataOperationRequestResponse = function (e, t) {
  __LOG__(2)`Sticker RDU: Handle reupload sticker response results with length ${t.length}`;
  if (t.length === 0) {
    return void (0, p.logNonMessagePeerDataResponse)(h.Message$PeerDataOperationRequestType.UPLOAD_STICKER, e, 0, 0, 0, 0, 0);
  }
  const n = t.length;
  let a = 0;
  let r = 0;
  let i = 0;
  let u = 0;
  const c = new Map();
  t.forEach(e => {
    if (e.mediaUploadResult === g.MediaRetryNotification$ResultType.SUCCESS) {
      a++;
    } else if (e.mediaUploadResult === g.MediaRetryNotification$ResultType.NOT_FOUND) {
      u++;
    } else {
      i++;
    }
    const t = e.stickerMessage;
    if (t == null) {
      return void __LOG__(2)`Sticker RDU: get null as stickerMessage in result`;
    }
    const {
      fileSha256: n,
      fileEncSha256: d,
      mediaKey: f,
      directPath: p,
      mediaKeyTimestamp: h
    } = t;
    if (n == null) {
      return void __LOG__(2)`Sticker RDU: get null as fileSha256 in result`;
    }
    const v = (0, o.encodeB64)(n);
    if (e.mediaUploadResult !== g.MediaRetryNotification$ResultType.SUCCESS) {
      __LOG__(2)`Sticker RDU: the mediaUploadResult ${e.mediaUploadResult} is not success`;
      return void (e.mediaUploadResult !== g.MediaRetryNotification$ResultType.NOT_FOUND && c.set(v, (0, l.default)(e.mediaUploadResult, "result.mediaUploadResult")));
    }
    if (d == null || f == null) {
      return void __LOG__(2)`Sticker RDU: get null as media fields in result`;
    }
    r++;
    const y = E.RecentStickerCollectionMd.get(v);
    const C = s.FavoriteStickerCollection.get(v);
    if (m.inFlightStickerRequests.has(v)) {
      m.inFlightStickerRequests.delete(v);
    }
    if (y || C) {
      var b;
      const e = y != null ? y.sticker : (0, l.default)(C, "existingStickerInFavorite").sticker;
      if (p === e.directPath && (0, o.encodeB64)(d) === e.encFilehash && (0, o.encodeB64)(f) === e.mediaKey) {
        return;
      }
      var M;
      var S;
      if ((b = e.mediaObject) === null || b === undefined ? undefined : b.entries.entries) {
        if (!((M = e.mediaObject) === null || M === undefined || (S = M.entries) === null || S === undefined)) {
          S.clearEntries();
        }
      }
      const t = new _.StickerModel({
        id: e.filehash,
        directPath: p != null ? p : e.directPath,
        filehash: e.filehash,
        encFilehash: (0, o.encodeB64)(d),
        mediaKey: (0, o.encodeB64)(f),
        mediaKeyTimestamp: h != null ? Number(h) : e.mediaKeyTimestamp,
        width: e.width,
        height: e.height,
        size: e.size,
        mimetype: e.mimetype,
        type: e.type,
        index: 0
      });
      if (y) {
        E.RecentStickerCollectionMd.updateRecentStickerWithNewSticker(v, t);
      }
      if (C) {
        s.FavoriteStickerCollection.updateFavoriteStickerWithNewSticker(v, t);
      }
    }
  });
  (0, m.insertResponseError)(c, h.Message$PeerDataOperationRequestType.UPLOAD_STICKER);
  (0, p.logNonMessagePeerDataResponse)(h.Message$PeerDataOperationRequestType.UPLOAD_STICKER, e, n, a, r, i, u);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/417405.js");
var l = a(require("../app/670983.js"));
var i = require("../app/632157.js");
var u = a(require("../app/507511.js"));
var s = require("../app/788788.js");
var c = require("../app/509998.js");
var d = require("../app/709089.js");
var f = require("../app/97858.js");
var p = require("../app/588444.js");
var m = require("../app/443261.js");
var h = require("../app/533494.js");
var g = require("../app/229479.js");
var E = require("../app/951220.js");
var v = require("./230228.js");
var _ = require("../app/164832.js");
var y = require("../app/495588.js");
function C() {
  return (C = (0, r.default)(function* (e, t) {
    if (!(0, f.isStickerRmrSyncEnabled)()) {
      return;
    }
    const n = t.length;
    let a = 0;
    let r = 0;
    let E = 0;
    let C = 0;
    const b = (0, i.unixTime)();
    const M = [];
    const S = t.map(e => {
      const t = e.fileSha256;
      if (t == null) {
        E++;
        return void M.push({
          mediaUploadResult: g.MediaRetryNotification$ResultType.GENERAL_ERROR
        });
      }
      const n = s.FavoriteStickerCollection.get(t);
      if (n == null) {
        C++;
        return void M.push({
          mediaUploadResult: g.MediaRetryNotification$ResultType.NOT_FOUND,
          stickerMessage: {
            fileSha256: (0, o.decodeB64)(t)
          }
        });
      } else {
        return n;
      }
    }).filter(e => e != null);
    const T = new Set();
    const w = S.map(e => {
      const t = (0, l.default)(e == null ? undefined : e.sticker, "favoriteSticker?.sticker");
      const n = t.mediaObject;
      if (n == null) {
        return {
          kind: d.UploadMediaResultKind.ERROR
        };
      }
      if ((0, m.shouldSkipMediaUploadWithSuccess)(t.filehash, h.Message$PeerDataOperationRequestType.UPLOAD_STICKER, b)) {
        const e = n.entries.getDownloadEntry(true);
        if (e instanceof c.EncryptedMediaEntry) {
          r++;
          T.add(t.filehash);
          return {
            kind: d.UploadMediaResultKind.SUCCESS,
            mediaEntry: e
          };
        }
      }
      if ((0, m.shouldSkipMediaUploadWithCancellation)(t.filehash, h.Message$PeerDataOperationRequestType.UPLOAD_STICKER, b)) {
        T.add(t.filehash);
        return {
          kind: d.UploadMediaResultKind.CANCELLATION
        };
      }
      const a = n.entries.getUploadEntry(true);
      if (a instanceof c.UnencryptedMediaEntry) {
        __LOG__(4, undefined, new Error(), true)`[sticker-upload] Unexpected unencrypted upload entry`;
        SEND_LOGS("sticker-upload-unexpected-unencrypted-entry");
        return {
          kind: d.UploadMediaResultKind.ERROR
        };
      }
      const o = a instanceof c.EncryptedMediaEntry ? {
        key: a.mediaKey,
        timestamp: a.mediaKeyTimestamp
      } : (0, u.default)();
      return (0, d.uploadMedia)({
        mimetype: t.mimetype,
        mediaObject: n,
        mediaType: "sticker",
        forwardedFromWeb: false,
        uploadOrigin: y.UPLOAD_ORIGIN_TYPE.STICKER_WEB,
        mediaKeyInfo: o,
        isViewOnce: true
      });
    });
    const A = yield Promise.all(w);
    const P = new Map();
    for (let e = 0; e < A.length; e++) {
      var O;
      var k;
      const {
        kind: t,
        mediaEntry: n
      } = A[e];
      const r = (0, l.default)(S[e], "favoriteStickers[i]");
      const i = (0, l.default)(r == null ? undefined : r.sticker, "favoriteSticker?.sticker");
      if (t === d.UploadMediaResultKind.SUCCESS && n != null) {
        a++;
        if (!T.has(i.filehash)) {
          var D;
          var I;
          var R;
          if ((D = i.mediaObject) === null || D === undefined ? undefined : D.entries.entries) {
            if (!((I = i.mediaObject) === null || I === undefined || (R = I.entries) === null || R === undefined)) {
              R.clearEntries();
            }
          }
          const e = new _.StickerModel({
            id: i.filehash,
            directPath: n.directPath,
            filehash: i.filehash,
            encFilehash: n.encFilehash,
            mediaKey: n.mediaKey,
            mediaKeyTimestamp: n.mediaKeyTimestamp,
            width: i.width,
            height: i.height,
            size: i.size,
            mimetype: i.mimetype,
            type: i.type,
            index: 0
          });
          s.FavoriteStickerCollection.updateFavoriteStickerWithNewSticker(i.filehash, e);
          P.set(i.filehash, t);
        }
        M.push({
          mediaUploadResult: g.MediaRetryNotification$ResultType.SUCCESS,
          stickerMessage: {
            fileSha256: (0, o.decodeB64)(i.filehash),
            fileEncSha256: (0, o.decodeB64)((O = n.encFilehash) !== null && O !== undefined ? O : ""),
            mediaKey: (0, o.decodeB64)(n.mediaKey),
            mimetype: i.mimetype,
            height: i.height,
            width: i.width,
            directPath: (k = n.directPath) !== null && k !== undefined ? k : "",
            mediaKeyTimestamp: n.mediaKeyTimestamp
          }
        });
      } else {
        E++;
        M.push({
          mediaUploadResult: g.MediaRetryNotification$ResultType.GENERAL_ERROR,
          stickerMessage: {
            fileSha256: (0, o.decodeB64)(i.filehash)
          }
        });
        if (!T.has(i.filehash)) {
          P.set(i.filehash, t);
        }
      }
    }
    (0, v.sendPeerDataOperationRequestResponseMessage)(e, h.Message$PeerDataOperationRequestType.UPLOAD_STICKER, M);
    (0, m.insertMediaUploadResult)(P, b);
    (0, p.logMediaUpload)(h.Message$PeerDataOperationRequestType.UPLOAD_STICKER, e, n, a, r, E, C);
  })).apply(this, arguments);
}