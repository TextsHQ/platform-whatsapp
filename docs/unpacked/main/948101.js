var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MORE_REACTIONS = exports.DEFAULT_REACTIONS_SIZE = undefined;
exports.SendReactionsTray = function (e) {
  let {
    reactions: t,
    showMoreOption: n = false,
    selectedCallback: a,
    selectedIndex: g,
    isParentMsgSentByMe: w
  } = e;
  const A = (0, m.useRef)(null);
  const P = s.default.isRTL() ? w : !w;
  const O = s.default.isRTL() ? !P : P;
  const [k, D] = (0, m.useState)(false);
  const [I, R] = (0, m.useState)(0);
  const N = t.length > 6 || n;
  (0, m.useEffect)(() => {
    var e;
    if (!((e = A.current) === null || e === undefined)) {
      e.focusFirst();
    }
  }, []);
  let x = 4;
  let L = x.toString() + "px";
  let j = O ? _.reactionItemsAnimateLeft : _.reactionItemsAnimateRight;
  if (n && O === false) {
    j = _.reactionItemsAnimateRightMoreOptions;
  }
  const B = t.map((e, t) => {
    const n = g != null && t === g;
    const r = k && t === I;
    let o;
    let i;
    if (k) {
      if (r && !n) {
        o = M;
        i = _.reactionItemAnimateSelected;
      } else if (n) {
        o = r ? S : b;
      }
    } else if (n) {
      o = C;
    }
    const u = s.default.isRTL() ? {
      right: L
    } : {
      left: L
    };
    const f = m.default.createElement(l.default, {
      key: t,
      xstyle: [E.reactionFlexItem, _.reactionItem, !i && j, i],
      style: u
    }, m.default.createElement(d.Round, {
      testid: `reactions-option-${t}`,
      hideBackground: true,
      theme: d.RoundTheme.NoShadow,
      className: (0, h.default)(y, o),
      onClick: () => {
        (e => {
          D(true);
          R(e);
        })(t);
        if (t === g) {
          self.setTimeout(() => a(e), 80);
        } else {
          self.setTimeout(() => a(e), 250);
        }
      }
    }, m.default.createElement(c.ReactionEmoji, {
      reaction: e,
      size: "large",
      scale: "tray"
    })));
    x += 42;
    L = x.toString() + "px";
    return f;
  });
  if (n && t.length === 6) {
    const e = `${x + 10}px`;
    const t = s.default.isRTL() ? {
      right: e
    } : {
      left: e
    };
    const n = m.default.createElement(l.default, {
      key: "show-more",
      xstyle: [E.reactionFlexItem, _.reactionItem, j],
      style: t
    }, m.default.createElement(d.Round, {
      testid: "reactions-show-more",
      theme: d.RoundTheme.ReactionPickerButton,
      small: true,
      label: p.fbt._("More reactions", null, {
        hk: "1TLnvh"
      }),
      onClick: () => {
        a(T);
      }
    }, m.default.createElement(r.AddAlt2Icon, {
      color: f.SvgColorProp.GRAY,
      width: 18
    })));
    B.push(n);
  }
  return m.default.createElement(i.HotKeys, {
    handlers: {
      "shift+tab": e => {
        e.preventDefault();
        e.stopPropagation();
      },
      tab: e => {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    tabIndex: null
  }, m.default.createElement(u.default, {
    ref: A
  }, m.default.createElement(o.FlexRow, {
    className: (0, h.default)(v.reactionTray, N && E.isExtendedTray, P ? v.reactionTrayAnimateLeft : v.reactionTrayAnimateRight),
    align: "center",
    justify: "around"
  }, B)));
};
var r = require("./396931.js");
var o = require("../app/690495.js");
var l = a(require("../app/469733.js"));
var i = require("../app/81644.js");
var u = a(require("./650199.js"));
var s = a(require("../app/932325.js"));
var c = require("./900894.js");
var d = require("./435595.js");
var f = require("../app/220584.js");
var p = require("../vendor/548360.js");
var m = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = g(t);
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
var h = a(require("../app/156720.js"));
function g(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (g = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const E = {
  isExtendedTray: {
    width: "rtue7xhx",
    maxWidth: "j216idpa",
    ":before": {
      width: "rd85shf7",
      maxWidth: "ssu9o2eo"
    }
  },
  reactionFlexItem: {
    position: "lhggkp7q"
  }
};
const v = {
  reactionTray: {
    height: "q1n4p668",
    width: "f4vvi1mq",
    maxWidth: "bz50z0yh",
    position: "g0rxnol2",
    backgroundColor: "thr4l2wc",
    paddingTop: "i5tg98hk",
    paddingEnd: "jfqm35v0",
    paddingBottom: "przvwfww",
    paddingStart: "bdbt56hn",
    ":before": {
      backgroundColor: "ga96p4vz",
      boxShadow: "b5q10lpa",
      zIndex: "otswzj8x",
      content: "lij4d1x3",
      paddingTop: "r4xl2n04",
      paddingEnd: "asu8qs9d",
      paddingBottom: "c0bbmqe2",
      paddingStart: "ajr0z13z",
      borderTopStartRadius: "e8mfq481",
      borderTopEndRadius: "rl2cs7re",
      borderBottomEndRadius: "k0x1nux4",
      borderBottomStartRadius: "thgejxps",
      position: "oxaw94s0",
      start: "e8y0iqoj",
      top: "a8g7dr2m",
      width: "e05q9v5p",
      maxWidth: "t1e0qc4e",
      height: "m6f3ikd5",
      animationFillMode: "r1v61bue",
      transform: "tobsugo9",
      willChange: "gtx3tadu",
      animationName: "ota1mbrf",
      animationDuration: "ryfqqswh",
      animationTimingFunction: "bha6utru"
    }
  },
  reactionTrayAnimateLeft: {
    "::before": {
      transformOrigin: "ns36z7zv"
    }
  },
  reactionTrayAnimateRight: {
    "::before": {
      transformOrigin: "kq7zil7g"
    }
  }
};
const _ = {
  reactionItemsAnimateLeft: {
    ":nth-child(1)": {
      animationDelay: "dc9pxb7p"
    },
    ":nth-child(2)": {
      animationDelay: "heuvjs6j"
    },
    ":nth-child(3)": {
      animationDelay: "o04j5cds"
    },
    ":nth-child(4)": {
      animationDelay: "kwb1nczx"
    },
    ":nth-child(5)": {
      animationDelay: "qwbhdnx1"
    },
    ":nth-child(6)": {
      animationDelay: "n4ocl5sr"
    },
    ":nth-child(7)": {
      animationDelay: "n9b0ado8"
    }
  },
  reactionItemsAnimateRight: {
    ":nth-child(6)": {
      animationDelay: "hxte1zbr"
    },
    ":nth-child(5)": {
      animationDelay: "sf9ilnrw"
    },
    ":nth-child(4)": {
      animationDelay: "mfdt667m"
    },
    ":nth-child(3)": {
      animationDelay: "qr6bg16l"
    },
    ":nth-child(2)": {
      animationDelay: "mtkupoln"
    },
    ":nth-child(1)": {
      animationDelay: "rwtgomn0"
    }
  },
  reactionItemsAnimateRightMoreOptions: {
    ":nth-child(7)": {
      animationDelay: "mpyszoyv"
    },
    ":nth-child(6)": {
      animationDelay: "oxe1zlk6"
    },
    ":nth-child(5)": {
      animationDelay: "kqjy5z83"
    },
    ":nth-child(4)": {
      animationDelay: "kwb1nczx"
    },
    ":nth-child(3)": {
      animationDelay: "fv5qzaj9"
    },
    ":nth-child(2)": {
      animationDelay: "pbiji778"
    },
    ":nth-child(1)": {
      animationDelay: "r4zq3v0s"
    }
  },
  reactionItem: {
    backfaceVisibility: "ou3430m0",
    transform: "bglikw2g",
    animationFillMode: "a21kwdn3",
    animationName: "mmx92utk",
    animationDuration: "joup3a2m",
    animationTimingFunction: "esbg2say"
  },
  reactionItemAnimateSelected: {
    animationName: "ddamih75",
    animationDuration: "gzzbkayp",
    animationTimingFunction: "gs65objp"
  }
};
const y = {
  position: "g0rxnol2",
  "::before": {
    position: "jiaumjzp",
    content: "ckfn5qle",
    width: "ekwltmu8",
    height: "o1rppbag",
    backgroundColor: "g9lbsnvk",
    transform: "kq7idzux",
    opacity: "jpisi10r",
    borderTopStartRadius: "s0ncokgg",
    borderTopEndRadius: "dgvzf84s",
    borderBottomEndRadius: "qs89ku6w",
    borderBottomStartRadius: "ja8s2tk6"
  }
};
const C = {
  "::before": {
    transform: "ecn6b8u2"
  }
};
const b = {
  "::before": {
    transform: "kq7idzux"
  }
};
const M = {
  "::before": {
    animationFillMode: "badepdzx",
    animationName: "o38lwax9",
    animationDuration: "egohdep1",
    animationDelay: "qvdn5vl1",
    animationTimingFunction: "k2u5p2o8"
  }
};
const S = {
  "::before": {
    animationFillMode: "badepdzx",
    animationName: "f6m8gik5",
    animationDuration: "f6d3q6r3",
    animationTimingFunction: "k2u5p2o8"
  }
};
const T = "__more_reactions__";
exports.MORE_REACTIONS = T;
exports.DEFAULT_REACTIONS_SIZE = 6;