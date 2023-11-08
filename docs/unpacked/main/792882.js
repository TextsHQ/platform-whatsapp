var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FooterType = undefined;
exports.SelectModalFooter = function (e) {
  const {
    getSelectionSummary: t,
    selections: n,
    activeWithoutSelection: a,
    onForward: r,
    startActive: o,
    singleSelectionType: i = w.SEND,
    multipleSelectionType: s = w.SEND,
    shouldShowSelectionSummary: c = true,
    disclaimer: d,
    xstyle: f
  } = e;
  const S = (0, y.useRef)(a === true || o === true);
  const P = (0, b.default)(r, 1000, {
    leading: true
  });
  const [O, k] = (0, y.useState)([]);
  (0, M.useListener)(n, "all", () => {
    k(n.getSelected());
  });
  (0, y.useEffect)(() => {
    const e = n.getSelected();
    k(e);
  }, []);
  const D = () => {
    P();
  };
  const I = (0, y.useMemo)(() => a === true || O.length > 0, [a, O]);
  let R;
  (0, y.useEffect)(() => {
    if (!I) {
      S.current = false;
    }
  }, [I]);
  if (I) {
    let e;
    switch (O.length === 1 ? i : s) {
      case w.CONFIRM:
        e = y.default.createElement(u.CheckmarkMediumIcon, {
          "aria-label": _.fbt._("Confirm", null, {
            hk: "eUSGL"
          })
        });
        break;
      case w.NEXT:
        e = y.default.createElement(l.ArrowForwardIcon, {
          directional: true,
          "aria-label": _.fbt._("Next", null, {
            hk: "EowpC"
          })
        });
        break;
      case w.VOICE_CALL:
        e = y.default.createElement(v.VoiceCallIcon, {
          "aria-label": _.fbt._("Voice Call", null, {
            hk: "2Mp3PE"
          })
        });
        break;
      case w.VIDEO_CALL:
        e = y.default.createElement(E.VideoCallIcon, {
          "aria-label": _.fbt._("Video Call", null, {
            hk: "1G5AXy"
          })
        });
        break;
      case w.SEND:
      default:
        e = y.default.createElement(m.SendIcon, {
          directional: true,
          "aria-label": _.fbt._("Send", null, {
            hk: "wQV2H"
          })
        });
    }
    const n = c ? y.default.createElement(A, {
      items: O,
      getSelectionSummary: t
    }) : null;
    const a = c ? T.btnSend : T.btn;
    const r = y.default.createElement("div", {
      "data-animate-btn": true,
      className: (0, C.default)(a, !S.current && T.hideFooter)
    }, y.default.createElement(p.Round, {
      theme: c ? p.RoundTheme.Default : p.RoundTheme.Large,
      onClick: D
    }, e));
    R = y.default.createElement("div", {
      className: (0, C.default)(T.footer, c ? T.footerWithSummary : T.footerWithoutSummary, f)
    }, n, r);
    if (d != null) {
      return y.default.createElement(g.default, {
        transitionName: "slide-up-down-footer"
      }, y.default.createElement("div", {
        className: (0, C.default)(T.customFooterSection, !I && T.hideFooter)
      }, y.default.createElement(h.TextParagraph, {
        xstyle: T.paragraph
      }, d), y.default.createElement("div", {
        "data-animate-btn": true
      }, y.default.createElement(p.Round, {
        large: true,
        onClick: D
      }, e))));
    }
  }
  return y.default.createElement(g.default, {
    transitionName: "slide-up-down-footer",
    className: (0, C.default)(T.container)
  }, R);
};
var r = a(require("../vendor/225325.js"));
var o = a(require("../vendor/291966.js"));
var l = require("../app/345260.js");
var i = require("../app/79672.js");
var u = require("./811462.js");
var s = require("../app/305521.js");
var c = require("../app/714574.js");
var d = a(require("../app/932325.js"));
var f = require("../app/517086.js");
var p = require("./435595.js");
var m = require("./848605.js");
var h = require("../app/180519.js");
var g = a(require("../app/844453.js"));
var E = require("./743005.js");
var v = require("./65105.js");
var _ = require("../vendor/548360.js");
var y = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = S(t);
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
var C = a(require("../app/156720.js"));
var b = a(require("../app/710629.js"));
var M = require("../app/808446.js");
function S(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (S = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const T = {
  container: {
    zIndex: "nbczt5ty",
    flexGrow: "tvf2evcx",
    flexShrink: "oq44ahr5",
    flexBasis: "lb5m6g5c"
  },
  footer: {
    zIndex: "ercejckq",
    boxSizing: "cm280p3y",
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    width: "ln8gz9je",
    paddingEnd: "chvde1w8",
    paddingStart: "sta02ykp",
    backgroundColor: "ik2lb43m"
  },
  footerWithSummary: {
    height: "noboit18"
  },
  footerWithoutSummary: {
    height: "bbl9m3t3"
  },
  item: {
    display: "l7jjieqr",
    textIndent: "rwz6x5of"
  },
  summaryText: {
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    fontSize: "enbbiyaj",
    textOverflow: "lhj4utae",
    whiteSpace: "le5p0ye3"
  },
  btn: {
    position: "lhggkp7q",
    end: "druapeav",
    bottom: "k2umuq2k"
  },
  btnSend: {
    position: "lhggkp7q",
    end: "j2mzdvlq"
  },
  hideFooter: {
    opacity: "axi1ht8l",
    transform: "mrtez2t4"
  },
  customFooterSection: {
    zIndex: "b9fczbqn",
    display: "p357zi0d",
    flexShrink: "oq44ahr5",
    alignItems: "gndfcl4n",
    paddingTop: "tvsr5v2h",
    paddingEnd: "h1a80dm5",
    paddingBottom: "lzi2pvmc",
    paddingStart: "sta02ykp",
    justifyContent: "j1p1mz06"
  },
  paragraph: {
    paddingEnd: "h1a80dm5",
    fontSize: "f8jlpxt4",
    lineHeight: "jgi8eev7",
    textAlign: "ljrqcn24",
    color: "pm5hny62",
    overflowWrap: "fd365im1"
  }
};
const w = {
  CONFIRM: "CONFIRM",
  NEXT: "NEXT",
  SEND: "SEND",
  VOICE_CALL: "VOICE_CALL",
  VIDEO_CALL: "VIDEO_CALL"
};
function A(e) {
  const {
    items: t,
    getSelectionSummary: n
  } = e;
  const [a, l] = (0, y.useState)(t);
  if (t.length !== a.length) {
    if (t.length > a.length) {
      l(a.concat((0, o.default)(t, a)));
    } else {
      l((0, r.default)(a, t));
    }
  }
  const u = a.map(e => e instanceof i.Chat ? e.formattedTitle : e instanceof f.Product ? e.name : (0, c.getFormattedShortNameWithNonBreakingSpaces)(e));
  const p = [];
  for (let e = u.length - 1; e >= 0; e--) {
    p.push(y.default.createElement(s.EmojiText, {
      className: (0, C.default)(T.item),
      key: e,
      text: u[e]
    }));
    if (e > 0) {
      p.push(y.default.createElement("span", {
        key: `comma-${e}`
      }, d.default.t(54)));
    }
  }
  const m = n == null ? p : y.default.createElement("span", null, n(a));
  return y.default.createElement(g.default, {
    transitionName: "pop",
    className: (0, C.default)(T.summaryText)
  }, m);
}
exports.FooterType = w;