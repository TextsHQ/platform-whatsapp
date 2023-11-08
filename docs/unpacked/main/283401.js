var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMaybeRequestWelcomeMessage = function (e) {
  const t = (0, u.useBusinessProfile)((0, r.isBizBot1pEnabled)() || (0, r.isBizBot3pAvailable)() ? e.id : null, ["isBizBot1p", "isBizBot3p"]);
  const n = (0, d.default)(() => {
    var t;
    var n;
    if ((0, r.isBizBot1pEnabled)() && (0, o.hasAcceptedBizBotTos)() && ((t = e.contact.businessProfile) === null || t === undefined ? undefined : t.isBizBot1p) === true && !e.hasRequestedWelcomeMsg || (0, r.isBizBot3pAvailable)() && (0, o.hasAcceptedBizBotTos)() && ((n = e.contact.businessProfile) === null || n === undefined ? undefined : n.isBizBot3p) === true && !e.hasRequestedWelcomeMsg && function (e) {
      if (e.msgsLength === 0) {
        return true;
      }
      if (e.msgsLength > 2) {
        return false;
      }
      return e.msgs.filter(e => e.type !== "e2e_notification" && e.type !== "notification_template").length === 0;
    }(e)) {
      (0, l.sendBotRequestWelcome)(e);
    }
  });
  (0, c.useListener)(i.TosManager, "change", n);
  (0, s.useEffect)(() => n(), [t == null ? undefined : t.isBizBot1p, t == null ? undefined : t.isBizBot3p, e]);
};
var r = require("../app/354458.js");
var o = require("../app/292167.js");
var l = require("./225083.js");
var i = require("../app/87429.js");
var u = require("./508228.js");
var s = require("../vendor/667294.js");
var c = require("../app/808446.js");
var d = a(require("../app/17533.js"));