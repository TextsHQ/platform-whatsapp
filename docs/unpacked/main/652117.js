var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preloadChatMessagesAction = function () {
  return u.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/287461.js");
var l = require("../app/780549.js");
var i = require("./136827.js");
function u() {
  return (u = (0, r.default)(function* (e) {
    if ((0, o.getABPropConfigValue)("web_preload_chat_messages") && l.Cmd.isOfflineDeliveryEnd) {
      yield (0, i.preloadChatMessages)(e);
    }
  })).apply(this, arguments);
}