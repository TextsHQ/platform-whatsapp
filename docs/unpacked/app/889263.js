var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pruneExpiredMessagesWithAddOns = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./359987.js");
var o = require("./212894.js");
var s = r(require("./565754.js"));
var l = require("./323829.js");
function u() {
  return (u = (0, i.default)(function* () {
    const e = yield (0, o.pruneExpiredMessages)();
    const t = e.length;
    if (t > 0) {
      const r = require("./628905.js").getJobManager;
      const i = [];
      const o = new Set();
      e.forEach(e => {
        const t = e.id.toString();
        o.add(s.default.fromString(t).remote.toString());
        i.push(t);
      });
      const u = Array.from(o.values()).join(",").toString();
      (0, a.frontendFireAndForget)("deleteModelsForLastAddOnPreview", {
        messagesIds: i
      });
      yield r().waitUntilPersisted(l.jobSerializers.deleteAddOns(u, i));
      __LOG__(2)`[offline-resume][utils] pruneExpiredMessagesWithAddOns: pruneExpiredMessages pruned ${t} msg(s)`;
    }
  })).apply(this, arguments);
}