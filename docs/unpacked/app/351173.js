var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maybeConvertSenderKey = function (e) {
  try {
    if (e != null && _(e)) {
      if ((0, o.isCryptoLibraryEnabled)()) {
        return (0, s.toCryptoManagerSenderKeySession)(e);
      } else {
        return (0, s.toSignalSenderKeySession)(e);
      }
    } else {
      return e;
    }
  } catch (e) {
    __LOG__(4, undefined, new Error(), true)`maybeConvertSenderKey: failed with error ${e}`;
    SEND_LOGS("senderkey-convert-error");
    throw e;
  }
};
exports.maybeConvertSession = function () {
  return f.apply(this, arguments);
};
exports.shouldConvertSenderKey = _;
exports.shouldConvertSession = p;
var i = r(require("../vendor/348926.js"));
var a = require("./403206.js");
var o = require("./492917.js");
var s = require("./345487.js");
var l = require("./382242.js");
var u = require("./33621.js");
var c = require("./76256.js");
var d = r(require("./556869.js"));
function p(e) {
  if ((0, o.isCryptoLibraryEnabled)()) {
    return e.sessions != null;
  } else {
    return e.aliceBaseKey != null;
  }
}
function f() {
  return (f = (0, i.default)(function* (e) {
    try {
      if (e == null || !p(e)) {
        return e;
      }
      if ((0, o.isCryptoLibraryEnabled)()) {
        const [t, n] = yield Promise.all([(0, c.getSignalProtocolStore)().getIdentityKeyPair(), (0, c.getSignalProtocolStore)().getLocalRegistrationId()]);
        if (!t || n == null) {
          throw (0, d.default)("Attempted to loadSession without registration info");
        }
        const r = {
          identityKeyPair: (0, a.toCurveKeyPair)(t),
          registrationId: n
        };
        return (0, l.toCryptoLibrarySessionPrevSessions)(e, r);
      }
      return (0, u.toLibsignalSessionPrevSessions)(e);
    } catch (e) {
      __LOG__(4, undefined, new Error(), true)`maybeConvertSession: failed with error ${e}`;
      SEND_LOGS("session-convert-error");
      throw e;
    }
  })).apply(this, arguments);
}
function _(e) {
  if ((0, o.isCryptoLibraryEnabled)()) {
    return e.sessions != null;
  } else {
    return e.senderKeyStates != null;
  }
}