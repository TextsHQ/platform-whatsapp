var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return m.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = a(require("../app/670983.js"));
var l = require("../app/632157.js");
var i = require("../app/72696.js");
var u = require("../app/374660.js");
var s = require("../app/698867.js");
var c = require("../app/780549.js");
var d = require("../app/877171.js");
var f = require("../app/581354.js");
var p = require("../app/163755.js");
function m() {
  return (m = (0, r.default)(function* (e) {
    const t = (0, o.default)(e.author, "msg.author");
    const n = (0, u.getOneToOneContactFromGroupContact)(t);
    const a = yield (0, f.findChat)(n, "privateReplyToMsg");
    if (yield c.Cmd.openChatBottom(a)) {
      if ((0, i.btmThreadsLoggingEnabled)()) {
        d.ComposeBoxActions.addMsgSendingLogAttributes(a, {
          handleMultiple() {
            (0, s.handleActivitiesForChatThreadLogging)([{
              activityType: "groupPrivateReplies",
              ts: (0, l.unixTime)(),
              chatId: a.id
            }]);
          }
        });
      }
      a.composeQuotedMsg = e;
      if ((0, p.getChat)(e)) {
        a.composeQuotedMsgRemoteJid = (0, p.getChat)(e).id;
      }
    }
  })).apply(this, arguments);
}