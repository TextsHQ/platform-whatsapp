var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusV3Audio = function (e) {
  const {
    msg: t,
    play: n,
    markRead: a,
    statusV3: u,
    pause: h,
    playbackController: y
  } = e;
  const C = (0, c.useRef)(null);
  const b = (0, f.useModelValues)(e.mediaData, ["mediaStage"]);
  (0, c.useEffect)(() => {
    if (b.mediaStage !== r.MEDIA_DATA_STAGE.RESOLVED) {
      _(t);
    }
  }, []);
  (0, p.default)(() => {
    h();
  });
  const M = (0, m.default)(e => {
    C.current = e.current;
    y.setMedia(C.current);
  });
  (0, c.useEffect)(() => {
    n();
    if (b.mediaStage === r.MEDIA_DATA_STAGE.RESOLVED) {
      a(u, t);
    }
  }, [a, b.mediaStage, t, n, u]);
  return c.default.createElement("div", {
    className: (0, d.default)(g),
    onMouseDown: e.onMouseDown,
    onMouseUp: e.onMouseUp
  }, c.default.createElement(o.default, {
    mediaData: b,
    placeholderRenderer: () => c.default.createElement("div", {
      className: (0, d.default)(E, v)
    }, c.default.createElement(i.StatusV3AudioBubble, {
      msg: t,
      mediaData: b,
      statusV3: u,
      playbackController: y,
      isPreview: true
    })),
    downloadMedia: () => _(t)
  }, e => c.default.createElement(c.default.Fragment, null, c.default.createElement("div", {
    className: (0, d.default)(E)
  }, c.default.createElement(i.StatusV3AudioBubble, {
    msg: t,
    mediaData: b,
    statusV3: u,
    playbackController: y,
    isPreview: false
  })), c.default.createElement(l.AudioTag, {
    url: e,
    autoPlay: true,
    msg: t,
    controls: false,
    refAudio: M
  }, s.fbt._("Your browser doesn't support audio playback.", null, {
    hk: "hvWWG"
  })))));
};
var r = require("../app/172259.js");
var o = a(require("./674465.js"));
var l = require("./782173.js");
var i = require("./123394.js");
var u = require("../app/885313.js");
var s = require("../vendor/548360.js");
var c = function (e, t) {
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
var d = a(require("../app/156720.js"));
var f = require("../app/655241.js");
var p = a(require("../app/558532.js"));
var m = a(require("../app/17533.js"));
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
const g = {
  position: "lhggkp7q",
  display: "p357zi0d",
  top: "qq0sjtgm",
  start: "tkdu00h0",
  width: "ln8gz9je",
  height: "ppled2lx"
};
const E = {
  boxSizing: "cm280p3y",
  display: "p357zi0d",
  alignItems: "gndfcl4n",
  justifyContent: "ac2vgrno",
  width: "ln8gz9je",
  maxWidth: "jwo15fhv",
  marginEnd: "k1jo73ug",
  marginStart: "isfiuinm",
  pointerEvents: "m62443ks",
  maxHeight: "ibyb1pgl"
};
const v = {
  filter: "r0t2rwfu"
};
const _ = e => e.downloadMedia({
  downloadEvenIfExpensive: true,
  rmrReason: u.WEBC_RMR_REASON_CODE.STATUS_V3,
  isUserInitiated: true
});