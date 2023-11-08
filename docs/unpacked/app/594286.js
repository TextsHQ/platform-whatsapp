Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseFromUserOrGroupMixinGroup = function (e) {
  const t = (0, a.parseFromUserMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "FromUser",
      value: t.value
    });
  }
  const n = (0, i.parseFromGroupMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "FromGroup",
      value: n.value
    });
  }
  return (0, o.errorMixinDisjunction)(e, ["FromUser", "FromGroup"], [t, n]);
};
var r = require("./135781.js");
var i = require("./314187.js");
var a = require("./44930.js");
var o = require("./686310.js");