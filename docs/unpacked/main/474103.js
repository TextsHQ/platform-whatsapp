Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCommunityAnnouncementGroup = function (e) {
  const t = e == null ? undefined : e.getSubgroupsMetadata();
  let n;
  if (t) {
    for (const e of t) {
      if (e.groupType === a.GroupType.LINKED_ANNOUNCEMENT_GROUP) {
        n = e;
      }
    }
  }
  return n;
};
exports.hideCagMaskedParticipants = function () {
  return !(0, r.pnhCagShowMaskedMembersEnabled)();
};
var a = require("../app/862159.js");
var r = require("../app/97858.js");