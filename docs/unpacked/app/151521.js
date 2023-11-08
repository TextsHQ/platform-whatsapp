Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeFetchMissingPreKeysRequest = function (e) {
  const {
    userArgs: t
  } = e;
  return (0, o.mergeClientRequestMixin)((0, a.smax)("iq", {
    type: "get"
  }, (0, a.smax)("key_fetch", null, (0, i.REPEATED_CHILD)(c, t, 1, 100000))));
};
exports.makeFetchMissingPreKeysRequestKeyFetchUser = c;
exports.makeFetchMissingPreKeysRequestKeyFetchUserDevice = u;
var r = require("./93864.js");
var i = require("./974339.js");
var a = require("./758616.js");
var o = require("./323071.js");
var s = require("./305752.js");
var l = require("./716358.js");
function u(e) {
  const {
    deviceId: t
  } = e;
  return (0, s.mergeRegistrationIDMixin)((0, a.smax)("device", {
    id: (0, l.INT)(t)
  }), e);
}
function c(e) {
  const {
    deviceArgs: t,
    userJid: n,
    hasUserReasonIdentity: o
  } = e;
  return (0, a.smax)("user", {
    jid: (0, l.JID)(n),
    reason: (0, r.OPTIONAL_LITERAL)("identity", o)
  }, (0, i.REPEATED_CHILD)(u, t, 0, 100));
}