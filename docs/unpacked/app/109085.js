Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeFetchKeyBundlesRequest = function (e) {
  const {
    userArgs: t
  } = e;
  return (0, o.mergeClientRequestMixin)((0, a.smax)("iq", {
    type: "get"
  }, (0, a.smax)("key", null, (0, i.REPEATED_CHILD)(l, t, 1, 100000))));
};
exports.makeFetchKeyBundlesRequestKeyUser = l;
var r = require("./93864.js");
var i = require("./974339.js");
var a = require("./758616.js");
var o = require("./323071.js");
var s = require("./716358.js");
function l(e) {
  const {
    userJid: t,
    hasUserReasonIdentity: n
  } = e;
  return (0, a.smax)("user", {
    jid: (0, s.JID)(t),
    reason: (0, r.OPTIONAL_LITERAL)("identity", n)
  });
}