var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CtwaContextPreviewIcon = function (e) {
  const {
    hostname: t
  } = e;
  const n = (0, o.default)(e, f);
  if (t === c.HOSTNAME.INSTAGRAM) {
    return d.default.createElement(s.LogoInstagramIcon, n);
  }
  if ((0, l.isAdsAttributionEnabled)()) {
    return d.default.createElement(u.LogoFacebookRoundIcon, (0, r.default)({
      iconXstyle: p.iconColor
    }, n));
  }
  return d.default.createElement(i.LogoFacebookIcon, n);
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/72696.js");
var i = require("../app/872469.js");
var u = require("./286975.js");
var s = require("../app/717312.js");
var c = require("../app/728.js");
var d = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
const f = ["hostname"];
const p = {
  iconColor: {
    color: "kj15qrcq"
  }
};