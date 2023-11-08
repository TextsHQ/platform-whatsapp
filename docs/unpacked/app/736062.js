var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.muteNewsletter = function (e) {
  return (0, l.createNonPersistedJob)("muteNewsletter", (0, i.default)(function* () {
    const t = (yield (0, s.newsletterMuteQuery)(e)).filter(e => e.subscriberNotFoundMixin == null).map(e => e.jid);
    try {
      return yield (0, u.getChatTable)().bulkCreateOrMerge(t.map(e => ({
        id: e,
        muteExpiration: -1
      })));
    } catch (e) {
      if (!(e instanceof o.DbOnLogoutAbort)) {
        __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter][muteNewsletter] Failed to persist the mutation on db`;
        SEND_LOGS("newsletter-mute-db-fail", 1, "newsletter");
      }
      throw e;
    }
  }), {
    priority: a.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted();
};
var i = r(require("../vendor/348926.js"));
var a = require("./775593.js");
var o = require("./288057.js");
var s = require("./956432.js");
var l = require("./899137.js");
var u = require("./61229.js");