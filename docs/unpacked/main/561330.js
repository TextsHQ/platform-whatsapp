var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copyCouponCode = function (e) {
  const t = d(String(e.url || ""));
  if (t == null) {
    return;
  }
  (0, o.default)(t);
  u.ToastManager.open(c.default.createElement(i.Toast, {
    msg: s.fbt._("Code Copied", null, {
      hk: "bl6Ls"
    })
  }));
};
exports.getCouponCode = d;
exports.isCouponCodeButton = function (e) {
  const t = String(e.url || "");
  return (0, r.getABPropConfigValue)("is_coupon_button_enabled") && e.subtype === l.TEMPLATE_BUTTON_SUBTYPE.URL && t.startsWith((0, r.getABPropConfigValue)("coupon_copy_button_url")) && d(t) != null;
};
var r = require("../app/287461.js");
var o = a(require("../app/719838.js"));
var l = require("../app/517286.js");
var i = require("../app/625786.js");
var u = require("../app/390737.js");
var s = require("../vendor/548360.js");
var c = a(require("../vendor/667294.js"));
function d(e) {
  const t = e.substring((0, r.getABPropConfigValue)("coupon_copy_button_url").length);
  if (t.length > 0) {
    return t;
  } else {
    return null;
  }
}