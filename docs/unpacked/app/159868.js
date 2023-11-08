var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mexHandleNewsletterJoin = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./849342.js");
var o = require("./73225.js");
var s = require("./422848.js");
var l = require("./14291.js");
var u = r(require("./556869.js"));
function c() {
  return (c = (0, i.default)(function* (e, t) {
    if (!(0, o.isNewsletterEnabled)()) {
      return;
    }
    const n = (0, a.parseMexNewsletterResponse)(t.xwa2_notify_newsletter_on_join);
    if (n == null) {
      throw (0, u.default)("cannot parse xwa2_notify_newsletter_on_join response");
    }
    const {
      chat: r,
      metadata: i,
      pic: c
    } = (0, l.mapNewsletterToModels)(n);
    try {
      return yield (0, s.handleNewsletterJoin)(r, i, c, n.idJid);
    } catch (e) {
      __LOG__(4, undefined, new Error(), true, ["mex", "newsletter"])`[mex][newsletter][notification][join]`;
      SEND_LOGS("mex-newsletter-notification-join-fail", 1, "mex", "newsletter");
    }
  })).apply(this, arguments);
}