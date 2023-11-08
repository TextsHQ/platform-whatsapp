var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MAX_AUTO_DOWNLOAD_SIZE = exports.AutoDownloadQueue = exports.AUTO_DOWNLOAD_TYPES = exports.AUDIO_AUTO_DOWNLOAD_SIZE_LIMIT = undefined;
exports.shouldAutoDownloadMedia = v;
exports.shouldTrustMedia = S;
exports.validateMediaSize = T;
var i = r(require("../vendor/348926.js"));
var a = r(require("./703393.js"));
var o = require("./644234.js");
var s = r(require("./343087.js"));
var l = require("./97858.js");
var u = require("./787742.js");
var c = require("./435711.js");
var d = require("./430231.js");
var p = require("./373070.js");
var f = require("./164832.js");
var _ = require("./757453.js");
var g = require("./885313.js");
const m = require("../vendor/76672.js")({
  MEDIA: "media",
  MMS_THUMBNAIL: "mms_thumbnail"
});
exports.AUTO_DOWNLOAD_TYPES = m;
const h = 33554432;
exports.MAX_AUTO_DOWNLOAD_SIZE = h;
const y = 524288;
exports.AUDIO_AUTO_DOWNLOAD_SIZE_LIMIT = y;
const E = 512000;
function S(e) {
  return (0, c.isTrusted)(e.unsafe());
}
function v(e) {
  switch (e.type) {
    case p.MSG_TYPE.AUDIO:
    case p.MSG_TYPE.PTT:
      return (0, _.getAutoDownloadAudio)();
    case p.MSG_TYPE.STICKER:
    case p.MSG_TYPE.IMAGE:
      return (0, _.getAutoDownloadPhotos)();
    case p.MSG_TYPE.VIDEO:
    case p.MSG_TYPE.PTV:
      if (e.isGif && e.size < E) {
        return (0, _.getAutoDownloadPhotos)();
      } else {
        return (0, _.getAutoDownloadVideos)();
      }
    case p.MSG_TYPE.DOCUMENT:
      return (0, _.getAutoDownloadDocuments)();
  }
  return false;
}
function T(e) {
  switch (e.type) {
    case p.MSG_TYPE.IMAGE:
    case p.MSG_TYPE.VIDEO:
    case p.MSG_TYPE.PTV:
    case p.MSG_TYPE.DOCUMENT:
      return e.size <= h;
    case p.MSG_TYPE.AUDIO:
    case p.MSG_TYPE.PTT:
      return e.size < y;
    case p.MSG_TYPE.STICKER:
      return true;
  }
  return false;
}
const M = new class {
  constructor() {
    this._downloaderQueue = new a.default(5, {
      photos: 2,
      videos: 1,
      audio: 1,
      documents: 1,
      mms_thumbnail: 4
    });
  }
  getEnqueuedTasksCount() {
    return this._downloaderQueue.getEnqueuedTasksCount();
  }
  clearQueue() {
    this._downloaderQueue.clearQueue();
  }
  _shouldEnqueueSticker() {
    return (0, l.webMediaAutoDownloadEnabled)() && (0, _.getAutoDownloadPhotos)() && this.getEnqueuedTasksCount() < 512;
  }
  enqueue(e, t, n) {
    if (e instanceof f.StickerModel) {
      return !!this._shouldEnqueueSticker() && (this._enqueueSticker({
        sticker: e
      }), true);
    }
    const r = e;
    if ((0, l.webMediaAutoDownloadEnabled)() && t === m.MEDIA && !(0, u.getIsNewsletterMsg)(r) && S(r) && r.isNewMsg && v(r) && T(r) && this.getEnqueuedTasksCount() < 512) {
      switch (r.type) {
        case p.MSG_TYPE.AUDIO:
        case p.MSG_TYPE.PTT:
          this._enqueueMedia({
            message: r,
            group: "audio",
            chat: n
          });
          return true;
        case p.MSG_TYPE.IMAGE:
        case p.MSG_TYPE.STICKER:
          this._enqueueMedia({
            message: r,
            group: "photos",
            chat: n
          });
          return true;
        case p.MSG_TYPE.VIDEO:
        case p.MSG_TYPE.PTV:
          if (r.isGif && r.size < E) {
            this._enqueueMedia({
              message: r,
              group: "photos",
              chat: n
            });
            return true;
          } else {
            this._enqueueMedia({
              message: r,
              group: "videos",
              chat: n
            });
            return true;
          }
        case p.MSG_TYPE.DOCUMENT:
          this._enqueueMedia({
            message: r,
            group: "documents",
            chat: n
          });
          return true;
      }
    }
    if (t === m.MMS_THUMBNAIL) {
      if (r.type === p.MSG_TYPE.DOCUMENT || (0, d.typeIsUrl)(r)) {
        this._enqueueMmsThumbnail({
          message: r,
          group: "mms_thumbnail",
          chat: n
        });
        return true;
      }
      if (r.type === p.MSG_TYPE.IMAGE || r.type === p.MSG_TYPE.VIDEO || r.type === p.MSG_TYPE.PTV) {
        this._enqueueStatusV3Thumbnail({
          message: r,
          group: "mms_thumbnail"
        });
        return true;
      }
    }
    return false;
  }
  _enqueueSticker(e) {
    var t = this;
    let {
      sticker: n
    } = e;
    return (0, i.default)(function* () {
      if (!n.mediaObject) {
        __LOG__(4, undefined, new Error(), true)`Sticker mediaObject does not exist for media at enqueue time ${""}`;
        return void SEND_LOGS("Sticker mediaObject does not exist for media at enqueue time");
      }
      yield t._downloaderQueue.enqueue((0, i.default)(function* () {
        if (!n.mediaObject) {
          __LOG__(4, undefined, new Error(), true)`Sticker mediaObject does not exist for media at download time ${""}`;
          return void SEND_LOGS("Sticker mediaObject does not exist for media at download time");
        }
        yield n.downloadMedia();
      }), {
        group: "photos",
        priority: 1
      });
    })();
  }
  _enqueueMedia(e) {
    var t = this;
    let {
      message: n,
      group: r
    } = e;
    return (0, i.default)(function* () {
      if (!n.mediaObject) {
        __LOG__(4, undefined, new Error(), true)`mediaObject does not exist for media at enqueue time ${""}`;
        return void SEND_LOGS("mediaObject does not exist for media at enqueue time");
      }
      yield t._downloaderQueue.enqueue((0, i.default)(function* () {
        if (!n.mediaObject) {
          __LOG__(4, undefined, new Error(), true)`mediaObject does not exist for media at download time ${""}`;
          return void SEND_LOGS("mediaObject does not exist for media at download time", 0);
        }
        if (v(n)) {
          yield n.downloadMedia({
            downloadEvenIfExpensive: false,
            rmrReason: g.WEBC_RMR_REASON_CODE.OTHER,
            isUserInitiated: false,
            isAutoDownload: true
          });
        }
      }), {
        group: r,
        priority: -n.t
      });
    })();
  }
  _enqueueMmsThumbnail(e) {
    var t = this;
    let {
      message: n,
      chat: r,
      group: a
    } = e;
    return (0, i.default)(function* () {
      yield t._downloaderQueue.enqueue((0, i.default)(function* () {
        yield (0, s.default)({
          msg: n,
          chat: r
        });
      }), {
        group: a,
        priority: -n.t
      });
    })();
  }
  _enqueueStatusV3Thumbnail(e) {
    var t = this;
    let {
      message: n,
      group: r
    } = e;
    return (0, i.default)(function* () {
      yield t._downloaderQueue.enqueue((0, i.default)(function* () {
        yield (0, o.downloadStatusV3Thumbnail)({
          msg: n
        });
      }), {
        group: r,
        priority: -n.t
      });
    })();
  }
}();
exports.AutoDownloadQueue = M;