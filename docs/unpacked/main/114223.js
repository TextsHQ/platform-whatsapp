var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msg: t,
    options: {
      unformat: n
    }
  } = e;
  const a = t.safe();
  if (a.type === o.MSG_TYPE.VIDEO && a.isViewOnce) {
    if ((0, i.isViewed)(a)) {
      return u.fbt._("Opened", null, {
        hk: "4eZcUM"
      });
    } else {
      return u.fbt._("Video", null, {
        hk: "2SOGaJ"
      });
    }
  }
  const s = (0, r.maybeAddFooter)(t.caption, t);
  if (s != null && s !== "") {
    if (n === true) {
      return (0, l.default)(t, s);
    } else {
      return s;
    }
  }
  if (t.isGif) {
    return "GIF";
  }
  return u.fbt._("Video", null, {
    hk: "2Yr2Dx"
  });
};
var r = require("./758669.js");
var o = require("../app/373070.js");
var l = a(require("../app/640391.js"));
var i = require("../app/239870.js");
var u = require("../vendor/548360.js");