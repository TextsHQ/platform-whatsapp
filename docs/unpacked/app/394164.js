Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SUBGROUP_V2_CHAT_CELL_HEIGHT = undefined;
exports.cagAndCommunitySubjectDiffer = function (e) {
  if (!e || !e.contact.name) {
    return false;
  }
  const t = (0, a.chatCollection)().findFirst(t => {
    var n;
    var r;
    return ((n = t.groupMetadata) === null || n === undefined ? undefined : n.parentGroup) === e.id && ((r = t.groupMetadata) === null || r === undefined ? undefined : r.defaultSubgroup);
  });
  if (!t || !t.contact.name) {
    return false;
  }
  return t.contact.name !== e.contact.name;
};
exports.canAddGroupToCommunity = function (e) {
  if (!(e == null ? undefined : e.groupMetadata) || u(e)) {
    return false;
  }
  const t = e.groupMetadata;
  const n = t.participants;
  return Boolean(t.allowNonAdminSubGroupCreation) && (0, o.memberAddedGroupsM1Enabled)() || n.iAmAdmin() || c(e) || (0, o.memberSuggestedGroupsEnabled)();
};
exports.canDeactivateCommunity = function (e) {
  if (!(e == null ? undefined : e.groupMetadata) || u(e)) {
    return false;
  }
  return c(e);
};
exports.formatSubgroupUpdateTypes = function (e, t) {
  return e.map(e => {
    var n;
    var r;
    const i = t ? (n = (0, a.chatCollection)().get(e)) === null || n === undefined ? undefined : n.formattedTitle : (r = (0, a.unjoinedSubgroupMetaDataCollection)().get(e)) === null || r === undefined ? undefined : r.subject;
    return {
      id: e,
      subject: i != null ? i : ""
    };
  });
};
exports.getCagIdFromCommunity = function (e) {
  return (0, a.groupMetaDataCollection)().filter(t => t.parentGroup === e && t.defaultSubgroup === true).map(e => e.id);
};
exports.isCommunityCreator = c;
exports.isIntegritySuspendedCommunity = u;
exports.isSubgroupSuggestionCreation = function (e) {
  if (!e) {
    return false;
  }
  const t = (0, a.groupMetaDataCollection)().get(e);
  if (!t) {
    return false;
  }
  const n = t.participants.iAmAdmin();
  return t.allowNonAdminSubGroupCreation !== true && !n && (0, o.memberSuggestedGroupsEnabled)();
};
var r = require("./287461.js");
var i = require("./374660.js");
var a = require("./503268.js");
var o = require("./174834.js");
var s = require("./862159.js");
var l = require("./459857.js");
function u(e) {
  var t;
  return (e == null || (t = e.groupMetadata) === null || t === undefined ? undefined : t.groupType) === s.GroupType.COMMUNITY && (0, i.isSuspendedGroup)(e) && (0, r.getABPropConfigValue)("community_suspend_v0_enabled");
}
function c(e) {
  if (!(e == null ? undefined : e.groupMetadata)) {
    return false;
  }
  const t = e.groupMetadata;
  return t.participants.iAmSuperAdmin() || (0, l.isMeAccount)(t.owner);
}
exports.SUBGROUP_V2_CHAT_CELL_HEIGHT = 91;