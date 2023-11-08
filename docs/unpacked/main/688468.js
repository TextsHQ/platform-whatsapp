var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusV3Text = function (e) {
  const {
    msg: t,
    statusItemViewEventRef: n
  } = e;
  const a = (0, d.getLinkPreview)(t) && (0, s.getAsUrl)(t) != null && (0, f.getSuspiciousLinks)(t).filter(e => {
    let {
      url: n
    } = e;
    return t.matchedText === n;
  }).length === 0 && (0, h.statusV3LinkPreviewEnabled)();
  const [p, b] = (0, y.useState)(0);
  (0, y.useEffect)(() => {
    i.FontLoader.loadMessageFont(t.font).catch(() => {});
  }, []);
  const [M, w] = function (e) {
    let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    if (e <= 60) {
      return [[S.textLarge, t && S.textLargeLinkPreview, S.column], t ? S.textLargeEmojiWithLinkPreview : S.textLargeEmoji];
    }
    if (e <= 240) {
      return [[S.textMedium, t && S.textMediumLinkPreview, S.column], t ? S.textMediumEmojiWithLinkPreview : S.textMediumEmoji];
    }
    return [[S.textSmall, S.column, S.columnTextSmall], S.textSmallEmoji];
  }(p, a);
  const A = (0, f.getLinksFromMsg)(t);
  const P = S.textAnchor;
  const O = u.StatusV3Text({
    links: A,
    linkXstyle: P,
    emojiXstyle: w
  });
  if (a && (n == null ? undefined : n.current) && n.current.urlStatusType === _.URL_STATUS_TYPE.NO_PREVIEW) {
    n.current.urlStatusType = _.URL_STATUS_TYPE.NON_TRUNCATED;
  }
  const k = (e => {
    if (e == null) {
      return null;
    }
    const t = 800;
    const n = c.default.isRTL();
    const a = 150;
    return {
      transformOrigin: "top " + (n ? "right" : "left"),
      transform: `scale(${e === "status-panel" ? 0.16 : 0.08}) translateX(${n ? a : -a}px) translateY(${-a}px)`,
      width: t,
      height: t
    };
  })(e.theme);
  return y.default.createElement("div", {
    className: (0, C.default)(S.playerContent),
    onClick: e => {
      const t = n == null ? undefined : n.current;
      if (t && e.target instanceof HTMLAnchorElement && t.urlStatusClicked === v.URL_STATUS_CLICKED.NO_CLICK) {
        t.urlStatusClicked = v.URL_STATUS_CLICKED.ONE_CLICK;
      }
    },
    onMouseDown: e.onMouseDown,
    onMouseUp: e.onMouseUp,
    style: k
  }, y.default.createElement(E.StatusV3StatusContext.Provider, {
    value: {
      statusItemViewEventRef: n
    }
  }, y.default.createElement("div", {
    className: (0, C.default)(S.text, M, T.get(t.font))
  }, a ? y.default.createElement(g.StatusV3LinkPreview, {
    msg: t.unsafe(),
    length: p
  }) : null, y.default.createElement("div", {
    ref: e => {
      var t;
      b((0, o.numCodepoints)(e == null ? undefined : e.innerText));
      const l = e == null ? undefined : e.querySelector("a");
      const i = n == null ? undefined : n.current;
      if (!a || l == null || i == null) {
        return;
      }
      const u = (0, r.findLink)(l.href);
      if (!u) {
        return;
      }
      if ((0, m.cleanUrl)(u).join("") !== ((t = l.innerText) === null || t === undefined ? undefined : t.trim())) {
        i.urlStatusType = _.URL_STATUS_TYPE.TRUNCATED;
      }
    }
  }, y.default.createElement(l.EmojiText, {
    text: e.msg.body,
    formatters: O
  })))));
};
var r = require("../app/755688.js");
var o = require("../app/370257.js");
var l = require("../app/305521.js");
var i = require("../main-chunk/393542.js");
var u = M(require("../app/675886.js"));
var s = require("../app/163755.js");
var c = a(require("../app/932325.js"));
var d = require("../app/787742.js");
var f = require("../app/44118.js");
var p = require("../app/533494.js");
var m = require("../app/174084.js");
var h = require("../app/918715.js");
var g = require("./343979.js");
var E = require("../app/547821.js");
var v = require("../app/913249.js");
var _ = require("./815060.js");
var y = M(require("../vendor/667294.js"));
var C = a(require("../app/156720.js"));
function b(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (b = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function M(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = b(t);
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
}
const S = {
  textLargeEmoji: {
    width: "meh5ksr1",
    height: "iq9gefj9",
    transform: "lvbah2qd",
    display: "l7jjieqr"
  },
  textMediumEmoji: {
    transform: "lvbah2qd",
    display: "l7jjieqr"
  },
  textSmallEmoji: {
    width: "pz6hjxg7",
    height: "s88au2vo",
    transform: "po5z5zgs",
    display: "l7jjieqr"
  },
  textLargeEmojiWithLinkPreview: {
    width: "sqt7gjsm",
    height: "bck672cy",
    transform: "cljgexa3",
    display: "l7jjieqr"
  },
  textMediumEmojiWithLinkPreview: {
    width: "tqcro9j5",
    height: "gun6vjuz",
    transform: "mpzqt04v",
    display: "l7jjieqr"
  },
  text: {
    position: "lhggkp7q",
    left: "l3hfgdr1",
    transform: "qk2y3tb3",
    top: "myeiuhv9",
    boxSizing: "cm280p3y",
    display: "p357zi0d",
    flexDirection: "sap93d0t",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    width: "ln8gz9je",
    maxWidth: "jwo15fhv",
    paddingTop: "bgf1b849",
    paddingBottom: "h8rhxpno",
    paddingStart: "khscay3k",
    paddingEnd: "iffbo4e8",
    marginEnd: "k1jo73ug",
    marginStart: "isfiuinm",
    color: "lxozqee9",
    wordWrap: "b6f1x6w7",
    whiteSpace: "bbv8nyr4",
    pointerEvents: "m62443ks",
    maxHeight: "ibyb1pgl"
  },
  textAnchor: {
    paddingEnd: "k7lfud6f",
    paddingStart: "jec3q7jm",
    color: "lxozqee9",
    pointerEvents: "kfa8k2bn",
    backgroundColor: "fmk8ud22",
    borderTopStartRadius: "k6f31xd0",
    borderTopEndRadius: "i213mnjx",
    borderBottomEndRadius: "csyx12jj",
    borderBottomStartRadius: "aemtu0ky"
  },
  playerContent: {
    position: "lhggkp7q",
    top: "qq0sjtgm",
    start: "tkdu00h0",
    width: "ln8gz9je",
    height: "ppled2lx"
  },
  column: {
    flexDirection: "f8m0rgwh"
  },
  columnTextSmall: {
    alignItems: "r15c9g6i"
  },
  textLarge: {
    fontSize: "efq66a5g",
    lineHeight: "imx83vnz",
    textAlign: "qfejxiq4"
  },
  textLargeLinkPreview: {
    fontSize: "ds12m5yo"
  },
  textMedium: {
    fontSize: "ds12m5yo",
    lineHeight: "bdf91cm1",
    textAlign: "qfejxiq4"
  },
  textMediumLinkPreview: {
    fontSize: "dupc5dfw"
  },
  textSmall: {
    fontSize: "enbbiyaj",
    lineHeight: "pfvztjrm",
    textAlign: "ml4r5409"
  },
  font_0: {},
  font_1: {
    fontFamily: "aatvsaw8"
  },
  font_2: {
    fontFamily: "eg1do31x"
  }
};
const T = new Map([[p.Message$ExtendedTextMessage$FontType.SYSTEM, S.font_0], [p.Message$ExtendedTextMessage$FontType.SYSTEM_TEXT, S.font_1], [p.Message$ExtendedTextMessage$FontType.FB_SCRIPT, S.font_2]]);