var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertMessageToCommentMsgData = function (e, t) {
  return {
    ack: t.ack,
    body: (0, i.default)(e.conversation, "message.conversation"),
    from: t.from,
    id: t.id,
    parentMsgKey: t.targetMessageKey,
    sender: t.author ? (0, s.toUserWid)(t.author) : (0, o.getMeUser)(),
    t: t.t,
    type: a.MSG_TYPE.COMMENT
  };
};
var i = r(require("./670983.js"));
var a = require("./373070.js");
var o = require("./459857.js");
var s = require("./669050.js");