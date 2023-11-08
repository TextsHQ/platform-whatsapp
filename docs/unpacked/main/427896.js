var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/348926.js"));
var o = require("../app/287461.js");
var l = a(require("./775025.js"));
var i = require("../app/374660.js");
var u = require("../app/396574.js");
var s = require("../app/780549.js");
var c = require("../app/174834.js");
var d = require("../app/103440.js");
var f = require("../app/123292.js");
var p = require("../app/900316.js");
var m = require("../app/979406.js");
var h = a(require("../app/491451.js"));
var g = require("../app/631751.js");
var E = a(require("../app/709850.js"));
var v = require("../app/499136.js");
var _ = a(require("./855123.js"));
var y = require("../app/674864.js");
var C = require("../app/174581.js");
var b = require("../app/730514.js");
var M = require("../app/152857.js");
var S = require("../app/969351.js");
var T = a(require("./148575.js"));
var w = a(require("../app/660090.js"));
var A = require("../app/436355.js");
var P = require("../app/528272.js");
var O = require("../app/199572.js");
var k = require("../app/377327.js");
var D = require("../app/28136.js");
var I = require("../app/609972.js");
var R = require("../app/280378.js");
var N = require("../app/163755.js");
var x = a(require("../app/97359.js"));
var L = require("./393609.js");
var j = a(require("./596090.js"));
var B = require("./147550.js");
var F = require("../app/299950.js");
var G = require("./978752.js");
var U = a(require("../app/825158.js"));
var W = require("./322234.js");
var H = require("./750970.js");
var V = require("../app/764676.js");
var q = require("../app/1440.js");
var Y = require("./835694.js");
var z = require("../app/752202.js");
var K = require("../app/594889.js");
var Q = require("../app/460014.js");
var X = require("../app/460672.js");
var Z = require("../app/49576.js");
var J = require("./297287.js");
var $ = a(require("./22268.js"));
var ee = require("../app/114850.js");
var te = require("../app/787742.js");
var ne = require("../app/163139.js");
var ae = require("../app/108590.js");
var re = require("../app/526424.js");
var oe = require("./858567.js");
var le = require("./405585.js");
var ie = require("./298187.js");
var ue = require("./280511.js");
var se = require("../app/931019.js");
var ce = require("../vendor/548360.js");
var de = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = ge(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../vendor/667294.js"));
var fe = a(require("../app/969651.js"));
var pe = require("../app/808446.js");
var me = require("./871210.js");
var he = a(require("../app/321201.js"));
function ge(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (ge = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const Ee = e => {
  e.stopPropagation();
  e.preventDefault();
};
const ve = (0, ae.systemMessageActionTextStylingEnabled)();
function _e(e) {
  let {
    clickable: t,
    msg: n,
    isLastMsg: a
  } = e;
  const {
    subtype: r,
    author: l,
    body: u,
    recipients: s = [],
    templateParams: d
  } = n;
  const f = (0, N.getChat)(n.unsafe());
  const p = n.displayName();
  const _ = l ? (0, A.getFormattedName)(l, !t) : null;
  const x = s[0];
  const L = x ? (0, A.getFormattedName)(x, !t) : null;
  const j = (0, A.getFormattedNames)(s, s.length > 1 || !t);
  switch (r) {
    case "add":
      return (0, m.formatAddNotification)({
        author: l,
        authorClickable: _,
        subject: x,
        subjectClickable: L,
        participantsClickable: j
      });
    case "remove":
      return (0, k.formatRemoveNotification)({
        author: l,
        authorClickable: _,
        subject: x,
        subjectClickable: L,
        participantsClickable: j
      });
    case "leave":
      return (0, M.formatLeaveNotification)({
        body: u,
        subject: x,
        participantsClickable: j
      });
    case "picture":
      return (0, P.formatPictureNotification)({
        author: l,
        authorClickable: _,
        body: u
      });
    case "subject":
      {
        const e = de.default.createElement(re.FormattedText, {
          text: u
        });
        return (0, R.formatSubjectNotification)(f, l, _, e);
      }
    case "modify":
      {
        const e = (0, se.widToFormattedUser)(l);
        const t = (0, se.widToFormattedUser)(x);
        if (e === p) {
          return ce.fbt._("{name} changed to {new_number}", [ce.fbt._param("name", p), ce.fbt._param("new_number", t)], {
            hk: "4gSeHO"
          });
        } else {
          return ce.fbt._("{name} changed their phone number to a new number.", [ce.fbt._param("name", p)], {
            hk: "2543Ma"
          });
        }
      }
    case "create":
      return (0, v.formatCreateNotification)({
        chat: f,
        author: l,
        authorClickable: _,
        groupSubject: u,
        groupSubjectAsString: false
      });
    case "delete":
      return (0, y.formatDeleteNotification)({
        chat: f
      });
    case "promote":
    case "demote":
    case "linked_group_promote":
    case "linked_group_demote":
      return (0, O.formatPromoteDemoteNotification)({
        subtype: r,
        subject: x,
        subjectClickable: L,
        participantsClickable: j,
        participantsCount: s.length
      });
    case "invite":
      if ((0, re.isMe)(x)) {
        return ce.fbt._("You joined via an invite link", null, {
          hk: "3DdEt7"
        });
      } else {
        return ce.fbt._("{name} joined via an invite link", [ce.fbt._param("name", L)], {
          hk: "2b7kQR"
        });
      }
    case "revoke_invite":
      if ((0, re.isMe)(l)) {
        if (ve) {
          return ce.fbt._("You reset this group's invite link", null, {
            hk: "inYqj"
          });
        } else {
          return ce.fbt._("You reset this group's invite link. Click to view the new invite link", null, {
            hk: "4rWg0w"
          });
        }
      } else if (ve) {
        return ce.fbt._("{name} reset this group's invite link", [ce.fbt._param("name", _)], {
          hk: "1kHpsA"
        });
      } else {
        return ce.fbt._("{name} reset this group's invite link. Click to view the new invite link", [ce.fbt._param("name", _)], {
          hk: "4unL5R"
        });
      }
    case "description":
      return (0, C.formatDescriptionNotification)({
        author: l,
        authorClickable: _
      });
    case "parent_group_description":
      return (0, C.formatDescriptionNotification)({
        author: l,
        authorClickable: _,
        isParentGroup: true
      });
    case "announce":
      return (0, g.formatAnnounceNotification)({
        author: l,
        authorClickable: _,
        body: u
      });
    case "restrict":
      return (0, I.formatRestrictNotification)({
        author: l,
        authorClickable: _,
        templateParams: d
      });
    case "no_frequently_forwarded":
      if (u === "on") {
        if ((0, re.isMe)(l)) {
          return ce.fbt._("You changed this group's settings to not allow messages that have been forwarded many times.", null, {
            hk: "16hyEI"
          });
        } else {
          return ce.fbt._("{name} changed this group's settings to not allow messages that have been forwarded many times.", [ce.fbt._param("name", _)], {
            hk: "RnKuI"
          });
        }
      } else if ((0, re.isMe)(l)) {
        return ce.fbt._("You changed this group's settings to allow messages that have been forwarded many times.", null, {
          hk: "3Ib1Hu"
        });
      } else {
        return ce.fbt._("{name} changed this group's settings to allow messages that have been forwarded many times.", [ce.fbt._param("name", _)], {
          hk: "4rcXNB"
        });
      }
    case "announce_msg_bounce":
      return ce.fbt._("Only admins can message this group.", null, {
        hk: "O3Va5"
      });
    case "v4_add_invite_sent":
      return de.default.createElement(U.default, {
        id: 164,
        params: {
          participants: j,
          count: s.length
        }
      });
    case "v4_add_invite_join":
      return de.default.createElement(U.default, {
        id: 163,
        params: {
          participants: j,
          count: s.length
        }
      });
    case "ephemeral":
      return (0, b.formatEphemeralSetting)((0, ne.unproxy)(n));
    case "initial_pHash_mismatch":
    case "default_sub_group_promote":
    case "default_sub_group_demote":
      if ((0, i.isCommunityAnnouncementGroup)(f)) {
        if (ve) {
          return ce.fbt._("Community members have changed", null, {
            hk: "15rbvN"
          });
        } else {
          return ce.fbt._("Community members have changed. Click to view", null, {
            hk: "3hpYjq"
          });
        }
      } else if (ve) {
        return ce.fbt._("Group participants have changed", null, {
          hk: "iNyci"
        });
      } else {
        return ce.fbt._("Group participants have changed. Click to view", null, {
          hk: "FzeN7"
        });
      }
    case "growth_locked":
      if (ve) {
        return ce.fbt._("Invite via link became unavailable", null, {
          hk: "1QhICr"
        });
      } else {
        return ce.fbt._("Invite via link became unavailable. Click to learn more", null, {
          hk: "2272Fo"
        });
      }
    case "growth_unlocked":
      return ce.fbt._("Invite via link became available again. Click to view the new invite link.", null, {
        hk: "1TFNSV"
      });
    case "linked_group_join":
    case "parent_group_link":
    case "parent_group_link_membership_approval":
    case "sibling_group_link":
    case "sub_group_link":
    case "parent_group_unlink":
    case "sibling_group_unlink":
    case "delete_parent_group":
    case "delete_parent_group_unlink":
    case "sub_group_unlink":
    case "integrity_parent_group_unlink":
    case "auto_add":
    case "default_sub_group_admin_add":
    case "invite_auto_add":
      return (0, S.formatLinkNotification)(r, l, x, d, t);
    case "community_create":
      if ((0, c.communityRichSystemMessageEnabled)()) {
        if (a) {
          return (0, X.communityWelcomeAdminTitle)({
            author: l,
            chat: f,
            templateParams: d
          });
        } else {
          return de.default.createElement(X.MessageCommunityWelcomeAdmin, {
            author: l,
            chat: f,
            templateParams: d
          });
        }
      } else {
        return (0, S.formatLinkNotification)(r, l, x, d, t);
      }
    case "community_participant_add_rich":
    case "community_invite_rich":
    case "community_invite_auto_add_rich":
      if (a) {
        return (0, Z.communityWelcomeMemberTitle)();
      } else {
        return de.default.createElement(Z.MessageCommunityWelcomeMember, {
          templateParams: d,
          clickable: t,
          author: l,
          chat: f
        });
      }
    case "subgroup_admin_triggered_auto_add":
    case "subgroup_admin_triggered_invite_auto_add":
      if (a) {
        return (0, Z.communityWelcomeMemberTitle)();
      } else {
        return de.default.createElement(J.MessageCommunityWelcomeSubgroup, {
          templateParams: d
        });
      }
    case "sub_group_participant_add_rich":
    case "sub_group_invite_rich":
      if (a) {
        return (0, Q.communitySubgroupWelcomeTitle)({
          templateParams: d,
          clickable: t,
          author: l
        });
      } else {
        return de.default.createElement(Q.MessageCommunitySubgroupWelcome, {
          chat: f,
          author: l,
          templateParams: d,
          clickable: t
        });
      }
    case "community_link_parent_group_rich":
      if (a) {
        return (0, K.communityLinkGroupTitle)({
          templateParams: d,
          clickable: t,
          author: l
        });
      } else {
        return de.default.createElement(K.MessageCommunityLinkGroup, {
          chat: f,
          author: l,
          templateParams: d,
          clickable: t
        });
      }
    case "ephemeral_keep_in_chat":
      return ce.fbt._("Disappearing messages now support keeping messages in the chat. Click to learn more.", null, {
        hk: "28BLkP"
      });
    case "membership_approval_mode":
    case "membership_approval_request":
    case "created_membership_requests":
      return (0, w.default)(r, l, d);
    case "allow_admin_reports":
      return (0, D.formatReportToAdminNotification)(l, d);
    case "allow_non_admin_sub_group_creation":
      return (0, h.default)(f, d);
    case "empty_subgroup_create":
      if (a) {
        return (0, V.communityEmptySubgroupWelcomeTitle)(f.formattedTitle);
      } else {
        return de.default.createElement(H.MessageCommunityEmptySubgroupWelcome, {
          templateParams: d,
          subgroupChat: f
        });
      }
    case "member_add_mode":
      if ((0, o.getABPropConfigValue)("web_anyone_can_add_group_setting_enabled")) {
        var B;
        const e = !!((B = f.groupMetadata) === null || B === undefined ? undefined : B.participants.iAmAdmin());
        return (0, T.default)(l, e, d);
      }
      __LOG__(2)`wa:groupNotification:member_add_mode not implemented yet: ${r}`;
      break;
    case "created_subgroup_suggestion":
      return (0, E.default)(l, d, t);
    case "general_chat_add":
      if (a) {
        return (0, z.communityGeneralChatWelcomeTitle)(f.formattedTitle);
      } else {
        return de.default.createElement(Y.MessageCommunityGeneralChatWelcome, {
          templateParams: d,
          subgroupChat: f,
          author: l
        });
      }
    case "general_chat_auto_add_disabled":
      return (0, q.communityGeneralChatAutoAddDisabledNotification)(f.formattedTitle);
    default:
      __LOG__(2)`wa:groupNotification:unknown message subtype: ${r}`;
  }
}
function ye(e) {
  let {
    clickable: t,
    msg: n
  } = e;
  const {
    type: a,
    subtype: r
  } = n;
  if (a === "gp2") {
    if (r === "announce") {
      return de.default.createElement("div", {
        className: (0, u.classnamesConvertMeToStylexPlease)($.default.icon, $.default.iconMegaphone)
      }, de.default.createElement(W.MegaphoneIcon, null));
    }
    if (r === "ephemeral" && t) {
      return de.default.createElement("div", {
        className: (0, u.classnamesConvertMeToStylexPlease)($.default.icon, $.default.iconDisappearing)
      }, de.default.createElement(f.DisappearingIcon, null));
    }
  }
  return null;
}
function Ce(e, t) {
  const {
    msg: a,
    clickable: u,
    isLastMsg: f = false
  } = e;
  const m = (0, fe.default)();
  const h = (0, he.default)();
  const g = (0, de.useRef)(null);
  const [E, v, y, C, b, M] = (0, me.useMsgValues)(e.msg.id, [te.getAuthor, te.getBody, te.getRecipients, te.getSubtype, te.getTemplateParams, te.getType]);
  const S = (0, N.getChat)(a.unsafe());
  const T = () => {
    var e;
    if (!((e = g.current) === null || e === undefined)) {
      e.click();
    }
  };
  const w = e => t => {
    var n;
    Ee(t);
    const a = (n = S.groupMetadata) === null || n === undefined ? undefined : n.parentGroup;
    if (a && (0, i.isCommunityAnnouncementGroup)(S) && (0, c.communityTabbedInfoEnabled)()) {
      s.Cmd.openCommunityTabbedInfo(a, undefined, true, e);
    } else {
      s.Cmd.chatInfoDrawer(S, {
        showFullGroupDescription: true,
        scrollToParticipantList: e
      });
    }
  };
  const P = e => () => {
    ee.ModalManager.open(de.default.createElement(d.ConfirmPopup, {
      okText: ce.fbt._("Update", null, {
        hk: "1b5vbz"
      }),
      onOK: () => {
        (0, le.updateApp)();
      },
      onCancel: () => ee.ModalManager.close()
    }, e));
  };
  const O = () => () => {
    const e = (0, x.default)(require("./422325.js"));
    p.DrawerManager.openDrawerRight(de.default.createElement(e, {
      chat: S,
      groupMetadata: S.groupMetadata,
      onClose: () => p.DrawerManager.closeDrawerRight()
    }), {
      transition: "slide-left",
      uim: h
    });
  };
  const k = e => () => {
    ee.ModalManager.open(de.default.createElement(d.ConfirmPopup, {
      onOK: () => ee.ModalManager.close()
    }, e), {
      transition: "modal-flow"
    });
  };
  (0, de.useImperativeHandle)(t, () => ({
    handleKeyActivation: T
  }));
  (0, pe.useListener)(S == null ? undefined : S.groupMetadata, "change:support", m);
  if (M !== "gp2") {
    __LOG__(4, undefined, new Error(), true)`wa:groupNotification:unknown message type: ${M}`;
    SEND_LOGS("unknown-group-notification");
    return null;
  }
  const D = de.default.createElement(_e, {
    clickable: u,
    msg: a,
    isLastMsg: f
  });
  if (!D) {
    return null;
  }
  const I = (0, _.default)({
    type: M,
    subtype: C
  });
  const R = de.default.createElement(ye, {
    clickable: u,
    msg: a
  });
  const U = ((e, t, a) => {
    var d;
    var f;
    if (u) {
      switch (t) {
        case "add":
          if (!(0, ae.systemMessageActionTextStylingEnabled)() || !(0, ae.systemMessageTextTruncationEnabled)()) {
            return;
          }
          return e => {
            if (f === true) {
              const e = de.default.createElement(l.default, {
                chat: (0, ne.unproxy)(S),
                pushTransition: "none",
                popTransition: "none",
                communityName: S.formattedTitle
              });
              ee.ModalManager.open(e, {
                transition: "modal-flow"
              });
            } else {
              Ee(e);
              s.Cmd.chatInfoDrawer(S, {
                scrollToParticipantList: true
              });
            }
          };
        case "picture":
        case "subject":
          if ((0, i.isCommunityAnnouncementGroup)(S)) {
            var m;
            if (!((m = S.groupMetadata) === null || m === undefined ? undefined : m.parentGroup)) {
              return;
            }
            return (0, A.openCommunity)(S.groupMetadata.parentGroup);
          }
          return e => {
            Ee(e);
            s.Cmd.chatInfoDrawer(S);
          };
        case "revoke_invite":
          return e => {
            Ee(e);
            const {
              InfoFlowLoadable: t
            } = require("./81095.js");
            p.DrawerManager.openDrawerRight(de.default.createElement(t, {
              chat: S,
              onEnd: () => p.DrawerManager.closeDrawerRight(),
              initialStep: B.InfoFlowStep.GroupInviteLink
            }), {
              transition: "slide-left",
              uim: h,
              focusType: F.FocusType.TABBABLE
            });
          };
        case "description":
          return w();
        case "parent_group_description":
          if ((0, c.communityTabbedInfoEnabled)()) {
            return w();
          }
          if (!((d = S.groupMetadata) === null || d === undefined ? undefined : d.parentGroup)) {
            return;
          }
          return (0, A.openCommunity)(S.groupMetadata.parentGroup, true);
        case "ephemeral":
          var g;
          if ((g = S.groupMetadata) === null || g === undefined ? undefined : g.canSetEphemeralSetting()) {
            return e => {
              Ee(e);
              s.Cmd.ephemeralDrawer(S, false, ie.EPHEMERAL_SETTING_ENTRY_POINT_TYPE.SYSTEM_MESSAGE);
            };
          }
          break;
        case "initial_pHash_mismatch":
        case "default_sub_group_promote":
        case "default_sub_group_demote":
          return w(true);
        case "growth_unlocked":
          return e => {
            var t;
            Ee(e);
            const a = !!((t = S.groupMetadata) === null || t === undefined ? undefined : t.participants.iAmAdmin());
            const r = (0, i.isInviteGrowthLockedGroup)(S);
            if (a && !r) {
              const {
                InfoFlowLoadable: e
              } = require("./81095.js");
              p.DrawerManager.openDrawerRight(de.default.createElement(e, {
                chat: S,
                onEnd: () => p.DrawerManager.closeDrawerRight(),
                initialStep: B.InfoFlowStep.GroupInviteLink
              }), {
                transition: "slide-left",
                uim: h,
                focusType: F.FocusType.TABBABLE
              });
            } else {
              (0, L.openGrowthLockedModal)(a, r);
            }
          };
        case "growth_locked":
          return e => {
            var t;
            Ee(e);
            const n = !!((t = S.groupMetadata) === null || t === undefined ? undefined : t.participants.iAmAdmin());
            const a = (0, i.isInviteGrowthLockedGroup)(S);
            (0, L.openGrowthLockedModal)(n, a);
          };
        case "ephemeral_keep_in_chat":
          return (0, r.default)(function* () {
            yield (0, G.openKicNux)(S, ue.TRIGGER_TYPE.SYSTEM_MESSAGE);
          });
        case "parent_group_link_membership_approval":
          var E;
          if (a[2] === "admin") {
            if ((0, o.getABPropConfigValue)("group_join_request_m2")) {
              if ((E = S.groupMetadata) === null || E === undefined ? undefined : E.participants.iAmAdmin()) {
                return O();
              } else {
                return k(ce.fbt._("You are not an admin anymore. Only admins can change this setting.", null, {
                  hk: "4zXYWL"
                }));
              }
            } else {
              return P(ce.fbt._("Update WhatsApp to the latest version to change this setting.", null, {
                hk: "2F8wlc"
              }));
            }
          }
          break;
        case "membership_approval_mode":
          var v;
          if (a[1] === "admin") {
            if ((0, o.getABPropConfigValue)("group_join_request_m2")) {
              if ((v = S.groupMetadata) === null || v === undefined ? undefined : v.participants.iAmAdmin()) {
                return O();
              } else {
                return k(ce.fbt._("You are not an admin anymore. Only admins can change this setting.", null, {
                  hk: "4zXYWL"
                }));
              }
            } else {
              return P(ce.fbt._("Update WhatsApp to the latest version to change this setting.", null, {
                hk: "2F8wlc"
              }));
            }
          }
          break;
        case "membership_approval_request":
        case "created_membership_requests":
          var _;
          if ((0, o.getABPropConfigValue)("group_join_request_m2")) {
            if ((_ = S.groupMetadata) === null || _ === undefined ? undefined : _.participants.iAmAdmin()) {
              return () => {
                p.DrawerManager.openDrawerRight(de.default.createElement(j.default, {
                  chat: S,
                  onBack: () => p.DrawerManager.closeDrawerRight()
                }), {
                  transition: "slide-left",
                  uim: h
                });
              };
            } else {
              return k(ce.fbt._("You are not an admin anymore. Only admins can review requests to join.", null, {
                hk: "1IQjl7"
              }));
            }
          } else {
            return P(ce.fbt._("Update WhatsApp to the latest version to review this request.", null, {
              hk: "4DT7JA"
            }));
          }
        case "allow_admin_reports":
          var y;
          if (a[1] === "admin") {
            if ((y = S.groupMetadata) === null || y === undefined ? undefined : y.participants.iAmAdmin()) {
              return O();
            } else {
              return k(ce.fbt._("You are not an admin anymore. Only admins can change this setting", null, {
                hk: "2a1tDk"
              }));
            }
          }
          break;
        case "allow_non_admin_sub_group_creation":
          {
            var C;
            var b;
            const e = Boolean((C = S.groupMetadata) === null || C === undefined ? undefined : C.participants.iAmAdmin());
            const t = (b = S.groupMetadata) === null || b === undefined ? undefined : b.parentGroup;
            if (!e || !t) {
              break;
            }
            return (e => t => {
              Ee(t);
              s.Cmd.openCommunitySettingsDrawer(e);
            })(t);
          }
        case "sibling_group_link":
          {
            var M;
            const e = (M = S.groupMetadata) === null || M === undefined ? undefined : M.parentGroup;
            if (!e) {
              break;
            }
            return (0, A.openCommunity)(e);
          }
        case "created_subgroup_suggestion":
          {
            var T;
            var D;
            const e = Boolean((T = S.groupMetadata) === null || T === undefined ? undefined : T.participants.iAmAdmin());
            const t = (D = S.groupMetadata) === null || D === undefined ? undefined : D.parentGroup;
            if (!e || !t) {
              break;
            }
            return (e => t => {
              Ee(t);
              s.Cmd.openCommunityPendingGroupsDrawer(e);
            })(t);
          }
      }
    }
  })(0, C, b);
  let W;
  W = (0, ae.systemMessageActionTextStylingEnabled)() && I != null ? de.default.createElement(oe.SystemMessageWithSingleCTA, {
    bodyText: D,
    ctaText: I,
    icon: R,
    onClick: U,
    onclickRef: g,
    className: $.default.notification,
    testid: C ? `subtype-${C}` : ""
  }) : de.default.createElement("div", {
    ref: U ? g : undefined,
    role: U ? "button" : undefined,
    className: $.default.notification,
    onClick: U
  }, D);
  return W;
}
var be = (0, de.forwardRef)(Ce);
exports.default = be;