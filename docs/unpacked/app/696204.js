var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNewsletterMessageUpdates = function (e, t) {
  return (0, c.createNonPersistedJob)("getNewsletterMessageUpdates", (0, o.default)(function* () {
    const {
      ids: n
    } = t;
    const r = (0, a.default)(t, p);
    const {
      updates: o,
      timestamp: s
    } = yield (0, u.getNewsletterMessageUpdatesQuery)(e, r);
    const c = yield (0, l.getMsgsAndAddOnsFromUpdates)(o, (0, d.createWid)(e), s);
    yield (0, l.updateAddOnDbRecords)((0, i.default)((0, i.default)({}, c), {}, {
      ids: n,
      timestamp: s
    }));
    return (0, i.default)((0, i.default)({}, c), {}, {
      timestamp: s,
      ids: n
    });
  }), {
    priority: s.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted();
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/506479.js"));
var o = r(require("../vendor/348926.js"));
var s = require("./775593.js");
var l = require("./570057.js");
var u = require("./830882.js");
var c = require("./899137.js");
var d = require("./669050.js");
const p = ["ids"];