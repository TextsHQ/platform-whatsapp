Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseUserFetchMissingPreKeysSuccessOrFetchMissingPreKeysErrorOrFetchMissingPreKeysErrorFallbackMixinGroup = function (e) {
  const t = (0, o.parseFetchMissingPreKeysUserSuccessMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "FetchMissingPreKeysUserSuccess",
      value: t.value
    });
  }
  const n = (0, a.parseFetchMissingPreKeysUserErrorMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "FetchMissingPreKeysUserError",
      value: n.value
    });
  }
  const l = (0, i.parseFetchMissingPreKeysUserErrorFallbackMixin)(e);
  if (l.success) {
    return (0, r.makeResult)({
      name: "FetchMissingPreKeysUserErrorFallback",
      value: l.value
    });
  }
  return (0, s.errorMixinDisjunction)(e, ["UserSuccess", "UserError", "UserErrorFallback"], [t, n, l]);
};
var r = require("./135781.js");
var i = require("./375942.js");
var a = require("./504670.js");
var o = require("./293903.js");
var s = require("./686310.js");