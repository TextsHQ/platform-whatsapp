var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getToken = function () {
  return _.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./30028.js");
var s = require("./632157.js");
var l = require("./184807.js");
var u = require("./507201.js");
var c = require("./42570.js");
var d = require("./599933.js");
function p(e) {
  const {
    result: t,
    overallStartTime: n,
    retryStartTime: r,
    retryAttemptsLeft: i
  } = e;
  const a = function (e) {
    switch (e) {
      case "success":
        return c.SIGN_CREDENTIAL_RESULT.SUCCESS;
      case "bad-request":
        return c.SIGN_CREDENTIAL_RESULT.ERROR_BAD_REQUEST;
      case "internal-server-error":
        return c.SIGN_CREDENTIAL_RESULT.ERROR_SERVER;
      case "disconnected":
        return c.SIGN_CREDENTIAL_RESULT.ERROR_CLIENT_NETWORK;
      default:
        return c.SIGN_CREDENTIAL_RESULT.ERROR_OTHER;
    }
  }(t);
  new l.SignCredentialWamEvent({
    signCredentialResult: a,
    overallT: (0, s.monotonicTimeSince)(n),
    signCredentialT: (0, s.monotonicTimeSince)(r),
    retryCount: 3 - i,
    waConnectedToChatd: t !== "disconnected",
    applicationState: document.visibilityState === "visible" ? u.APPLICATION_STATE.FOREGROUND : u.APPLICATION_STATE.BACKGROUND
  }).commit();
}
const f = new o.Semaphore(1);
function _() {
  return (_ = (0, i.default)(function* () {
    const e = yield f.acquire();
    try {
      const {
        result: t,
        metric: n
      } = yield (0, d.getToken)(a.deprecatedSendIqWithoutRetry);
      if (n != null) {
        p(n);
      }
      if (!t) {
        __LOG__(3)`Couldn't get a private stats token`;
      }
      return t;
    } finally {
      e.release();
    }
  })).apply(this, arguments);
}