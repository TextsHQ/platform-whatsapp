var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msg: t,
    options: n
  } = e;
  const {
    unformat: a = true
  } = n;
  if (t.isFromTemplate || t.isDynamicReplyButtonsMsg) {
    const e = (0, r.maybeAddFooter)(t.caption, t);
    if (e != null) {
      if (a) {
        return (0, o.default)(t, e);
      } else {
        return e;
      }
    } else {
      return t.loc || l.fbt._("Location", null, {
        hk: "3j6lTi"
      });
    }
  }
  if (t.isLive) {
    return t.comment || l.fbt._("Live location", null, {
      hk: "4hn7as"
    });
  }
  return t.loc || l.fbt._("Location", null, {
    hk: "3j6lTi"
  });
};
var r = require("./758669.js");
var o = a(require("../app/640391.js"));
var l = require("../vendor/548360.js");