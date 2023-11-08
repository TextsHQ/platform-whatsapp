var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/506479.js"));
var o = a(require("./500265.js"));
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
const i = ["msg"];
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
    msg: n
  } = e;
  let a = (0, r.default)(e, i);
  if (n == null) {
    return null;
  } else {
    return l.default.createElement(o.default, {
      ref: t,
      msg: n,
      mediaData: n.mediaData,
      animationStartStyle: a.animationStartStyle,
      startTime: a.startTime,
      onClose: a.onClose,
      onError: a.onError,
      onOpenMediaViewer: a.onClose,
      onMissingMedia: a.onClose,
      onUnsupportedMedia: a.onClose,
      autoPlay: a.autoPlay,
      enableDragBar: a.enableDragBar,
      topContent: a.topContent,
      bottomContent: a.bottomContent,
      disablePiPControls: a.enableDragBar,
      onRefSet: a.onRefSet,
      onVideoMetadataChange: a.onVideoMetadataChange,
      onSetFullscreenToggleCallback: a.onSetFullscreenToggleCallback
    });
  }
}
var c = (0, l.forwardRef)(s);
exports.default = c;