var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pinInChatAddOnProvider = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./123765.js");
var o = require("./803328.js");
var s = require("./373070.js");
var l = require("./441425.js");
var u = require("./591800.js");
const c = {
  type: o.MessageAddOnType.PinMessage,
  matches: e => e.type === s.MSG_TYPE.PIN_MESSAGE,
  matchesFutureproof: e => e.type === s.MSG_TYPE.UNKNOWN && e.futureproofType === s.MSG_TYPE.PIN_MESSAGE,
  canRenderInUi: () => (0, u.isPinnedMessagesM1ReceiverEnabled)(),
  processOrphansForNewMsg: (e, t, n) => (0, i.default)(function* () {
    const t = n.map(e => e.parsedMsgPayload);
    yield (0, l.processPinMessages)(e.id.remote, t);
  })(),
  updateAcks: (e, t) => (0, a.updateAddOnAcksForTable)("pinned-messages", e, t)
};
exports.pinInChatAddOnProvider = c;