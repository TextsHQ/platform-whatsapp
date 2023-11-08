var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusV3Video = function (e) {
  var t;
  const {
    msg: n,
    onMouseDown: a,
    onMouseUp: E,
    playbackController: b,
    play: M,
    markRead: S,
    statusV3: T,
    pause: w
  } = e;
  const A = (0, f.useRef)(null);
  const {
    buttonTitle: P,
    url: O
  } = n.actionLink || {};
  const k = (0, m.useModelValues)(e.mediaData, ["preview", "mediaStage", "fullWidth", "fullHeight", "streamable", "fullPreviewData"]);
  (0, f.useEffect)(() => {
    if (!(k.streamable || k.isStreamable())) {
      n.downloadMedia({
        downloadEvenIfExpensive: true,
        rmrReason: c.WEBC_RMR_REASON_CODE.STATUS_V3,
        isUserInitiated: true
      });
    }
  }, []);
  (0, h.default)(() => {
    w();
  });
  const D = (0, g.default)(e => {
    A.current = e.current;
    b.setMedia(A.current);
  });
  (0, f.useEffect)(() => {
    M();
    if (k.mediaStage === l.MEDIA_DATA_STAGE.RESOLVED) {
      S(T, n);
    }
  }, [S, k.mediaStage, n, M, T]);
  return f.default.createElement("div", {
    className: (0, p.default)(v),
    onMouseDown: a,
    onMouseUp: E
  }, f.default.createElement(i.default, {
    type: "contain",
    size: {
      width: k.fullWidth,
      height: k.fullHeight
    }
  }, f.default.createElement("div", {
    className: (0, p.default)(C)
  }, f.default.createElement(s.default, {
    className: (0, p.default)(_),
    msg: n,
    mediaData: k,
    autoPlay: true,
    refVideo: D,
    poster: (t = (0, o.getHighestQualityThumbnailUrl)(k)) !== null && t !== undefined ? t : "",
    disableContextMenu: true
  }, d.fbt._("Your browser doesn't support video playback.", null, {
    hk: "2nHZKq"
  })), n.interactiveAnnotations && n.interactiveAnnotations.length > 0 && f.default.createElement(r.default, {
    annotations: n.interactiveAnnotations,
    onTooltipDisplay: e.onMouseDown,
    onTooltipDismiss: e.onMouseUp
  }), P && O && f.default.createElement("div", {
    className: (0, p.default)(y)
  }, f.default.createElement(u.default, {
    text: P,
    url: O
  })))));
};
var r = a(require("./66985.js"));
var o = require("../app/232294.js");
var l = require("../app/172259.js");
var i = a(require("./821384.js"));
var u = a(require("./174407.js"));
var s = a(require("./338838.js"));
var c = require("../app/885313.js");
var d = require("../vendor/548360.js");
var f = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = E(t);
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
var p = a(require("../app/156720.js"));
var m = require("../app/655241.js");
var h = a(require("../app/558532.js"));
var g = a(require("../app/17533.js"));
function E(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (E = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const v = {
  position: "lhggkp7q",
  top: "qq0sjtgm",
  start: "tkdu00h0",
  width: "ln8gz9je",
  height: "ppled2lx"
};
const _ = {
  position: "g0rxnol2",
  display: "f804f6gw",
  width: "ln8gz9je",
  height: "ppled2lx"
};
const y = {
  position: "lhggkp7q",
  bottom: "j8hxo2it",
  display: "p357zi0d",
  alignItems: "gndfcl4n",
  justifyContent: "ac2vgrno",
  width: "ln8gz9je"
};
const C = {
  position: "g0rxnol2",
  width: "ln8gz9je",
  height: "ppled2lx",
  overflowX: "gfz4du6o",
  overflowY: "r7fjleex"
};