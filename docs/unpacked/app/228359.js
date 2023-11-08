var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return y.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./466202.js");
var o = require("./347387.js");
var s = r(require("./690479.js"));
var l = r(require("./909367.js"));
var u = require("./422848.js");
var c = r(require("./80588.js"));
var d = require("./783883.js");
var p = require("./186837.js");
var f = r(require("./679834.js"));
var _ = r(require("./395447.js"));
var g = r(require("./556869.js"));
const m = require("../vendor/76672.js")({
  Join: "join",
  Metadata: "metadata",
  Leave: "leave",
  Delete: "delete",
  LiveUpdates: "live_updates",
  MessageDeliveryUpdates: "message_delivery_updates",
  Admin: "admin"
});
const h = new o.WapParser("incomingNewsletterNotificationParser", e => {
  const t = e.mapFirstChild(e => e.tag());
  const n = m.cast(t);
  const r = e.attrFromJid();
  if (n == null) {
    __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter][notification] Failed to cast ${t}`;
    SEND_LOGS("newsletter-failed-to-cast-notification", 1, "newsletter");
    throw (0, g.default)(`Failed to cast ${t}`);
  }
  if (r.type !== "newsletter") {
    __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter][notification] Unexpected from `;
    SEND_LOGS(`newsletter-wrong-notification-sender-type-${r.type}`, 1, "newsletter");
    throw (0, g.default)(`Unexpected from ${r.type}`);
  }
  return {
    firstChildTag: n,
    from: r.newsletterJid
  };
});
function y() {
  return (y = (0, i.default)(function* (e) {
    try {
      const {
        firstChildTag: t,
        from: n
      } = h.parseOrThrow(e);
      return yield _.default.enqueue(n, () => {
        switch (t) {
          case m.Join:
            return (0, u.handleNewsletterJoinNotification)(e);
          case m.Metadata:
            return (0, f.default)(e);
          case m.Leave:
            return (0, c.default)(e);
          case m.Delete:
            return (0, s.default)(e);
          case m.LiveUpdates:
            return (0, d.handleNewsletterLiveUpdatesNotification)(e);
          case m.MessageDeliveryUpdates:
            return (0, p.handleNewsletterMessageDeliveryUpdateNotification)(e);
          case m.Admin:
            return (0, l.default)(e);
        }
      });
    } catch (e) {
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter][notification] Failed to parse notification`;
      SEND_LOGS("failed-to-parse-newsletter-notification", 1, "newsletter");
      throw new a.XmppParsingFailure("incomingNewsletterNotificationParser", e instanceof Error ? e.name : typeof e + " was thrown rather than an Error");
    }
  })).apply(this, arguments);
}