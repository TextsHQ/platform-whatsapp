var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsletterChatMenuDropdown = function (e) {
  let {
    chat: t,
    toContextMenuManager: n,
    onSelectMessages: a
  } = e;
  const E = (0, g.useRef)(null);
  const {
    newsletterMetadata: v
  } = t;
  const _ = (0, g.useCallback)(() => {
    i.ModalManager.open(g.default.createElement(c.default, {
      chat: t,
      spamFlow: d.SpamFlow.OverflowMenuReport
    }));
  }, [t]);
  const y = (0, g.useCallback)(() => {
    r.Cmd.chatInfoDrawer(t);
  }, [t]);
  const C = (0, g.useCallback)(() => {
    r.Cmd.closeChat(t);
  }, [t]);
  const b = (0, g.useCallback)(() => {
    i.ModalManager.open(g.default.createElement(p.UnfollowNewsletterConfirmationModal, {
      chat: (0, f.unproxy)(t),
      eventSurface: m.CHANNEL_EVENT_SURFACE.CHANNEL_THREAD
    }));
  }, [t]);
  const M = [g.default.createElement(l.DropdownItem, {
    key: "newsletter-overflow-menu-newsletter-info",
    action: y,
    testid: "newsletter-overflow-menu-newsletter-info"
  }, h.fbt._("Channel info", null, {
    hk: "3uRRKN"
  })), g.default.createElement(l.DropdownItem, {
    testid: "newsletter-overflow-menu-select-messages",
    key: "newsletter-overflow-menu-select-messages",
    action: a
  }, h.fbt._("Select updates", null, {
    hk: "lhMmG"
  })), g.default.createElement(l.DropdownItem, {
    key: "newsletter-overflow-menu-close-channel",
    action: C,
    testid: "newsletter-overflow-menu-close-channel"
  }, h.fbt._("Close channel", null, {
    hk: "2q5stx"
  }))];
  if (((0, s.iAmGuest)(v) || (0, s.iAmSubscriber)(v)) && (0, u.isNewsletterReportingEnabled)()) {
    M.push(g.default.createElement(l.DropdownItem, {
      key: "newsletter-overflow-menu-report",
      action: _,
      testid: "newsletter-overflow-menu-report"
    }, h.fbt._("Report", null, {
      hk: "1m9SUM"
    })));
  }
  if ((0, s.iAmSubscriber)(v)) {
    M.push(g.default.createElement(l.DropdownItem, {
      key: "newsletter-overflow-menu-unfollow",
      action: b,
      testid: "newsletter-overflow-menu-unfollow"
    }, h.fbt._("Unfollow", null, {
      hk: "VS8bd"
    })));
  }
  if (n != null) {
    return g.default.createElement("div", {
      ref: E
    }, M);
  }
  return g.default.createElement(o.Dropdown, {
    ref: e => {
      E.current = e;
    },
    type: o.MenuType.DropdownMenu,
    key: "NewsletterMenuDropdown",
    flipOnRTL: true,
    dirX: o.DirX.LEFT,
    testid: "newsletter-menu-dropdown"
  }, M);
};
var r = require("../app/780549.js");
var o = require("../app/664149.js");
var l = require("../app/675085.js");
var i = require("../app/114850.js");
var u = require("../app/73225.js");
var s = require("../app/751460.js");
var c = a(require("./726619.js"));
var d = require("../app/453603.js");
var f = require("../app/163139.js");
var p = require("./106645.js");
var m = require("../app/874806.js");
var h = require("../vendor/548360.js");
var g = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = E(t);
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
function E(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (E = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}