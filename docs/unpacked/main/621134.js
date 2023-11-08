var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/506479.js"));
var o = require("../app/728.js");
var l = require("./31900.js");
var i = a(require("./810993.js"));
var u = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = c(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../vendor/667294.js"));
const s = ["videoSrc"];
function c(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (c = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function d(e, t) {
  let {
    videoSrc: n
  } = e;
  let a = (0, r.default)(e, s);
  if (n == null) {
    return null;
  } else {
    return u.default.createElement(l.FloatingVideoPlayer, {
      ref: t,
      key: n,
      aspectRatio: o.YOUTUBE_VIDEO_DEFAULT_ASPECT_RATIO,
      animationStartStyle: a.animationStartStyle,
      enableDragBar: a.enableDragBar,
      topContent: a.topContent,
      bottomContent: a.bottomContent
    }, u.default.createElement(i.default, {
      key: n,
      youtubeVideoId: n,
      startTime: a.startTime,
      onClose: a.onClose,
      disablePiPControls: a.enableDragBar,
      onRefSet: a.onRefSet,
      onVideoMetadataChange: a.onVideoMetadataChange,
      autoPlay: a.autoPlay,
      onSetFullscreenToggleCallback: a.onSetFullscreenToggleCallback,
      exposeIframeInPiP: a.enableDragBar,
      counterAbuseData: a.counterAbuseData
    }));
  }
}
var f = (0, u.forwardRef)(d);
exports.default = f;