var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGroupData = function () {
  return d.apply(this, arguments);
};
exports.getParticipantRecord = function () {
  return p.apply(this, arguments);
};
exports.isCagAddon = function (e, t) {
  if (t.isCag === true && t.isIncognito === true) {
    return (0, o.getIsReaction)(e) || (0, o.getIsPollVote)(e);
  }
  return false;
};
var i = r(require("../vendor/348926.js"));
var a = require("./862159.js");
var o = require("./787742.js");
var s = require("./98742.js");
var l = require("./918475.js");
var u = require("./459857.js");
var c = require("./869513.js");
function d() {
  return (d = (0, i.default)(function* (e, t, n) {
    const r = yield (0, s.getGroupMetadataTable)().get(e);
    if (r == null) {
      __LOG__(3)`_getGroupData: no group metadata record found for: ${e}`;
    }
    const i = {
      isIncognito: null,
      amIAdmin: null,
      isCag: null,
      isLid: null,
      isLidAddressingMode: null,
      wamTypeOfGroup: null,
      participantCount: null,
      deviceCount: null,
      deviceSizeBucket: null
    };
    if (r != null) {
      const e = (0, a.getGroupTypeFromGroupMetadata)(r);
      i.wamTypeOfGroup = (0, a.groupTypeToWamEnum)(e);
      const t = e === a.GroupType.LINKED_ANNOUNCEMENT_GROUP;
      const o = r.incognito === true;
      i.isLid = t && o && n;
      i.isCag = t;
      i.isIncognito = o;
      i.isLidAddressingMode = r.isLidAddressingMode;
    }
    if (t != null) {
      const e = (0, u.assertGetMeUser)();
      const n = t.admins.includes(e.toString());
      i.amIAdmin = n;
      Object.assign(i, (0, c.getGroupMetricsFromDbRecord)(t));
    }
    return i;
  })).apply(this, arguments);
}
function p() {
  return (p = (0, i.default)(function* (e) {
    const t = yield (0, l.getParticipantTable)().get(e);
    if (t == null) {
      __LOG__(3)`_getParticipantRecord: no participants record found for: ${e}`;
    }
    return t;
  })).apply(this, arguments);
}