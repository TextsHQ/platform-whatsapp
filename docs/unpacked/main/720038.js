var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  const n = (0, S.useOptionalModelValues)(e.chat.newsletterMetadata, ["isSuspendedOrTerminated", "name", "description", "membershipType"]);
  const a = new p.NewsletterAdminFunnelLogger(_.ADMIN_FLOW_TYPE.EDIT);
  const T = (0, M.useCallback)(() => {
    u.DrawerManager.openDrawerRight(M.default.createElement(c.InfoFlowLoadable, {
      chat: e.chat,
      initialStep: d.InfoFlowStep.NewsletterLink,
      newsletterLinkShareScreenEntryPoint: y.CHANNEL_LINK_SHARE_ENTRY_POINT.PRODUCER_CONTEXT_CARD
    }), {
      transition: "slide-left",
      focusType: f.FocusType.TABBABLE,
      noFocus: true
    });
  }, [e.chat]);
  const A = (0, M.useCallback)(() => {
    o.Cmd.editNewsletterDescription();
    o.Cmd.chatInfoDrawer(e.chat, {
      focusNewsletterDescriptionOnMount: true
    });
  }, [e.chat]);
  const P = E.ProfilePicThumbCollection.get(e.chat.id);
  return M.default.createElement(s.FlexColumn, {
    rowGap: 12,
    xstyle: [w.body, v.uiMargin.horiz20, v.uiMargin.vert24],
    align: "center",
    testid: "newsletter-admin-context-card"
  }, (P == null ? undefined : P.img) != null ? M.default.createElement(i.DetailImage, {
    id: e.chat.id,
    shape: i.DetailImageShape.Circle,
    quality: i.DetailImageQuality.High,
    size: 88,
    showOutline: true,
    testId: "newsletter-admin-context-card-readonly-photo"
  }) : M.default.createElement(h.default, {
    chat: e.chat,
    readOnly: (n == null ? undefined : n.isSuspendedOrTerminated) === true || !(0, g.iAmAdminOrOwner)(n),
    HoverIcon: r.CameraV2Icon,
    adminFunnelLogger: a,
    showAddIconOverlay: false,
    size: 88,
    testId: "newsletter-admin-context-card-photo-picker"
  }), M.default.createElement(b.WDSTextTitle, {
    color: "primary",
    xstyle: [w.title, v.uiPadding.horiz20],
    testid: "newsletter-admin-context-card-channel-title"
  }, (0, l.getStartedWithChannelNameText)((t = n == null ? undefined : n.name) !== null && t !== undefined ? t : "")), M.default.createElement(b.WDSTextMuted, {
    color: "secondary",
    wrap: "wrap",
    testid: "newsletter-admin-context-card-subtitle-message"
  }, (0, l.getStartGrowingYourChannelText)()), M.default.createElement(s.FlexRow, {
    columnGap: 8,
    marginTop: 8
  }, ((n == null ? undefined : n.description) == null || (n == null ? undefined : n.description) === "") && M.default.createElement(C.WDSButtonSecondary, {
    onClick: A,
    shadowOnHover: false,
    testid: "newsletter-admin-context-card-add-description-button"
  }, (0, l.getAddDescriptionButtonText)()), (0, m.isNewsletterChannelLinkPageEnabled)(e.chat) && M.default.createElement(C.WDSButtonSecondary, {
    onClick: T,
    shadowOnHover: false,
    testid: "newsletter-admin-context-card-share-channel-link-button"
  }, (0, l.getShareChannelLinkButtonText)())));
};
var r = require("./551103.js");
var o = require("../app/780549.js");
var l = require("./949359.js");
var i = require("../app/23641.js");
var u = require("../app/900316.js");
var s = require("../app/690495.js");
var c = require("./81095.js");
var d = require("./147550.js");
var f = require("../app/299950.js");
var p = require("./608637.js");
var m = require("../app/73225.js");
var h = a(require("./501624.js"));
var g = require("../app/751460.js");
var E = require("../app/446474.js");
var v = require("../app/676345.js");
var _ = require("./684259.js");
var y = require("./836507.js");
var C = require("../app/617425.js");
var b = require("../app/851488.js");
var M = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = T(t);
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
a(require("../app/156720.js"));
var S = require("../app/655241.js");
function T(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (T = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const w = {
  body: {
    textAlign: "qfejxiq4"
  },
  title: {
    maxWidth: "lsz23zp3",
    boxSizing: "cm280p3y",
    wordBreak: "cw3vfol9"
  }
};