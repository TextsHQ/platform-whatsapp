var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return g.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./303967.js");
var o = require("./35234.js");
var s = require("./359987.js");
var l = require("./854379.js");
var u = require("./309570.js");
var c = require("./362626.js");
var d = require("./73225.js");
var p = require("./787671.js");
var f = require("./787111.js");
var _ = require("./251309.js");
function g() {
  return (g = (0, i.default)(function* (e) {
    yield u.newsletterDeleteQueue.wait();
    const {
      makeDeleteNotificationResponseAck: t,
      parsedRequest: n
    } = (0, a.receiveDeleteNotificationRPC)(e);
    const r = n.from;
    const i = (0, l.newsletterJidToWid)(r);
    const g = yield (0, o.getChatRecord)(i);
    if (!(0, d.isNewsletterEnabled)() || g == null) {
      return t();
    }
    try {
      if (n.isSender === "true") {
        yield (0, p.deleteNewsletterMetadata)(r.toString());
        yield (0, c.deleteNewsletterChat)(i);
        yield (0, p.deleteNewsletterPicture)(r.toString());
        yield (0, s.frontendSendAndReceive)("deleteNewsletter", {
          id: i,
          keep: false
        });
        return t();
      }
      const e = (0, f.genNewsletterDeletionSystemMessages)({
        id: r,
        name: g.name
      });
      yield (0, p.updateNewsletterMetadata)({
        id: r,
        terminated: true
      });
      yield (0, _.addNewsletterMsgsRecords)(e);
      yield (0, s.frontendSendAndReceive)("terminateNewsletter", {
        id: i,
        msgs: e
      });
    } catch (e) {
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter][metadata-notification] Failed to update the db records`;
      SEND_LOGS("newsletter-delete-notification-db-fail", 1, "newsletter");
    }
    return t();
  })).apply(this, arguments);
}