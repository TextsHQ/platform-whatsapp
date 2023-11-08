var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareChatForMessageSending = function () {
  return s.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("./824313.js");
var l = require("../app/790215.js");
var i = require("./488337.js");
var u = require("../app/163139.js");
function s() {
  return (s = (0, r.default)(function* (e) {
    const t = (0, u.unproxy)(e);
    if (!t.isUser && !t.isGroup) {
      return Promise.resolve();
    }
    try {
      if (t.isUser && (0, l.isDeviceSyncManagerEnabled)() || t.isGroup && (0, l.isDeviceSyncManagerGroupEnabled)()) {
        yield Promise.all([(0, o.eagerlyEstablishE2EESession)(t), (0, i.prefetchDevices)(t)]);
      } else {
        yield (0, o.eagerlyEstablishE2EESession)(t);
      }
    } catch (e) {
      __LOG__(4, undefined, new Error())`prepareChatForMessageSending: failed with error: ${e}`;
    }
  })).apply(this, arguments);
}