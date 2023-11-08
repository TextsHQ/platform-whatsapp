var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NEWSLETTER_INFO_SUBSCRIBER_DISPLAY_LIMIT = undefined;
exports.getNewsletterSubscribersAction = function () {
  return f.apply(this, arguments);
};
exports.getSubscribersInContacts = d;
var r = a(require("../vendor/348926.js"));
var o = require("../app/927531.js");
var l = require("../app/177938.js");
var i = require("../app/660666.js");
var u = require("../app/714574.js");
var s = require("./276084.js");
var c = require("../app/263318.js");
function d(e) {
  if (e == null) {
    return [];
  }
  return e.reduce((e, t) => {
    const n = l.ContactCollection.get(t.id);
    const a = (n == null ? undefined : n.phoneNumber) ? l.ContactCollection.get(n.phoneNumber) : n;
    const r = t.role === o.NewsletterMembershipType.Admin || t.role === o.NewsletterMembershipType.Owner;
    if (a == null) {
      if (!r) {
        return e;
      }
      const n = l.ContactCollection.gadd({
        id: t.id,
        phoneNumber: t.phoneNumber,
        name: t.displayName,
        type: "out"
      });
      e.push({
        contact: n,
        role: t.role
      });
    } else {
      if (!r && !(0, i.getIsMyContact)(a)) {
        return e;
      }
      if (r && a.phoneNumber == null) {
        a.set({
          phoneNumber: t.phoneNumber
        });
      }
      e.push({
        contact: a,
        role: t.role
      });
    }
    return e;
  }, []).filter(Boolean).sort((e, t) => {
    if (e.role === t.role) {
      if (!(0, i.getIsMyContact)(e.contact)) {
        return 1;
      }
      if (!(0, i.getIsMyContact)(t.contact)) {
        return -1;
      }
      const n = (0, u.getFormattedUser)(e.contact);
      const a = (0, u.getFormattedUser)(t.contact);
      return n.localeCompare(a);
    }
    if (e.role === o.NewsletterMembershipType.Owner) {
      return -1;
    } else if (t.role === o.NewsletterMembershipType.Owner) {
      return 1;
    } else if (e.role === o.NewsletterMembershipType.Admin) {
      return -1;
    } else {
      return 1;
    }
  });
}
function f() {
  return (f = (0, r.default)(function* (e, t, n) {
    if (!e.isNewsletter) {
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter][getNewsletterSubscribersAction] called with a non-newsletter chat`;
      SEND_LOGS("get-subscribers-of-non-newsletter", 1, "newsletter");
      return {
        subscribers: null,
        hasMore: false
      };
    }
    try {
      var a;
      const r = (0, c.toNewsletterJidOrThrow)(e.id.toJid());
      const o = yield (0, s.getNewsletterSubscribers)(r, t, n);
      const l = (a = o == null ? undefined : o.subscribers.length) !== null && a !== undefined ? a : 0;
      return {
        subscribers: d(o == null ? undefined : o.subscribers),
        hasMore: l >= 10
      };
    } catch (e) {
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter][getNewsletterSubscribersAction] failed to get subscribers from newsletter`;
      SEND_LOGS("get-subscribers-from-newsletter-failed", 1, "newsletter");
      return {
        subscribers: null,
        hasMore: false
      };
    }
  })).apply(this, arguments);
}
exports.NEWSLETTER_INFO_SUBSCRIBER_DISPLAY_LIMIT = 10;