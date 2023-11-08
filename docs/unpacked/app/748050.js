var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contactSync = function () {
  return l.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./691195.js");
var o = require("./978538.js");
var s = require("./669050.js");
function l() {
  return (l = (0, i.default)(function* (e) {
    const t = yield (0, a.getContactTable)().all();
    if (t.length > 0) {
      const n = t.map(e => (0, s.createWid)(e.id)).filter(e => e.isEligibleForUSync());
      return (0, o.syncContactListInChunksJob)(n, e);
    }
  })).apply(this, arguments);
}