var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkPreviewPanel = function (e) {
  var t;
  var n;
  var a;
  let {
    chat: r,
    text: o,
    initialLinkPreview: l,
    onChange: u
  } = e;
  const m = (0, f.default)(() => (0, p.findFirstWebLink)(o));
  const h = (0, f.default)(() => {
    var e;
    if (l) {
      return null;
    } else if ((e = m.current) === null || e === undefined) {
      return undefined;
    } else {
      return e.href;
    }
  });
  const [g, _] = (0, s.useState)(m.current);
  const {
    linkPreview: y
  } = (0, p.useLinkPreview)(g, r);
  const C = ((t = m.current) === null || t === undefined ? undefined : t.href) !== (g == null ? undefined : g.href);
  const [b, M] = (0, s.useState)();
  let S = ((n = m.current) === null || n === undefined ? undefined : n.href) === (g == null ? undefined : g.href) && l ? l : y;
  if (h.current === ((a = S) === null || a === undefined ? undefined : a.matchedText)) {
    S = null;
  }
  if (S && S !== b) {
    M(S);
  }
  const T = (0, d.default)(e => {
    const t = (0, p.findFirstWebLink)(e);
    if ((t == null ? undefined : t.href) !== h.current) {
      h.current = null;
      _(t);
    }
  }, 200);
  (0, s.useEffect)(() => {
    T(o);
  }, [o, T]);
  (0, s.useEffect)(() => {
    u(S);
  }, [C, S, u]);
  const w = () => {
    h.current = g == null ? undefined : g.href;
    _(null);
  };
  const A = Boolean(S);
  const P = !g || g.url !== (b == null ? undefined : b.matchedText);
  return s.default.createElement("div", {
    className: (0, c.default)(v.container)
  }, s.default.createElement("div", {
    className: (0, c.default)(v.wrapper, A && v.slideUp, P && v.slideDown),
    onAnimationEnd: P ? () => {
      M(null);
    } : null
  }, b && s.default.createElement(i.UIE, {
    displayName: "ComposeBoxLinkPreview",
    escapable: true,
    requestDismiss: w
  }, s.default.createElement(E, {
    linkPreview: b,
    onOmit: w
  }))));
};
var r = a(require("../vendor/967154.js"));
var o = require("../app/690495.js");
var l = a(require("./428543.js"));
var i = require("../app/392632.js");
var u = require("../app/561912.js");
var s = function (e, t) {
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
var c = a(require("../app/156720.js"));
var d = a(require("../app/710629.js"));
var f = a(require("../app/637660.js"));
var p = require("./253155.js");
var m = a(require("../app/83233.js"));
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
  container: {
    paddingTop: "tvsr5v2h",
    paddingEnd: "h1a80dm5",
    paddingBottom: "przvwfww",
    paddingStart: "sta02ykp",
    backgroundColor: "g6kkip0l"
  },
  linkPreview: {
    flexGrow: "ggj6brxn",
    flexShrink: "m0h2a7mj"
  },
  xButton: {
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    width: "kh81x8bz",
    height: "ov069gg1",
    marginStart: "hqw9ulo5",
    flexShrink: "oq44ahr5"
  }
};
const E = (0, s.forwardRef)((e, t) => {
  let {
    linkPreview: n,
    onOmit: a
  } = e;
  const i = (0, s.useRef)();
  const [d, f] = (0, m.default)(a);
  (0, s.useImperativeHandle)(t, () => ({
    getElement: () => i.current
  }));
  const {
    title: p,
    canonicalUrl: h,
    description: E,
    thumbnail: v,
    inviteGrpType: _
  } = n;
  return s.default.createElement(o.FlexRow, {
    ref: i,
    xstyle: g.container,
    align: "center"
  }, s.default.createElement(l.default, {
    title: p,
    canonicalUrl: h,
    description: E,
    thumbnailJpeg: v,
    inviteGrpType: _,
    containerXstyle: g.linkPreview,
    compose: true,
    isLoading: false
  }), s.default.createElement("div", (0, r.default)({
    ref: d,
    className: (0, c.default)(g.xButton)
  }, f), s.default.createElement(u.XIcon, null)));
});
E.displayName = "UIELinkPreview";
const v = {
  container: {
    position: "lhggkp7q",
    start: "tkdu00h0",
    end: "ebjesfe0",
    top: "qq0sjtgm"
  },
  wrapper: {
    animationDuration: "j16a598t",
    animationFillMode: "a21kwdn3",
    animationTimingFunction: "ctamxg4b"
  },
  slideUp: {
    animationName: "cw7nb4ox"
  },
  slideDown: {
    animationName: "cngm18a5"
  }
};