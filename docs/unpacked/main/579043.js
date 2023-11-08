var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    msg: t
  } = e;
  const [n, a, w, O, k] = (0, T.useMsgValues)(e.msg.id, [s.getRtl, s.getDir, s.getSenderObj, h.getIsSentByMe, h.getIsGroupMsg]);
  const D = (0, s.getChat)(t.unsafe());
  const [I, R] = (0, b.useState)(true);
  const [N, x] = (0, b.useState)(null);
  const [L, j] = (0, b.useState)(e.vcardList);
  if (!(0, r.default)(L, e.vcardList)) {
    j(e.vcardList);
    R(true);
    x(null);
  }
  const B = () => {
    if (L) {
      const e = L.map(e => e.parsedVcard);
      m.ModalManager.open(b.default.createElement(g.default, {
        vcards: e
      }));
    }
  };
  const F = (0, S.default)(() => (0, o.default)(e => e.vcardList.map(e => {
    let {
      displayName: t,
      parsedVcard: n
    } = e;
    return {
      displayName: t,
      wids: (0, _.vcardWids)(n),
      thumbnail: (0, _.vcardThumbnail)(n)
    };
  })));
  const G = (0, b.useCallback)(() => (0, F.current)({
    vcardList: L
  }), [F, L]);
  const U = (0, b.useRef)(L);
  U.current = L;
  (0, b.useEffect)(() => {
    const e = G();
    const t = [].concat(...e.map(e => {
      let {
        wids: t
      } = e;
      return t;
    })).slice(0, 10);
    Promise.all(t.map(e => v.ProfilePicThumbCollection.find(e))).then(() => (0, l.delayMs)(0)).then(() => {
      var t;
      if (U.current === L) {
        R(false);
        x((t = e, [...t].sort((e, t) => {
          const n = P(e);
          const a = P(t);
          if (n && !a) {
            return -1;
          } else if (!n && a) {
            return 1;
          } else if (e.displayName.toString() < t.displayName.toString()) {
            return -1;
          } else if (e.displayName.toString() > t.displayName.toString()) {
            return 1;
          } else {
            return 0;
          }
        })));
      }
    });
  }, [G, L]);
  const W = (0, i.isWideDisplay)(e.displayType);
  const H = e.displayAuthor ? b.default.createElement("div", {
    className: (0, M.default)(A.author, e.quotedMsg && A.authorWithQuote)
  }, b.default.createElement(d.default, {
    msg: t,
    contact: w,
    displayType: e.displayType
  })) : null;
  const V = N || G();
  const q = V.map(e => {
    let {
      displayName: t
    } = e;
    return t;
  });
  const Y = (0, y.getNameStringFromNames)(q);
  const z = Math.min(V.length, 3);
  const K = [];
  for (let e = 0; e < z; e++) {
    const {
      wids: t,
      thumbnail: n
    } = V[e];
    const a = v.ProfilePicThumbCollection.findThumbnailWid(t);
    const r = (0, M.default)(A.image, e === 1 && A.image2, e === 2 && A.image3);
    if (I || !a && !n) {
      K.push(b.default.createElement("div", {
        className: r,
        key: `default-pic-${e}`
      }, b.default.createElement(E.default, {
        size: 39,
        border: true
      })));
    } else {
      K.push(b.default.createElement("div", {
        className: r,
        key: `profile-pic-${e}`
      }, b.default.createElement(E.default, {
        wid: a,
        thumb: n,
        size: 39,
        border: true
      })));
    }
  }
  const Q = L || D.isTrusted();
  const X = e.quotedMsg ? b.default.createElement("div", {
    className: (0, M.default)(A.quote, H && A.quoteWithAuthor)
  }, e.quotedMsg) : null;
  const Z = (0, M.default)(A.bubble, e.displayType === i.DISPLAY_TYPE.MSG_INFO && A.previewBubble, W && A.announcementBubble, (e.displayType === i.DISPLAY_TYPE.STARRED_MSGS || e.displayType === i.DISPLAY_TYPE.GALLERY || e.displayType === i.DISPLAY_TYPE.CONTACT_CARD) && A.galleryBubble);
  return b.default.createElement("div", {
    className: Z
  }, H, X, b.default.createElement("div", {
    className: (0, M.default)(A.vcard),
    role: Q ? "button" : null,
    title: Y,
    onClick: B
  }, b.default.createElement("div", {
    className: (0, M.default)(A.avatar)
  }, K), b.default.createElement("div", {
    className: (0, M.default)(A.body)
  }, b.default.createElement(u.EmojiText, {
    text: Y,
    element: "div",
    xstyle: A.name,
    emojiXstyle: A.emoji,
    dirMismatch: n !== c.default.isRTL(),
    direction: a,
    wbr: 15
  })), b.default.createElement("div", {
    className: (0, M.default)(A.meta)
  }, b.default.createElement(p.Meta, {
    msg: t
  }))), b.default.createElement(f.BubbleActions, {
    items: [{
      label: C.fbt._("View all", null, {
        hk: "2NeQbo"
      }),
      onClick: B
    }]
  }));
};
var r = a(require("../vendor/618446.js"));
var o = a(require("../app/939067.js"));
var l = require("../app/8304.js");
var i = require("../app/356097.js");
var u = require("../app/305521.js");
var s = require("../app/163755.js");
var c = a(require("../app/932325.js"));
var d = a(require("./599664.js"));
var f = require("./20493.js");
var p = require("./789955.js");
var m = require("../app/114850.js");
var h = require("../app/787742.js");
var g = a(require("./601915.js"));
var E = a(require("../app/145632.js"));
var v = require("../app/446474.js");
var _ = require("../app/517660.js");
var y = require("../app/105284.js");
var C = require("../vendor/548360.js");
var b = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = w(t);
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
var M = a(require("../app/156720.js"));
var S = a(require("../app/637660.js"));
var T = require("./871210.js");
function w(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (w = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const A = {
  vcard: {
    position: "g0rxnol2",
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    height: "k45dudtp",
    marginStart: "oz0g9ue8",
    marginEnd: "bugiwsl0"
  },
  author: {
    borderBottom: "j4zbmt6h",
    marginBottom: "ngycyvoj",
    paddingBottom: "bxcbqipq"
  },
  authorWithQuote: {
    borderBottom: "thn59n0e",
    marginBottom: "mpdn4nr2"
  },
  avatar: {
    flexShrink: "oq44ahr5",
    flexGrow: "tvf2evcx",
    flexBasis: "lb5m6g5c",
    marginEnd: "b021xdil"
  },
  body: {
    flexShrink: "m0h2a7mj",
    flexGrow: "ggj6brxn",
    flexBasis: "lb5m6g5c",
    maxHeight: "djhxrpsl",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex"
  },
  bubble: {
    boxSizing: "cm280p3y",
    paddingTop: "n1yiu2zv",
    paddingEnd: "atp9n7ve",
    paddingBottom: "oq31bsqd",
    paddingStart: "e1yunedv",
    width: "m3h9lho3"
  },
  galleryBubble: {
    maxWidth: "ktbp76dp",
    width: "ln8gz9je"
  },
  previewBubble: {
    maxWidth: "ktbp76dp",
    width: "ln8gz9je"
  },
  announcementBubble: {
    width: "shnl0xtb"
  },
  image: {
    position: "g0rxnol2",
    zIndex: "mb8var44",
    display: "l7jjieqr"
  },
  image2: {
    zIndex: "s5lidh1j",
    marginStart: "sxwtddgj"
  },
  image3: {
    zIndex: "jevcxcag",
    marginStart: "sxwtddgj"
  },
  meta: {
    bottom: "pgz13gmm",
    position: "lhggkp7q",
    end: "s7jcu7x1"
  },
  name: {
    color: "k2bacm8l",
    fontSize: "f8jlpxt4",
    fontWeight: "sy6s5v3r",
    lineHeight: "e4qy2s3t",
    textAlign: "ljrqcn24"
  },
  quote: {
    marginTop: "if44n927",
    marginEnd: "isg5rw3j",
    marginBottom: "njub1g37",
    marginStart: "heai6z19"
  },
  quoteWithAuthor: {
    marginTop: "tt8xd2xn"
  },
  emoji: {
    verticalAlign: "mr0xwlll"
  }
};
function P(e) {
  return Boolean(v.ProfilePicThumbCollection.findThumbnailWid(e.wids) || e.thumbnail);
}