var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  const {
    chat: n,
    spamFlow: a
  } = e;
  const [g, v] = (0, m.useState)(false);
  const _ = ((t = n.newsletterMetadata) === null || t === undefined ? undefined : t.membershipType) === o.NewsletterMembershipType.Subscriber;
  const y = p.fbt._("Report this channel?", null, {
    hk: "4gECBC"
  });
  const C = p.fbt._("No one in the channel will know about this report.", null, {
    hk: "1RtdPR"
  });
  const b = p.fbt._("Unfollow channel", null, {
    hk: "4ePXTn"
  });
  return m.default.createElement(l.ConfirmPopup, {
    onOK: () => {
      (0, s.sendReport)({
        chat: n,
        spamFlow: a
      }).then(() => g && (0, u.unsubscribeFromNewsletterAction)(n, {
        eventSurface: f.CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE
      })).finally(() => {
        i.ModalManager.close();
      });
    },
    okText: p.fbt._("Report", null, {
      hk: "1LFE8N"
    }),
    onCancel: () => i.ModalManager.close(),
    title: y
  }, _ && m.default.createElement("div", {
    className: (0, h.default)(d.uiMargin.vert12, d.uiPadding.bottom20, E, d.uiMargin.end0)
  }, m.default.createElement(r.CheckBox, {
    onChange: () => v(e => !e),
    checked: g,
    id: "newsletter-upsell-unfollow"
  }), m.default.createElement(c.TextLabel, {
    className: (0, h.default)(d.uiMargin.start8),
    htmlFor: "newsletter-upsell-unfollow"
  }, b)), m.default.createElement(c.TextParagraph, {
    xstyle: d.uiMargin.bottom12
  }, C));
};
var r = require("./468926.js");
var o = require("../app/927531.js");
var l = require("../app/103440.js");
var i = require("../app/114850.js");
var u = require("./229476.js");
var s = require("../app/383296.js");
var c = require("../app/180519.js");
var d = require("../app/676345.js");
var f = require("../app/874806.js");
var p = require("../vendor/548360.js");
var m = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = g(t);
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
var h = a(require("../app/156720.js"));
function g(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (g = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const E = {
  borderBottom: "j4zbmt6h"
};