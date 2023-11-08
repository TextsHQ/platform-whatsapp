var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eventTypeFromMsgType = function (e) {
  const t = e.type;
  const n = e.subtype;
  let r;
  r = t === s.MSG_TYPE.GP2 ? n === "subject" ? o.EventType.NOTEWORTHY : n === "add" || n === "invite" || n === "invite_auto_add" || n === "linked_group_join" || n === "community_invite_auto_add_rich" ? e.recipients && (0, l.isMePrimary)(e.recipients[0]) ? o.EventType.SIGNIFICANT : o.EventType.IGNORE : n === "linked_group_promote" || n === "linked_group_demote" ? u.default.isGroup(e.id.remote) && e.recipients && (0, l.isMePrimary)(e.recipients[0]) && !(0, l.isMeAccount)(e.author) ? o.EventType.SIGNIFICANT : o.EventType.IGNORE : n === "remove" ? e.recipients && (0, l.isMePrimary)(e.recipients[0]) ? o.EventType.NOTEWORTHY : o.EventType.IGNORE : n === "create" || n === "empty_subgroup_create" || n === "general_chat_add" ? o.EventType.NOTEWORTHY : n === "created_subgroup_suggestion" ? o.EventType.DEFAULT : n === "parent_group_link" || n === "auto_add" || n === "default_sub_group_admin_add" || n === "community_participant_add_rich" || n === "subgroup_admin_triggered_auto_add" || n === "subgroup_admin_triggered_invite_auto_add" || n === "sibling_group_link" || n === "community_invite_rich" || n === "sub_group_participant_add_rich" || n === "sub_group_invite_rich" || n === "community_link_parent_group_rich" ? o.EventType.SIGNIFICANT : n === "membership_approval_request" || n === "created_membership_requests" || n === "sibling_group_unlink" ? o.EventType.NOTEWORTHY : o.EventType.IGNORE : t === s.MSG_TYPE.BROADCAST_NOTIFICATION || t === s.MSG_TYPE.NOTIFICATION || t === s.MSG_TYPE.E2E_NOTIFICATION ? n === "create" ? o.EventType.NOTEWORTHY : o.EventType.IGNORE : t === s.MSG_TYPE.GROUPS_V4_INVITE && (0, l.isMePrimary)(e.from) ? o.EventType.IGNORE : t === s.MSG_TYPE.CALL_LOG ? o.EventType.NOTEWORTHY : e.broadcast ? u.default.isBroadcast(e.id.remote) ? o.EventType.NOTEWORTHY : o.EventType.IGNORE : t === s.MSG_TYPE.REVOKED ? o.EventType.IGNORE : u.default.isPSA(e.id.remote) ? e.ack === i.ACK.RECEIVED ? o.EventType.DEFAULT : o.EventType.AMBIENT : t === s.MSG_TYPE.CIPHERTEXT || t === s.MSG_TYPE.OVERSIZED ? o.EventType.AMBIENT : t === s.MSG_TYPE.NOTIFICATION_TEMPLATE ? n === "sender_invite" || (n === "chat_assignment" || n === "chat_assignment_unassign") && (0, a.shouldReorderChatOnAssignment)(n === "chat_assignment_unassign") ? o.EventType.NOTEWORTHY : o.EventType.IGNORE : t === s.MSG_TYPE.PROTOCOL && n === "ephemeral_setting" || t === s.MSG_TYPE.UNKNOWN && e.futureproofType === s.MSG_TYPE.REACTION || t === s.MSG_TYPE.REACTION ? o.EventType.IGNORE : o.EventType.DEFAULT;
  return r;
};
var i = require("./402994.js");
var a = require("./72696.js");
var o = require("./147980.js");
var s = require("./373070.js");
var l = require("./459857.js");
var u = r(require("./124928.js"));