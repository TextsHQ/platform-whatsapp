var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../app/670983.js"));
var o = require("./755782.js");
var l = require("../app/63014.js");
var i = require("../app/177938.js");
var u = require("../app/23641.js");
var s = require("../app/356097.js");
var c = require("../main-chunk/465113.js");
var d = require("../app/305521.js");
var f = a(require("../app/335540.js"));
var p = require("../app/714574.js");
var m = require("../app/163755.js");
var h = a(require("./296518.js"));
var g = require("../app/81644.js");
var E = a(require("../app/932325.js"));
var v = a(require("./369058.js"));
var _ = require("./48794.js");
var y = require("../app/572946.js");
var C = require("../app/931019.js");
var b = require("./512873.js");
var M = function (e, t) {
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
var S = a(require("../app/156720.js"));
var T = require("../app/808446.js");
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
  title: {
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    marginBottom: "njub1g37",
    fontSize: "f8jlpxt4",
    fontWeight: "e1gr2w1z",
    lineHeight: "tnjggqzj"
  },
  titleEmoji: {
    verticalAlign: "h1r24yt8"
  },
  titleMain: {
    display: "p357zi0d",
    flexGrow: "tvf2evcx",
    justifyContent: "fhf7t426",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    textOverflow: "lhj4utae",
    whiteSpace: "le5p0ye3"
  },
  meta: {
    flexGrow: "ggj6brxn",
    flexShrink: "oq44ahr5",
    marginStart: "oz0g9ue8",
    fontSize: "dsh4tgtl",
    lineHeight: "sb4iah7d",
    color: "hp667wtd",
    textAlign: "e65innqk",
    verticalAlign: "md4apq9i"
  },
  chat: {
    marginStart: "k6y3xtnu",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    textOverflow: "lhj4utae",
    whiteSpace: "le5p0ye3"
  },
  divider: {
    position: "g0rxnol2",
    flex: "kk3akd72",
    width: "htlq5l20",
    "::before": {
      position: "jiaumjzp",
      top: "beenm9b3",
      start: "fx6vfo4m",
      width: "evuypb09",
      height: "flcm9zni",
      fontSize: "m6pf2udp",
      lineHeight: "ndbp8nzn",
      color: "n49nndap",
      content: "aka0iiqh"
    }
  },
  chevron: {
    flex: "kk3akd72",
    marginTop: "o9i7y497",
    marginStart: "oz0g9ue8",
    color: "fe1tuj7z"
  },
  dividerRTL: {
    transform: "n4o0o7gj"
  },
  avatar: {
    flex: "kk3akd72",
    marginEnd: "claouzo6"
  },
  author: {
    marginEnd: "kjemk6od"
  }
};
function P(e, t) {
  const {
    msg: n,
    selectedMessages: a,
    displayType: w,
    currSelection: P,
    activeSelection: O,
    onClickMsg: k,
    testid: D
  } = e;
  const I = (0, M.useRef)(null);
  const R = (0, M.useRef)(null);
  const N = (0, M.useRef)(null);
  const [x, L] = (0, M.useState)(false);
  const [j, B] = (0, M.useState)(() => !!P && P.value === n);
  const [F, G] = (0, M.useState)(() => !!O && O.value === n);
  const [U, W] = (0, M.useState)(false);
  (0, T.useListener)(P, n.id.toString(), (e, t) => {
    const n = e === "focus";
    if (n) {
      const e = N.current;
      if (e) {
        f.default.focus(e);
        if (t) {
          (0, c.scrollIntoViewIfNeeded)(e);
        }
      }
    }
    B(n);
  });
  (0, T.useListener)(O, n.id.toString(), (e, t) => {
    if (e === "focus") {
      const e = N.current;
      if (e) {
        f.default.focus(e);
        if (t) {
          (0, c.scrollIntoViewIfNeeded)(e);
        }
      }
    }
    G(!!e);
  });
  const H = () => I.current;
  const V = () => (0, r.default)(N.current, "hotKeysRef.current");
  (0, M.useImperativeHandle)(t, () => ({
    getElement: V,
    getWrapperRef: H
  }));
  const q = (0, p.getFormattedName)(n.senderObj);
  const Y = (0, m.getChat)(n).isUser ? (0, p.getFormattedName)(i.ContactCollection.assertGet(n.to)) ? (0, p.getFormattedName)(i.ContactCollection.assertGet(n.to)) : (0, C.widToFormattedUser)(n.to) : (0, m.getChat)(n).title();
  const z = w === s.DISPLAY_TYPE.GALLERY ? null : M.default.createElement("div", {
    className: (0, S.default)(A.title, y.hasEmoji && A.titleEmoji)
  }, M.default.createElement("div", {
    className: (0, S.default)(A.titleMain)
  }, M.default.createElement("div", {
    className: (0, S.default)(A.avatar)
  }, M.default.createElement(u.DetailImage, {
    id: n.senderObj.id,
    size: 26
  })), M.default.createElement(d.EmojiText, {
    xstyle: A.author,
    text: q,
    direction: "auto",
    titlify: true
  }), M.default.createElement("span", {
    className: (0, S.default)(A.divider, E.default.isRTL() && A.dividerRTL)
  }), M.default.createElement(d.EmojiText, {
    xstyle: A.chat,
    text: Y,
    direction: "auto",
    titlify: true
  })), M.default.createElement("div", {
    className: (0, S.default)(A.meta),
    dir: "auto"
  }, l.Clock.relativeStr(n.t)), M.default.createElement("div", {
    className: (0, S.default)(A.chevron)
  }, M.default.createElement(o.ChevronRightAltIcon, {
    directional: true
  })));
  const K = {
    enter: e => {
      e.stopPropagation();
      e.preventDefault();
      if (!(k == null)) {
        k(n);
      }
    }
  };
  K[E.default.LR("right", "left")] = () => {
    var e;
    if (!((e = I.current) === null || e === undefined)) {
      e.openContextMenu();
    }
  };
  const Q = e.selectable || x && (w === s.DISPLAY_TYPE.GALLERY || w === s.DISPLAY_TYPE.GALLERY_LINKS);
  let X;
  if (w === s.DISPLAY_TYPE.KEPT_MSGS) {
    X = M.default.createElement(v.default, {
      msg: n
    });
  }
  return M.default.createElement(g.HotKeys, {
    ref: N,
    handlers: K,
    onFocus: () => {
      var e;
      W(true);
      if (!((e = R.current) === null || e === undefined)) {
        e.indicateFocus();
      }
    },
    onBlur: () => {
      W(false);
    }
  }, M.default.createElement(h.default, {
    ref: R,
    hover: x,
    current: j && U,
    active: F,
    onClick: () => e.onClickMsg && e.onClickMsg(n, a && !a.isSelected(n)),
    onMouseEnter: x ? null : () => {
      if (!x) {
        L(true);
      }
    },
    onMouseOver: x ? null : () => {
      if (!x) {
        L(true);
      }
    },
    onMouseLeave: x ? () => {
      if (x) {
        L(false);
      }
    } : null,
    testid: D
  }, z, M.default.createElement(b.Wrapper, {
    msg: n,
    key: n.id.toString(),
    ref: I,
    current: j && U,
    displayType: w || s.DISPLAY_TYPE.STARRED_MSGS,
    isMsgVisible: e.isMsgVisible,
    selectable: Q,
    selectedMessages: a,
    onMessageSelect: e.onMessageSelect,
    position: _.MsgPosition.END,
    tailOverride: "left",
    onProductClick: e.onProductClick,
    onMessageClick: e.onMessageClick
  }), X));
}
var O = (0, M.forwardRef)(P);
exports.default = O;