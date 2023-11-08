var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  let {
    msg: n,
    captionEndElement: a
  } = e;
  const {
    title: E,
    subtitle: v,
    thumbnail: _
  } = (t = n.interactiveHeader) !== null && t !== undefined ? t : {};
  const y = {
    selectable: (0, d.isTrusted)(n.unsafe()),
    dirMismatch: (0, u.getRtl)(n) !== s.default.isRTL(),
    direction: (0, u.getDir)(n),
    inferLinesDirection: true
  };
  return m.default.createElement(l.FlexRow, {
    align: "stretch",
    xstyle: [g.container, !(0, c.getIsSentByMe)(n) && g.bubbleIn, (0, c.getIsSentByMe)(n) && g.bubbleOut]
  }, _ ? m.default.createElement("img", {
    alt: "",
    className: (0, h.default)(g.media),
    src: `data:image/jpeg;base64,${_}`
  }) : null, m.default.createElement(l.FlexColumn, {
    xstyle: [g.body, p.uiPadding.vert6, p.uiPadding.horiz9]
  }, E ? m.default.createElement(f.default, {
    maxLines: 2
  }, m.default.createElement(o.EmojiText, (0, r.default)({}, y, {
    text: E,
    xstyle: g.title
  }))) : null, v ? m.default.createElement(i.default, {
    shrink: 10,
    xstyle: g.subtitle
  }, m.default.createElement(f.default, {
    maxLines: 1
  }, m.default.createElement(o.EmojiText, (0, r.default)({}, y, {
    text: v
  })))) : null, a));
};
var r = a(require("../vendor/967154.js"));
var o = require("../app/305521.js");
var l = require("../app/690495.js");
var i = a(require("../app/469733.js"));
var u = require("../app/163755.js");
var s = a(require("../app/932325.js"));
var c = require("../app/787742.js");
var d = require("../app/435711.js");
var f = a(require("./858327.js"));
var p = require("../app/676345.js");
var m = a(require("../vendor/667294.js"));
var h = a(require("../app/156720.js"));
const g = {
  container: {
    borderTopStartRadius: "l147y7tb",
    borderTopEndRadius: "mjscftrx",
    borderBottomEndRadius: "fqwk616h",
    borderBottomStartRadius: "pkud3j3x",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    position: "g0rxnol2"
  },
  bubbleIn: {
    backgroundColor: "rrq4r3yd"
  },
  bubbleOut: {
    backgroundColor: "s0eflmyh"
  },
  media: {
    width: "sgifyl94",
    height: "pydpkpus",
    objectFit: "jpthtbts",
    flexShrink: "oq44ahr5"
  },
  body: {
    boxSizing: "cm280p3y",
    maxHeight: "o0vrdr7e"
  },
  title: {
    fontSize: "bze30y65",
    fontWeight: "hnx8ox4h"
  },
  subtitle: {
    fontSize: "ovllcyds",
    color: "pm5hny62",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    width: "ln8gz9je"
  }
};