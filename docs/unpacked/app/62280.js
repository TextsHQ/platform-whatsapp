var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commentMessageFromDbRow = function (e) {
  const t = (0, i.default)({}, e);
  (0, a.movFieldFromOpaqueDataBackToMsg)(t);
  return {
    id: o.default.from(t.msgKey),
    type: s.MSG_TYPE.COMMENT,
    from: (0, l.createUserWid)(t.sender),
    ack: t.ack,
    t: t.t,
    body: t.body,
    parentMsgKey: o.default.from(t.parentMsgKey),
    sender: (0, l.createUserWid)(t.sender)
  };
};
exports.dbRowFromCommentMessage = function (e) {
  const t = (0, i.default)({}, e);
  (0, a.movEncFieldToOpaqueData)(t);
  return (0, i.default)((0, i.default)({}, t), {}, {
    msgKey: t.id.toString(),
    parentMsgKey: t.parentMsgKey.toString(),
    sender: t.sender.toString()
  });
};
var i = r(require("../vendor/81109.js"));
var a = require("./907539.js");
var o = r(require("./565754.js"));
var s = require("./373070.js");
var l = require("./669050.js");