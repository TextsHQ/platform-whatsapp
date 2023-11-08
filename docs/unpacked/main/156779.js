var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/506479.js"));
var o = a(require("./974342.js"));
var l = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = u(t);
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
const i = ["msg", "videoSrc", "previewUrl"];
function u(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (u = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function s(e, t) {
  let {
    msg: n,
    videoSrc: a,
    previewUrl: u
  } = e;
  let s = (0, r.default)(e, i);
  if (n == null || a == null || u == null) {
    return null;
  } else {
    return l.default.createElement(o.default, {
      ref: t,
      ogVideoInfo: {
        videoMsg: n,
        videoUrl: a,
        previewUrl: u
      },
      startTime: s.startTime,
      onClose: s.onClose,
      onError: s.onError,
      animationStartStyle: s.animationStartStyle,
      autoPlay: s.autoPlay,
      enableDragBar: s.enableDragBar,
      topContent: s.topContent,
      bottomContent: s.bottomContent,
      disablePiPControls: s.enableDragBar,
      onRefSet: s.onRefSet,
      onVideoMetadataChange: s.onVideoMetadataChange,
      onSetFullscreenToggleCallback: s.onSetFullscreenToggleCallback
    });
  }
}
var c = (0, l.forwardRef)(s);
exports.default = c;