var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.msgDataFromMsgModel = function e(t) {
  const n = t.toJSON();
  return (0, i.default)((0, i.default)({}, n), {}, {
    paymentNoteMsg: n.paymentNoteMsg ? e(n.paymentNoteMsg) : undefined
  });
};
var i = r(require("../vendor/81109.js"));