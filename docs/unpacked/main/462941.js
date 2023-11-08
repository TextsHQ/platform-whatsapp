var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNewsletterMessageReactionSenderList = function (e, t) {
  return (0, i.createNonPersistedJob)("getNewsletterMessageReactionSenderList", (0, r.default)(function* () {
    return (0, l.getNewsletterMessageReactionSenderList)(e, t);
  }), {
    priority: o.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted();
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/775593.js");
var l = require("./662543.js");
var i = require("../app/899137.js");