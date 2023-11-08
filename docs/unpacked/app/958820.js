var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processPlaceholderMessage = function () {
  return f.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./359987.js");
var o = require("./780549.js");
var s = require("./883310.js");
var l = require("./390053.js");
var u = require("./267420.js");
var c = require("./525119.js");
var d = require("./612919.js");
var p = require("./536873.js");
function f() {
  return (f = (0, i.default)(function* (e, t, n) {
    if (e.category === s.CATEGORY_PEER) {
      return void __LOG__(2, undefined, undefined, undefined, ["messaging"])`processPlaceHolderMessage: msgId:${e.externalId}, skip placeholder for peer message`;
    }
    const r = e.offline != null;
    try {
      const s = yield (0, u.genPlaceholderMsg)(e, t, n);
      const f = (0, c.isMatFullyEnabled)() ? yield (0, d.processRenderableMatMessages)(s) : s;
      const _ = l.messageProcessorCache.addMessages(f.map(e => ({
        msg: e
      })), !r).then(() => {
        p.WorkerOfflineResumeReporter.updateProcessedMessageCount();
      });
      if (o.Cmd.isMainStreamReadyMd) {
        if (o.Cmd.isOfflineDeliveryEnd) {
          yield _;
        }
        yield Promise.all(f.map(function () {
          var e = (0, i.default)(function* (e) {
            const t = e.id.remote;
            yield (0, a.frontendSendAndReceive)("updateMessageUI", {
              chatId: t,
              msg: e
            });
          });
          return function () {
            return e.apply(this, arguments);
          };
        }()));
      }
    } catch (t) {
      __LOG__(4, undefined, new Error(), true, ["messaging"])`processPlaceholderMsg: msgId::${e.externalId}, failed with error: ${t}`;
      SEND_LOGS("handle_msg: error storing/processing single message", 1, "messaging");
    }
  })).apply(this, arguments);
}