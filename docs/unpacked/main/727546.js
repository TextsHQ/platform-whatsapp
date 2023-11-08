var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    context: t,
    msg: n
  } = e;
  const a = (0, g.useRef)(null);
  const v = t.isSuspiciousLink === true || t.thumbnailUrl == null && t.thumbnail == null;
  const y = e => {
    (0, p.stopEvent)(e);
    if (t.isSuspiciousLink === true) {
      const e = (0, s.findLink)(t.sourceUrl);
      if (e) {
        d.ModalManager.open(g.default.createElement(m.default, {
          link: e
        }));
      }
    } else if (t.sourceUrl) {
      (0, u.openExternalLink)(t.sourceUrl);
    }
  };
  const C = h.default.withoutWww(h.default.hostname(t.sourceUrl));
  const b = g.default.createElement("div", {
    className: (0, E.default)(_.source)
  }, g.default.createElement(i.EmojiText, {
    text: C
  }));
  const M = (0, E.default)(_.externalLink, t.thumbnail != null && _.noThumb);
  const S = t.description != null && t.isSuspiciousLink !== true ? g.default.createElement("div", {
    className: (0, E.default)(_.description),
    title: t.description
  }, g.default.createElement(i.EmojiText, {
    text: t.description
  })) : null;
  const T = t.title != null && t.isSuspiciousLink !== true ? g.default.createElement("div", {
    className: (0, E.default)(_.title),
    title: t.title
  }, g.default.createElement(i.EmojiText, {
    text: t.title
  })) : null;
  const w = (0, l.classnamesConvertMeToStylexPlease)((0, E.default)(_.preview, (0, f.getIsSentByMe)(n) ? _.bubbleOut : _.bubbleIn), c.default.previewOverride);
  return g.default.createElement("div", {
    className: w
  }, g.default.createElement("div", {
    ref: a,
    className: (0, E.default)(_.thumbnailWrapper),
    onClick: y
  }, g.default.createElement("div", {
    className: (0, E.default)(_.thumbnailAndAttribution, v && _.containerWide)
  }, t.isSuspiciousLink !== true ? g.default.createElement(r.CtwaContextSourceButton, {
    hostname: C,
    onClick: y
  }) : null, g.default.createElement(o.CtwaContextThumbImage, {
    context: t,
    className: (0, E.default)(_.thumbnail)
  }))), g.default.createElement(u.ExternalLink, {
    className: M,
    href: t.sourceUrl
  }, T, S, b));
};
var r = require("./973717.js");
var o = require("./508077.js");
var l = require("../app/396574.js");
var i = require("../app/305521.js");
var u = require("../app/753233.js");
var s = require("../app/446303.js");
var c = a(require("./181638.js"));
var d = require("../app/114850.js");
var f = require("../app/787742.js");
var p = require("./414493.js");
var m = a(require("../app/569984.js"));
var h = a(require("../app/79291.js"));
var g = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = v(t);
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
var E = a(require("../app/156720.js"));
function v(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (v = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const _ = {
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
  externalLink: {
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
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    width: "ln8gz9je",
    maxHeight: "sxls5clz",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex"
  },
  thumbnailAndAttribution: {
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    position: "g0rxnol2",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex"
  },
  containerWide: {
    width: "ln8gz9je"
  },
  thumbnail: {
    position: "g0rxnol2",
    top: "kkfs9yjl",
    width: "quhpggp2",
    marginBottom: "lmuv1eak",
    cursor: "ajgl1lbb",
    height: "siuioimt",
    objectFit: "jpthtbts"
  }
};