var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, k.useModelValues)(e.chat, ["isNewsletter", "newsletterMetadata", "muteExpiration"]);
  const n = (0, k.useOptionalModelValues)(t.newsletterMetadata, ["membershipType", "suspended", "terminated", "isSuspendedOrTerminated"]);
  const [a, C] = (0, O.useState)(false);
  const [I, N] = (0, O.useState)(false);
  if ((0, D.default)(t.muteExpiration) !== t.muteExpiration && I) {
    N(false);
  }
  const x = (0, O.useCallback)((0, r.default)(function* () {
    C(true);
    yield (0, g.subscribeToNewsletter)((0, b.unproxy)(t), {
      eventSurface: T.CHANNEL_EVENT_SURFACE.CHANNEL_THREAD
    });
    C(false);
  }), [t]);
  const L = (0, O.useCallback)(() => {
    p.ModalManager.open(O.default.createElement(S.UnfollowNewsletterConfirmationModal, {
      chat: (0, b.unproxy)(e.chat),
      eventSurface: T.CHANNEL_EVENT_SURFACE.CHANNEL_THREAD
    }));
  }, [e.chat]);
  const j = (0, O.useCallback)(() => {
    i.DrawerManager.openDrawerRight(O.default.createElement(u.InfoFlowLoadable, {
      chat: e.chat,
      initialStep: s.InfoFlowStep.NewsletterLink,
      newsletterLinkShareScreenEntryPoint: w.CHANNEL_LINK_SHARE_ENTRY_POINT.CHANNEL_THREAD
    }), {
      transition: "slide-left",
      focusType: c.FocusType.TABBABLE,
      noFocus: true
    });
  }, [e.chat]);
  const B = (0, O.useCallback)(() => {
    N(true);
    (0, h.muteNewsletterAction)(e.chat.id, {
      eventSurface: T.CHANNEL_EVENT_SURFACE.CHANNEL_THREAD
    }).catch(() => N(false));
  }, [e.chat]);
  const F = (0, O.useCallback)(() => {
    N(true);
    (0, v.unmuteNewsletterAction)(e.chat.id, {
      eventSurface: T.CHANNEL_EVENT_SURFACE.CHANNEL_THREAD
    }).catch(() => N(false));
  }, [e.chat]);
  if (!t.isNewsletter || n == null) {
    return null;
  }
  if (n.isSuspendedOrTerminated) {
    if (n.membershipType === o.NewsletterMembershipType.Subscriber) {
      return O.default.createElement(A.WDSButtonPrimary, {
        onClick: L,
        testid: "conversation-panel-header-newsletter-unfollow-button"
      }, P.fbt._("Unfollow", null, {
        hk: "1zIaXk"
      }));
    } else {
      return null;
    }
  }
  switch (n.membershipType) {
    case o.NewsletterMembershipType.Admin:
    case o.NewsletterMembershipType.Owner:
      if ((0, m.isNewsletterChannelLinkPageEnabled)(t)) {
        return O.default.createElement(f.MenuBarItem, {
          tabOrder: M.TAB_ORDER.CHAT_HEADER_BUTTON,
          testid: "share-newsletter-button",
          icon: O.default.createElement(d.LinkIcon, null),
          onClick: j,
          title: (0, l.getShareText)()
        });
      } else {
        return null;
      }
    case o.NewsletterMembershipType.Guest:
      return O.default.createElement(E.default, {
        onClick: x,
        isLoading: a
      });
    default:
      if (t.muteExpiration === -1) {
        return O.default.createElement(f.MenuBarItem, {
          tabOrder: M.TAB_ORDER.CHAT_HEADER_BUTTON,
          testid: "unmute-button",
          icon: I ? O.default.createElement(R, null) : O.default.createElement(_.NotificationsOffIcon, null),
          onClick: F,
          disabled: I,
          title: P.fbt._("Unmute", null, {
            hk: "1ldriX"
          })
        });
      } else {
        return O.default.createElement(f.MenuBarItem, {
          tabOrder: M.TAB_ORDER.CHAT_HEADER_BUTTON,
          testid: "mute-button",
          icon: I ? O.default.createElement(R, null) : O.default.createElement(y.NotificationsOnIcon, null),
          onClick: B,
          disabled: I,
          title: P.fbt._("Mute", null, {
            hk: "2f0jYR"
          })
        });
      }
  }
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/927531.js");
var l = require("./949359.js");
var i = require("../app/900316.js");
var u = require("./81095.js");
var s = require("./147550.js");
var c = require("../app/299950.js");
var d = require("./406506.js");
var f = require("./526795.js");
var p = require("../app/114850.js");
var m = require("../app/73225.js");
var h = require("../app/53680.js");
var g = require("./405473.js");
var E = a(require("./92900.js"));
var v = require("../app/602940.js");
var _ = require("./293883.js");
var y = require("./746186.js");
var C = require("../app/956113.js");
var b = require("../app/163139.js");
var M = require("../main-chunk/931109.js");
var S = require("./106645.js");
var T = require("../app/874806.js");
var w = require("./836507.js");
var A = require("../app/617425.js");
var P = require("../vendor/548360.js");
var O = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = I(t);
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
var k = require("../app/655241.js");
var D = a(require("../app/49710.js"));
function I(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (I = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function R() {
  return O.default.createElement(C.Spinner, {
    color: "wdsSecondaryLighter",
    size: 20
  });
}