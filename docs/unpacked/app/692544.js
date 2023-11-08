var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.msgModelFromMsgData = function e(t) {
  return new a.Msg((0, i.default)((0, i.default)({}, t), {}, {
    paymentNoteMsg: t.paymentNoteMsg ? e(t.paymentNoteMsg) : undefined,
    quotedMsg: t.quotedMsg ? e(t.quotedMsg) : undefined
  }));
};
var i = r(require("../vendor/81109.js"));
var a = require("./772358.js");