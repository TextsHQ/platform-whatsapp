var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    shortcut: t,
    message: n
  } = (0, c.useModelValues)(e.quickReply, ["shortcut", "message"]);
  const {
    query: a,
    selected: d,
    onMouseDown: p,
    onMouseEnter: m,
    onMouseUp: h
  } = e;
  const g = t.slice(a.length);
  return u.default.createElement("div", {
    className: (0, s.default)(f.result, i.uiPadding.vert16, i.uiPadding.horiz18, l.hasEmoji && f.resultEmoji, d && f.resultSelected),
    onMouseDown: p,
    onMouseUp: h,
    onMouseEnter: m
  }, u.default.createElement("span", {
    className: (0, s.default)(f.slash, i.uiPadding.top3)
  }), u.default.createElement(r.EmojiText, {
    className: (0, s.default)(f.shortcutPrefix, i.uiPadding.top3),
    text: a
  }), u.default.createElement(r.EmojiText, {
    className: (0, s.default)(f.shortcutSuffix, i.uiPadding.top3),
    text: g
  }), u.default.createElement(r.EmojiText, {
    className: (0, s.default)(f.message, i.uiPadding.top3, i.uiMargin.start10),
    testid: "quick-reply-message",
    ellipsify: true,
    text: n,
    formatters: o.QuickReply()
  }));
};
var r = require("../app/305521.js");
var o = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = d(t);
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
}(require("../app/675886.js"));
var l = require("../app/572946.js");
var i = require("../app/676345.js");
var u = a(require("../vendor/667294.js"));
var s = a(require("../app/156720.js"));
var c = require("../app/655241.js");
function d(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (d = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const f = {
  result: {
    display: "p357zi0d",
    height: "jdwybkuq",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    fontSize: "f8jlpxt4",
    color: "hp667wtd",
    textOverflow: "lhj4utae",
    whiteSpace: "le5p0ye3",
    verticalAlign: "neme6l2y"
  },
  resultEmoji: {
    position: "g0rxnol2",
    top: "io0jvo41"
  },
  resultSelected: {
    backgroundColor: "s2x71smj"
  },
  slash: {
    color: "t3rh7lfs"
  },
  shortcutPrefix: {
    fontWeight: "nbipi2bn",
    color: "j3oq2rgp"
  },
  shortcutSuffix: {
    color: "k2bacm8l"
  },
  message: {
    color: "hp667wtd",
    textAlign: "ljrqcn24"
  }
};