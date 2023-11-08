Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  if (e.isGroup) {
    __LOG__(4, undefined, new Error(), true)`chat.updateEphemeralSettingTimestamp should not be called for group ${e.id.toLogString()}`;
    return void SEND_LOGS("update-ephemeral-setting-timestamp");
  }
  (0, a.updateChatTable)(e.id, {
    ephemeralSettingTimestamp: t
  }).then(() => {
    e.ephemeralSettingTimestamp = t;
    __LOG__(2)`chat.updateEphemeralSettingTimestamp chatId=${e.id.toLogString()} ephemeralSettingTimestamp=${t}`;
  });
};
var a = require("../app/840089.js");