var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processReactionMessage = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./359987.js");
var o = require("./780549.js");
var s = require("./522841.js");
var l = require("./390053.js");
var u = require("./525119.js");
var c = require("./612919.js");
var d = require("./536873.js");
function p() {
  return (p = (0, i.default)(function* (e, t, n) {
    try {
      const r = t.offline != null && !n;
      const p = (0, u.isMatFullyEnabled)() ? yield (0, c.processReactionMatMessages)(e) : e;
      const f = l.messageProcessorCache.addMessages([{
        msg: p
      }], !r).then(() => {
        d.WorkerOfflineResumeReporter.updateProcessedMessageCount();
        if (!r) {
          return (0, s.processReactionOrphanPeerReceipt)(p.id);
        }
      });
      if (o.Cmd.isMainStreamReadyMd || n) {
        f.then((0, i.default)(function* () {
          yield (0, a.frontendSendAndReceive)("updateReactionUI", {
            msg: p,
            reparsing: n
          });
        }));
      }
    } catch (e) {
      __LOG__(4, undefined, new Error(), true, ["messaging"])`processReactionMessage: msgId:${t.externalId}, failed with error: ${e}`;
      SEND_LOGS("handle_msg: error storing/processing single message", 1, "messaging");
    }
    return Promise.resolve();
  })).apply(this, arguments);
}