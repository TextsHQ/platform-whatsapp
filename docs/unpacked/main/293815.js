var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LiveLocation = function (e) {
  const {
    msg: t,
    trusted: n,
    displayAuthor: a,
    quotedMsg: b
  } = e;
  const [S, T, w, A, P, O, k, D, I, R, N, x, L, j] = (0, C.useMsgValues)(e.msg.id, [E.getComment, c.getDir, E.getFinalLat, E.getFinalLng, E.getIsGroupMsg, E.getIsPSA, E.getIsSentByMe, E.getLat, E.getLng, c.getRtl, c.getSenderObj, E.getSender, E.getShareDuration, E.getT]);
  const B = (0, c.getChat)(e.msg.unsafe());
  const [F, G] = (0, _.useState)(false);
  const U = (0, i.isWideDisplay)(e.displayType);
  const W = a ? _.default.createElement("div", {
    className: (0, y.default)(M.author, (0, u.elevatedPushNamesEnabled)(B) && M.authorElevatedPushNames)
  }, _.default.createElement(f.default, {
    msg: t,
    contact: N,
    displayType: e.displayType
  })) : null;
  const H = b ? _.default.createElement("div", {
    className: (0, y.default)(M.quote)
  }, b) : null;
  const V = (0, r.unixTime)() >= (L == null ? j : j + L);
  const q = V && w !== undefined && A !== undefined;
  let Y = D;
  let z = I;
  if (q) {
    Y = w;
    z = A;
  }
  const K = () => {
    g.ModalManager.open(_.default.createElement(o.ConfirmPopup, {
      okText: (0, s.default)("OK"),
      onOK: () => g.ModalManager.close()
    }, v.fbt._("Live location is not available on this device. View location on your phone.", null, {
      hk: "ww6M"
    })));
  };
  const Q = U ? 474 : 270;
  const X = U ? 250 : 150;
  const Z = _.default.createElement("div", {
    className: (0, y.default)(M.thumb),
    onClick: K,
    style: {
      height: X
    }
  }, _.default.createElement("div", {
    className: (0, y.default)(M.map)
  }, _.default.createElement(d.default, {
    lat: Y,
    lng: z,
    width: Q,
    height: X,
    className: (0, y.default)(M.thumbBody),
    linkify: false,
    showMarker: false,
    onLoad: () => {
      G(true);
    }
  })), _.default.createElement("div", {
    className: (0, y.default)(M.avatar, !F && M.hidden)
  }, _.default.createElement(l.DetailImage, {
    id: x,
    size: 40,
    border: true
  })), V && _.default.createElement("div", {
    className: (0, y.default)(M.overlay)
  }));
  const J = v.fbt._("Live location not available", null, {
    hk: "2eHVJY"
  });
  const $ = _.default.createElement("div", {
    className: (0, y.default)(M.status),
    onClick: K
  }, _.default.createElement("span", {
    className: (0, y.default)(M.statusText)
  }, J));
  const ee = S ? _.default.createElement("div", {
    className: (0, y.default)(M.caption, U && M.captionAnnouncement)
  }, _.default.createElement(m.default, {
    msg: t.unsafe(),
    trusted: n
  })) : null;
  const te = _.default.createElement("div", {
    className: (0, y.default)(M.meta, !!S && M.metaWithCaption)
  }, _.default.createElement(h.Meta, {
    msg: t
  }));
  return _.default.createElement(p.default, {
    className: (0, y.default)(M.container, U && M.containerAnnouncement, Boolean(K) && M.clickable),
    contact: N,
    msg: t.unsafe()
  }, W, H, Z, $, ee, te);
};
exports.MSG_HEIGHT = undefined;
var r = require("../app/632157.js");
var o = require("../app/103440.js");
var l = require("../app/23641.js");
var i = require("../app/356097.js");
var u = require("../app/235630.js");
var s = a(require("../app/395767.js"));
var c = require("../app/163755.js");
var d = a(require("./459510.js"));
var f = a(require("./599664.js"));
var p = a(require("./902538.js"));
var m = a(require("./371878.js"));
var h = require("./789955.js");
var g = require("../app/114850.js");
var E = require("../app/787742.js");
var v = require("../vendor/548360.js");
var _ = function (e, t) {
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
}(require("../vendor/667294.js"));
var y = a(require("../app/156720.js"));
var C = require("./871210.js");
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
const M = {
  container: {
    position: "g0rxnol2",
    maxWidth: "k9zdc5o0",
    paddingTop: "ocd2b0bc",
    paddingEnd: "folpon7g",
    paddingBottom: "aa0kojfi",
    paddingStart: "snweb893",
    cursor: "bx7g2weo"
  },
  containerAnnouncement: {
    maxWidth: "l8wmlvd6"
  },
  clickable: {
    cursor: "ajgl1lbb"
  },
  caption: {
    boxSizing: "cm280p3y",
    maxWidth: "k9zdc5o0",
    paddingTop: "esbfogcw",
    paddingEnd: "jfqm35v0",
    paddingBottom: "bxcbqipq",
    paddingStart: "mhcwslh8"
  },
  captionAnnouncement: {
    maxWidth: "l8wmlvd6"
  },
  author: {
    paddingTop: "ocd2b0bc",
    paddingBottom: "bxcbqipq",
    paddingStart: "mhcwslh8"
  },
  authorElevatedPushNames: {
    paddingEnd: "jfqm35v0"
  },
  meta: {
    position: "lhggkp7q",
    right: "bfbxj8tr",
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
    borderTopEndRadius: "paxyh2gw"
  },
  avatar: {
    position: "lhggkp7q",
    top: "qq0sjtgm",
    right: "grt5ktjy",
    bottom: "jxacihee",
    left: "tukmaf4q",
    width: "hj839x6e",
    height: "rd228egi",
    marginTop: "m3ct2rho",
    marginEnd: "k1jo73ug",
    marginBottom: "ec1z5skj",
    marginStart: "isfiuinm",
    filter: "shq0pg4y"
  },
  map: {
    position: "g0rxnol2"
  },
  overlay: {
    position: "lhggkp7q",
    top: "qq0sjtgm",
    bottom: "jxacihee",
    left: "tukmaf4q",
    width: "ln8gz9je",
    height: "ppled2lx",
    display: "f804f6gw",
    backgroundColor: "fmhufpvf"
  },
  thumbBody: {
    zIndex: "jnl3jror",
    flexGrow: "tvf2evcx",
    flexShrink: "oq44ahr5",
    flexBasis: "lb5m6g5c",
    WebkitTransition: "o9wlm8ph"
  },
  quote: {
    marginBottom: "kzyzudjh"
  },
  status: {
    position: "g0rxnol2",
    bottom: "jxacihee",
    left: "tukmaf4q",
    height: "fs6hn1up",
    paddingTop: "i5tg98hk",
    paddingEnd: "folpon7g",
    paddingBottom: "przvwfww",
    paddingStart: "snweb893",
    backgroundColor: "g9q9estb",
    borderBottomStartRadius: "cqsf3vkf",
    borderBottomEndRadius: "sfeitywo",
    textAlign: "ml4r5409"
  },
  statusText: {
    position: "g0rxnol2",
    top: "agi2at81",
    fontSize: "dsh4tgtl",
    color: "pm5hny62",
    verticalAlign: "neme6l2y"
  },
  hidden: {
    visibility: "kojwoqec"
  },
  metaWithCaption: {
    right: "ou6eaia9",
    bottom: "lrw9n60e"
  }
};
exports.MSG_HEIGHT = 220;