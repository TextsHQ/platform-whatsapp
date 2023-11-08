var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keepInChatAddOnProvider = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./359987.js");
var o = require("./808716.js");
var s = require("./803328.js");
var l = require("./678794.js");
var u = require("./373070.js");
const c = {
  type: s.MessageAddOnType.KeepInChat,
  matches: e => e.type === u.MSG_TYPE.KEEP_IN_CHAT,
  matchesFutureproof: e => e.type === u.MSG_TYPE.UNKNOWN && e.futureproofType === u.MSG_TYPE.KEEP_IN_CHAT,
  canRenderInUi: () => true,
  processOrphansForNewMsg: (e, t, n) => (0, i.default)(function* () {
    const e = n.map(e => e.parsedMsgPayload);
    const t = (0, o.runKeepInChatTieBreaker)(e);
    __LOG__(2)`keepInChatAddOnProvider: found orphan`;
    if (t != null) {
      const e = (0, l.msgDataFromMsgModel)(t);
      yield (0, a.frontendSendAndReceive)("processKeepInChatMessage", {
        keepInChatMessage: e,
        allowNotification: false
      });
    }
  })()
};
exports.keepInChatAddOnProvider = c;