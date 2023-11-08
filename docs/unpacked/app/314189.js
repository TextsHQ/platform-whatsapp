var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.socketLogout = function () {
  return l.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./359987.js");
var o = require("./755985.js");
var s = require("./757453.js");
function l() {
  return (l = (0, i.default)(function* (e) {
    if ((0, o.isServiceWorker)()) {
      try {
        yield Promise.all([(0, s.setOfflinePushDisabled)(true), (0, s.setLogoutReason)({
          reason: e
        })]);
      } catch (e) {
        __LOG__(4, undefined, new Error(), true)`Socket logout failed, err: ${e}`;
        return void SEND_LOGS("sw-socket-logout-failed");
      }
    }
    (0, a.frontendFireAndForget)("socketLogout", {
      reason: e
    });
  })).apply(this, arguments);
}