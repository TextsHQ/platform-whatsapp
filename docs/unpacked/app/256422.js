Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeClientNotificationRequest = function (e) {
  const {
    chatstateTo: t,
    hasThreadTypeVanishMode: n,
    internalTestMixinArgs: u,
    composingOrPausedMixinGroupArgs: c
  } = e;
  return (0, a.mergeComposingOrPausedMixinGroup)((0, i.optionalMerge)(o.mergeInternalTestMixin, (0, i.optionalMerge)(s.mergeThreadTypeVanishModeMixin, (0, r.smax)("chatstate", {
    to: (0, l.JID)(t)
  }), n), u), c);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./749787.js");
var o = require("./905353.js");
var s = require("./551910.js");
var l = require("./716358.js");