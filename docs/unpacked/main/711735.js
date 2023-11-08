var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canMarkPlayed = function (e) {
  return s((0, u.unproxy)(e));
};
exports.markPlayed = function (e) {
  return function (e) {
    if (s(e)) {
      (0, i.default)(e).then(() => {
        e.ack = r.ACK.PLAYED;
        if (e.isViewOnce) {
          (0, o.handleActivitiesForChatThreadLogging)([{
            activityType: "viewOnceOpen",
            ts: e.t,
            chatId: e.id.remote
          }]);
        }
      });
    } else {
      __LOG__(2)`Msg:msg should not call sendPlayed`;
    }
  }((0, u.unproxy)(e));
};
var r = require("../app/402994.js");
var o = require("../app/698867.js");
var l = require("../app/787742.js");
var i = a(require("./66420.js"));
var u = require("../app/163139.js");
function s(e) {
  return !(0, l.getIsSentByMe)(e) && !(e.ack >= r.ACK.PLAYED) && ((0, l.getIsAckPlayable)(e) || e.isViewOnce);
}