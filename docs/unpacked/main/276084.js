var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNewsletterSubscribers = function (e, t, n) {
  return (0, i.createNonPersistedJob)("getNewsletterSubscribers", (0, r.default)(function* () {
    const a = {
      view: n,
      newsletterJid: e
    };
    const r = yield (0, u.getCachedNewsletterSubscribers)(a);
    if (r != null) {
      return {
        subscribers: r
      };
    }
    const o = yield (0, l.getNewsletterSubscribers)(e, t);
    if ((o == null ? undefined : o.subscribers) != null) {
      yield (0, u.setCachedNewsletterSubscribers)(a, o.subscribers);
    }
    return o;
  }), {
    priority: o.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted();
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/775593.js");
var l = require("./717003.js");
var i = require("../app/899137.js");
var u = require("./803214.js");