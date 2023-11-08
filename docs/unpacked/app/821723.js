var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    children: t = "",
    inline: n = false
  } = e;
  if (n) {
    return t;
  }
  const r = [];
  (0, a.groupListChildren)(t).forEach((e, t) => {
    if (e.isList) {
      r.push(s.default.createElement("ol", {
        key: t,
        className: (0, l.default)(u, o.uiMargin.start30, o.uiMargin.vert4),
        dir: i.default.isRTL() ? "rtl" : "ltr"
      }, e.children));
    } else {
      r.push(e.children);
    }
  });
  return r;
};
var i = r(require("./932325.js"));
var a = require("./48121.js");
var o = require("./676345.js");
var s = r(require("../vendor/667294.js"));
var l = r(require("./156720.js"));
const u = {
  wordBreak: "cw3vfol9",
  whiteSpace: "hmy10g0s",
  position: "g0rxnol2",
  listStyle: "duniunel"
};