Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseServerNotificationRequest = function (e) {
  const t = (0, l.assertTag)(e, "chatstate");
  if (!t.success) {
    return t;
  }
  const n = (0, s.parseThreadTypeVanishModeMixin)(e);
  const u = (0, o.parseInternalTestMixin)(e);
  const c = (0, a.parseFromUserOrGroupMixinGroup)(e);
  if (!c.success) {
    return c;
  }
  const d = (0, i.parseComposingOrPausedMixinGroup)(e);
  if (!d.success) {
    return d;
  }
  return (0, r.makeResult)({
    threadTypeVanishModeMixin: n.success ? n.value : null,
    internalTestMixin: u.success ? u.value : null,
    fromUserOrGroupMixinGroup: c.value,
    composingOrPausedMixinGroup: d.value
  });
};
var r = require("./135781.js");
var i = require("./706211.js");
var a = require("./594286.js");
var o = require("./92457.js");
var s = require("./754782.js");
var l = require("./686310.js");