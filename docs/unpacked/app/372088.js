var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logMetricsForDataApplied = function () {
  return f.apply(this, arguments);
};
exports.logMetricsForMutationLength = function (e) {
  new s.MdAppStateMessageRangeWamEvent({
    additionalMessagesCount: e
  }).commit();
};
var i = r(require("../vendor/348926.js"));
var a = require("./220816.js");
var o = require("./632157.js");
var s = require("./685703.js");
var l = require("./569852.js");
var u = require("./366891.js");
var c = require("./336897.js");
var d = require("./599764.js");
var p = require("./658982.js");
function f() {
  return (f = (0, i.default)(function* (e, t, n) {
    new l.MdBootstrapDataAppliedWamEvent({
      mdBootstrapPayloadType: d.MD_BOOTSTRAP_PAYLOAD_TYPE.NON_CRITICAL,
      mdBootstrapSource: p.MD_BOOTSTRAP_SOURCE.APP_STATE,
      mdSessionId: yield u.MdSyncFieldStatsMeta.getMdSessionId(),
      mdTimestamp: (0, o.unixTimeMs)(),
      mdBootstrapStepDuration: n,
      collection: (0, c.collectionNameToMetric)(e),
      usedSnapshot: t === a.SyncdBootstrapDataAppliedSnapshotUsed.SNAPSHOT_USED
    }).commit();
  })).apply(this, arguments);
}