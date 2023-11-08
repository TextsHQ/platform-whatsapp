var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNewsletterMessages = function (e, t, n) {
  (0, d.validateNewsletterJidOrThrow)(e);
  return (0, p.createNonPersistedJob)("getNewsletterMessages", (0, a.default)(function* () {
    const r = yield (0, c.queryNewsletterMessagesByJid)(e, t, n);
    const a = (0, l.jidWithTypeToWid)({
      jidType: "newsletter",
      newsletterJid: e
    });
    const o = yield (0, u.getMsgsAndAddOnsFromUpdates)(r.messages, a, r.timestamp);
    return (0, i.default)((0, i.default)({}, o), {}, {
      timestamp: (0, s.castToUnixTime)(r.timestamp)
    });
  }), {
    priority: o.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted();
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./775593.js");
var s = require("./632157.js");
var l = require("./854379.js");
var u = require("./570057.js");
var c = require("./802213.js");
var d = require("./263318.js");
var p = require("./899137.js");