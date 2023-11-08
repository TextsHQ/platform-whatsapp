var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteNewsletter = function (e) {
  return (0, c.createNonPersistedJob)("deleteNewsletter", (0, r.default)(function* () {
    try {
      yield (0, u.deleteNewsletterQuery)(e);
      yield (0, s.deleteNewsletterMetadata)(e.toString());
      yield (0, i.deleteNewsletterChat)((0, l.newsletterJidToWid)(e));
      yield (0, s.deleteNewsletterPicture)(e.toString());
      return true;
    } catch (e) {
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter][deleteNewsletter] Failed to delete newsletter`;
      SEND_LOGS("newsletter-delete-job-fail", 1, "newsletter");
      throw e;
    }
  }), {
    priority: o.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted();
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/775593.js");
var l = require("../app/854379.js");
var i = require("../app/362626.js");
var u = require("./469001.js");
var s = require("../app/787671.js");
var c = require("../app/899137.js");