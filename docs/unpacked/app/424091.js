var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteNewsletterMessageAddOns = function (e) {
  return (0, s.createNonPersistedJob)("deleteNewsletterMessageAddOns", (0, i.default)(function* () {
    const t = e.toString();
    const n = (yield (0, l.getMessageTable)().startsWithAnyOf(["internalId"], [t])).map(e => e.id);
    yield Promise.all(u.map(e => e(n)));
  }), {
    priority: a.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted();
};
var i = r(require("../vendor/348926.js"));
var a = require("./775593.js");
var o = require("./978925.js");
var s = require("./899137.js");
var l = require("./851698.js");
const u = [e => (0, o.bulkRemoveNewsletterReactionsForParentMsg)(e.map(e => e))];