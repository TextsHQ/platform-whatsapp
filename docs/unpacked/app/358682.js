Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseDisplayNameOrUsernameMixinGroup = function (e) {
  const t = (0, i.parseDisplayNameMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "DisplayName",
      value: t.value
    });
  }
  const n = (0, a.parseUsernameMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "Username",
      value: n.value
    });
  }
  return (0, o.errorMixinDisjunction)(e, ["DisplayName", "Username"], [t, n]);
};
var r = require("./135781.js");
var i = require("./123258.js");
var a = require("./854950.js");
var o = require("./686310.js");