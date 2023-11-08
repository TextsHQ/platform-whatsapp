var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPrivacyModeWhenSent = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./782049.js");
var o = require("./257845.js");
var s = require("./35109.js");
var l = require("./755985.js");
var u = require("./459857.js");
var c = require("./766187.js");
function d() {
  return (d = (0, i.default)(function* (e, t) {
    if (e.type !== o.MESSAGE_TYPE.CHAT) {
      return;
    }
    if (!(0, u.isMeAccount)(e.author)) {
      return t.privacyMode;
    }
    const n = t.privacyMode;
    const r = (0, l.isWorker)() ? yield (0, a.getPrivacyMode)(e.chat) : yield (0, c.workerSafeSendAndReceive)("getPrivacyMode", {
      id: e.chat
    });
    return (0, s.getLatestPrivacyMode)(r, n);
  })).apply(this, arguments);
}