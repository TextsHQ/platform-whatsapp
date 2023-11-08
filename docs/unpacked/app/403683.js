var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mexHandleNewsletterAdminNotification = function () {
  return g.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./359987.js");
var o = require("./927531.js");
var s = require("./854379.js");
var l = require("./520670.js");
var u = require("./73225.js");
var c = require("./186837.js");
var d = require("./263318.js");
var p = require("./95589.js");
var f = require("./377773.js");
var _ = r(require("./556869.js"));
function g() {
  return (g = (0, i.default)(function* (e, t) {
    if (!(0, u.isNewsletterGeosuspendAdminAlertsEnabled)()) {
      return;
    }
    const {
      id: n,
      thread_metadata: r,
      messages: i
    } = t.xwa2_notify_newsletter_on_admin_metadata_update;
    try {
      if (n == null) {
        __LOG__(4, undefined, new Error(), true, ["mex", "newsletter"])`unexpected null id in xwa2_notify_newsletter_on_admin_metadata_update`;
        return void SEND_LOGS("newsletter-mex-admin-metadata-notification-unexpected-null-id", 1, "mex", "newsletter");
      }
      yield m(n, r);
      yield y(n, i);
    } catch (e) {
      __LOG__(4, undefined, new Error(), true, ["mex", "newsletter"])`[mex][newsletter][notification][admin-metadata] Failed to persist admin metadata notification information on db`;
      SEND_LOGS("mex-newsletter-admin-metadata-notification-db-fail", 1, "mex", "newsletter");
    }
  })).apply(this, arguments);
}
function m() {
  return h.apply(this, arguments);
}
function h() {
  return (h = (0, i.default)(function* (e, t) {
    if ((t == null ? undefined : t.geo_states) == null) {
      return;
    }
    const n = t.geo_states;
    const r = (0, d.toNewsletterJidOrThrow)(e);
    const i = (0, s.newsletterJidToWid)(r);
    const {
      countriesToAdd: u,
      countriesToRemove: c
    } = n.reduce((e, t) => {
      var n;
      const r = t.country_code;
      if (o.NewsletterState.cast((n = t.state.type) === null || n === undefined ? undefined : n.toLowerCase()) === o.NewsletterState.GeoSuspended) {
        e.countriesToAdd.push(r);
      } else {
        e.countriesToRemove.push(r);
      }
      return e;
    }, {
      countriesToAdd: [],
      countriesToRemove: []
    });
    if (u.length > 0) {
      yield (0, l.updateGeosuspendedCountry)(r, u, true);
      (0, a.frontendFireAndForget)("updateGeosuspendedCountry", {
        id: i,
        countryCodes: u,
        toAdd: true
      });
      const e = (0, p.getNewsletterAlertsBannerNuxKey)(r);
      (0, f.resetNux)(e);
    }
    if (c.length > 0) {
      yield (0, l.updateGeosuspendedCountry)(r, c, false);
      (0, a.frontendFireAndForget)("updateGeosuspendedCountry", {
        id: i,
        countryCodes: c,
        toAdd: false
      });
    }
  })).apply(this, arguments);
}
function y() {
  return E.apply(this, arguments);
}
function E() {
  return (E = (0, i.default)(function* (e, t) {
    if (t == null) {
      return;
    }
    const n = (0, d.toNewsletterJidOrThrow)(e);
    const r = t.edges.map(e => {
      const {
        node: t
      } = e;
      const n = t.message_delivery_update.issue.code;
      let r;
      switch (n) {
        case "NEEDS_REVIEW":
          r = 1;
          break;
        case "NONE":
          r = 0;
          break;
        default:
          throw (0, _.default)(`Unexpected mex issue code: ${n}`);
      }
      return {
        serverId: parseInt(t.server_id, 10),
        issueCode: r
      };
    });
    yield (0, c.handleNewsletterMessageDeliveryUpdateNotificationImpl)(n, r);
  })).apply(this, arguments);
}