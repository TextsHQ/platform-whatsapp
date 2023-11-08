var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logPnhRequestRevealActionHelper = function () {
  return l.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./351053.js");
var o = require("./698867.js");
var s = require("./599216.js");
function l() {
  return (l = (0, i.default)(function* (e, t, n, r) {
    const i = a.ChatCollection.getActive();
    if (i) {
      new s.PnhRequestRevealActionWamEvent({
        pnhChatType: e,
        pnhChatParty: t,
        threadId: yield (0, o.getChatThreadID)(i.id.toJid()),
        pnhAction: n,
        pnhEntryPoint: r
      }).commit();
    }
  })).apply(this, arguments);
}