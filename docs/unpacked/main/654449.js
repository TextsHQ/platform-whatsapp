var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    msg: t
  } = e;
  const n = (0, M.useRef)(null);
  const [a, w] = (0, M.useState)(() => m.default.isOpened((0, E.unproxy)(t)) ? k : O);
  (0, T.useListener)(m.default, `${t.id.toString()}_pip_did_open`, () => {
    if (a !== k) {
      w(k);
    }
  });
  (0, T.useListener)(m.default, `${t.id.toString()}_pip_did_close`, () => {
    if (a !== O) {
      w(O);
    }
  });
  const A = () => n.current ? n.current.getBoundingClientRect() : null;
  const I = t.description ? M.default.createElement("div", {
    className: (0, S.default)(P.description),
    title: t.description
  }, M.default.createElement(i.EmojiText, {
    text: t.description
  })) : null;
  let R = v.default.hostname(e.msg.canonicalUrl || e.msg.matchedText);
  R = v.default.withoutWww(R);
  if (R === p.HOSTNAME.YOUTUBE_SHORTENED) {
    R = p.HOSTNAME.YOUTUBE;
  }
  const N = M.default.createElement("div", {
    className: (0, S.default)(P.source)
  }, M.default.createElement(i.EmojiText, {
    text: R
  }));
  const x = (0, S.default)(P.body, !e.msg.thumbnail && P.noThumb);
  const L = (0, s.hqLinkPreviewExpired)(t.t);
  const j = !L && e.msg.thumbnailHQ ? e.msg.thumbnailHQ : e.msg.thumbnail;
  let B;
  if (a === O) {
    switch (R) {
      case p.HOSTNAME.YOUTUBE:
      case p.HOSTNAME.YOUTUBE_MOBILE:
        {
          const t = (0, _.parseYoutubeVideoId)(e.msg.matchedText);
          if (t) {
            const n = (e => {
              const t = e.split("?");
              if (t.length !== 2) {
                return 0;
              }
              const n = t[1];
              const a = new g.default(n).get(p.YOUTUBE_URL_TIME_PARAM_NAME);
              if (!a) {
                return 0;
              }
              const r = a.match(p.YOUTUBE_URL_TIME_PARAM_PATTERN);
              let o = 0;
              if (r == null ? undefined : r.length) {
                for (let e = 1; e < r.length; e++) {
                  const t = r[e];
                  if (!t) {
                    continue;
                  }
                  const n = parseInt(t, 10);
                  if (Number.isNaN(n)) {
                    return 0;
                  }
                  if (t.endsWith("h")) {
                    o += n * 3600;
                  }
                  if (t.endsWith("m")) {
                    o += n * 60;
                  }
                  if (t.endsWith("s")) {
                    o += n;
                  }
                  if (/^\d+$/.test(t)) {
                    o += n;
                  }
                }
              }
              return o;
            })(e.msg.matchedText);
            B = a => {
              if (a) {
                a.stopPropagation();
              }
              m.default.openYoutubePiP(t, e.msg, n, A());
            };
          }
          break;
        }
      case p.HOSTNAME.INSTAGRAM:
      case p.HOSTNAME.STREAMABLE:
      case p.HOSTNAME.FACEBOOK:
      case p.HOSTNAME.FBWATCH:
      case p.HOSTNAME.FBWATCH_ALT:
      case p.HOSTNAME.SHARECHAT:
        B = () => {
          m.default.openOgVideoPiP("", j, e.msg, 0, A());
          throw (0, C.default)("This call is not supported");
        };
        break;
      default:
        return null;
    }
  }
  const F = (0, o.classnamesConvertMeToStylexPlease)((0, S.default)(P.preview, (0, f.getIsSentByMe)(e.msg) ? P.bubbleOut : P.bubbleIn), d.default.previewOverride);
  const G = a === O ? M.default.createElement("div", {
    className: (0, S.default)(P.mediaStateControlsWrapper)
  }, M.default.createElement(c.Play, null)) : null;
  const U = a === k ? M.default.createElement(h.default, {
    icon: M.default.createElement(y.VideoPipLargeIcon, null)
  }, b.fbt._("This video is playing in picture in picture.", null, {
    hk: "4pqtaj"
  })) : null;
  let W;
  let H;
  if (j && (0, r.default)(p.HOSTNAME).includes(R)) {
    const t = function (e) {
      return D.includes(e);
    }(R);
    W = M.default.createElement("img", {
      alt: "",
      className: (0, S.default)(P.thumbnail, t && P.youtubeThumbnail, (t && (0, l.isFeatureEnabled)("youtube_video_preview_without_blur") || !L && !!e.msg.thumbnailHQ) && P.noBlur),
      src: `data:image/jpeg;base64,${j}`
    });
    const n = (0, p.getAttributionIcon)(R);
    if (n) {
      H = M.default.createElement("div", {
        className: (0, S.default)(P.attribution)
      }, M.default.createElement(n, null));
    }
  } else {
    W = M.default.createElement("div", {
      className: (0, S.default)(P.thumbnailPlaceholder)
    });
  }
  return M.default.createElement("div", {
    className: F
  }, M.default.createElement("div", {
    ref: n,
    className: (0, S.default)(P.thumbnailWrapper),
    onClick: B
  }, H, W, G, U), M.default.createElement(u.ExternalLink, {
    className: x,
    href: e.msg.matchedText
  }, M.default.createElement("div", {
    className: (0, S.default)(P.title),
    title: e.msg.title
  }, M.default.createElement(i.EmojiText, {
    text: e.msg.title
  })), I, N));
};
var r = a(require("../vendor/252628.js"));
var o = require("../app/396574.js");
var l = require("../app/650201.js");
var i = require("../app/305521.js");
var u = require("../app/753233.js");
var s = require("../app/860888.js");
var c = A(require("./870338.js"));
var d = a(require("./181638.js"));
var f = require("../app/787742.js");
var p = require("../app/728.js");
var m = a(require("./389287.js"));
var h = a(require("./305698.js"));
var g = a(require("../app/665810.js"));
var E = require("../app/163139.js");
var v = a(require("../app/79291.js"));
var _ = require("../app/365214.js");
var y = require("./812677.js");
var C = a(require("../app/556869.js"));
var b = require("../vendor/548360.js");
var M = A(require("../vendor/667294.js"));
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
function A(e, t) {
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
}
const P = {
  preview: {
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
  attribution: {
    position: "lhggkp7q",
    end: "anwdwcjt",
    bottom: "hsombceh",
    zIndex: "jnl3jror"
  },
  mediaStateControlsWrapper: {
    position: "lhggkp7q",
    top: "qq0sjtgm",
    start: "tkdu00h0",
    zIndex: "mbtxrpqz",
    width: "ln8gz9je",
    height: "ppled2lx",
    cursor: "ajgl1lbb"
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
    marginBottom: "lmuv1eak",
    cursor: "ajgl1lbb",
    filter: "fsmudgz7"
  },
  noBlur: {
    filter: "b3di99y3"
  },
  thumbnailPlaceholder: {
    position: "g0rxnol2",
    width: "ln8gz9je",
    height: "siuioimt",
    backgroundColor: "c3gfj3cx"
  },
  youtubeThumbnail: {
    height: "f1qlncqe",
    objectFit: "jpthtbts"
  }
};
const O = "PREVIEW";
const k = "FLOATER";
const D = [p.HOSTNAME.YOUTUBE, p.HOSTNAME.YOUTUBE_MOBILE, p.HOSTNAME.YOUTUBE_SHORTENED];