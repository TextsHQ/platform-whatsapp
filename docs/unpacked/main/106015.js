var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    context: t
  } = e;
  const n = (0, y.useMemo)(() => {
    if (e.msg.type === m.MSG_TYPE.VIDEO) {
      const t = e.msg.toJSON();
      const n = new f.default({
        fromMe: e.msg.id.fromMe,
        remote: e.msg.id.remote,
        id: f.default.newId_DEPRECATED()
      });
      t.id = n;
      return new p.Msg(t);
    }
    return e.msg;
  }, [e.msg]);
  const a = (0, y.useRef)(null);
  const [M, A] = (0, y.useState)(() => h.default.isOpened(n) ? w : T);
  (0, b.useListener)(h.default, `${n.id.toString()}_pip_did_open`, () => {
    A(w);
  });
  (0, b.useListener)(h.default, `${n.id.toString()}_pip_did_close`, () => {
    if (M !== T) {
      A(T);
    }
  });
  const P = e => {
    e.preventDefault();
    e.stopPropagation();
    (0, u.openExternalLink)(t.sourceUrl);
  };
  const O = E.default.withoutWww(E.default.hostname(e.context.sourceUrl));
  const k = y.default.createElement("div", {
    className: (0, C.default)(S.source)
  }, y.default.createElement(i.EmojiText, {
    text: O
  }));
  const D = (0, C.default)(S.body, e.context.thumbnail != null && S.noThumb);
  const I = t.description != null && t.isSuspiciousLink !== true ? y.default.createElement("div", {
    className: (0, C.default)(S.description),
    title: e.context.description
  }, y.default.createElement(i.EmojiText, {
    text: e.context.description
  })) : null;
  const R = t.title != null && t.isSuspiciousLink !== true ? y.default.createElement("div", {
    className: (0, C.default)(S.title),
    title: t.title
  }, y.default.createElement(i.EmojiText, {
    text: t.title
  })) : null;
  const N = (0, l.classnamesConvertMeToStylexPlease)((0, C.default)(S.preview, (0, d.getIsSentByMe)(n) && S.bubbleOut || S.bubbleIn), c.default.previewOverride);
  const x = M === T ? y.default.createElement("div", {
    className: (0, C.default)(S.playButton)
  }, y.default.createElement(s.Play, null)) : null;
  const L = M === w ? y.default.createElement(g.default, {
    icon: y.default.createElement(v.VideoPipLargeIcon, null)
  }, _.fbt._("This video is playing in picture in picture.", null, {
    hk: "4pqtaj"
  })) : null;
  return y.default.createElement("div", {
    className: N
  }, y.default.createElement("div", {
    ref: a,
    className: (0, C.default)(S.thumbnailWrapper),
    onClick: P
  }, y.default.createElement(r.CtwaContextSourceButton, {
    hostname: O,
    onClick: P
  }), y.default.createElement(o.CtwaContextThumbImage, {
    context: t,
    className: (0, C.default)(S.thumbnail)
  }), x, L), y.default.createElement(u.ExternalLink, {
    className: D,
    href: t.sourceUrl
  }, R, I, k));
};
var r = require("./973717.js");
var o = require("./508077.js");
var l = require("../app/396574.js");
var i = require("../app/305521.js");
var u = require("../app/753233.js");
var s = require("./870338.js");
var c = a(require("./181638.js"));
var d = require("../app/787742.js");
var f = a(require("../app/565754.js"));
var p = require("../app/772358.js");
var m = require("../app/373070.js");
var h = a(require("./389287.js"));
var g = a(require("./305698.js"));
var E = a(require("../app/79291.js"));
var v = require("./812677.js");
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
  var n = M(t);
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
var b = require("../app/808446.js");
function M(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (M = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const S = {
  preview: {
    marginTop: "b9l0eqez",
    marginEnd: "ojci89ib",
    marginBottom: "inogquss",
    marginStart: "akljc1zx",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    fontSize: "ovllcyds",
    lineHeight: "r5qsrrlp",
    borderTopStartRadius: "l8fojup5",
    borderTopEndRadius: "paxyh2gw",
    borderBottomEndRadius: "sfeitywo",
    borderBottomStartRadius: "cqsf3vkf"
  },
  bubbleIn: {
    backgroundColor: "rrq4r3yd"
  },
  bubbleOut: {
    backgroundColor: "s0eflmyh"
  },
  title: {
    display: "c32ccnay",
    flexGrow: "tvf2evcx",
    flexShrink: "m0h2a7mj",
    flexBasis: "lb5m6g5c",
    marginBottom: "j4enbv94",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    color: "tl2vja3b",
    textOverflow: "lhj4utae",
    "-webkit-line-clamp": "suguakab",
    "-webkit-box-orient": "aoi073rw"
  },
  description: {
    flexGrow: "tvf2evcx",
    flexShrink: "ttu8nud2",
    flexBasis: "lb5m6g5c",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    fontSize: "dsh4tgtl",
    color: "pm5hny62"
  },
  source: {
    paddingTop: "qbqilfqo",
    fontSize: "dsh4tgtl",
    color: "prv4wu9t"
  },
  body: {
    boxSizing: "cm280p3y",
    display: "p357zi0d",
    flexDirection: "f8m0rgwh",
    justifyContent: "ac2vgrno",
    width: "ln8gz9je",
    maxHeight: "f8xtxj1z",
    paddingTop: "n1yiu2zv",
    paddingEnd: "itegkywt",
    paddingBottom: "eb4rp10x",
    paddingStart: "rppts313",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    lineHeight: "idwf4z32"
  },
  noThumb: {
    maxWidth: "laorhtua"
  },
  thumbnailWrapper: {
    position: "g0rxnol2",
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    width: "ln8gz9je",
    maxHeight: "sxls5clz",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex"
  },
  thumbnail: {
    position: "g0rxnol2",
    top: "kkfs9yjl",
    width: "npn6ik2d",
    height: "siuioimt",
    marginBottom: "lmuv1eak",
    cursor: "ajgl1lbb",
    filter: "fsmudgz7",
    maxHeight: "mc2v84cv",
    objectFit: "jpthtbts"
  },
  playButton: {
    position: "lhggkp7q",
    top: "qq0sjtgm",
    start: "tkdu00h0",
    zIndex: "mbtxrpqz",
    width: "ln8gz9je",
    height: "ppled2lx",
    cursor: "ajgl1lbb"
  }
};
const T = "PREVIEW";
const w = "FLOATER";