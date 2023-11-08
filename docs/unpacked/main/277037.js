var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrappedMsgVideoPlayer = exports.FULLSCREEN_CONTROLS_DISPLAY_TIMEOUT = undefined;
var r = require("../app/780549.js");
var o = a(require("./59036.js"));
var l = a(require("./484492.js"));
var i = require("../app/172259.js");
var u = a(require("./886914.js"));
var s = require("../app/114850.js");
var c = require("../app/787742.js");
var d = a(require("./389287.js"));
var f = require("./618564.js");
var p = require("../app/163139.js");
var m = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = _(t);
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
var h = require("../app/655241.js");
var g = require("./871210.js");
var E = require("./884561.js");
var v = a(require("../app/17533.js"));
function _(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (_ = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function y(e, t) {
  const {
    msg: n,
    onOpenMediaViewer: a,
    onOpenVideoFloater: _,
    onMissingMedia: y,
    onClose: C,
    onUnsupportedMedia: b,
    onNeedPokeMedia: M,
    onLoadedMetadata: S
  } = e;
  const T = (0, m.useRef)(null);
  const [w] = (0, g.useMsgValues)(e.msg.id, [c.getId]);
  const A = (0, h.useModelValues)(e.mediaData, ["mediaStage", "preview", "streamable"]);
  const P = (0, E.usePlaybackSendViewCount)(e.msg.id, {
    mediaData: A
  });
  const O = () => T.current ? T.current.getCurrentTimeFromVideo() : 0;
  const k = (0, v.default)(() => {
    if (y) {
      y();
    }
    s.ModalManager.open(m.default.createElement(o.default, {
      msg: n
    }));
    C();
  });
  const D = (0, v.default)(() => {
    if (b) {
      b();
    }
    s.ModalManager.open(m.default.createElement(u.default, {
      msg: n
    }));
    C();
  });
  const I = (0, v.default)(() => {
    if (M) {
      M();
    }
    s.ModalManager.open(m.default.createElement(l.default, {
      msg: n
    }));
    C();
  });
  const R = () => {
    var e;
    if ((e = T.current) === null || e === undefined) {
      return undefined;
    } else {
      return e.getContainerElement();
    }
  };
  (0, m.useImperativeHandle)(t, () => ({
    getContainerElement: R
  }));
  (0, m.useEffect)(() => {
    switch (A.mediaStage) {
      case i.MEDIA_DATA_STAGE.ERROR_MISSING:
        k();
        break;
      case i.MEDIA_DATA_STAGE.ERROR_UNSUPPORTED:
        D();
        break;
      case i.MEDIA_DATA_STAGE.NEED_POKE:
        I();
    }
  }, [k, I, D, A.mediaStage]);
  return m.default.createElement(f.WrappedSharedVideoPlayer, {
    ref: T,
    type: e.type,
    msgVideoInfo: {
      msg: n,
      mediaData: A
    },
    startTime: e.startTime,
    onClose: e.onClose,
    onVideoEnded: e.onVideoEnded,
    onError: e.onError,
    onOpenMediaViewer: () => {
      if (a) {
        a();
      }
      r.Cmd.mediaViewerModal({
        msg: (0, p.unproxy)(n),
        currentTime: O()
      });
    },
    onOpenVideoFloater: () => {
      if (_) {
        _();
      }
      d.default.openPiP((0, p.unproxy)(n), O(), null);
    },
    onMissingMedia: k,
    onUnsupportedMedia: D,
    onLoadedMetadata: e => {
      if (S) {
        S(e);
      }
    },
    onTimeUpdate: P,
    onLoadedData: e.onLoadedData,
    onFullscreenToggle: e.onFullscreenToggle,
    autoPlay: e.autoPlay,
    overlays: e.overlays,
    noPip: e.noPip,
    disablePiPControls: e.disablePiPControls,
    onRefSet: e.onRefSet,
    onVideoMetadataChange: e.onVideoMetadataChange,
    onSetFullscreenToggleCallback: e.onSetFullscreenToggleCallback
  });
}
exports.FULLSCREEN_CONTROLS_DISPLAY_TIMEOUT = 3000;
const C = (0, m.forwardRef)(y);
exports.WrappedMsgVideoPlayer = C;
C.displayName = "WrappedMsgVideoPlayer";