var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setChatAsEphemeralityUnsupported = function () {
  return p.apply(this, arguments);
};
exports.updateChatEphemeralSettings = c;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./933915.js");
var s = require("./840089.js");
var l = require("./90377.js");
var u = require("./448609.js");
function c() {
  return d.apply(this, arguments);
}
function d() {
  return (d = (0, a.default)(function* (e, t) {
    __LOG__(2)`[DMResolve] updateChatEphemeralSettings`;
    yield (0, s.updateChatTable)(e.id, (0, i.default)((0, i.default)({}, t), {}, {
      disappearingModeInitiator: t.disappearingModeInitiator,
      disappearingModeTrigger: t.disappearingModeTrigger != null ? t.disappearingModeTrigger : null
    }));
    e.set(t);
    (0, o.updateEphemeralDurationCache)(e.id, e.ephemeralDuration);
  })).apply(this, arguments);
}
function p() {
  return (p = (0, a.default)(function* (e) {
    yield c(e, {
      ephemeralDuration: 0,
      ephemeralSettingTimestamp: Date.now(),
      disappearingModeInitiator: u.DisappearingModeInitiator.ChangedInChat
    });
    yield (0, l.generateEphemeralUnsupportedNotificationTemplateSystemMessage)(e);
  })).apply(this, arguments);
}