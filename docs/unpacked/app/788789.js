var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    children: t = "",
    selectable: n,
    quoted: r
  } = e;
  return o.default.createElement(i.SelectableCode, {
    selectable: n,
    appTextTemplate: "`${appText}`",
    className: (0, s.default)(l.code, r && l.quotedColor, a.uiPadding.horiz4, a.uiPadding.vert2)
  }, t);
};
var i = require("./306703.js");
var a = require("./676345.js");
var o = r(require("../vendor/667294.js"));
var s = r(require("./156720.js"));
const l = {
  code: {
    borderTopStartRadius: "ho9ovbg7",
    borderTopEndRadius: "tcg15ap9",
    borderBottomEndRadius: "c5wy1lv0",
    borderBottomStartRadius: "bqysl6j9",
    backgroundColor: "tvi1twks",
    color: "f7gtpf57"
  },
  quotedColor: {
    color: "rr5ev6xu"
  }
};