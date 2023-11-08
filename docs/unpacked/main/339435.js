var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    dir: t,
    footer: n,
    isShown: a,
    msg: p,
    rtl: m,
    type: h,
    trusted: g
  } = e;
  const E = m !== l.default.isRTL();
  if (a && n != null) {
    const {
      formatters: e,
      selectable: a
    } = p.isDynamicReplyButtonsMsg ? (0, o.enableHeaderAndFooterFormatting)((0, u.getFooterLinks)(p), g === true) : {};
    return c.default.createElement(i.default, {
      className: (0, d.default)(f.footer, h !== s.MSG_TYPE.CHAT && f.isMedia, E && f.dirMismatch),
      spacer: !m,
      msg: p
    }, c.default.createElement(r.EmojiText, {
      text: n,
      direction: t,
      dirMismatch: E,
      selectable: a,
      formatters: e
    }));
  }
  return null;
};
var r = require("../app/305521.js");
var o = require("./502360.js");
var l = a(require("../app/932325.js"));
var i = a(require("./19805.js"));
var u = require("../app/44118.js");
var s = require("../app/373070.js");
var c = a(require("../vendor/667294.js"));
var d = a(require("../app/156720.js"));
const f = {
  footer: {
    boxSizing: "cm280p3y",
    paddingTop: "n1yiu2zv",
    paddingEnd: "f9ovudaz",
    paddingBottom: "s8gyl5p1",
    paddingStart: "gx1rr48f",
    fontSize: "ovllcyds",
    lineHeight: "sid27bd6",
    color: "hp667wtd"
  },
  isMedia: {
    paddingTop: "qbqilfqo",
    paddingEnd: "jfqm35v0",
    paddingBottom: "eb4rp10x",
    paddingStart: "mhcwslh8"
  },
  dirMismatch: {
    paddingBottom: "myel2vfb"
  }
};