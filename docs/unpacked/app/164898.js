var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reactionsEncAddOnProvider = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./502280.js");
var o = require("./143130.js");
var s = require("./189865.js");
var l = require("./803328.js");
var u = require("./97858.js");
var c = require("./373070.js");
const d = {
  type: l.MessageAddOnType.ReactionEnc,
  matches: e => e.type === c.MSG_TYPE.REACTION_ENC,
  matchesFutureproof: e => e.type === c.MSG_TYPE.UNKNOWN && e.type === c.MSG_TYPE.REACTION_ENC,
  canRenderInUi: () => (0, u.cagReactionsReceive)(),
  processOrphansForNewMsg: (e, t, n) => (0, i.default)(function* () {
    return Promise.all(n.map(function () {
      var e = (0, i.default)(function* (e) {
        const n = (0, a.assertReactionEncMsgData)(e.parsedMsgPayload);
        const r = yield (0, s.convertEncReactionToReaction)(n);
        if (r != null) {
          yield (0, o.processReactionMsg)(r, t, true);
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }()));
  })()
};
exports.reactionsEncAddOnProvider = d;