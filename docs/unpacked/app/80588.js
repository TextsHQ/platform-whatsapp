var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return f.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./93035.js");
var o = require("./359987.js");
var s = require("./854379.js");
var l = require("./727615.js");
var u = require("./362626.js");
var c = require("./424091.js");
var d = require("./73225.js");
var p = require("./787671.js");
function f() {
  return (f = (0, i.default)(function* (e) {
    const {
      makeLeaveNotificationResponseAck: t,
      parsedRequest: n
    } = (0, a.receiveLeaveNotificationRPC)(e);
    const r = n.from;
    if (!(0, d.isNewsletterEnabled)()) {
      return t();
    }
    const i = (0, s.newsletterJidToWid)(r);
    if (!(yield (0, l.doesNewsletterExistInStorage)(r))) {
      (0, o.frontendFireAndForget)("updateNewsletterSubscriberCount", {
        id: i,
        update: {
          increment: -1
        }
      });
      return t();
    }
    try {
      yield (0, p.deleteNewsletterMetadata)(r);
      yield (0, c.deleteNewsletterMessageAddOns)(r);
      yield (0, u.deleteNewsletterChat)(i);
      (0, o.frontendFireAndForget)("deleteNewsletter", {
        id: i,
        keep: true
      });
    } catch (e) {
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter][leave-notification] Failed to update the db`;
      SEND_LOGS("newsletter-leave-notification-db-fail", 1, "newsletter");
    }
    return t();
  })).apply(this, arguments);
}