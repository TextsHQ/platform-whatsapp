var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genChatAssignmentNotificationTemplateMsg = function (e, t, n) {
  const r = (0, a.getMeUser)();
  const o = i.default.newId_DEPRECATED();
  return {
    id: new i.default({
      fromMe: (0, a.isMeAccount)(e),
      remote: e,
      id: o
    }),
    t: n,
    type: "notification_template",
    subtype: t == null ? "chat_assignment_unassign" : "chat_assignment",
    from: e,
    to: r,
    templateParams: t == null ? [] : [t.name]
  };
};
var i = r(require("./565754.js"));
var a = require("./459857.js");