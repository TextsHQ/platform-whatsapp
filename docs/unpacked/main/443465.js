var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Location = function (e) {
  const {
    msg: t
  } = e;
  const [n, a, v, k, D, I, R, N, x, L, j, B, F, G, U, W] = (0, w.useMsgValues)(e.msg.id, [y.getCaption, y.getClientUrl, c.getDir, y.getFooter, y.getId, y.getIsGroupMsg, y.getIsSentByMe, y.getLat, y.getLng, c.getRtl, c.getSenderObj, y.getType, y.getCtwaContext, y.getSupportsMessageFooter, y.getIsDynamicReplyButtonsMsg, c.getHasBodyOrFooter]);
  const H = (0, c.getChat)(e.msg.unsafe());
  const V = (() => {
    let e = t.get("loc");
    if (t.get("loc")) {
      e = e.split("\n");
      if (e.length === 2) {
        return {
          name: e[0],
          addr: e[1]
        };
      } else {
        return {
          name: e
        };
      }
    }
  })();
  const q = V == null ? undefined : V.name;
  const Y = (0, f.getMapUrl)(N, x, q);
  const z = a || Y;
  const K = M.default.isHttps(z);
  const Q = M.default.hostname(z);
  const X = (0, r.default)(A.filter(e => Q.includes(e)));
  const Z = !U && (X || !(!K || !V || z.includes("javascript")));
  if (!K && z.toLowerCase().startsWith("javascript:")) {
    __LOG__(4, undefined, new Error(), true)`Bad url: ${z}`;
    SEND_LOGS("URL error");
  }
  const J = Z ? S.default.createElement(O, {
    pageUrl: z,
    msg: t,
    loc: V,
    isUntrusted: X
  }) : null;
  const $ = J != null || G && W ? null : S.default.createElement(_.default, null);
  const ee = (0, C.showForwarded)(t);
  const te = (0, u.isWideDisplay)(e.displayType);
  const ne = (0, T.default)(b.uiPadding.top3, b.uiPadding.start6, ee ? b.uiPadding.bottom0 : b.uiPadding.bottom5, (0, s.elevatedPushNamesEnabled)(H) && b.uiPadding.end4);
  const ae = e.displayAuthor ? S.default.createElement("div", {
    className: ne
  }, S.default.createElement(p.default, {
    msg: t,
    contact: j,
    displayType: e.displayType
  })) : null;
  const re = ee ? S.default.createElement(g.default, {
    msg: t.unsafe(),
    className: (0, T.default)(b.uiPadding.top3, b.uiPadding.end0, b.uiPadding.start6, e.displayAuthor ? b.uiPadding.top0 : b.uiPadding.top3)
  }) : null;
  const oe = (0, T.default)(P.container, b.uiPadding.all3, F != null && P.ctwaContainerWidth, te && P.containerAnnouncement);
  let le = 270;
  if (F) {
    le = 330;
  } else if (te) {
    le = 474;
  }
  const ie = te ? 250 : 150;
  const ue = e.quotedMsg ? S.default.createElement("div", {
    className: (0, T.default)(b.uiMargin.bottom3)
  }, e.quotedMsg) : null;
  let se;
  let ce;
  if (G) {
    se = n ? S.default.createElement("div", {
      className: (0, T.default)(P.caption, b.uiPadding.top7, b.uiPadding.end4, b.uiPadding.start6, b.uiPadding.bottom5)
    }, S.default.createElement(h.default, {
      msg: t.unsafe(),
      spacer: !k,
      trusted: e.trusted
    })) : null;
    ce = S.default.createElement(l.default, {
      dir: v,
      footer: k,
      isShown: G,
      msg: t.unsafe(),
      rtl: L,
      type: B,
      trusted: e.trusted
    });
  }
  return S.default.createElement("div", null, S.default.createElement(m.default, {
    className: oe,
    contact: j,
    msg: t.unsafe()
  }, ae, re, ue, S.default.createElement(o.default, {
    msg: t.unsafe(),
    wrapperClass: (0, T.default)(b.uiMargin.top0, b.uiMargin.end0, b.uiMargin.bottom3, b.uiMargin.start0)
  }), S.default.createElement(i.SelectableDiv, {
    className: (0, T.default)(P.thumb),
    onClick: e => {
      e.stopPropagation();
    },
    plainText: Y,
    selectable: true,
    style: {
      height: ie
    }
  }, S.default.createElement(d.default, {
    lat: N,
    lng: x,
    width: le,
    height: ie,
    name: q,
    className: (0, T.default)(P.thumbBody)
  }), $), J, se, ce, S.default.createElement("div", {
    className: (0, T.default)(P.meta, J && P.metaIfHasCaption)
  }, S.default.createElement(E.Meta, {
    msg: t
  }))));
};
exports.PREVIEW_HEIGHT = undefined;
var r = a(require("../vendor/441609.js"));
var o = a(require("./362842.js"));
var l = a(require("./339435.js"));
var i = require("../app/306703.js");
var u = require("../app/356097.js");
var s = require("../app/235630.js");
var c = require("../app/163755.js");
var d = a(require("./459510.js"));
var f = require("./300987.js");
var p = a(require("./599664.js"));
var m = a(require("./902538.js"));
var h = a(require("./371878.js"));
var g = a(require("./428759.js"));
var E = require("./789955.js");
var v = a(require("./19805.js"));
var _ = a(require("./934801.js"));
var y = require("../app/787742.js");
var C = require("./192071.js");
var b = require("../app/676345.js");
var M = a(require("../app/79291.js"));
var S = a(require("../vendor/667294.js"));
var T = a(require("../app/156720.js"));
var w = require("./871210.js");
exports.PREVIEW_HEIGHT = 150;
const A = ["foursquare.com", "facebook.com", "maps.google.com"];
const P = {
  container: {
    position: "g0rxnol2",
    maxWidth: "k9zdc5o0"
  },
  containerAnnouncement: {
    maxWidth: "l8wmlvd6"
  },
  link: {
    fontSize: "lak21jic",
    lineHeight: "q5jc98e4",
    color: "la222qfv"
  },
  title: {
    display: "f804f6gw",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    fontSize: "f8jlpxt4",
    fontWeight: "m1e7cby3",
    textOverflow: "lhj4utae",
    whiteSpace: "le5p0ye3"
  },
  address: {
    fontSize: "dsh4tgtl"
  },
  hasURL: {
    display: "f804f6gw"
  },
  text: {
    boxSizing: "cm280p3y",
    maxWidth: "k9zdc5o0",
    textAlign: "ljrqcn24"
  },
  meta: {
    position: "lhggkp7q",
    end: "j2mzdvlq",
    bottom: "dpkuihx7",
    zIndex: "b9fczbqn"
  },
  thumb: {
    position: "g0rxnol2",
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    borderTopStartRadius: "l8fojup5",
    borderTopEndRadius: "paxyh2gw",
    borderBottomEndRadius: "sfeitywo",
    borderBottomStartRadius: "cqsf3vkf"
  },
  thumbBody: {
    zIndex: "jnl3jror",
    flexGrow: "tvf2evcx",
    flexShrink: "oq44ahr5",
    flexBasis: "lb5m6g5c",
    WebkitTransition: "o9wlm8ph"
  },
  metaIfHasCaption: {
    end: "fz4q5utg",
    bottom: "lrw9n60e"
  },
  caption: {
    boxSizing: "cm280p3y",
    maxWidth: "ge0bjo49"
  },
  ctwaContainerWidth: {
    maxWidth: "cbjz30lg"
  }
};
function O(e) {
  let t;
  let n;
  let {
    pageUrl: a,
    msg: r,
    isUntrusted: o,
    loc: l
  } = e;
  const u = M.default.hostname(a);
  const s = o ? S.default.createElement("span", {
    className: (0, T.default)(P.link)
  }, u) : null;
  if (!(o || !l || a.includes("javascript"))) {
    t = l.name ? S.default.createElement(i.SelectableLink, {
      className: (0, T.default)(P.title),
      dir: "auto",
      href: a,
      plainText: `${l.name}\n${a}`,
      selectable: true,
      target: "_blank",
      title: l.name
    }, l.name) : null;
  }
  if (l) {
    var c;
    const e = (0, T.default)(P.address, s && P.hasURL);
    n = ((c = l.addr) !== null && c !== undefined ? c : "") !== "" ? S.default.createElement(i.SelectableDiv, {
      className: e,
      selectable: true,
      title: l.addr
    }, l.addr) : null;
  }
  return S.default.createElement("div", {
    className: (0, T.default)(P.text, b.uiPadding.top7, b.uiPadding.end4, b.uiPadding.bottom4, b.uiPadding.start6)
  }, S.default.createElement(v.default, {
    msg: r.unsafe(),
    "data-id": r.id
  }, t, n, s));
}