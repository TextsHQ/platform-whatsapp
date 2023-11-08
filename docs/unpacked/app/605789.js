var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mexHandleNewsletterStateChange = function () {
  return E.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./418987.js");
var s = require("./35234.js");
var l = require("./359987.js");
var u = require("./854379.js");
var c = require("./362626.js");
var d = require("./787671.js");
var p = require("./657987.js");
var f = require("./14291.js");
var _ = require("./718561.js");
var g = require("./787111.js");
var m = require("./251309.js");
var h = r(require("./556869.js"));
function y(e) {
  switch (e) {
    case "ACTIVE":
      return "active";
    case "SUSPENDED":
      return "suspended";
    case "GEOSUSPENDED":
      return "geosuspended";
  }
}
function E() {
  return (E = (0, a.default)(function* (e, t) {
    const {
      id: n,
      is_requestor: r,
      state: a
    } = t.xwa2_notify_newsletter_on_state_change;
    if (n == null) {
      throw (0, h.default)("unexpected null id in xwa2_notify_newsletter_on_state_change");
    }
    const c = (0, o.toNewsletterJid)(n);
    const g = (0, u.newsletterJidToWid)(c);
    const m = a == null ? undefined : a.type;
    const E = yield (0, s.getChatRecord)(g);
    if (E != null) {
      try {
        switch (m) {
          case "DELETED":
            return yield S(r === true, c, g, E.name);
          case "ACTIVE":
          case "SUSPENDED":
          case "GEOSUSPENDED":
            {
              const e = y(m);
              const t = (0, p.emptyNewsletterMetadataType)(c);
              const n = (0, i.default)((0, i.default)({}, t), {}, {
                newsletterStateMetadataMixin: {
                  stateType: e
                }
              });
              const {
                chat: r,
                metadata: a,
                pic: o
              } = (0, f.mapNewsletterToModels)(n);
              yield (0, d.updateNewsletterMetadata)((0, _.createNewsletterMetadataObjectForStorage)(a));
              yield (0, l.frontendSendAndReceive)("updateNewsletterMetadata", {
                metadata: a,
                newsletter: r,
                pic: o
              });
              break;
            }
          default:
            {
              const e = m == null ? "null or undefined" : m;
              throw (0, h.default)(`Unexpected state change type: ${e}`);
            }
        }
      } catch (e) {
        __LOG__(4, undefined, new Error(), true, ["mex", "newsletter"])`[mex][newsletter][notification][state-change] Failed to update to ${m} state`;
        SEND_LOGS("mex-newsletternotification-state-change-fail", 1, "mex", "newsletter");
      }
    }
  })).apply(this, arguments);
}
function S() {
  return v.apply(this, arguments);
}
function v() {
  return (v = (0, a.default)(function* (e, t, n, r) {
    if (e) {
      return T(t, n);
    } else {
      return A(t, n, r);
    }
  })).apply(this, arguments);
}
function T() {
  return M.apply(this, arguments);
}
function M() {
  return (M = (0, a.default)(function* (e, t) {
    yield (0, d.deleteNewsletterMetadata)(e.toString());
    yield (0, c.deleteNewsletterChat)(t);
    yield (0, d.deleteNewsletterPicture)(e.toString());
    yield (0, l.frontendSendAndReceive)("deleteNewsletter", {
      id: t,
      keep: true
    });
  })).apply(this, arguments);
}
function A() {
  return b.apply(this, arguments);
}
function b() {
  return (b = (0, a.default)(function* (e, t, n) {
    const r = (0, g.genNewsletterDeletionSystemMessages)({
      id: e,
      name: n
    });
    yield (0, d.updateNewsletterMetadata)({
      id: e,
      terminated: true
    });
    yield (0, m.addNewsletterMsgsRecords)(r);
    yield (0, l.frontendSendAndReceive)("terminateNewsletter", {
      id: t,
      msgs: r
    });
  })).apply(this, arguments);
}