var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
r(require("./670983.js"));
require("./556635.js");
require("./275909.js");
var a = require("./821732.js");
var o = require("./292167.js");
var s = require("./37237.js");
var l = require("./389293.js");
var u = require("./35109.js");
require("./962559.js");
require("./673168.js");
var c = r(require("./124928.js"));
function d() {
  return (d = (0, i.default)(function* (e, t, n) {
    if (c.default.isPSA(e)) {
      return [(0, l.genEncryptNotificationMsg)(e, "chat_psa")];
    }
    if (e.isBot()) {
      return [(0, a.genBotInitSystemMsg)(e)];
    }
    if (n === s.BizBotAutomatedType.FULL_3P) {
      return [(0, a.genBizBot3pDisclosureMessage)(e)];
    }
    const r = [];
    switch ((0, u.getReducedPrivacyMode)(t)) {
      case u.ReducedPrivacyMode.E2EE:
        r.push((0, l.genEncryptNotificationMsg)(e));
        break;
      case u.ReducedPrivacyMode.BSP:
        r.push((0, l.genNonE2ENotificationMsg)(e, "biz_privacy_mode_init_bsp"));
        break;
      case u.ReducedPrivacyMode.FB:
        r.push((0, l.genNonE2ENotificationMsg)(e, "biz_privacy_mode_init_fb"));
    }
    if (n === s.BizBotAutomatedType.PARTIAL_1P && (0, o.hasAcceptedBizBotTos)()) {
      r.push((0, a.genBizBot1pDisclosureMessage)(e));
    }
    return r;
  })).apply(this, arguments);
}