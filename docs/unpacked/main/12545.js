var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusV3Img = function (e) {
  const {
    msg: t,
    onMouseDown: n,
    onMouseUp: a,
    play: r,
    markRead: o,
    statusV3: l,
    pause: s
  } = e;
  const c = (0, m.useModelValues)(e.mediaData, ["mediaStage", "renderableUrl", "preview", "fullWidth", "fullHeight", "aspectRatio", "fullPreviewData"]);
  (0, f.useEffect)(() => {
    if (c.mediaStage !== i.MEDIA_DATA_STAGE.RESOLVED) {
      t.downloadMedia({
        downloadEvenIfExpensive: true,
        rmrReason: d.WEBC_RMR_REASON_CODE.STATUS_V3,
        isUserInitiated: true
      });
    }
    return () => {
      s();
    };
  }, []);
  (0, f.useEffect)(() => {
    r();
    if (c.mediaStage === i.MEDIA_DATA_STAGE.RESOLVED) {
      o(l, t);
    }
  }, [o, c.mediaStage, t, r, l]);
  return f.default.createElement(u.default, {
    mediaData: c,
    placeholderRenderer: () => f.default.createElement(b, {
      mediaData: c,
      onMouseDown: n,
      onMouseUp: a
    }),
    downloadMedia: () => t.downloadMedia({
      downloadEvenIfExpensive: true,
      rmrReason: d.WEBC_RMR_REASON_CODE.STATUS_V3,
      isUserInitiated: true
    }),
    renderProgressively: true
  }, e => f.default.createElement(C, {
    src: e,
    msg: t,
    mediaData: c,
    onMouseUp: a,
    onMouseDown: n
  }));
};
var r = a(require("./66985.js"));
var o = a(require("../app/488922.js"));
var l = require("../app/232294.js");
var i = require("../app/172259.js");
var u = a(require("./674465.js"));
var s = a(require("./821384.js"));
var c = a(require("./174407.js"));
var d = require("../app/885313.js");
var f = function (e, t) {
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
var p = a(require("../app/156720.js"));
var m = require("../app/655241.js");
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
  position: "g0rxnol2",
  width: "ln8gz9je",
  height: "ppled2lx",
  overflowX: "gfz4du6o",
  overflowY: "r7fjleex"
};
const E = {
  position: "lhggkp7q",
  top: "qq0sjtgm",
  start: "tkdu00h0",
  width: "ln8gz9je",
  height: "ppled2lx"
};
const v = {
  position: "g0rxnol2",
  display: "f804f6gw",
  height: "ppled2lx",
  marginEnd: "k1jo73ug",
  marginStart: "isfiuinm"
};
const _ = {
  position: "lhggkp7q",
  bottom: "j8hxo2it",
  display: "p357zi0d",
  alignItems: "gndfcl4n",
  justifyContent: "ac2vgrno",
  width: "ln8gz9je"
};
const y = {
  filter: "fsmudgz7"
};
function C(e) {
  let {
    src: t,
    msg: n,
    mediaData: a,
    onMouseDown: l,
    onMouseUp: i
  } = e;
  const {
    buttonTitle: u,
    url: d
  } = n.actionLink || {};
  return f.default.createElement("div", {
    className: (0, p.default)(E),
    onMouseDown: l,
    onMouseUp: i,
    onDragEnd: i
  }, f.default.createElement(s.default, {
    type: "contain",
    size: {
      width: a.fullWidth,
      height: a.fullHeight
    }
  }, f.default.createElement("div", {
    className: (0, p.default)(g)
  }, f.default.createElement(o.default, {
    className: (0, p.default)(v),
    src: t,
    disableContextMenu: true
  }), n.interactiveAnnotations && n.interactiveAnnotations.length > 0 && f.default.createElement(r.default, {
    annotations: n.interactiveAnnotations,
    onTooltipDisplay: l,
    onTooltipDismiss: i
  }), u && d && f.default.createElement("div", {
    className: (0, p.default)(_)
  }, f.default.createElement(c.default, {
    text: u,
    url: d
  })))));
}
function b(e) {
  var t;
  let {
    mediaData: n,
    onMouseDown: a,
    onMouseUp: r
  } = e;
  return f.default.createElement("div", {
    className: (0, p.default)(E, y),
    onMouseDown: a,
    onMouseUp: r
  }, f.default.createElement(s.default, {
    type: "contain",
    size: {
      width: n.aspectRatio,
      height: 1
    }
  }, f.default.createElement(o.default, {
    className: (0, p.default)(v),
    src: (t = (0, l.getHighestQualityThumbnailUrl)(n)) !== null && t !== undefined ? t : ""
  })));
}