var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleStickerDownloadInStickerPanel = function () {
  return f.apply(this, arguments);
};
exports.requestStickerReupload = s;
var r = a(require("../vendor/348926.js"));
var o = require("../app/97858.js");
var l = require("../app/443261.js");
var i = require("../app/533494.js");
var u = require("../app/437911.js");
function s() {
  return c.apply(this, arguments);
}
function c() {
  return (c = (0, r.default)(function* (e) {
    const t = e.filter(e => {
      var t;
      return ((t = l.mediaReuploadRequestCountMap.get(e.filehash)) !== null && t !== undefined ? t : 0) < l.MEDIA_REUPLOAD_REQUEST_LIMIT;
    });
    yield (0, u.sendPeerDataOperationRequest)(i.Message$PeerDataOperationRequestType.UPLOAD_STICKER, {
      fileSha256Arr: t.map(e => e.filehash)
    });
  })).apply(this, arguments);
}
function d(e) {
  const t = e.map(e => require("../app/196127.js").InMemoryMediaBlobCache.has(e.filehash) ? Promise.resolve() : e.downloadMedia(false));
  return Promise.allSettled(t);
}
function f() {
  return (f = (0, r.default)(function* (e) {
    let {
      stickersArr: t,
      setStickersDownloaded: a,
      stickerReuploadRetryCount: r,
      setStickerReuploadRetryCount: l,
      onChange: i,
      onDownloadStart: u,
      onDownloadEnd: c,
      filterStickers: f
    } = e;
    const p = t.filter(e => require("../app/196127.js").InMemoryMediaBlobCache.has(e.filehash));
    __LOG__(2)`Stickers Download: before download, shared stickers between collection and media blob length: ${p.length}`;
    a(f != null ? f(p) : p);
    if (!(u == null)) {
      u();
    }
    yield d(t).then(() => {
      __LOG__(2)`Stickers Download: finish stickers download`;
      const e = [];
      const u = [];
      t.forEach(t => {
        if (require("../app/196127.js").InMemoryMediaBlobCache.has(t.filehash)) {
          e.push(t);
        } else {
          u.push(t);
        }
      });
      __LOG__(2)`Stickers Download: after download, shared stickers between collection and media blob length: ${e.length}`;
      a(f != null ? f(e) : e);
      if (!(i == null)) {
        i();
      }
      if (r < 3 && u.length > 0 && (0, o.isStickerRmrSyncEnabled)()) {
        l(r + 1);
        __LOG__(2)`Stickers Download: length of stickers fail to download and need RDU: ${u.length}`;
        s(u);
      }
    });
    if (!(c == null)) {
      c();
    }
  })).apply(this, arguments);
}