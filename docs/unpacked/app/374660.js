var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canSendToGroup = function (e) {
  const t = (0, _.unproxy)(e);
  return t.canSend && !v(t) && !E(t);
};
exports.getGroupParticipantsCount = function (e) {
  var t;
  const n = e.participants;
  const r = (t = e.size) !== null && t !== undefined ? t : 0;
  if (n.iAmAdmin()) {
    return n.length;
  } else {
    return r;
  }
};
exports.getOneToOneContactFromGroupContact = function (e) {
  const t = (0, h.getMaybeMeLidUser)();
  if (t == null ? undefined : t.equals(e)) {
    return (0, h.getMeUser)();
  }
  if ((0, a.getABPropConfigValue)("lid_groups_create_lid_individual_chats")) {
    return e;
  }
  if (!e.isLid()) {
    return e;
  }
  const n = (0, s.getPhoneNumber)(e);
  if (n == null) {
    __LOG__(4, undefined, new Error(), true)`getOneToOneContactFromGroupContact: Participant LID does not have PN mapping`;
    SEND_LOGS("lid-group-get-one-to-one-contact");
    return e;
  }
  return n;
};
exports.getParticipantCount = function (e) {
  var t;
  const n = (0, _.unproxy)(e);
  return ((t = n.groupMetadata) === null || t === undefined ? undefined : t.participants.length) || 1;
};
exports.isCommunityAnnouncementGroup = isCommunityAnnouncementGroup;
exports.isCommunityGeneralGroup = function (e) {
  var t;
  const n = (0, _.unproxy)(e);
  return (0, c.communitiesEnabled)() && n.isGroup && ((t = n.groupMetadata) === null || t === undefined ? undefined : t.groupType) === f.GroupType.LINKED_GENERAL_GROUP;
};
exports.isDeactivatedCommunityAnnouncementGroup = function (e) {
  var t;
  const n = (0, _.unproxy)(e);
  return ((t = n.groupMetadata) === null || t === undefined ? undefined : t.groupType) === f.GroupType.LINKED_ANNOUNCEMENT_GROUP && E(n);
};
exports.isIntegritySuspendedDefaultSubgroup = function (e) {
  var t;
  const n = (0, _.unproxy)(e);
  return ((t = n.groupMetadata) === null || t === undefined ? undefined : t.groupType) === f.GroupType.LINKED_ANNOUNCEMENT_GROUP && v(n) && (0, a.getABPropConfigValue)("community_suspend_v0_enabled");
};
exports.isInviteGrowthLockedGroup = function (e) {
  var t;
  const n = (0, _.unproxy)(e);
  return n.isGroup && ((t = n.groupMetadata) === null || t === undefined ? undefined : t.growthLockType) === "invite" && (n.groupMetadata.growthLockExpiration || 0) > (0, i.unixTime)();
};
exports.isSupportGroup = y;
exports.isSupportGroupOrSupportAdmin = function (e) {
  const t = (0, _.unproxy)(e);
  return y(t) || (0, o.default)(t.id.user);
};
exports.isSuspendedGroup = v;
exports.isTerminatedGroup = E;
exports.isTerminatedGroupOrNotMember = function (e) {
  var t;
  if (!e) {
    return false;
  }
  const n = (0, _.unproxy)(e);
  const r = E(n);
  const i = v(n) && !((t = n.groupMetadata) === null || t === undefined ? undefined : t.participants.iAmMember());
  return (r || i) && !isCommunityAnnouncementGroup(n);
};
exports.shouldBlockCall = function (e) {
  return v(e) || E(e);
};
exports.shouldIncludeEntityIdInAppealRequest = function () {
  return (0, a.getABPropConfigValue)("group_suspend_appeal_include_entity_id_enabled");
};
exports.updateCanSend = M;
exports.updateReadOnly = function (e) {
  var t;
  const n = (0, _.unproxy)(e);
  if (y(n) && n.isReadOnly) {
    return;
  }
  let r = Promise.resolve();
  if (n.isGroup && !((t = n.groupMetadata) === null || t === undefined ? undefined : t.stale)) {
    var i;
    var a;
    const e = ((i = n.groupMetadata) === null || i === undefined ? undefined : i.groupType) !== f.GroupType.COMMUNITY && (!((a = n.groupMetadata) === null || a === undefined ? undefined : a.participants.iAmMember()) || E(n));
    if (n.isReadOnly !== e) {
      __LOG__(2)`chat:updateReadOnly:old ${n.isReadOnly}, new ${e}`;
      r = (0, d.updateChatTable)(n.id, {
        isReadOnly: e
      }).then(() => {
        n.isReadOnly = e;
        M(n);
      });
    }
  }
  r.then(() => {
    if (n.isBroadcast) {
      T(n);
    }
  });
};
exports.updateTitle = T;
var i = require("./632157.js");
var a = require("./287461.js");
var o = r(require("./143589.js"));
var s = require("./12643.js");
var l = require("./354458.js");
var u = require("./292167.js");
var c = require("./174834.js");
var d = require("./840089.js");
var p = require("./714574.js");
var f = require("./862159.js");
var _ = require("./163139.js");
var g = require("./168661.js");
var m = require("./227834.js");
var h = require("./459857.js");
function y(e) {
  var t;
  if (!e) {
    return false;
  }
  const n = (0, _.unproxy)(e);
  return n.isGroup && ((t = n.groupMetadata) === null || t === undefined ? undefined : t.support) === true;
}
function E(e) {
  var t;
  const n = (0, _.unproxy)(e);
  return n.isGroup && !!((t = n.groupMetadata) === null || t === undefined ? undefined : t.terminated);
}
function isCommunityAnnouncementGroup(e) {
  var t;
  const n = (0, _.unproxy)(e);
  return (0, c.communitiesEnabled)() && n.isGroup && ((t = n.groupMetadata) === null || t === undefined ? undefined : t.groupType) === f.GroupType.LINKED_ANNOUNCEMENT_GROUP;
}
function v(e) {
  var t;
  if (!e) {
    return false;
  }
  const n = (0, _.unproxy)(e);
  return n.isGroup && !!((t = n.groupMetadata) === null || t === undefined ? undefined : t.suspended);
}
function T(e) {
  var t;
  var n;
  var r;
  if (e.isBroadcast) {
    e.formattedTitle = (t = e.contact.name) !== null && t !== undefined ? t : ((n = (r = e.groupMetadata) === null || r === undefined ? undefined : r.participants) !== null && n !== undefined ? n : []).map(function (e) {
      return (0, p.getFormattedShortName)(e.contact);
    }).join(", ");
  } else if (e.isUser) {
    var i;
    e.formattedTitle = (i = (0, p.getFormattedUser)(e.contact)) !== null && i !== undefined ? i : "";
  } else if (e.isGroup) {
    var a;
    var o;
    e.formattedTitle = (a = e.contact.name) !== null && a !== undefined ? a : (o = e.groupMetadata) === null || o === undefined ? undefined : o.subject;
  } else if (e.isNewsletter) {
    var s;
    var l;
    e.formattedTitle = (s = e.contact.name) !== null && s !== undefined ? s : (l = e.newsletterMetadata) === null || l === undefined ? undefined : l.name;
  }
}
function M(e, t) {
  var n;
  if (e.isReadOnly || e.isDeprecated || e.isAnnounceGrpRestrict || (0, m.shouldBlockByTos)(e.contact) || (0, g.shouldBlockByCountry)(e.contact) || !(0, l.isBotEnabled)() && e.id.isBot()) {
    e.canSend = false;
    return false;
  } else if (!((n = t != null ? t : e.contact.businessProfile) === null || n === undefined ? undefined : n.isBizBot3p) || (0, l.isBizBot3pAvailable)() && (0, u.hasAcceptedBizBotTos)()) {
    if (e.isUser) {
      return e.canSend = !(e.contact.isContactBlocked || e.isPSA || e.isIAS || e.isDeprecated);
    } else {
      e.canSend = true;
      return true;
    }
  } else {
    e.canSend = false;
    return false;
  }
}