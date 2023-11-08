var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaThumb = function (e) {
  var t;
  const {
    msg: n,
    selectable: a,
    theme: k,
    active: R,
    imgRef: N,
    containerRef: x,
    onMessageSelect: L,
    selected: j = false,
    onClick: B,
    onDragStart: F,
    preferPreview: G,
    hideableSecondRow: U,
    tabIndex: W = -1
  } = e;
  const H = (0, T.default)();
  const V = (0, M.useRef)(null);
  const q = (0, M.useRef)(null);
  const Y = (0, M.useRef)(null);
  const [z, K] = (0, M.useState)(false);
  const [Q, X] = (0, M.useState)(null);
  (0, P.useMsgValues)(n.id, [g.getIsKept, g.getStar]);
  const Z = (0, w.default)(n.id);
  const {
    isKeyboardUser: J
  } = (0, C.default)();
  (0, A.useListener)(n.mediaData, ["change:preview", "change:mediaStage"], H);
  (0, M.useEffect)(() => {
    if (!(N == null)) {
      N(V.current);
    }
    if (!(x == null)) {
      x(q.current);
    }
    if (n.mediaData.preview == null && n.mediaData.fullPreviewData == null) {
      if (!(n.mediaData.type !== u.default.TYPE.IMAGE && n.mediaData.type !== u.default.TYPE.VIDEO)) {
        n.downloadMedia({
          downloadEvenIfExpensive: false,
          isUserInitiated: false,
          rmrReason: b.WEBC_RMR_REASON_CODE.MEDIA_VIEWER
        });
      }
    }
    return () => {
      if (!(N == null)) {
        N(null);
      }
      if (!(x == null)) {
        x(null);
      }
    };
  }, []);
  (0, M.useEffect)(() => {
    if (!(N == null)) {
      N(V.current);
    }
    if (!(x == null)) {
      x(q.current);
    }
  }, [N, x, V, q]);
  const $ = () => {
    if (L) {
      L(n, !j);
    }
  };
  const ee = t => {
    if (e.showTooltip !== true || k === "viewerFlowTransparent" || !(t instanceof HTMLElement)) {
      return null;
    }
    const a = t.offsetWidth;
    return {
      menu: M.default.createElement(p.default, {
        msg: n
      }),
      anchor: t,
      dirY: o.DirY.TOP,
      dirX: o.DirX.CENTER,
      offsetX: R === true ? -a * 0.5 * 0.13 : 0,
      type: o.MenuType.Tooltip
    };
  };
  const [te, ne] = (0, O.useTimeout)(() => {
    var e;
    if (Y.current) {
      e = Y.current;
      X(ee(e));
    }
  }, 500);
  const ae = function (e) {
    const {
      mediaStage: t,
      preview: n,
      fullPreviewData: a
    } = e;
    switch (t) {
      case m.MEDIA_DATA_STAGE.RESOLVED:
      case m.MEDIA_DATA_STAGE.PROGRESSIVE_READY:
      case m.MEDIA_DATA_STAGE.EXISTS:
        return I.Ready;
      case m.MEDIA_DATA_STAGE.INIT:
        if (n != null || a != null) {
          return I.Ready;
        } else {
          return I.Loading;
        }
      case m.MEDIA_DATA_STAGE.REMOTE_NEED_UPLOAD:
      case m.MEDIA_DATA_STAGE.NEED_UPLOAD:
        return I.NeedsUpload;
      case m.MEDIA_DATA_STAGE.FETCHING:
      case m.MEDIA_DATA_STAGE.DECRYPTING:
      case m.MEDIA_DATA_STAGE.PREPARING:
      case m.MEDIA_DATA_STAGE.UPLOADING:
      case m.MEDIA_DATA_STAGE.SENDING:
      case m.MEDIA_DATA_STAGE.REMOTE_UPLOADING:
      case m.MEDIA_DATA_STAGE.FINALIZING:
      case m.MEDIA_DATA_STAGE.REUPLOADING:
        return I.Loading;
      case m.MEDIA_DATA_STAGE.NEED_POKE:
        return I.NeedsPoke;
      case m.MEDIA_DATA_STAGE.ERROR_FILE_NOT_READABLE:
      case m.MEDIA_DATA_STAGE.ERROR_MISSING:
      case m.MEDIA_DATA_STAGE.ERROR_TOO_LARGE:
      case m.MEDIA_DATA_STAGE.ERROR_UNSUPPORTED:
        return I.Error;
    }
  }(n.mediaData);
  let re;
  if (a === true || z && e.hoverEvent) {
    re = M.default.createElement("div", {
      className: (0, S.default)(D.mediaSelect)
    }, M.default.createElement("div", {
      className: (0, S.default)(D.shadeTop, j && D.shadeTopSelected, ae !== I.Ready && D.noPointerEvents),
      onClick: e.onClick
    }), M.default.createElement(r.default, {
      onChange: $,
      hover: z,
      checked: j
    }));
  }
  const oe = (0, S.default)(D.canvasComponent, k !== "chatInfo" && D.mediaGalleryThumbnail, k === "chatInfo" && D.chatInfoDrawerThumbnail, Boolean(U) && D.hideableSecondRow, (k === "viewerFlow" || k === "viewerFlowTransparent") && D.viewerFlow, k === "viewerFlowTransparent" && D.viewerFlowTransparent, Boolean(R) && D.active, J && D.keyboardFocused);
  const le = Boolean((0, g.getIsKept)(n));
  const ie = n.star ? M.default.createElement("div", {
    className: (0, S.default)(D.icon)
  }, M.default.createElement(v.StarIcon, {
    width: 16,
    height: 15
  })) : null;
  const ue = le ? M.default.createElement("div", {
    className: (0, S.default)(D.icon)
  }, M.default.createElement(l.KeepInChatIcon, {
    width: 15.64,
    height: 14.67
  })) : null;
  const se = Z ? M.default.createElement("div", {
    className: (0, S.default)(D.icon)
  }, M.default.createElement(E.PinnedSmallIcon, {
    width: 15
  })) : null;
  const ce = Q ? M.default.createElement(_.UIE, {
    displayName: "MediaThumbTitle",
    popable: true,
    escapable: true,
    requestDismiss: () => {
      X(null);
    },
    requestRecentFocusOnUnmount: false
  }, M.default.createElement(y.default, {
    tooltip: Q
  })) : null;
  const de = {
    paddingTop: 1 / ((t = e.aspectRatio) !== null && t !== undefined ? t : 1) * 100 + "%"
  };
  const fe = function () {
    let e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    n.downloadMedia({
      downloadEvenIfExpensive: e,
      isUserInitiated: false,
      rmrReason: b.WEBC_RMR_REASON_CODE.MEDIA_VIEWER
    });
  };
  let pe;
  switch (ae) {
    case I.Loading:
      pe = M.default.createElement(f.MediaThumbLoading, {
        mediaType: n.mediaData.type
      });
      break;
    case I.NeedsPoke:
      pe = M.default.createElement(f.MediaThumbNeedsPoke, {
        onClick: () => fe(true)
      });
      break;
    case I.Error:
      pe = M.default.createElement(f.MediaThumbError, {
        onClick: e.onClick,
        mediaType: n.mediaData.type
      });
      break;
    case I.NeedsUpload:
    case I.Ready:
      pe = null;
  }
  const me = (0, h.getMediaAriaLabel)(n);
  return M.default.createElement("div", {
    role: "listitem",
    "aria-label": me,
    tabIndex: W,
    ref: q,
    className: oe,
    onKeyDown: e => {
      const t = e.target || e.originalTarget;
      if ((0, i.default)(e) && q.current === t) {
        B();
      }
    },
    onMouseOver: () => {
      if (!z) {
        K(true);
      }
    },
    onMouseEnter: e => {
      var t;
      if (!z) {
        e.persist();
        K(true);
        t = e.target;
        Y.current = t;
        te();
      }
    },
    onMouseLeave: () => {
      if (z) {
        ne();
        K(false);
        X(null);
      }
    }
  }, re, M.default.createElement("div", {
    className: (0, S.default)(D.canvasBody, j && D.canvasBodySelected)
  }, M.default.createElement(c.default, {
    mediaData: n.mediaData
  }), M.default.createElement(s.default, {
    mediaData: n.mediaData,
    selected: j
  }), M.default.createElement("div", {
    className: (0, S.default)(D.iconsContainer)
  }, ie, ue, se)), M.default.createElement(d.default, {
    tabIndex: -1,
    downloadMedia: fe,
    onClick: B,
    onDragStart: F,
    preferPreview: G,
    ref: V,
    msg: n
  }), ce, pe, M.default.createElement("div", {
    style: de
  }));
};
var r = a(require("./46650.js"));
var o = require("../app/664149.js");
var l = require("./769153.js");
var i = a(require("../app/83162.js"));
var u = a(require("../app/116253.js"));
var s = a(require("./466290.js"));
var c = a(require("./566397.js"));
var d = a(require("./231261.js"));
var f = require("./373786.js");
var p = a(require("./295445.js"));
var m = require("../app/172259.js");
var h = require("./115900.js");
var g = require("../app/787742.js");
var E = require("./36944.js");
var v = require("./407024.js");
var _ = require("../app/392632.js");
var y = a(require("./733712.js"));
var C = a(require("../app/395967.js"));
var b = require("../app/885313.js");
var M = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = k(t);
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
var S = a(require("../app/156720.js"));
var T = a(require("../app/969651.js"));
var w = a(require("./135179.js"));
var A = require("../app/808446.js");
var P = require("./871210.js");
var O = require("../app/441673.js");
function k(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (k = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const D = {
  noPointerEvents: {
    pointerEvents: "m62443ks"
  },
  iconsContainer: {
    display: "p357zi0d",
    position: "lhggkp7q",
    end: "mf2g8abl",
    bottom: "lrw9n60e"
  },
  icon: {
    color: "k17s6i4e",
    pointerEvents: "m62443ks"
  },
  shadeTop: {
    position: "lhggkp7q",
    top: "qq0sjtgm",
    start: "tkdu00h0",
    width: "ln8gz9je",
    height: "lniyxyh2",
    cursor: "ajgl1lbb",
    backgroundImage: "fwz54z48"
  },
  shadeTopSelected: {
    display: "qibyn6m3"
  },
  canvasBody: {
    position: "lhggkp7q",
    top: "qq0sjtgm",
    start: "tkdu00h0",
    zIndex: "b9fczbqn",
    boxSizing: "cm280p3y",
    width: "ln8gz9je",
    height: "ppled2lx",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    pointerEvents: "m62443ks",
    borderTopColor: "rqga0wu5",
    borderEndColor: "ayqm650w",
    borderBottomColor: "sb46ev41",
    borderStartColor: "q8kvkxy1",
    borderTopStyle: "d1poss59",
    borderEndStyle: "gyj32ejw",
    borderBottomStyle: "cmcp1to6",
    borderStartStyle: "eg0col54",
    borderTopWidth: "fl2x09zf",
    borderEndWidth: "r2wk4q3o",
    borderBottomWidth: "nnij903c",
    borderStartWidth: "lr2nq6lc",
    transition: "pcik6s50",
    backgroundImage: "oxe6ytxh"
  },
  canvasBodySelected: {
    borderTopWidth: "c30xqvpq",
    borderEndWidth: "afj3pimr",
    borderBottomWidth: "hdjlbwd0",
    borderStartWidth: "e6y86myk"
  },
  mediaGalleryThumbnail: {
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    backgroundColor: "fvb4mgxr",
    borderTopStartRadius: "ho9ovbg7",
    borderTopEndRadius: "tcg15ap9",
    borderBottomEndRadius: "c5wy1lv0",
    borderBottomStartRadius: "bqysl6j9"
  },
  chatInfoDrawerThumbnail: {
    backgroundColor: "kqvcv5rh",
    marginEnd: "bugiwsl0",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    borderTopStartRadius: "bbr44loe",
    borderTopEndRadius: "ooj5yc5b",
    borderBottomEndRadius: "m8i16etx",
    borderBottomStartRadius: "cw0ivh8j"
  },
  mediaSelect: {
    position: "lhggkp7q",
    top: "qq0sjtgm",
    zIndex: "g2bpp9au",
    boxSizing: "cm280p3y",
    width: "ln8gz9je",
    paddingTop: "qomlamqu",
    paddingStart: "mc6o24uu"
  },
  canvasComponent: {
    position: "g0rxnol2",
    width: "d0st09ow",
    marginEnd: "ikc09dv3",
    marginBottom: "hha4v2jc",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    "@media (max-width: 1024px)": {
      width: "bazijzwv"
    },
    "@media (max-width: 800px)": {
      width: "n0hkwe29"
    }
  },
  hideableSecondRow: {
    display: "qibyn6m3",
    "@media (max-width: 1024px)": {
      display: "s9437i69"
    },
    "@media (max-width: 800px)": {
      display: "g3bgiwf5"
    }
  },
  viewerFlow: {
    position: "g0rxnol2",
    boxSizing: "cm280p3y",
    display: "p357zi0d",
    flexGrow: "tvf2evcx",
    flexShrink: "oq44ahr5",
    flexBasis: "lb5m6g5c",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    width: "oxqu41e7",
    minWidth: "bar07sny",
    maxWidth: "ttwqun4y",
    height: "jbydbyre",
    marginEnd: "ikc09dv3",
    marginBottom: "mpdn4nr2",
    marginStart: "svoq16ka",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    cursor: "ajgl1lbb",
    opacity: "bs7a17vp",
    transition: "kvhexry3",
    ":hover": {
      outline: "pzeoqukz"
    }
  },
  viewerFlowTransparent: {
    opacity: "eu4m05gk"
  },
  active: {
    borderTop: "jmaq5bi8",
    borderEnd: "popit0kw",
    borderBottom: "iur5tn1g",
    borderStart: "qrr5pbl4",
    transform: "of0uvz1c",
    ":hover": {
      outline: "iqk5z7se"
    }
  },
  keyboardFocused: {
    ":focus": {
      borderTopStartRadius: "mmjxyicr",
      borderTopEndRadius: "r1jx4bdh",
      borderBottomEndRadius: "f9yclydc",
      borderBottomStartRadius: "mtzt60z0",
      boxShadow: "esbo3we0"
    }
  }
};
const I = require("../vendor/76672.js").Mirrored(["Loading", "Ready", "Error", "NeedsPoke", "NeedsUpload"]);