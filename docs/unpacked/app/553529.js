var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  let n = "";
  const type = e.get("type");
  const subtype = e.get("subtype");
  const displayName = e.displayName();
  const author = e.get("author");
  const body = e.get("body");
  let j;
  let Y;
  const shouldFormatAsLastMsg = !!t;
  if (type !== "gp2") {
    return n;
  }
  const W = e.recipients || [];
  const V = (0, h.getFormattedNames)(W, true);
  const H = W[0];
  const $ = H ? a.ContactCollection.get(H) : undefined;
  const z = $ ? (0, A.getFormattedName)($) : H ? (0, k.widToFormattedUser)(H) : "";
  switch (subtype) {
    case "add":
      n = (0, o.formatAddNotification)({
        author: author,
        authorClickable: displayName,
        subject: H,
        subjectClickable: z,
        participantsClickable: V
      });
      break;
    case "remove":
      n = (0, S.formatRemoveNotification)({
        author: author,
        authorClickable: displayName,
        subject: H,
        subjectClickable: z,
        participantsClickable: V
      });
      break;
    case "leave":
      n = (0, _.formatLeaveNotification)({
        body: body,
        subject: H,
        participantsClickable: V
      });
      break;
    case "picture":
      n = (0, y.formatPictureNotification)({
        author: author,
        authorClickable: displayName,
        body: body
      });
      break;
    case "subject":
      n = (0, M.formatSubjectNotification)((0, b.getChat)(e), author, displayName, body);
      break;
    case "modify":
      j = (0, k.widToFormattedUser)(author);
      Y = (0, k.widToFormattedUser)(H);
      n = j === displayName ? G.fbt._("{name} changed to {new_number}", [G.fbt._param("name", displayName), G.fbt._param("new_number", Y)], {
        hk: "4gSeHO"
      }) : G.fbt._("{name} changed their phone number to a new number.", [G.fbt._param("name", displayName)], {
        hk: "2543Ma"
      });
      break;
    case "create":
      n = (0, c.formatCreateNotification)({
        author: author,
        authorClickable: displayName,
        groupSubject: body,
        groupSubjectAsString: true
      });
      break;
    case "delete":
      n = (0, d.formatDeleteNotification)({
        chat: (0, b.getChat)(e)
      });
      break;
    case "promote":
    case "demote":
    case "linked_group_promote":
    case "linked_group_demote":
      n = (0, E.formatPromoteDemoteNotification)({
        subtype: subtype,
        subject: H,
        subjectClickable: z,
        participantsClickable: V,
        participantsCount: W.length
      });
      break;
    case "invite":
      n = (0, L.isMeAccount)(H) ? G.fbt._("You joined via an invite link", null, {
        hk: "3DdEt7"
      }) : G.fbt._("{name} joined via an invite link", [G.fbt._param("name", z)], {
        hk: "2b7kQR"
      });
      break;
    case "revoke_invite":
      n = (0, L.isMeAccount)(author) ? G.fbt._("You reset this group's invite link. Click to view the new invite link.", null, {
        hk: "27k9Gu"
      }) : G.fbt._("{name} reset this group's invite link. Click to view the new invite link.", [G.fbt._param("name", displayName)], {
        hk: "ye1F8"
      });
      break;
    case "description":
      n = (0, p.formatDescriptionNotification)({
        author: author,
        authorClickable: displayName,
        shouldFormatAsLastMsg: shouldFormatAsLastMsg
      });
      break;
    case "parent_group_description":
      n = (0, p.formatDescriptionNotification)({
        author: author,
        authorClickable: displayName,
        isParentGroup: true,
        shouldFormatAsLastMsg: shouldFormatAsLastMsg
      });
      break;
    case "announce":
      n = (0, l.formatAnnounceNotification)({
        author: author,
        authorClickable: displayName,
        body: body
      });
      break;
    case "restrict":
      n = (0, T.formatRestrictNotification)({
        author: author,
        authorClickable: displayName,
        templateParams: e.templateParams
      });
      break;
    case "no_frequently_forwarded":
      n = body === "on" ? (0, L.isMeAccount)(author) ? G.fbt._("You changed this group's settings to not allow messages that have been forwarded many times.", null, {
        hk: "16hyEI"
      }) : G.fbt._("{name} changed this group's settings to not allow messages that have been forwarded many times.", [G.fbt._param("name", displayName)], {
        hk: "RnKuI"
      }) : (0, L.isMeAccount)(author) ? G.fbt._("You changed this group's settings to allow messages that have been forwarded many times.", null, {
        hk: "3Ib1Hu"
      }) : G.fbt._("{name} changed this group's settings to allow messages that have been forwarded many times.", [G.fbt._param("name", displayName)], {
        hk: "4rcXNB"
      });
      break;
    case "announce_msg_bounce":
      n = G.fbt._("Only admins can message this group.", null, {
        hk: "O3Va5"
      });
      break;
    case "v4_add_invite_sent":
      n = C.default.t(164, {
        participants: V,
        _plural: W.length
      });
      break;
    case "v4_add_invite_join":
      n = C.default.t(163, {
        participants: V,
        _plural: W.length
      });
      break;
    case "ephemeral":
      return (0, f.formatEphemeralSetting)(e);
    case "growth_locked":
      n = G.fbt._("Invite via link became unavailable. Click to learn more.", null, {
        hk: "27u4jP"
      });
      break;
    case "growth_unlocked":
      n = G.fbt._("Invite via link became available again. Click to view the new invite link.", null, {
        hk: "4sDtjJ"
      });
      break;
    case "linked_group_join":
    case "parent_group_link":
    case "parent_group_link_membership_approval":
    case "sibling_group_link":
    case "sub_group_link":
    case "parent_group_unlink":
    case "sibling_group_unlink":
    case "sub_group_unlink":
    case "integrity_parent_group_unlink":
    case "delete_parent_group":
    case "delete_parent_group_unlink":
    case "auto_add":
    case "default_sub_group_admin_add":
    case "invite_auto_add":
      n = (0, g.formatLinkNotifAsFbt)(subtype, B, H, e.templateParams);
      break;
    case "community_participant_add_rich":
    case "community_invite_rich":
    case "community_invite_auto_add_rich":
    case "subgroup_admin_triggered_auto_add":
    case "subgroup_admin_triggered_invite_auto_add":
      n = (0, w.communityWelcomeMemberTitle)();
      break;
    case "sub_group_participant_add_rich":
    case "sub_group_invite_rich":
      n = (0, N.communitySubgroupWelcomeTitle)({
        templateParams: e.templateParams,
        clickable: false,
        author: author
      });
      break;
    case "community_link_parent_group_rich":
      n = (0, R.communityLinkGroupTitle)({
        templateParams: e.templateParams,
        clickable: false,
        author: author
      });
      break;
    case "community_create":
      n = (0, i.communityRichSystemMessageEnabled)() ? (0, D.communityWelcomeAdminTitle)({
        templateParams: e.templateParams,
        author: author,
        chat: (0, b.getChat)(e)
      }) : (0, g.formatLinkNotifAsFbt)(subtype, B, H, e.templateParams);
      break;
    case "membership_approval_mode":
    case "membership_approval_request":
    case "created_membership_requests":
      n = (0, m.default)(subtype, B, e.templateParams);
      break;
    case "ephemeral_keep_in_chat":
      n = G.fbt._("Disappearing messages now support keeping messages in the chat. Click to learn more.", null, {
        hk: "28BLkP"
      });
      break;
    case "default_sub_group_promote":
    case "default_sub_group_demote":
      n = G.fbt._("Community members have changed. Click to view", null, {
        hk: "2yadB0"
      });
      break;
    case "allow_admin_reports":
      n = (0, v.formatReportToAdminNotification)(B, e.templateParams);
      break;
    case "allow_non_admin_sub_group_creation":
      n = (0, s.default)((0, b.getChat)(e), e.templateParams);
      break;
    case "empty_subgroup_create":
      {
        const t = e.templateParams[2];
        n = (0, P.communityEmptySubgroupWelcomeTitle)(t);
        break;
      }
    case "created_subgroup_suggestion":
      n = (0, u.default)(B, e.templateParams, false);
      break;
    case "general_chat_add":
      {
        const t = e.templateParams[1];
        n = (0, I.communityGeneralChatWelcomeTitle)(t);
        break;
      }
    case "general_group_auto_add_disabled":
      n = (0, O.communityGeneralChatAutoAddDisabledNotification)((0, b.getChat)(e).formattedTitle);
      break;
    default:
      __LOG__(2)`wa:formatGroupNotification:unknown message subtype: ${subtype}`;
  }
  if (C.default.isRTL()) {
    n = C.default.forceRTL(String(n));
  }
  return n;
};
var i = require("./174834.js");
var a = require("./177938.js");
var o = require("./979406.js");
var s = r(require("./491451.js"));
var l = require("./631751.js");
var u = r(require("./709850.js"));
var c = require("./499136.js");
var d = require("./674864.js");
var p = require("./174581.js");
var f = require("./730514.js");
var _ = require("./152857.js");
var g = require("./969351.js");
var m = r(require("./660090.js"));
var h = require("./436355.js");
var y = require("./528272.js");
var E = require("./199572.js");
var S = require("./377327.js");
var v = require("./28136.js");
var T = require("./609972.js");
var M = require("./280378.js");
var A = require("./714574.js");
var b = require("./163755.js");
var C = r(require("./932325.js"));
var P = require("./764676.js");
var O = require("./1440.js");
var I = require("./752202.js");
var R = require("./594889.js");
var N = require("./460014.js");
var D = require("./460672.js");
var w = require("./49576.js");
var L = require("./459857.js");
var k = require("./931019.js");
var G = require("../vendor/548360.js");
r(require("../vendor/667294.js"));