var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  switch (e.type) {
    case i.OUTWARD_TYPES.IMAGE:
      if ((0, r.isHdPhoto)(e.height, e.width) && (0, l.isReceiveHQPhotoEnabled)()) {
        return s.default.createElement(o.IcHdLabelSmallIcon, {
          xstyle: e.xstyle,
          iconXstyle: c.icon
        });
      }
      break;
    case i.OUTWARD_TYPES.VIDEO:
      if ((0, r.isHdVideo)(e.height, e.width)) {
        return s.default.createElement(o.IcHdLabelSmallIcon, {
          xstyle: e.xstyle,
          iconXstyle: c.icon
        });
      } else {
        return s.default.createElement(u.MsgVideoIcon, null);
      }
  }
  return null;
};
var r = require("../app/270183.js");
var o = require("./114521.js");
var l = require("../app/75421.js");
var i = require("../app/172259.js");
var u = require("./352656.js");
var s = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
const c = {
  icon: {
    color: "kvstyow8"
  }
};