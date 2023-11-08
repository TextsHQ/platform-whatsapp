var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, A.useSetModelValue)(e, "active");
  const [n, a] = (0, w.default)(e.groupMetadata);
  (0, T.useEffect)(() => {
    var n;
    if (M.default.isPSA(e.id)) {
      (0, l.updatePSAUserBlockingStatus)(e.id);
    }
    t(true);
    const {
      groupMetadata: T
    } = e;
    if (T != null) {
      const {
        groupType: t,
        participants: n,
        membershipApprovalMode: r
      } = T;
      if ((t === d.GroupType.DEFAULT || t === d.GroupType.LINKED_SUBGROUP) && (n.iAmAdmin() || (0, o.getABPropConfigValue)("web_anyone_can_add_group_setting_enabled") && a) && r && (0, o.getABPropConfigValue)("group_join_request_m2")) {
        (0, f.readMembershipApprovalRequestsFromDB)(e);
      }
      if (t === d.GroupType.LINKED_ANNOUNCEMENT_GROUP && n.iAmAdmin() && (0, s.memberSuggestedGroupsEnabled)()) {
        const e = T.getParentGroupChat();
        if (!e) {
          return;
        }
        (0, _.restoreSubgroupSuggestionsFromDb)(e);
      }
    }
    if (e.id.isNewsletter() && !((n = e.newsletterMetadata) === null || n === undefined ? undefined : n.isPreview)) {
      (0, E.queryAndUpdateNewsletterMetadataAction)((0, r.toNewsletterJid)(e.id.toString()), {
        fields: {
          subscribers: true,
          verification: true
        }
      });
    }
    if ((0, h.isPinnedMessagesM1ReceiverEnabled)()) {
      (0, c.deleteExpiredPins)(e.id).catch(e => {
        __LOG__(4, undefined, new Error(), true)`useOpenChat: error deleting expired pins from DB: ${e}`;
        SEND_LOGS("use-open-chat-delete-expired-pins-from-db-error");
      }).then(() => {
        if (!m.PinInChatCollection.hydratedChats.has((0, S.toChatWid)(e.id))) {
          return (0, v.readPinInChatFromDB)(e.id);
        }
      }).then(() => {
        m.PinInChatCollection.hydratedChats.add((0, S.toChatWid)(e.id));
      }).catch(e => {
        __LOG__(4, undefined, new Error(), true)`useOpenChat: error reading pins from DB: ${e}`;
        SEND_LOGS("use-open-chat-read-pins-from-db-error");
      });
    }
    if (e.attachMediaContents) {
      const t = e.attachMediaContents.isStickerMaker;
      u.Cmd.attachMediaDrawer({
        chat: e,
        animationName: "noop",
        sendAsSticker: t
      });
    }
    if ((0, i.isIntegritySuspendedDefaultSubgroup)(e)) {
      (0, y.openTerminatedCommunityModal)();
    } else if (!(0, i.isDeactivatedCommunityAnnouncementGroup)(e)) {
      if ((0, i.isTerminatedGroupOrNotMember)(e)) {
        if (!(0, i.isSupportGroup)(e)) {
          if ((0, p.isGroupSuspendV2Enabled)()) {
            (0, C.openSuspendedGroupModalV2)(e);
          } else {
            (0, C.openTerminatedGroupOrNotMemberModal)();
          }
        }
      } else if ((0, i.isSuspendedGroup)(e)) {
        if ((0, p.isGroupSuspendV2Enabled)()) {
          (0, C.openSuspendedGroupModalV2)(e);
        } else {
          (0, C.openSuspendedGroupModal)((0, i.shouldIncludeEntityIdInAppealRequest)() === true ? e.id.user.toString() : null);
        }
      } else if (e.id.isLid() && (0, g.isMatFullyEnabled)()) {
        (0, b.updateDuplicatedLidThread)(e);
      }
    }
    return () => {
      if (e.urlText) {
        e.urlText = undefined;
      }
      if (e.urlNumber) {
        e.urlNumber = undefined;
      }
      t(false);
    };
  }, []);
};
var r = require("../app/418987.js");
var o = require("../app/287461.js");
var l = require("../app/547979.js");
var i = require("../app/374660.js");
var u = require("../app/780549.js");
var s = require("../app/174834.js");
var c = require("./515901.js");
var d = require("../app/862159.js");
var f = require("./956932.js");
var p = require("../app/97858.js");
var m = require("../app/722091.js");
var h = require("../app/591800.js");
var g = require("../app/525119.js");
var E = require("../app/126592.js");
var v = require("./27334.js");
var _ = require("./387548.js");
var y = require("../app/428991.js");
var C = require("./983271.js");
var b = require("./663659.js");
var M = a(require("../app/124928.js"));
var S = require("../app/669050.js");
var T = require("../vendor/667294.js");
var w = a(require("./426872.js"));
var A = require("./636729.js");