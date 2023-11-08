Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseUserFetchKeyBundlesSuccessOrFetchKeyBundlesErrorOrFetchKeyBundlesErrorFallbackMixinGroup = function (e) {
  const t = (0, o.parseFetchKeyBundlesUserSuccessMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "FetchKeyBundlesUserSuccess",
      value: t.value
    });
  }
  const n = (0, a.parseFetchKeyBundlesUserErrorMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "FetchKeyBundlesUserError",
      value: n.value
    });
  }
  const l = (0, i.parseFetchKeyBundlesUserErrorFallbackMixin)(e);
  if (l.success) {
    return (0, r.makeResult)({
      name: "FetchKeyBundlesUserErrorFallback",
      value: l.value
    });
  }
  return (0, s.errorMixinDisjunction)(e, ["UserSuccess", "UserError", "UserErrorFallback"], [t, n, l]);
};
var r = require("./135781.js");
var i = require("./534818.js");
var a = require("./561307.js");
var o = require("./282242.js");
var s = require("./686310.js");