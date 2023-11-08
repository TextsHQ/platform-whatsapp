var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendAppStateFatalExceptionNotification = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./632157.js");
var o = require("./731165.js");
var s = r(require("./565754.js"));
var l = require("./635881.js");
var u = require("./459857.js");
var c = require("./669050.js");
function d() {
  return (d = (0, i.default)(function* (e) {
    const t = {
      collectionNames: e,
      timestamp: (0, a.unixTimeMs)()
    };
    const n = {
      id: new s.default({
        fromMe: true,
        remote: (0, u.getMeUser)(),
        id: yield s.default.newId()
      }),
      to: (0, c.createDeviceWidFromUserAndDevice)((0, u.assertGetMe)().user, (0, u.assertGetMe)().server, 0),
      type: "protocol",
      subtype: "app_state_fatal_exception_notification",
      appStateFatalExceptionNotification: t
    };
    yield (0, o.storePeerMessages)([n]);
    return (0, l.encryptAndSendKeyMsg)(n);
  })).apply(this, arguments);
}