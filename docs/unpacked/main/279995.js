var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateReactionUI = function () {
  return u.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/364622.js");
var l = require("../app/548410.js");
var i = require("./474474.js");
function u() {
  return (u = (0, r.default)(function* (e, t) {
    const n = yield (0, i.createReactionsRow)(e);
    if (n == null) {
      return;
    }
    String(e.id);
    String(e.reactionParentKey);
    const a = yield (0, o.existsReaction)({
      parentMsgKey: n.parentMsgKey,
      senderUserJid: n.senderUserJid
    });
    if (a && a.msgKey === n.msgKey) {
      yield (0, l.addOrUpdateReactionsModelCollection)(a, !t);
    }
  })).apply(this, arguments);
}