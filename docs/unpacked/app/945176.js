var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryGroupJob = function (e, t, n) {
  return (0, c.createNonPersistedJob)("queryGroup", function () {
    var t = (0, i.default)(function* (t) {
      const n = yield (0, s.getGroupMetadata)(e);
      if (n != null && n.terminated) {
        return;
      }
      const r = yield (0, u.queryGroup)(t);
      if (r.id) {
        const e = r.participants.map(e => ({
          id: (0, d.toUserWid)(e.id),
          lid: e.lid ? (0, d.toUserWid)(e.lid) : null,
          displayName: e.displayName,
          phoneNumber: e.phoneNumber ? (0, d.toUserWid)(e.phoneNumber) : null
        }));
        yield Promise.all([(0, s.updateGroupMetadataTable)({
          groupInfos: [r]
        }), (0, l.updateParticipants)({
          group: r.id,
          participants: r.participants,
          version: r.pvId,
          groupInfo: r
        }), (0, o.createOrReplaceDisplayNamesAndLidPnMappings)(e, true)]);
        (0, a.clearAdminshipCache)(r.id.toString());
      }
      return r;
    });
    return function () {
      return t.apply(this, arguments);
    };
  }()).waitUntilCompleted({
    groupWid: e,
    request: t,
    phash: n
  });
};
var i = r(require("../vendor/348926.js"));
var a = require("./827467.js");
var o = require("./588090.js");
var s = require("./185212.js");
var l = require("./242382.js");
var u = require("./429267.js");
var c = require("./899137.js");
var d = require("./669050.js");