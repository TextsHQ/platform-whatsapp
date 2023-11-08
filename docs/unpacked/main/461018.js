var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maybeQueryGroupDevice = function () {
  return m.apply(this, arguments);
};
exports.queryGroupInviteInfo = function () {
  return p.apply(this, arguments);
};
var r = a(require("../vendor/506479.js"));
var o = a(require("../vendor/348926.js"));
var l = require("../app/177938.js");
var i = a(require("../app/572147.js"));
var u = require("../app/853441.js");
var s = require("../app/862159.js");
var c = require("../app/271315.js");
var d = require("../app/510607.js");
const f = ["status", "subject", "parentGroupSubject", "membershipApprovalRequest"];
function p() {
  return (p = (0, o.default)(function* (e) {
    const t = yield (0, u.sendQueryGroupInvite)(e);
    const {
      status: a,
      subject: o,
      parentGroupSubject: s,
      membershipApprovalRequest: c
    } = t;
    const d = (0, r.default)(t, f);
    const p = new i.default(d);
    l.ContactCollection.gadd(p.id);
    const m = require("../app/351053.js").ChatCollection.get(p.id);
    return {
      status: a,
      subject: o,
      groupMetadata: p,
      inGroup: !!m && !m.isReadOnly,
      parentGroupSubject: s,
      membershipApprovalRequest: c === true
    };
  })).apply(this, arguments);
}
function m() {
  return (m = (0, o.default)(function* (e) {
    if (!e.deviceStale) {
      return;
    }
    if (e.deviceQueryPromise) {
      __LOG__(2)`maybeQueryGroupDevice: ${e.id} - skip duplicate query`;
      return e.deviceQueryPromise;
    }
    __LOG__(2)`maybeQueryGroupDevice: ${e.id} - start query device`;
    const t = e.groupType === s.GroupType.LINKED_ANNOUNCEMENT_GROUP && Boolean(e.incognito) ? (0, c.augmentedCagGroupMetadataParticipantList)(e) : e.participants.map(e => e.id);
    e.deviceQueryPromise = (0, d.syncDeviceListJob)(t);
    try {
      yield e.deviceQueryPromise;
      e.deviceStale = false;
      __LOG__(2)`maybeQueryGroupDevice: ${e.id} - complete query device`;
    } finally {
      e.deviceQueryPromise = null;
    }
  })).apply(this, arguments);
}