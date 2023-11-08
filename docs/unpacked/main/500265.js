var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../app/756680.js"));
var o = require("../app/728.js");
var l = require("./31900.js");
var i = require("./277037.js");
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
var s = require("../app/655241.js");
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
  const n = (0, s.useModelValues)(e.mediaData, ["preview", "aspectRatio"]);
  const a = n.preview instanceof r.default ? `url(${n.preview.url()})` : undefined;
  return u.default.createElement(l.FloatingVideoPlayer, {
    ref: t,
    aspectRatio: n.aspectRatio,
    previewUrl: a,
    animationStartStyle: e.animationStartStyle,
    bottomContent: e.bottomContent,
    topContent: e.topContent,
    enableDragBar: e.enableDragBar
  }, u.default.createElement(i.WrappedMsgVideoPlayer, {
    msg: e.msg,
    mediaData: n,
    startTime: e.startTime,
    onClose: e.onClose,
    onError: e.onError,
    onOpenMediaViewer: e.onOpenMediaViewer,
    onMissingMedia: e.onMissingMedia,
    onUnsupportedMedia: e.onUnsupportedMedia,
    autoPlay: e.autoPlay,
    type: o.PLAYER_TYPE.FLOATER,
    disablePiPControls: e.disablePiPControls,
    onRefSet: e.onRefSet,
    onVideoMetadataChange: e.onVideoMetadataChange,
    onSetFullscreenToggleCallback: e.onSetFullscreenToggleCallback
  }));
}
var f = (0, u.forwardRef)(d);
exports.default = f;