var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../app/670983.js"));
var o = require("./755782.js");
var l = require("../app/63014.js");
var i = require("../app/23641.js");
var u = require("../app/356097.js");
var s = require("../main-chunk/465113.js");
var c = require("../app/305521.js");
var d = a(require("../app/335540.js"));
var f = require("../app/714574.js");
var p = a(require("./296518.js"));
var m = require("../app/81644.js");
var h = a(require("../app/932325.js"));
var g = require("./48794.js");
var E = a(require("./419966.js"));
var v = require("../app/572946.js");
var _ = require("../app/676345.js");
var y = require("./512873.js");
var C = function (e, t) {
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
var b = a(require("../app/156720.js"));
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
  chevron: {
    flex: "kk3akd72",
    marginTop: "o9i7y497",
    marginStart: "oz0g9ue8",
    color: "fe1tuj7z"
  },
  avatar: {
    flex: "kk3akd72",
    marginEnd: "claouzo6"
  },
  author: {
    marginEnd: "kjemk6od"
  }
};
function w(e, t) {
  const {
    msg: n,
    currSelection: a,
    activeSelection: S,
    onClickMsg: w,
    testid: A,
    onMsgFooterClick: P
  } = e;
  const O = (0, C.useRef)(null);
  const k = (0, C.useRef)(null);
  const D = (0, C.useRef)(null);
  const [I, R] = (0, C.useState)(false);
  const [N, x] = (0, C.useState)(() => !!a && a.value === n);
  const [L, j] = (0, C.useState)(() => !!S && S.value === n);
  const [B, F] = (0, C.useState)(false);
  (0, M.useListener)(a, n.id.toString(), (e, t) => {
    const n = e === "focus";
    if (n) {
      const e = D.current;
      if (e) {
        d.default.focus(e);
        if (t) {
          (0, s.scrollIntoViewIfNeeded)(e);
        }
      }
    }
    x(n);
  });
  (0, M.useListener)(S, n.id.toString(), (e, t) => {
    if (e === "focus") {
      const e = D.current;
      if (e) {
        d.default.focus(e);
        if (t) {
          (0, s.scrollIntoViewIfNeeded)(e);
        }
      }
    }
    j(!!e);
  });
  const G = () => O.current;
  const U = () => (0, r.default)(D.current, "hotKeysRef.current");
  (0, C.useImperativeHandle)(t, () => ({
    getElement: U,
    getWrapperRef: G
  }));
  const W = (0, f.getFormattedName)(n.senderObj);
  const H = C.default.createElement("div", {
    className: (0, b.default)(T.title, v.hasEmoji && T.titleEmoji)
  }, C.default.createElement("div", {
    className: (0, b.default)(T.titleMain)
  }, C.default.createElement("div", {
    className: (0, b.default)(T.avatar)
  }, C.default.createElement(i.DetailImage, {
    id: n.senderObj.id,
    size: 26
  })), C.default.createElement(c.EmojiText, {
    xstyle: T.author,
    text: W,
    direction: "auto",
    titlify: true
  })), C.default.createElement("div", {
    className: (0, b.default)(T.meta),
    dir: "auto"
  }, l.Clock.relativeStr(n.t)), C.default.createElement("div", {
    className: (0, b.default)(T.chevron)
  }, C.default.createElement(o.ChevronRightAltIcon, {
    directional: true
  })));
  const V = {
    enter: e => {
      e.stopPropagation();
      e.preventDefault();
      if (!(w == null)) {
        w(n);
      }
    }
  };
  V[h.default.LR("right", "left")] = () => {
    var e;
    if (!((e = O.current) === null || e === undefined)) {
      e.openContextMenu();
    }
  };
  const q = C.default.createElement(E.default, {
    msg: n,
    onMsgFooterClick: P
  });
  return C.default.createElement(m.HotKeys, {
    xstyle: _.marginBottom8,
    ref: D,
    handlers: V,
    onFocus: () => {
      var e;
      F(true);
      if (!((e = k.current) === null || e === undefined)) {
        e.indicateFocus();
      }
    },
    onBlur: () => {
      F(false);
    }
  }, C.default.createElement(p.default, {
    ref: k,
    hover: I,
    key: `rta-gallery-msg-${n.id.toString()}`,
    current: N && B,
    active: L,
    onClick: () => e.onClickMsg && e.onClickMsg(n),
    onMouseEnter: () => {
      if (!I) {
        R(true);
      }
    },
    onMouseOver: () => {
      if (!I) {
        R(true);
      }
    },
    onMouseLeave: () => {
      if (I) {
        R(false);
      }
    },
    testid: A,
    footer: q
  }, H, C.default.createElement(y.Wrapper, {
    msg: n,
    key: n.id.toString(),
    ref: O,
    current: N && B,
    displayType: u.DISPLAY_TYPE.REPORTED_MSG,
    isMsgVisible: e.isMsgVisible,
    selectable: e.selectable,
    position: g.MsgPosition.END,
    tailOverride: "left",
    onMessageClick: e.onMessageClick
  })));
}
var A = (0, C.forwardRef)(w);
exports.default = A;