var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  const [n, a] = (0, f.default)(e.onClick);
  const [m, h] = (0, c.default)();
  const g = (0, d.default)(n, m);
  const E = e.side != null ? u.default.createElement("div", {
    className: (0, s.default)(p.side)
  }, e.side) : null;
  const v = (t = e.separator) === null || t === undefined || t;
  const _ = (0, o.classnamesConvertMeToStylexPlease)((0, s.default)(p.container, e.xstyle, h && p.active), e.className, {
    [l.default.separator]: v
  });
  e.testid;
  return u.default.createElement("div", (0, r.default)({}, a, {
    "aria-label": e.ariaLabel,
    ref: g,
    className: _,
    role: e.onClick ? "button" : null,
    onClick: e.onClick
  }), u.default.createElement("div", {
    className: (0, o.classnamesConvertMeToStylexPlease)(l.default.block, (0, s.default)(p.block, e.blockXstyle, e.multiline && p.blockMultiline))
  }, u.default.createElement("div", {
    className: (0, o.classnamesConvertMeToStylexPlease)((0, s.default)(p.main, e.multiline && p.mainMultiline, e.restrictSpacing && p.mainRestrictSpacing, i.isOSMac && p.mainMac))
  }, e.children), E));
};
var r = a(require("../vendor/967154.js"));
var o = require("../app/396574.js");
var l = a(require("./609015.js"));
var i = require("../app/572946.js");
var u = a(require("../vendor/667294.js"));
var s = a(require("../app/156720.js"));
var c = a(require("../app/576191.js"));
var d = a(require("../app/38085.js"));
var f = a(require("../app/83233.js"));
const p = {
  container: {
    paddingStart: "e8k79tju"
  },
  block: {
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    height: "k45dudtp",
    paddingEnd: "bcymb0na"
  },
  blockMultiline: {
    height: "bvcnfjzh"
  },
  main: {
    flexGrow: "ggj6brxn",
    flexShrink: "m0h2a7mj",
    flexBasis: "lb5m6g5c",
    marginTop: "kv6wexeh",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    textOverflow: "lhj4utae",
    whiteSpace: "le5p0ye3"
  },
  mainMultiline: {
    paddingTop: "hc2u0oym",
    paddingBottom: "myel2vfb",
    whiteSpace: "hmy10g0s"
  },
  mainMac: {
    marginTop: "tt8xd2xn"
  },
  mainRestrictSpacing: {
    paddingTop: "i5tg98hk",
    paddingBottom: "przvwfww",
    whiteSpace: "le5p0ye3"
  },
  side: {
    flexGrow: "tvf2evcx",
    flexShrink: "oq44ahr5",
    flexBasis: "lb5m6g5c",
    marginStart: "jwvfxh5v"
  },
  active: {
    backgroundColor: "i16jpgpt"
  }
};