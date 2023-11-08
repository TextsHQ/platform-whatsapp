Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheGroupMetrics = function (e) {
  if (e.participants == null || e.senderKey == null) {
    return;
  }
  a.set(e.groupId, Promise.resolve((0, i.getGroupMetricsFromDbRecord)(e)));
};
exports.getGroupMetrics = function (e) {
  if (!e.isGroup()) {
    return Promise.resolve(null);
  }
  const t = e.toString();
  if (!a.has(t)) {
    a.set(t, function (e) {
      return (0, r.getParticipantTable)().get(e).then(e => e && (0, i.getGroupMetricsFromDbRecord)(e)).catch(t => {
        __LOG__(3)`_getGroupMetricsFromDb: failed to get for ${e}: ${t}`;
      });
    }(t));
  }
  return a.get(t) || Promise.resolve(null);
};
var r = require("./918475.js");
var i = require("./869513.js");
const a = new Map();