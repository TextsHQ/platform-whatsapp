var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return y.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./347387.js");
var s = require("./780549.js");
require("./618422.js");
var l = require("./621059.js");
require("./827747.js");
var u = r(require("./932325.js"));
r(require("./174285.js"));
var c = require("./332108.js");
var d = require("./38878.js");
var p = require("./366320.js");
var f = require("./343343.js");
var _ = require("./233895.js");
var g = require("./350906.js");
var m = r(require("./556869.js"));
const h = new o.WapParser("failureParser", e => {
  e.assertTag("failure");
  return {
    reason: e.attrInt("reason", 400, 599),
    location: e.attrString("location"),
    code: e.hasAttr("code") ? e.attrInt("code") : null,
    expire: e.hasAttr("expire") ? e.attrInt("expire") : null,
    message: e.maybeAttrString("message"),
    url: e.maybeAttrString("url"),
    logoutMessageHeader: e.maybeAttrString("logout_message_header"),
    logoutMessageSubtext: e.maybeAttrString("logout_message_subtext"),
    logoutMessageLocale: e.maybeAttrString("logout_message_locale")
  };
});
function y() {
  return (y = (0, i.default)(function* (e) {
    const t = h.parse(e);
    if (t.error) {
      __LOG__(4, undefined, new Error())`${t.error.toString()} parsing ${e.toString()}`;
      return Promise.reject(t.error);
    }
    switch (t.success.reason) {
      case l.FAILURE_REASON.REASON_LOCKED:
        {
          __LOG__(2)`received failure stanza, reason: ${t.success.reason}, logging out`;
          const {
            logoutMessageHeader: e,
            logoutMessageSubtext: n,
            logoutMessageLocale: r
          } = t.success;
          let i = null;
          if (!(r !== u.default.getLocale() || e == null && n == null)) {
            i = {
              logoutMessageHeader: e,
              logoutMessageSubtext: n
            };
          }
          yield d.Socket.clearCredentialsAndStoredData(c.LogoutReason.AccountLocked, i);
          s.Cmd.logout();
          break;
        }
      case l.FAILURE_REASON.REASON_NOT_AUTHORIZED:
      case l.FAILURE_REASON.REASON_BANNED:
        __LOG__(2)`received failure stanza, reason: ${t.success.reason}, logging out`;
        yield d.Socket.clearCredentialsAndStoredData();
        s.Cmd.logout();
        break;
      case l.FAILURE_REASON.REASON_CLIENT_TOO_OLD:
      case l.FAILURE_REASON.REASON_BAD_USER_AGENT:
        __LOG__(2)`Client too old or bad user agent, attempting to update the app`;
        if (f.PLATFORMS[(0, g.getWamPlatform)()] === "web") {
          p.Updater.update(_.SANITIZED_VERSION_STR, false, 0);
        } else {
          p.Updater.update(undefined, false, 0, false);
        }
        (0, a.stopComms)();
        break;
      case l.FAILURE_REASON.REASON_TEMP_BANNED:
        {
          const {
            code: e,
            expire: n,
            message: r,
            url: i
          } = t.success;
          if (e == null || n == null) {
            __LOG__(4, undefined, new Error())`Incorrect temporary ban data ${e} ${n}`;
            throw (0, m.default)("handleFailure: wrong temp ban data");
          }
          s.Cmd.onTemporaryBan({
            banned: true,
            code: e,
            message: r,
            url: i,
            expire: n
          });
          break;
        }
      case l.FAILURE_REASON.REASON_GENERIC_FAILURE:
      case l.FAILURE_REASON.REASON_INTERNAL_SERVER_ERROR:
      case l.FAILURE_REASON.REASON_EXPERIMENTAL:
        __LOG__(3)`handleFailure: got failure code ${t.success.reason}`;
        break;
      case l.FAILURE_REASON.REASON_SERVICE_UNAVAILABLE:
        __LOG__(3)`handleFailure: got failure code ${t.success.reason}`;
        s.Cmd.showServiceUnavailableError();
        break;
      default:
        __LOG__(3)`failure reason ${t.success.reason} not implemented yet`;
        return Promise.reject((0, m.default)(`failure reason ${t.success.reason} not implemented yet`));
    }
  })).apply(this, arguments);
}