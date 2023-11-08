var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./225148.js"));
var a = require("./116594.js");
var o = r(require("../vendor/667294.js"));
exports.default = e => {
  let {
    emoji: t,
    selectable: n,
    size: r,
    xstyle: s
  } = e;
  if (r === "xlarge") {
    return o.default.createElement(a.LargeEmoji, {
      emoji: t,
      xstyle: s,
      size: a.SIZE.XLARGE,
      element: "span",
      selectable: n
    });
  } else {
    return o.default.createElement(i.default, {
      emoji: t,
      xstyle: s,
      selectable: n,
      size: r
    });
  }
};