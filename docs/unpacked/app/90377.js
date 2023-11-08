var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateEphemeralNotificationTemplateSystemMessage = function () {
  return s.apply(this, arguments);
};
exports.generateEphemeralUnsupportedNotificationTemplateSystemMessage = function () {
  return l.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./389293.js");
var o = require("./257845.js");
function s() {
  return (s = (0, i.default)(function* (e, t, r) {
    const i = require("./700846.js").handleSingleMsg;
    const s = (0, a.genDisappearingModeUpdateSystemMsg)(e.id, t, r);
    yield i(s.from, s, "ephemeralSystemMsg", o.MessageOverwriteOption.NO_OVERWRITE, false);
  })).apply(this, arguments);
}
function l() {
  return (l = (0, i.default)(function* (e) {
    const t = require("./700846.js").handleSingleMsg;
    const r = (0, a.genDisappearingModeUnsupportedSystemMsg)(e.id);
    yield t(r.from, r, "ephemeralUnsupportedSystemMsg", o.MessageOverwriteOption.NO_OVERWRITE, false);
  })).apply(this, arguments);
}