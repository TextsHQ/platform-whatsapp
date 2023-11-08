var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsubscribeFromNewsletter = function (e) {
  return (0, i.createNonPersistedJob)("unsubscribeFromNewsletter", (0, r.default)(function* () {
    try {
      return yield (0, l.unsubscribeFromNewsletter)(e);
    } catch (e) {
      if (e.status === 400) {
        return true;
      }
      throw e;
    }
  }), {
    priority: o.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted();
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/775593.js");
var l = require("./974628.js");
var i = require("../app/899137.js");