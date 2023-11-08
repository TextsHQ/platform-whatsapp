var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryGroupInviteLinkProfilePicURL = function () {
  return l.apply(this, arguments);
};
exports.queryGroupInviteMessageProfilePicURL = function () {
  return i.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("./484386.js");
function l() {
  return (l = (0, r.default)(function* (e, t) {
    return (yield (0, o.queryGroupInviteLinkProfilePicJob)(e, t, {
      type: "preview",
      query: "url"
    })).url;
  })).apply(this, arguments);
}
function i() {
  return (i = (0, r.default)(function* (e, t, n, a) {
    return (yield (0, o.queryGroupInviteMessageProfilePicJob)(e, t, n, a, {
      type: "image",
      query: "url"
    })).url;
  })).apply(this, arguments);
}