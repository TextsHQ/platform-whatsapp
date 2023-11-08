var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    msg: t,
    onProductClick: n,
    trusted: a,
    displayAuthor: x,
    quotedMsg: j,
    displayType: B
  } = e;
  const F = (0, N.default)();
  const [G] = (0, D.useState)(() => new S.ProductCatalogSession());
  const U = (0, u.isWideDisplay)(B);
  (0, D.useEffect)(() => {
    if (t.businessOwnerJid && (0, O.createWid)(t.businessOwnerJid)) {
      l.CatalogCollection.addMsgAsProduct((0, w.unproxy)(t.unsafe()));
    }
  }, []);
  const [W, H, V, q, Y, z, K, Q, X, Z, J, $, ee, te, ne, ae, re] = (0, R.useMsgValues)(e.msg.id, [v.getBusinessOwnerJid, v.getCaption, f.getDir, v.getFooter, v.getId, v.getIsGroupMsg, f.getAsProductInquiry, f.getMediaData, v.getProductId, v.getProductImageCount, v.getRetailerId, f.getRtl, f.getSenderObj, v.getT, v.getTitle, v.getType, v.getUrl]);
  const oe = (0, f.getChat)(e.msg.unsafe());
  const le = (0, D.useCallback)(e => {
    if (e) {
      e.stopPropagation();
    }
    if (!X || !W) {
      return;
    }
    (0, A.qplStartProductView)("Message");
    const t = (0, b.default)({
      productId: X,
      businessOwnerJid: W,
      msgT: te
    });
    if (!t) {
      return void (0, A.qplDropProductView)();
    }
    const a = (0, C.buildProductCatalogContext)(G, (0, i.getMaybeBizPlatformForLogging)(W), P.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_MESSAGE);
    (0, M.logProductMsgClick)({
      product: (0, w.unproxy)(t),
      catalogContext: a
    });
    const r = S.ProductCatalogSession.toString();
    if (n) {
      n(t, r);
    } else {
      s.DrawerManager.openDrawerRight(D.default.createElement(T.ProductDetailsFlowLoadable, {
        refreshCarousel: true,
        chat: oe,
        product: t
      }), {
        transition: "slide-left",
        uim: F,
        newDrawerContext: a
      });
    }
  }, [X, W, n, te, oe, G, F]);
  const ie = Boolean(H || q);
  let ue;
  if (ie) {
    const n = {
      selectable: a,
      dirMismatch: $ !== p.default.isRTL(),
      direction: V,
      inferLinesDirection: true,
      formatters: (0, d.Conversation)({
        links: (0, _.getFooterLinks)(t.unsafe()),
        phoneNumbers: (0, y.getFooterPhoneNumbersFromMsg)(t.unsafe()),
        trusted: a,
        fromMe: Y.fromMe
      })
    };
    ue = D.default.createElement("div", {
      className: (0, I.default)([L.content, p.default.isRTL() && L.contentRTL])
    }, H ? D.default.createElement(E.default, {
      msg: e.msg.unsafe(),
      spacer: false
    }, D.default.createElement(c.EmojiText, (0, r.default)({}, n, {
      text: H,
      xstyle: L.caption,
      element: "p"
    }))) : null, q ? D.default.createElement(c.EmojiText, (0, r.default)({}, n, {
      text: q,
      xstyle: [L.footer, H && L.footerMargin]
    })) : null, D.default.createElement("div", {
      className: (0, I.default)([L.meta, p.default.isRTL() && L.metaRTL])
    }, D.default.createElement(h.Meta, {
      msg: e.msg
    })));
  }
  const se = x ? D.default.createElement("div", {
    className: (0, I.default)(L.author)
  }, D.default.createElement(m.default, {
    msg: t,
    contact: ee,
    displayType: B
  })) : null;
  return D.default.createElement("div", {
    className: (0, I.default)(L.bubble, U && L.bubbleAnnouncement)
  }, se, D.default.createElement(g.ImageMessage, {
    msg: e.msg,
    mediaData: t.mediaData,
    hideMeta: ie,
    trusted: a,
    displayAuthor: false,
    displayType: B,
    contentContainerClassName: (0, I.default)(L.productContainer),
    captionComponent: D.default.createElement(o.ProductInfo, {
      trusted: a,
      onClick: le,
      msg: e.msg,
      displayType: B
    }),
    thumbClassName: (0, I.default)(L.thumb),
    onThumbClick: le,
    quotedMsg: j
  }), ue, D.default.createElement(c.EmojiText, {
    xstyle: [L.productCta, ie && L.btnBorder],
    onClick: le,
    text: k.fbt._("View", null, {
      hk: "3e9NPU"
    })
  }));
};
var r = a(require("../vendor/967154.js"));
var o = require("./697453.js");
var l = require("../app/713464.js");
var i = require("./834110.js");
var u = require("../app/356097.js");
var s = require("../app/900316.js");
var c = require("../app/305521.js");
var d = require("../app/675886.js");
var f = require("../app/163755.js");
var p = a(require("../app/932325.js"));
var m = a(require("./599664.js"));
var h = require("./789955.js");
var g = require("./654386.js");
var E = a(require("./19805.js"));
var v = require("../app/787742.js");
var _ = require("../app/44118.js");
var y = require("./527530.js");
var C = require("../app/932523.js");
var b = a(require("./654709.js"));
var M = require("../app/77548.js");
var S = require("../app/242677.js");
var T = require("./639793.js");
var w = require("../app/163139.js");
var A = require("./887222.js");
var P = require("../app/455915.js");
var O = require("../app/669050.js");
var k = require("../vendor/548360.js");
var D = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = x(t);
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
var I = a(require("../app/156720.js"));
var R = require("./871210.js");
var N = a(require("../app/321201.js"));
function x(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (x = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const L = {
  bubble: {
    position: "g0rxnol2",
    zIndex: "jnl3jror",
    boxSizing: "cm280p3y",
    maxWidth: "ktbp76dp"
  },
  bubbleAnnouncement: {
    maxWidth: "l8wmlvd6"
  },
  author: {
    paddingTop: "ocd2b0bc",
    paddingEnd: "abxuf49s",
    paddingBottom: "bxcbqipq",
    paddingStart: "mhcwslh8"
  },
  thumb: {
    position: "g0rxnol2",
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    maxWidth: "laorhtua",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    cursor: "ajgl1lbb",
    borderTopStartRadius: "l8fojup5",
    borderTopEndRadius: "paxyh2gw"
  },
  productContainer: {
    position: "g0rxnol2",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex"
  },
  productCta: {
    display: "f804f6gw",
    paddingTop: "esbfogcw",
    paddingBottom: "aiput80m",
    fontSize: "f8jlpxt4",
    fontWeight: "hnx8ox4h",
    color: "o0rubyzf",
    textAlign: "qfejxiq4",
    cursor: "ajgl1lbb",
    ":hover": {
      textDecoration: "o69d8n2f"
    }
  },
  btnBorder: {
    borderTop: "ei53l81b"
  },
  content: {
    position: "g0rxnol2",
    marginTop: "dj1c3cmq",
    marginEnd: "bugiwsl0",
    marginBottom: "or9x5nie",
    marginStart: "fooq7fky"
  },
  contentRTL: {
    textAlign: "cb8ormfa"
  },
  caption: {
    fontSize: "f8jlpxt4"
  },
  footer: {
    display: "f804f6gw",
    fontSize: "ovllcyds",
    lineHeight: "q6wg26sa",
    color: "hp667wtd"
  },
  footerMargin: {
    marginTop: "qt60bha0"
  },
  meta: {
    position: "lhggkp7q",
    end: "ebjesfe0",
    bottom: "pgz13gmm"
  },
  metaRTL: {
    right: "ryab0j1q"
  }
};