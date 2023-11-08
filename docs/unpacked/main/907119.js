Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoRefControls = undefined;
var a = require("./286541.js");
var r = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = o(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var l in e) {
    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
      var i = r ? Object.getOwnPropertyDescriptor(e, l) : null;
      if (i && (i.get || i.set)) {
        Object.defineProperty(a, l, i);
      } else {
        a[l] = e[l];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../vendor/667294.js"));
function o(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (o = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const l = (0, r.forwardRef)((e, t) => {
  const {
    refVideo: n
  } = e;
  if (!e.refVideo) {
    return null;
  }
  const o = e.videoMetadata;
  if (o) {
    return r.default.createElement(a.VideoControls, {
      ref: t,
      duration: o.duration,
      progress: o.currentTime,
      volume: o.volume,
      muted: o.muted,
      bufferedTime: o.bufferedTime,
      onPlay: () => {
        if (!(n == null)) {
          n.play();
        }
      },
      onPause: () => {
        if (!(n == null)) {
          n.pause();
        }
      },
      onProgressChange: e.handleSetCurrentTimeByControls ? e.handleSetCurrentTimeByControls : e => {
        if (!(n == null)) {
          n.setCurrentTime(e);
        }
      },
      onVolumeValueChange: e => {
        if (!(n == null)) {
          n.setVolume(e);
        }
      },
      onMutedValueChange: e => {
        if (!(n == null)) {
          n.setMuted(e);
        }
      },
      isVideoPlaying: e.isVideoPlaying,
      isFullscreenMode: e.isFullscreenMode,
      className: e.controlsClassName,
      ctwaSourceUrl: e.ctwaSourceUrl,
      newPiPStyle: e.newPiPStyle,
      onFullscreenToggle: e.onFullscreenToggle,
      onClose: e.onClose
    });
  } else {
    return null;
  }
});
exports.VideoRefControls = l;
l.displayName = "VideoRefControls";