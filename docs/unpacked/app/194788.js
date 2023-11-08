var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNewsletterContextForForwardedMsg = function (e) {
  var t;
  if (e.forwardedNewsletterMessageInfo != null) {
    return e.forwardedNewsletterMessageInfo;
  }
  if (!(0, i.getIsNewsletterMsg)(e)) {
    return;
  }
  const n = e.id.remote;
  const r = a.default.get(n);
  return {
    newsletterId: (0, o.toNewsletterWid)(n),
    newsletterName: r == null ? undefined : r.name,
    serverMessageId: (t = e.serverId) !== null && t !== undefined ? t : undefined
  };
};
var i = require("./787742.js");
var a = r(require("./876319.js"));
var o = require("./669050.js");