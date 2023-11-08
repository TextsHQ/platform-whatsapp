var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return s.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/35109.js");
var l = require("../app/968923.js");
var i = require("../app/851698.js");
var u = a(require("../app/124928.js"));
function s() {
  return (s = (0, r.default)(function* (e, t) {
    var n;
    if (!u.default.isUser(e.id.remote)) {
      return;
    }
    if (e.id.remote.isBot() || ((n = e.invokedBotWid) === null || n === undefined ? undefined : n.isBot())) {
      return;
    }
    const {
      privacyModeWhenSent: a
    } = e;
    if (a == null && t == null) {
      return;
    }
    if (a != null && t != null && a.privacyModeTs >= t.privacyModeTs) {
      return;
    }
    const r = (0, o.getReducedPrivacyMode)(t);
    if (r === (0, o.getReducedPrivacyMode)(a)) {
      return;
    }
    if (e.bizPrivacyStatus != null) {
      return void __LOG__(3)`msg.bizPrivacyStatus exist already, we can not assign a new value anymore`;
    }
    const l = c(r);
    e.bizPrivacyStatus = l;
    yield (0, i.getMessageTable)().merge(e.id.toString(), {
      bizPrivacyStatus: l
    });
  })).apply(this, arguments);
}
function c(e) {
  switch (e) {
    case o.ReducedPrivacyMode.E2EE:
      return l.WebMessageInfo$BizPrivacyStatus.E2EE;
    case o.ReducedPrivacyMode.BSP:
      return l.WebMessageInfo$BizPrivacyStatus.BSP;
    case o.ReducedPrivacyMode.FB:
      return l.WebMessageInfo$BizPrivacyStatus.FB;
  }
}