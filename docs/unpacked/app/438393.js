var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadVideoThumbnail = function () {
  return y.apply(this, arguments);
};
var a = i(require("../vendor/348926.js"));
var o = i(require("./670983.js"));
var s = i(require("./846870.js"));
var l = require("./941555.js");
var u = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = h(t);
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
}(require("./428363.js"));
var c = require("./86595.js");
var d = i(require("./756680.js"));
var p = require("./708761.js");
var f = require("./787742.js");
var _ = require("./435711.js");
var g = i(require("./281007.js"));
var m = i(require("./79291.js"));
function h(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (h = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function y() {
  return (y = (0, a.default)(function* (e) {
    let {
      msg: t,
      chat: n
    } = e;
    if (!(0, _.isTrusted)(t.unsafe())) {
      return;
    }
    if (n.isSuspendedOrTerminated()) {
      return;
    }
    const {
      encFilehash: i,
      filehash: a,
      directPath: h
    } = t;
    if (!a || !h) {
      return;
    }
    if ((0, c.isMediaCryptoExpectedForMsg)(t) && !i) {
      return;
    }
    const {
      fullPreviewData: y,
      fullWidth: E,
      fullHeight: S
    } = t.mediaData;
    if (!y || E == null || S == null) {
      __LOG__(2)`media.downloadVideoThumbnail: start`;
      try {
        const e = Math.max(parseInt(t.mediaData.duration, 10), 1);
        const c = {
          video: {
            size: t.mediaData.size,
            duration: e
          },
          secondsToDownload: 1
        };
        const _ = yield l.downloadManager.downloadAndMaybeDecrypt({
          directPath: h,
          encFilehash: i,
          filehash: a,
          mediaKey: t.mediaKey,
          mediaKeyTimestamp: t.mediaKeyTimestamp,
          type: (0, f.getIsNewsletterMsg)(t) ? p.MEDIA_TYPES.NEWSLETTER_VIDEO : p.MEDIA_TYPES.VIDEO,
          signal: new r().signal,
          userDownloadAttemptCount: 0,
          partialVideoOpts: c,
          isPreload: true,
          chatWid: n.id
        });
        const g = new Blob([_], {
          type: "video/mp4"
        });
        const {
          thumbs: [y]
        } = yield u.generateVideoThumbsAndDuration({
          file: g,
          maxDimensions: [s.default.VIDEO_THUMB_MAX_EDGE],
          debugHint: "downloadVideoThumbnail",
          throwOnBlack: true
        });
        const E = yield d.default.createFromBase64Jpeg(m.default.parseDataURL(y.url).data);
        const S = (0, o.default)(t.mediaObject, "mediaObject cannot be null for thumbnail download");
        const v = {
          fullPreviewData: E,
          fullWidth: y.fullWidth,
          fullHeight: y.fullHeight
        };
        S.consolidate(v);
        __LOG__(2)`media.downloadVideoThumbnail: success`;
      } catch (e) {
        if (e instanceof u.BlackVideoThumbnailError) {
          return void __LOG__(2)`media.downloadVideoThumbnail: black thumbnail was generated, fallback to blurred thumbnail`;
        }
        __LOG__(3, true)`media.downloadVideoThumbnail: error\n${(0, g.default)(e)}`;
      }
    }
  })).apply(this, arguments);
}