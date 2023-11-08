var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.computeParticipantChange = l;
exports.maybePostGroupSyncMetrics = function (e, t, n, r) {
  const {
    added: u,
    removed: c
  } = l(e, t);
  if (u !== 0 || c !== 0) {
    __LOG__(2)`postGroupParticipantSyncMetric: added: ${u}, removed: ${c}`;
    const t = new i.MdGroupParticipantMissAckWamEvent();
    t.messageIsRevoke = (0, a.isRevokeMsg)(n);
    t.groupSizeBucket = (0, s.default)((r == null ? undefined : r.participantCount) || 0);
    t.typeOfGroup = (r == null ? undefined : r.wamTypeOfGroup) || o.TYPE_OF_GROUP_ENUM.GROUP;
    t.isLid = t.isLid = e.some(e => e.isLid());
    t.participantAddCount = u;
    t.participantRemoveCount = c;
    t.commitAndWaitForFlush().catch(e => {
      __LOG__(3)`maybePostGroupSyncMetrics: event commit failed with ${e}`;
    });
  }
  __LOG__(2)`postGroupParticipantSyncMetric: skip due to no participant change`;
};
var i = require("./25351.js");
var a = require("./608182.js");
var o = require("./21008.js");
var s = r(require("./351199.js"));
function l(e, t) {
  const n = new Set(e.map(String));
  const r = new Set(t.map(String));
  return {
    added: t.filter(e => !n.has(String(e))).length,
    removed: e.filter(e => !r.has(String(e))).length
  };
}