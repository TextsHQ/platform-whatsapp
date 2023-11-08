var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./31900.js");
var o = a(require("./150487.js"));
var l = a(require("./121647.js"));
var i = require("../app/113189.js");
var u = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = s(t);
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
function s(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (s = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function c(e, t) {
  const [n, a] = (0, u.useState)(() => function (e) {
    const {
      width: t,
      height: n
    } = (0, o.default)(e);
    if ((0, i.isNonZeroNumber)(t) && (0, i.isNonZeroNumber)(n)) {
      return t / n;
    } else {
      return undefined;
    }
  }(e.ogVideoInfo.previewUrl));
  return u.default.createElement(r.FloatingVideoPlayer, {
    ref: t,
    aspectRatio: n,
    previewUrl: e.ogVideoInfo.previewUrl,
    animationStartStyle: e.animationStartStyle,
    bottomContent: e.bottomContent,
    topContent: e.topContent,
    enableDragBar: e.enableDragBar
  }, u.default.createElement(l.default, {
    ogVideoInfo: e.ogVideoInfo,
    startTime: e.startTime,
    onClose: e.onClose,
    onError: e.onError,
    onAspectRatio: e => {
      if (e && (n == null || n === 0 || Math.abs(e - n) > 0.01)) {
        a(e);
      }
    },
    autoPlay: true,
    disablePiPControls: e.disablePiPControls,
    onRefSet: e.onRefSet,
    onVideoMetadataChange: e.onVideoMetadataChange,
    onSetFullscreenToggleCallback: e.onSetFullscreenToggleCallback
  }));
}
var d = (0, u.forwardRef)(c);
exports.default = d;