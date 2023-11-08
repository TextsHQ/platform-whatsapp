var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return f.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./765634.js");
var o = require("./359987.js");
var s = r(require("./403977.js"));
var l = require("./854379.js");
var u = require("./520670.js");
var c = require("./73225.js");
var d = require("./95589.js");
var p = require("./377773.js");
function f() {
  return (f = (0, i.default)(function* (e) {
    const {
      makeAdminNotificationResponseAck: t,
      parsedRequest: n
    } = (0, a.receiveAdminNotificationRPC)(e);
    if (!(0, c.isNewsletterGeosuspendAdminAlertsEnabled)()) {
      return t();
    }
    const r = n.from;
    const i = (0, l.newsletterJidToWid)(r);
    try {
      var f;
      const e = (f = n.adminAdminGeosuspendNotificationPayloadMixin) === null || f === undefined ? undefined : f.adminNotificationGeosuspendedOrGeounsuspendedStateMixinMixinGroup;
      if (e == null) {
        return t();
      }
      switch (e.name) {
        case "AdminNotificationGeosuspendedStateMixin":
          {
            const {
              value: t
            } = e;
            const n = t.geosuspendedCountry.map(e => {
              const t = e.isoCode;
              if (t in s.default) {
                return t;
              } else {
                return null;
              }
            }).filter(Boolean);
            if (n.length > 0) {
              yield (0, u.updateGeosuspendedCountry)(r, n, true);
              (0, o.frontendFireAndForget)("updateGeosuspendedCountry", {
                id: i,
                countryCodes: n,
                toAdd: true
              });
              const e = (0, d.getNewsletterAlertsBannerNuxKey)(r);
              (0, p.resetNux)(e);
            }
            break;
          }
        case "AdminNotificationGeounsuspendedStateMixin":
          {
            const {
              value: t
            } = e;
            const n = t.geounsuspendedCountry.map(e => {
              const t = e.isoCode;
              if (t in s.default) {
                return t;
              } else {
                return null;
              }
            }).filter(Boolean);
            if (n.length > 0) {
              yield (0, u.updateGeosuspendedCountry)(r, n, false);
              (0, o.frontendFireAndForget)("updateGeosuspendedCountry", {
                id: i,
                countryCodes: n,
                toAdd: false
              });
            }
            break;
          }
      }
    } catch (e) {
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter][admin-notification] Failed to update the db records`;
      SEND_LOGS("newsletter-admin-notification-db-fail", 1, "newsletter");
    }
    return t();
  })).apply(this, arguments);
}