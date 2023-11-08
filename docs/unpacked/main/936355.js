var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageDropdownMenu = function (e) {
  var t;
  var n;
  var a;
  var A;
  let {
    msg: R,
    displayType: N,
    onKeepClick: x,
    onUndoKeepClick: L,
    onMsgInfoClick: j,
    onReplyClick: B,
    onPrivateReplyClick: F,
    onMessageDownloadClick: G,
    onStarClick: U,
    onBotPositiveFeedbackClick: W,
    onBotNegativeFeedbackClick: H,
    onRTAClick: V,
    onUnstarClick: q,
    onFavoriteStickerClick: Y,
    onUnfavoriteStickerClick: z,
    onForwardClick: K,
    onEditLabelClick: Q,
    onCopyFavoriteStickerClick: X,
    onOpenStickerPackClick: Z,
    onReactionClick: J,
    onMessageDeleteClick: $,
    onOpenContactChatClick: ee,
    onReportClick: te,
    onEditClick: ne,
    onPinClick: ae,
    onUnpinClick: re,
    onNewsletterMessageLinkCopyClick: oe,
    onViewAllRepliesClick: le
  } = e;
  !function (e) {
    new h.MessageContextMenuActionsWamEvent({
      isAGroup: (0, f.getChat)(e).isGroup,
      isMultiAction: false,
      isOriginalSender: (0, v.getIsSentByMe)(e),
      messageContextMenuAction: w.MESSAGE_CONTEXT_MENU_ACTION_TYPE.OPEN
    }).commit();
  }(R);
  const ie = (0, k.default)(R.id);
  const ue = [];
  if (N === s.DISPLAY_TYPE.EDITING) {
    return ue;
  }
  if (N !== s.DISPLAY_TYPE.MSG_INFO && (0, _.canOpenInfoDrawer)(R.unsafe())) {
    ue.push(O.default.createElement(c.DropdownItem, {
      key: "info",
      testid: "mi-msg-info",
      action: () => {
        j();
        I(R, D.MESSAGE_INFO);
      }
    }, P.fbt._("Message info", null, {
      hk: "326EIt"
    })));
  }
  if ((0, y.canReplyMsg)(R)) {
    ue.push(O.default.createElement(c.DropdownItem, {
      key: "reply",
      testid: "mi-msg-reply",
      action: () => {
        B();
        I(R, D.REPLY);
      }
    }, P.fbt._("Reply", null, {
      hk: "1C7DPa"
    })));
  }
  if ((0, y.canPrivateReply)(R) || (0, y.canPrivateReplyInRestrictedGrp)(R)) {
    ue.push(O.default.createElement(c.DropdownItem, {
      key: "private_reply",
      testid: "mi-msg-reply",
      action: () => {
        F();
        I(R, D.REPLY_PRIVATELY);
      }
    }, P.fbt._("Reply privately", null, {
      hk: "1XQeK2"
    })));
  }
  if ((0, T.viewAllRepliesEnabled)() && (0, v.getIsGroupMsg)(R) && (0, y.isReplyMsg)(R) && N !== s.DISPLAY_TYPE.ALL_REPLIES) {
    ue.push(O.default.createElement(c.DropdownItem, {
      key: "view-all-replies",
      testid: "mi-msg-view-all-replies",
      action: () => {
        le();
        I(R, D.UNKNOWN);
      }
    }, P.fbt._("", null, {
      hk: "sTzln"
    })));
  }
  if (!(!(0, S.canReactToMessage)(R) || N !== s.DISPLAY_TYPE.CONVERSATION && N !== s.DISPLAY_TYPE.NEWSLETTER)) {
    ue.push(O.default.createElement(c.DropdownItem, {
      key: "react-to-message",
      testid: "react-to-message",
      action: () => {
        J();
        I(R, D.UNKNOWN);
      }
    }, P.fbt._("React", null, {
      hk: "1mI4Nl"
    })));
  }
  if ((0, E.canDownloadMsg)(R)) {
    ue.push(O.default.createElement(c.DropdownItem, {
      key: "download",
      testid: "mi-msg-download",
      action: () => {
        G();
        I(R, D.UNKNOWN);
      }
    }, P.fbt._("Download", null, {
      hk: "1g5Jix"
    })));
  }
  if ((0, E.canForwardMsg)(R)) {
    ue.push(O.default.createElement(c.DropdownItem, {
      key: "forward",
      testid: "mi-msg-forward",
      action: () => {
        K();
        I(R, D.FORWARD);
      }
    }, P.fbt._("Forward", null, {
      hk: "3uDEhY"
    })));
  }
  if ((0, r.canEditLabelAssociation)() && !(0, f.getAsRevoked)(R)) {
    ue.push(O.default.createElement(c.DropdownItem, {
      key: "editLabel",
      testid: "mi-edit-label",
      action: () => {
        Q();
        I(R, D.UNKNOWN);
      }
    }, P.fbt._("Edit label", null, {
      hk: "3QX44B"
    })));
  }
  if ((0, E.canPinMsg)(R)) {
    if (ie) {
      ue.push(O.default.createElement(c.DropdownItem, {
        key: "unpin",
        testid: "mi-msg-unpin",
        action: re
      }, P.fbt._("Unpin", null, {
        hk: "3oWx14"
      })));
    } else {
      ue.push(O.default.createElement(c.DropdownItem, {
        key: "pin",
        testid: "mi-msg-pin",
        action: ae
      }, P.fbt._("Pin", null, {
        hk: "23jUX3"
      })));
    }
  }
  if ((0, v.getIsKept)(R) && R.canShowUnkeepOption()) {
    ue.push(O.default.createElement(c.DropdownItem, {
      key: "unkeep",
      testid: "mi-msg-unkeep",
      action: () => {
        L();
        I(R, D.UNKNOWN);
      }
    }, P.fbt._("Unkeep", null, {
      hk: "34umJU"
    })));
  } else if (!(0, v.getIsKept)(R) && R.canShowKeepOption()) {
    ue.push(O.default.createElement(c.DropdownItem, {
      key: "keep",
      testid: "mi-msg-keep",
      action: () => {
        x();
        I(R, D.UNKNOWN);
      }
    }, P.fbt._("Keep", null, {
      hk: "1HcH0g"
    })));
  }
  if ((0, E.canStarMsg)(R)) {
    if (R.star) {
      ue.push(O.default.createElement(c.DropdownItem, {
        key: "star",
        testid: "mi-msg-unstar",
        action: () => {
          q();
          I(R, D.STAR_OR_UNSTAR);
        }
      }, P.fbt._("Unstar", null, {
        hk: "dJq8D"
      })));
    } else if (!(0, v.getIsKept)(R)) {
      ue.push(O.default.createElement(c.DropdownItem, {
        key: "star",
        testid: "mi-msg-star",
        action: () => {
          U();
          I(R, D.STAR_OR_UNSTAR);
        }
      }, P.fbt._("Star", null, {
        hk: "1izJ83"
      })));
    }
  }
  if ((0, o.isBotEnabled)() && (0, l.hasSeenBotTos)() && !(0, f.getAsRevoked)(R) && ((0, v.getIsMetaBotResponse)(R) || (0, o.isBizBot1pFeedbackEnabled)() && (0, v.getIsBizBot1pResponse)(R))) {
    ue.push(O.default.createElement(c.DropdownItem, {
      key: "bot-positive-feedback",
      testid: "mi-bot-positive-feedback",
      action: () => W()
    }, P.fbt._("Good response", null, {
      hk: "3jyo4g"
    })));
    ue.push(O.default.createElement(c.DropdownItem, {
      key: "bot-negative-feedback",
      testid: "mi-bot-negative-feedback",
      action: () => H()
    }, P.fbt._("Bad response", null, {
      hk: "bCRfs"
    })));
  }
  if (N !== s.DISPLAY_TYPE.REPORTED_MSG && (0, E.canReportToAdmin)(R)) {
    const e = P.fbt._("Send for admin review", null, {
      hk: "4ouSa6"
    });
    ue.push(O.default.createElement(c.DropdownItem, {
      key: "rta",
      testid: "mi-msg-rta",
      action: () => V()
    }, e));
  }
  if ((0, E.displayTypeSupportsEditing)(N) && (0, E.canEnterEditingFlow)(R)) {
    ue.push(O.default.createElement(c.DropdownItem, {
      key: "edit-message",
      testid: "mi-msg-edit",
      action: () => {
        ne();
        I(R, D.EDIT);
      }
    }, P.fbt._("Edit", null, {
      hk: "Nn7Mu"
    })));
  }
  if ((0, E.canCopyNewsletterMessageLink)(R)) {
    ue.push(O.default.createElement(c.DropdownItem, {
      key: "copy-newsletter-message-link",
      testid: "mi-msg-copy-link",
      action: () => {
        oe();
      }
    }, P.fbt._("Copy link", null, {
      hk: "4oW9LI"
    })));
  }
  const se = !(0, f.getChat)(R).isNewsletter && (0, g.messageLevelReportingEnabled)();
  const ce = (0, f.getChat)(R).isNewsletter && (0, b.isNewsletterReportingEnabled)();
  if ((0, E.canReportMsg)(R) && (se || ce)) {
    ue.push(O.default.createElement(c.DropdownItem, {
      key: "report-message",
      testid: "mi-msg-report",
      action: () => {
        te();
        I(R, D.REPORT);
      }
    }, P.fbt._("Report", null, {
      hk: "17dZou"
    })));
  }
  if (R.type === C.MSG_TYPE.STICKER && (0, g.isFavoriteStickersEnabled)()) {
    if ((0, d.isStickerFilehashFavorited)(R.filehash)) {
      ue.push(O.default.createElement(c.DropdownItem, {
        key: "remove-favorite-sticker",
        testid: "mi-remove-favorite-sticker",
        action: () => {
          z();
          I(R, D.UNKNOWN);
        }
      }, P.fbt._("Remove from favorites", null, {
        hk: "2tJgjX"
      })));
    } else {
      ue.push(O.default.createElement(c.DropdownItem, {
        key: "favorite-sticker",
        testid: "mi-favorite-sticker",
        action: () => {
          Y();
          I(R, D.UNKNOWN);
        }
      }, P.fbt._("Add to favorites", null, {
        hk: "1iPksH"
      })));
    }
  }
  const de = m.InMemoryMediaBlobCache.get(R.filehash);
  if (R.type === C.MSG_TYPE.STICKER && de != null && (0, u.supportsCopyImageToClipboard)()) {
    ue.push(O.default.createElement(c.DropdownItem, {
      key: "copy-favorite-sticker",
      testid: "mi-copy-favorite-sticker",
      action: () => {
        X(de);
        I(R, D.UNKNOWN);
      }
    }, P.fbt._("Copy sticker image", null, {
      hk: "4FVy4K"
    })));
  }
  if (R.type === C.MSG_TYPE.STICKER) {
    const {
      stickerPackId: e,
      isFirstParty: t
    } = R.mediaData;
    const {
      isAvatar: n
    } = R;
    const a = (0, f.getChat)(R);
    const r = !(0, v.getIsNewsletterMsg)(R) || (0, M.iAmAdminOrOwner)(a.newsletterMetadata);
    if (e != null && n !== true && t === true && r) {
      ue.push(O.default.createElement(c.DropdownItem, {
        key: "open-sticker-pack",
        testid: "mi-open-sticker-pack",
        action: () => {
          Z(e);
          I(R, D.UNKNOWN);
        }
      }, P.fbt._("View pack", null, {
        hk: "1GGSoX"
      })));
    }
  }
  if (!((0, f.getChat)(R).isNewsletter && !(0, E.canRevokeNewsletterMsg)(R))) {
    ue.push(O.default.createElement(c.DropdownItem, {
      key: "delete",
      testid: "mi-msg-delete",
      action: () => {
        $();
        I(R, D.DELETE);
      }
    }, P.fbt._("Delete", null, {
      hk: "1DNab7"
    })));
  }
  const fe = !((0, f.getChat)(R).isSuspendedOrTerminated() && (0, g.isGroupSuspendV2Enabled)() || (0, v.getIsBotFutureproofPlaceholder)(R) || ((t = R.author) === null || t === undefined ? undefined : t.isLid()) && ((n = (0, f.getChat)(R).groupMetadata) === null || n === undefined ? undefined : n.groupType) === p.GroupType.LINKED_ANNOUNCEMENT_GROUP);
  if ((0, v.getIsGroupMsg)(R) && R.author && !(0, v.getIsSentByMe)(R) && fe) {
    ue.push(O.default.createElement(c.DropdownItem, {
      key: "author",
      testid: "mi-msg-author",
      action: () => {
        ee();
        I(R, D.MESSAGE_CONTACT);
      }
    }, P.fbt._("Message {author}", [P.fbt._param("author", R.displayName())], {
      hk: "1kM7Cg"
    })));
  }
  if (((a = R.author) === null || a === undefined ? undefined : a.isLid()) && ((A = (0, f.getChat)(R).groupMetadata) === null || A === undefined ? undefined : A.groupType) === p.GroupType.LINKED_ANNOUNCEMENT_GROUP) {
    ue.push(O.default.createElement(c.DropdownItem, {
      key: "verify-security-code",
      testid: "mi-msg-verify-security-node",
      action: () => {
        i.Cmd.verificationDrawer(R.author);
      }
    }, P.fbt._("Verify security code", null, {
      hk: "1F64Zd"
    })));
  }
  return ue;
};
var r = require("../app/72696.js");
var o = require("../app/354458.js");
var l = require("../app/292167.js");
var i = require("../app/780549.js");
var u = require("./931178.js");
a(require("../app/719838.js"));
require("./807078.js");
var s = require("../app/356097.js");
var c = require("../app/675085.js");
var d = require("./225446.js");
var f = require("../app/163755.js");
var p = require("../app/862159.js");
var m = require("../app/196127.js");
var h = require("./324017.js");
var g = require("../app/97858.js");
var E = require("../app/939716.js");
var v = require("../app/787742.js");
var _ = require("./376458.js");
var y = require("./722119.js");
var C = require("../app/373070.js");
var b = require("../app/73225.js");
var M = require("../app/751460.js");
require("./702414.js");
require("../app/533494.js");
var S = require("./474474.js");
a(require("../app/563226.js"));
require("../app/437911.js");
require("./594149.js");
require("../app/142601.js");
var T = require("./577844.js");
require("../app/239870.js");
var w = require("./880921.js");
var A = require("./145349.js");
var P = require("../vendor/548360.js");
var O = a(require("../vendor/667294.js"));
var k = a(require("./135179.js"));
const D = A.MESSAGE_CONTEXT_MENU_OPTION_TYPE;
function I(e, t) {
  new h.MessageContextMenuActionsWamEvent({
    isAGroup: (0, f.getChat)(e).isGroup,
    isMultiAction: false,
    isOriginalSender: (0, v.getIsSentByMe)(e),
    messageContextMenuAction: w.MESSAGE_CONTEXT_MENU_ACTION_TYPE.CLICK,
    messageContextMenuOption: t
  }).commit();
}